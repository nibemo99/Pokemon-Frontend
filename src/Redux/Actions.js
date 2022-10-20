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
export const APPLY_ORDER = 'APPLY_ORDER'
export const SET_CURRENT_RENDER = 'SET_CURRENT_RENDER'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'
export const LOADING_TRUE = 'LOADING_TRUE'
export const LOADING_FALSE = 'LOADING_FALSE'
export const SET_BG_COLOR = 'SET_BG_COLOR'
export const TOGGLE_REMOVE_PAGE = 'TOGGLE_REMOVE_PAGE'
export const SET_REMOVE_PAGE = 'SET_REMOVE_PAGE'
export const ADD_SEARCH = 'ADD_SEARCH'


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

export const applyOrder = ( payload ) => ( {
    type: APPLY_ORDER,
    payload
} )

export const setCurrentRender = ( payload ) => ( {
    type: SET_CURRENT_RENDER,
    payload
} )

export const clearFilters = ( payload ) => ( {
    type: CLEAR_FILTERS,
    payload
} )

export const setLoadingTrue = ( payload ) => ( {
    type: LOADING_TRUE,
    payload
} )

export const setLoadingFalse = ( payload ) => ( {
    type: LOADING_FALSE,
    payload
} )

export const setBgColor = ( payload ) => ( {
    type: SET_BG_COLOR,
    payload
} )

export const toggleRemovePage = ( payload ) => ( {
    type: TOGGLE_REMOVE_PAGE,
    payload
} )

export const setRemovePage = ( payload ) => ( {
    type: SET_REMOVE_PAGE,
    payload
} )

export const addSearch = ( payload ) => ( {
    type: ADD_SEARCH,
    payload
} )
