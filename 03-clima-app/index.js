/*
 * Project: /Users/mpardalm/Documents/Node/03-clima-app
 * Created Date: Friday, March 5th 2021
 * Author: Miguel Pardal
 * Email: mpardalm.developer@gmail.com
 * Alias: mpardalm
 * -----
 * Date Modified: Saturday, March 6th 2021
 * Modified By: Miguel Pardal, known as mpardalm
 * -----
 * Copyright (c) 2021
 */

require('dotenv').config();
const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    const busquedas = new Busquedas();
    let option;

    do {
        option = await inquirerMenu();

        switch (option) {
            case 1:
                // Mostrar mensaje
                const busqueda = await leerInput('Ciudad: ');

                // Buscar los lugares
                const lugares = await busquedas.getCiudades(busqueda);

                // Lugar seleccionado
                const idSeleccionado = await listarLugares(lugares);
                if (idSeleccionado === 0) continue;

                const lugarSel = lugares.find(lugar => lugar.id = idSeleccionado);
                busquedas.agregarHistorial(lugarSel.nombre);

                // Clima del lugar seleccionado
                const clima = await busquedas.climaLugar(lugarSel.latitud, lugarSel.longitud);

                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre.green);
                console.log('Latitud: ', lugarSel.latitud);
                console.log('Longitud: ', lugarSel.longitud);
                console.log('Temperatura actual: ', clima.temp);
                console.log('Temperatura mínima: ', clima.min);
                console.log('Temperatura máxima: ', clima.max);
                console.log('Como está el clima: ', clima.desc.green);

                break;

            case 2:
                busquedas.historialCapitalizado.forEach((lugar, index) => {
                    const idx = `${index + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                });
                break;
        }

        await pausa();
    } while (option !== 0);
}

main();