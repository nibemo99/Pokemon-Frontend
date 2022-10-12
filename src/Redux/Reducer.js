import { ADD_POKEMONS_API, APPEND_POKEMONS_API, GET_ALL_POKEMONS } from "./Actions"

const initialState = {
    pokemonsAPI: [],
    conditionToRender: 'pokemonsAPI',
    pokemonsDB: [{
        "id": 1,
        "name": "bulbasaur",
        "height": 7,
        "weight": 69,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "stats": [
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            },
            {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            }
        ],
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    }],

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