const axios = require('axios');

const datosArrayPoke = require('./pokemones/datosPokeAPI');

const datosArrayAPIRandom = require('./randomAPI/apiRandom');

const obtenerPokemon = async (nombre) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    return response.data;
  } catch (error) {
    console.log(`Error al obtener los datos del Pokémon ${nombre}`, error);
    return null;
  }
}

const construirMensajePokemon = (pokemon) => {
  const { name, base_experience,  order, weight } = pokemon;
  return `Pokémon: ${name}\nExperiencia: ${base_experience}\nOrden: ${order}\nPeso: ${weight}`;
}

// Ejemplo Pokemon 
const nombrePokemon = 'pikachu';
obtenerPokemon(nombrePokemon).then((pokemon) => {
  if (pokemon) {
    const mensajePokemon = construirMensajePokemon(pokemon);
    console.log(mensajePokemon);
  }
});

console.log(datosArrayPoke);
console.log(datosArrayAPIRandom);
