/*
 * Project: /Users/mpardalm/Documents/Node/01-bases-node/helpers
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

const fs = require('fs');

const crearArchivo = async (base = 1, listar, hasta = 10) => {
	try {
		let salida = '';
		for (let index = 1; index <= hasta; index++) {
			salida += `${base} x ${index} = ${base * index}\n`;
		}

        if(listar) {
            console.log(salida);
        }
		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		return `tabla-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	crearArchivo
};
