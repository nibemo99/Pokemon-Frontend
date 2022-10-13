import { ADD_POKEMONS_API, APPEND_POKEMONS_API, CREATE_ALPHABETICAL_ORDER, CREATE_BY_ID_ORDER, FLIP_ARRAY, RESET_PAGE, SET_ARRAY_TO_DISPLAY, SET_ORDER_AS, SET_ORDER_DE, SET_PAGE } from "./Actions"

const initialState = {
    conditionToRender: 'pokemonsAPI',
    currentOrder: 'as',
    currentPage: 1,
    pokemonsAPI: [],
    pokemonsAlphabetical: [],
    pokemonsById: [],

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

const orderPokemonsAlphabetical = ( state ) => {
    let firstRound = filterByLetter( state.pokemonsAPI, 0 )
    let secondRound = []
    firstRound.forEach( element => {
        if ( element ) {
            let temp = filterByLetter( element, 1 )
            temp.forEach( element2 => {
                if ( element2 ) {
                    secondRound = [...secondRound, ...element2]
                }
            } )
        }
    } )
    return secondRound
}

const filterByLetter = ( array, position ) => {
    let tempArray = new Array( 26 ).fill( '' )
    array.forEach( ( pokemon ) => {
        let letter = alphabet[pokemon.name[position]]
        if ( !tempArray[letter] ) {
            tempArray[letter] = [pokemon]
        } else {
            tempArray[letter] = [...tempArray[letter], pokemon]
        }
    } )
    return tempArray
}

const alphabet = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    'i': 8,
    'j': 9,
    'k': 10,
    'l': 11,
    'm': 12,
    'n': 13,
    'o': 14,
    'p': 15,
    'q': 16,
    'r': 17,
    's': 18,
    't': 19,
    'u': 20,
    'v': 21,
    'w': 22,
    'x': 23,
    'y': 24,
    'z': 25
}

const rootReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_POKEMONS_API:
            return {
                ...state,
                pokemonsAPI: action.payload
            }
        case APPEND_POKEMONS_API:
            return {
                ...state,
                pokemonsAPI: [...state.pokemonsAPI, ...action.payload]
            }
        case CREATE_ALPHABETICAL_ORDER:
            return {
                ...state,
                pokemonsAlphabetical: [...orderPokemonsAlphabetical( state )]
            }
        case SET_ARRAY_TO_DISPLAY:
            return {
                ...state,
                conditionToRender: action.payload
            }
        case SET_ORDER_AS:
            return {
                ...state,
                currentOrder: 'as'
            }
        case SET_ORDER_DE:
            return {
                ...state,
                currentOrder: 'de'
            }
        case FLIP_ARRAY:
            return {
                ...state,
                [action.payload]: [...state[action.payload].reverse()]
            }
        case CREATE_BY_ID_ORDER:
            return {
                ...state,
                pokemonsById: [...state.pokemonsAPI]
            }
        case RESET_PAGE:
            return {
                ...state,
                currentPage: 1,
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }




        default:
            return { ...state }
    }
}

export default rootReducer