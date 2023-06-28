const fs = require('fs');

const datosPokemones = fs.readFileSync('./pokemones/datosPoke.txt', 'utf-8');
const datosPokeAPIArray = JSON.parse(datosPokemones);

module.exports = datosPokeAPIArray;
