import api from './api';

// GET ALL POKEMON
export async function GetAllPokemons() {
    const response = await api.get(`/?limit=1000`)
    return response.data;
}
// GET POKEMON 
export async function GetPokemon(pokemon) {
    const response = await api.get(`/${pokemon}`)
    return response.data;
}
