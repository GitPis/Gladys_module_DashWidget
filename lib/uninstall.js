var Promise = require('bluebird');
var shared = require('./shared.js');

module.exports = function uninstall() {
  var boxId = { id: shared.boxTempIdent }

  sails.log.info('MPI customized widgets : Module uninstalled');
  return Promise.resolve();

}