var generateActions, generateApi, generateRoutes;

generateRoutes = require('./routes');

generateActions = require('./actions');

module.exports = generateApi = function(app, route, model, prefix) {
  var actions;
  if (prefix == null) {
    prefix = '';
  }
  actions = generateActions(model);
  generateRoutes(app, route, model.modelName, actions, prefix);
};
