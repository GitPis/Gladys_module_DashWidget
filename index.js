module.exports = function(sails) {

    var install = require('./lib/install.js');
    var uninstall = require('./lib/uninstall.js');

    gladys.on('ready', function() {
    });

    // Le 'return' permet de retourner toutes les fonctions que Gladys peut utiliser en dehors du module
    return {
        install: install,
        uninstall: uninstall
    };
};