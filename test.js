const { sep, join } = require('path');
const { spawn } = require('child_process');

const pathOffset = __dirname.split(sep).slice(-2).join(sep);
const fixturesPath = join(pathOffset, 'test/fixtures');

const env = Object.assign({}, process.env, {
  NODE_ENV: 'customenv',
  CONFIG_DIR: fixturesPath,
  CONFIG_OVERRIDE_KEY: 'sandboxStuffs',
  SANDBOX: 'true',
});

spawn('mocha', [], { env, stdio: 'inherit' });
