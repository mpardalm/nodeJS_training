/*
 * Project: /Users/mpardalm/Documents/Node/01-bases-node
 * Created Date: Wednesday, February 24th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Friday, February 26th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

crearArchivo(argv.base, argv.limite, argv.hasta)
	.then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
	.catch((err) => console.log(err));
