import { ADD_POKEMONS_API, APPEND_POKEMONS_API, GET_ALL_POKEMONS } from "./Actions"

const initialState = {
    pokemonsAPI: [],

}

const rootReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_POKEMONS_API:
            return {
                ...state,
                pokemonsAPI: action.payload
            }
        case GET_ALL_POKEMONS:
            return {
                ...state,
            }
        case APPEND_POKEMONS_API:
            return {
                ...state,
                pokemonsAPI: [...state.pokemonsAPI, ...action.payload]
            }


        default:
            return { ...state }
    }
}

export default rootReducer