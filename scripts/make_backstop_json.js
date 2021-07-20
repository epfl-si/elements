const fs = require('fs');
const os = require('os');
const pth = require('path');

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

const isForDocker = process.argv.some((arg) => arg === "--docker");
let serverHostname = "localhost";  // Except if changed in the block below
if (isForDocker) {
  if (os.platform() === "darwin") {
    serverHostname = "host.docker.internal";
  } else if (os.platform() === "linux") { // Also for Travis
    // The important part being --net=host of course
    testConfig.dockerCommandTemplate = "docker run --rm -it --net=host --mount type=bind,source=\"{cwd}\",target=/src backstopjs/backstopjs:{version} {backstopCommand} {args}";
  } else {
    throw new Error(`Sorry, don't know how to run tests on ${os.platform()}`);
  }
}

const srcDir = pth.resolve(`${__dirname}/..`);

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

const componentsDirFiles = fs.readdirSync(`${srcDir}/assets/components/`);
const componentsDirs = sanitizeDirs(componentsDirFiles, `${srcDir}/assets/components`);
const componentsSubdirs = componentsDirs.reduce((acc, value) => {
  const path = `${srcDir}/assets/components/${value}`;
  const files = fs.readdirSync(path);
  const dirs = sanitizeDirs(files, path);
  acc[value] = dirs;
  return acc;
}, {});

const scenarios = componentsDirs.reduce((acc, type) => {
  if (type === 'templates') return acc;

  componentsSubdirs[type].forEach((component) => {
    const path = `${srcDir}/assets/components/${type}/${component}`;
    const files = fs.readdirSync(path);
    const templates = sanitizeTwigs(files, path);

    const componentScenarios = templates.map((template) => {
      const slug = template.replace('.twig', '');
      const isVariant = slug !== component;
      let url = `#/${type}/${component}/full`;
      if (isVariant) {
        url = `#/${type}/${component}/${slug.replace(`${component}-`, '')}/full`;
      }

      const hideSelectors = ['#__bs_notify__', '.tlbx-actions'];
      if (component !== 'cookie-consent') {
        hideSelectors.push('.cc-window');
      }

      return {
        label: `${type}_${slug}`,
        url: `http://${serverHostname}:3000/${url}`,
        referenceUrl: `https://epfl-si.github.io/elements/${url}`,
        readyEvent: 'backstopjs_ready',
        delay: 800,
        hideSelectors,
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

async function writeJSON(path, payload) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(payload, null, 2), (err) => {
      if (err) reject(err); else resolve()
    });
  });
}

async function main() {
  const target = `${srcDir}/build/backstop.json`
  await writeJSON(target, newTestConfig);
  console.log(`${target} was successfully created!`);
}

main();
