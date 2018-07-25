const fs = require('fs');
const pth = require('path');
const testsConfig = require('../backstop.json');

console.log(`
  You have :
  - ${testsConfig.scenarios.length} Tests scenarios
  - ${testsConfig.scenarios.length * testsConfig.viewports.length} Screenshots generated
`);
