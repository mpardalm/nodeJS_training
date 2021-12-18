/*
 * Project: /Users/mpardalm/Documents/Node/02-tareas-app
 * Created Date: Sunday, February 28th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Saturday, March 6th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const inquirer = require('inquirer');
require('colors');

const preguntas = [
	{
		type: 'list',
		name: 'option',
		message: '¿Qué desea hacer?',
		choices: [
			{
				value: 1,
				name: `${'1.'.green} Buscar ciudad`,
			},
			{
				value: 2,
				name: `${'2.'.green} Historial`,
			},
			{
				value: 0,
				name: `${'0.'.green} Salir`,
			},
		],
	},
];

const inquirerMenu = async () => {
	console.clear();
	console.log('======================='.green);
	console.log(' Seleccione una opción '.green);
	console.log('=======================\n'.green);

	const { option } = await inquirer.prompt(preguntas);
	return option;
};

const pausa = async () => {
	const question = [
		{
			type: 'input',
			name: 'enter',
			message: `Presione ${'ENTER'.green} para continuar`,
		},
	];
	console.log('\n');
	await inquirer.prompt(question);
};

const leerInput = async (message) => {
	const question = [
		{
			type: 'input',
			name: 'desc',
			message,
            validate (value) {
                if (!value) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
		},
	];

    const {desc} = await inquirer.prompt(question);
    return desc;
};

const listarLugares = async (lugares) => {
	const choices = lugares.map((lugar, index) => {
		const idx = `${index + 1}`.green;
		return {
			value: lugar.id,
			name: `${idx} ${lugar.nombre}`
		}
	});

	choices.unshift({
		value: 0,
		name: `${'0.'.green} Cancelar`
	});

	const preguntas = [
		{
			type: 'list',
			name: 'id',
			message: 'Seleccione lugar:',
			choices
		}
	];

	const {id} = await inquirer.prompt(preguntas);
	return id;
}

const mostrarListadoCheckList = async (tareas) => {
	const choices = tareas.map((tarea, index) => {
		const idx = `${index + 1}`.green;
		return {
			value: tarea.id,
			name: `${idx} ${tarea.description}`,
			checked: tarea.completadoEn ? true : false
		}
	});

	const preguntas = [
		{
			type: 'checkbox',
			name: 'ids',
			message: 'Seleccione',
			choices
		}
	];

	const {ids} = await inquirer.prompt(preguntas);
	return ids;
}

const confirmar = async (message) => {
	const question = [
		{
			type: 'confirm',
			name: 'ok',
			message
		}
	];

	const {ok} = await inquirer.prompt(question);
	return ok;
}

module.exports = {
	inquirerMenu,
	pausa,
    leerInput,
	listarLugares
};
