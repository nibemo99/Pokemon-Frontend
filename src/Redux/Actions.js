export const ADD_POKEMONS_API = 'ADD_POKEMONS_API'
export const APPEND_POKEMONS_API = 'APPEND_POKEMONS_API'
export const CREATE_ALPHABETICAL_ORDER = 'CREATE_ALPHABETICAL_ORDER'
export const SET_ARRAY_TO_DISPLAY = 'SET_ARRAY_TO_DISPLAY'
export const SET_ORDER_AS = 'SET_ORDER_AS'
export const SET_ORDER_DE = 'SET_ORDER_DE'
export const FLIP_ARRAY = 'FLIP_ARRAY'


export const addPokemonsAPI = ( payload ) => ( {
    type: ADD_POKEMONS_API,
    payload
} )

export const appendPokemonsAPI = ( payload ) => ( {
    type: APPEND_POKEMONS_API,
    payload
} )

export const createAlphabeticalOrder = () => ( {
    type: CREATE_ALPHABETICAL_ORDER,
} )

export const setArrayToDisplay = ( payload ) => ( {
    type: SET_ARRAY_TO_DISPLAY,
    payload
} )

export const setOrderAs = () => ( {
    type: SET_ORDER_AS,
} )

export const setOrderDe = () => ( {
    type: SET_ORDER_DE,
} )

export const flipArray = ( payload ) => ( {
    type: FLIP_ARRAY,
    payload
} )

