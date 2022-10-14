export const ADD_POKE_API = 'ADD_POKE_API'
export const APPEND_POKE_API = 'APPEND_POKE_API'
export const CREATE_ALPHABETICAL_ORDER = 'CREATE_ALPHABETICAL_ORDER'
export const SET_SOURCE_TO_RENDER = 'SET_SOURCE_TO_RENDER'
export const SET_ORDER_TO_RENDER = 'SET_ORDER_TO_RENDER'
export const SET_ORDER_AS = 'SET_ORDER_AS'
export const SET_ORDER_DE = 'SET_ORDER_DE'
export const FLIP_ARRAY = 'FLIP_ARRAY'
export const CREATE_BY_ID_ORDER = 'CREATE_BY_ID_ORDER'
export const RESET_PAGE = 'RESET_PAGE'
export const SET_PAGE = 'SET_PAGE'


export const addPokeAPI = ( payload ) => ( {
    type: ADD_POKE_API,
    payload
} )

export const appendPokeAPI = ( payload ) => ( {
    type: APPEND_POKE_API,
    payload
} )

export const createAlphabeticalOrder = () => ( {
    type: CREATE_ALPHABETICAL_ORDER,
} )

export const setSourceToRender = ( payload ) => ( {
    type: SET_SOURCE_TO_RENDER,
    payload
} )

export const setOrderToRender = ( payload ) => ( {
    type: SET_ORDER_TO_RENDER,
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

export const createByIdOrder = () => ( {
    type: CREATE_BY_ID_ORDER,
} )

export const resetPage = () => ( {
    type: RESET_PAGE,
} )

export const setPageTo = ( payload ) => ( {
    type: SET_PAGE,
    payload
} )
