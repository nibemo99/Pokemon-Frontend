import { ADD_POKEMONS_API, GET_ALL_POKEMONS } from "./Actions"

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

        default:
            return { ...state }
    }
}

export default rootReducer