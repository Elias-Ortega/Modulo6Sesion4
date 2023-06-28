const fs = require('fs');

const datosApiRandom = fs.readFileSync('./randomAPI/datosAPIRandom.txt', 'utf-8');

const datosArrayApiRandom = JSON.parse(datosApiRandom);



module.exports = datosArrayApiRandom;