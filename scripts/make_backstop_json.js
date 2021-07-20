const fs = require('fs');
const pth = require('path');
const config = require('../toolbox.json');

const testConfig = {
  id: 'epfl_elements',
  viewports: [{
    label: 'lg',
    width: 1280,
    height: 990,
  }],
  paths: {
    bitmaps_reference: 'tests/backstop/references',
    bitmaps_test: 'tests/backstop/test',
    engine_scripts: 'tests/backstop/engine_scripts',
    html_report: 'tests/backstop/html_report',
    ci_report: 'tests/backstop/ci_report',
  },
  report: ['browser', 'CI'],
  engine: 'puppeteer',
  engineOptions: {
    ignoreHTTPSErrors: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  debug: true,
  debugWindow: false,
};

const sanitizeDirs = (files, basepath) => {
  return files.reduce((acc, value) => {
    const path = `${basepath}/${value}`;
    if (fs.lstatSync(path).isDirectory()) acc.push(value);
    return acc;
  }, []);
};

const sanitizeTwigs = (files, basepath) => {
  return files.reduce((acc, value) => {
    const path = `${basepath}/${value}`;
    if (pth.extname(path) === '.twig') acc.push(value);
    return acc;
  }, []);
};

const componentsDirFiles = fs.readdirSync(`${config.src}/components/`);
const componentsDirs = sanitizeDirs(componentsDirFiles, `${config.src}/components`);
const componentsSubdirs = componentsDirs.reduce((acc, value) => {
  const path = `${config.src}/components/${value}`;
  const files = fs.readdirSync(path);
  const dirs = sanitizeDirs(files, path);
  acc[value] = dirs;
  return acc;
}, {});

const scenarios = componentsDirs.reduce((acc, type) => {
  if (type === 'templates') return acc;

  componentsSubdirs[type].forEach((component) => {
    const path = `${config.src}/components/${type}/${component}`;
    const files = fs.readdirSync(path);
    const templates = sanitizeTwigs(files, path);

    const componentScenarios = templates.map((template) => {
      const slug = template.replace('.twig', '');
      const isVariant = slug !== component;
      let url = `#/${type}/${component}/full`;
      if (isVariant) {
        url = `#/${type}/${component}/${slug.replace(`${component}-`, '')}/full`;
      }

      return {
        label: `${type}_${slug}`,
        url: `http://localhost:3000/${url}`,
        referenceUrl: `https://epfl-si.github.io/elements/${url}`,
        readyEvent: 'backstopjs_ready',
        delay: 800,
        hideSelectors: ['#__bs_notify__', '.tlbx-actions'],
      };
    });
    acc.push(...componentScenarios);
  });
  return acc;
}, []);

const newTestConfig = {
  scenarios,
  ...testConfig,
};

fs.writeFileSync('../build/backstop.json', JSON.stringify(newTestConfig));

fs.writeFile(pth.resolve(`${__dirname}/../backstop.json`), JSON.stringify(newTestConfig), (err) => {
  if (err) throw err;
  console.log('backstop.json has been well updated!');
});
