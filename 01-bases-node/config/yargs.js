/*
 * Project: /Users/mpardalm/Documents/Node/01-bases-node
 * Created Date: Friday, February 26th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Friday, February 26th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const argv = require('yargs')
	.option('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
	})
    .option('h', {
		alias: 'hasta',
		type: 'number',
        demandOption: true,
        describe: 'Hasta dónde se tiene que multiplicar'
	})
	.option('l', {
		alias: 'listar',
		type: 'boolean',
		default: false,
        describe: 'Muestra la tabla en consola'
	})
	.check((argv) => {
		if (isNaN(argv.b)) {
			throw 'La base tiene que ser un número';
		}
        if (isNaN(argv.h)) {
            throw 'Hasta tiene que ser un número';
        }
		return true;
	}).argv;

module.exports = argv;