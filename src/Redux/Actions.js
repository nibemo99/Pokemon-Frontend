export const ADD_POKEMONS_API = 'ADD_POKEMONS_API'
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS'


export const addPokemonsAPI = ( payload ) => {
    return { type: ADD_POKEMONS_API, payload }
}

export const getAllPokemons = () => {
    return { type: GET_ALL_POKEMONS }
}