const runSetup = require('./src/setup');
const setupOptions = require('./src/options');
const setupAPI = require('./src/api');
const Constants = require('./src/constants');

const setupDraw = function(options, api) {
  console.debug('setupDraw draw', Object.keys(options && options.modes));
  options = setupOptions(options);
  console.debug('setupOptions draw', Object.keys(options && options.modes));
  const ctx = {
    options: options
  };

  api = setupAPI(ctx, api);
  ctx.api = api;

  const setup = runSetup(ctx);
  console.debug('runSetup', ctx.options && Object.keys(ctx.options.modes));
  api.onAdd = setup.onAdd;
  api.onRemove = setup.onRemove;
  api.types = Constants.types;
  api.options = options;
  console.debug('api.options', api.options && Object.keys(api.options.modes));
  return api;
};

module.exports = function(options) {
  setupDraw(options, this);
};

module.exports.modes = require('./src/modes');
