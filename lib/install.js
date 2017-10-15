var Promise = require('bluebird');
var boxTemperature = require('./boxTemperatureContent.js');
var shared = require('./shared.js');

module.exports = function install() {

	var boxTemp = {
		uuid: shared.boxTempIdent,
		title: shared.boxTempTitle,
		ngcontroller: '',
		html: boxTemperature.html,
		footer: boxTemperature.footer,
		icon: 'fa fa-eye',
		type: 'box box-primary',
		view: 'dashboard'
	}

	// Création de la box
	gladys.boxType.create(boxTemp);
	
	sails.log.info('MPI customized widgets : Module installed');
	return Promise.resolve();

}