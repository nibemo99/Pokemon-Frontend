import { ADD_POKE_API, APPEND_POKE_API, CREATE_ALPHABETICAL_ORDER, CREATE_BY_ID_ORDER, FLIP_ARRAY, RESET_PAGE, SET_SOURCE_TO_RENDER, SET_ORDER_AS, SET_ORDER_DE, SET_PAGE, SET_ORDER_TO_RENDER, APPLY_ORDER, SET_CURRENT_RENDER, CLEAR_FILTERS, LOADING_TRUE, LOADING_FALSE, SET_BG_COLOR, TOGGLE_REMOVE_PAGE, SET_REMOVE_PAGE, ADD_SEARCH, ADD_TYPE_FILTER, SET_FILTER_BY_TYPE, CLEAR_TYPE_FILTER, SET_DATABASE, SET_BOTH } from "./Actions"

const initialState = {
    bgColor: 'gray',
    removingPage: false,

    empty: [],
    isLoading: false,

    sourceToRender: 'pokeapi',
    orderToRender: 'id',
    typesToRender: [],

    currentOrder: 'as',
    currentPage: 1,
    currentRender: [],  //
    currentRenderFilteredByTypes: [],

    pokeapi: [],
    both: [],
    search: [],
    database: [],

    notfound: [{
        "id": '',
        "name": "Not found...",
        "image": "https://i.imgur.com/J9jdC56.png",
        "types": [{ "type": { "name": "Sorry" } }]
    }],


    databasee: [
        {
            "id": 10,
            "name": "caterpie",
            "height": 3,
            "weight": 29,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
            "stats": [
                {
                    "base_stat": 45,
                    "effort": 1,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 30,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 35,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 20,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 20,
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
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    }
                }
            ]
        },
        {
            "id": 11,
            "name": "metapod",
            "height": 7,
            "weight": 99,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
            "stats": [
                {
                    "base_stat": 50,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 20,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 55,
                    "effort": 2,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 25,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 25,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 30,
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
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    }
                }
            ]
        },
        {
            "id": 12,
            "name": "butterfree",
            "height": 11,
            "weight": 320,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
            "stats": [
                {
                    "base_stat": 60,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 45,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 50,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 90,
                    "effort": 2,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 80,
                    "effort": 1,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 70,
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
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    }
                }
            ]
        },
        {
            "id": 13,
            "name": "weedle",
            "height": 3,
            "weight": 32,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
            "stats": [
                {
                    "base_stat": 40,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 35,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 30,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 20,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 20,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 50,
                    "effort": 1,
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
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
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
        },
        {
            "id": 14,
            "name": "kakuna",
            "height": 6,
            "weight": 100,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
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
                    "base_stat": 25,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 50,
                    "effort": 2,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 25,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 25,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 35,
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
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
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
        },
        {
            "id": 15,
            "name": "beedrill",
            "height": 10,
            "weight": 295,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
            "stats": [
                {
                    "base_stat": 65,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 90,
                    "effort": 2,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 40,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 45,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 80,
                    "effort": 1,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 75,
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
                        "name": "bug",
                        "url": "https://pokeapi.co/api/v2/type/7/"
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
        },
        {
            "id": 16,
            "name": "pidgey",
            "height": 3,
            "weight": 18,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
            "stats": [
                {
                    "base_stat": 40,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 45,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 40,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 35,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 35,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 56,
                    "effort": 1,
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
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    }
                }
            ]
        },
        {
            "id": 17,
            "name": "pidgeotto",
            "height": 11,
            "weight": 300,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
            "stats": [
                {
                    "base_stat": 63,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 60,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 55,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 50,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 50,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 71,
                    "effort": 2,
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
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    }
                }
            ]
        },
        {
            "id": 18,
            "name": "pidgeot",
            "height": 15,
            "weight": 395,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
            "stats": [
                {
                    "base_stat": 83,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 80,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 75,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 70,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 70,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 101,
                    "effort": 3,
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
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    }
                }
            ]
        },
        {
            "id": 19,
            "name": "rattata",
            "height": 3,
            "weight": 35,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
            "stats": [
                {
                    "base_stat": 30,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 56,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 35,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 25,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 35,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 72,
                    "effort": 1,
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
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    }
                }
            ]
        },
        {
            "id": 20,
            "name": "raticate",
            "height": 7,
            "weight": 185,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
            "stats": [
                {
                    "base_stat": 55,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 81,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 60,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 50,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 70,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 97,
                    "effort": 2,
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
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    }
                }
            ]
        },
        {
            "id": 21,
            "name": "spearow",
            "height": 3,
            "weight": 20,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
            "stats": [
                {
                    "base_stat": 40,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 60,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 30,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 31,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 31,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 70,
                    "effort": 1,
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
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    }
                }
            ]
        },
        {
            "id": 22,
            "name": "fearow",
            "height": 12,
            "weight": 380,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
            "stats": [
                {
                    "base_stat": 65,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 90,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 65,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 61,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 61,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 100,
                    "effort": 2,
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
                        "name": "normal",
                        "url": "https://pokeapi.co/api/v2/type/1/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "flying",
                        "url": "https://pokeapi.co/api/v2/type/3/"
                    }
                }
            ]
        },
        {
            "id": 23,
            "name": "ekans",
            "height": 20,
            "weight": 69,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
            "stats": [
                {
                    "base_stat": 35,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 60,
                    "effort": 1,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 44,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 40,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 54,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 55,
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
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                }
            ]
        },
        {
            "id": 24,
            "name": "arbok",
            "height": 35,
            "weight": 650,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
            "stats": [
                {
                    "base_stat": 60,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 95,
                    "effort": 2,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 69,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 65,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 79,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 80,
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
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                }
            ]
        },
        {
            "id": 25,
            "name": "pikachu",
            "height": 4,
            "weight": 60,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
            "stats": [
                {
                    "base_stat": 35,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 55,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 40,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 50,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 50,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 90,
                    "effort": 2,
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
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    }
                }
            ]
        },
        {
            "id": 26,
            "name": "raichu",
            "height": 8,
            "weight": 300,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
            "stats": [
                {
                    "base_stat": 60,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 90,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 55,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 90,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 80,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 110,
                    "effort": 3,
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
                        "name": "electric",
                        "url": "https://pokeapi.co/api/v2/type/13/"
                    }
                }
            ]
        },
        {
            "id": 27,
            "name": "sandshrew",
            "height": 6,
            "weight": 120,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
            "stats": [
                {
                    "base_stat": 50,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 75,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 85,
                    "effort": 1,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 20,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 30,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 40,
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
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    }
                }
            ]
        },
        {
            "id": 28,
            "name": "sandslash",
            "height": 10,
            "weight": 295,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
            "stats": [
                {
                    "base_stat": 75,
                    "effort": 0,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 100,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 110,
                    "effort": 2,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 45,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 55,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 65,
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
                        "name": "ground",
                        "url": "https://pokeapi.co/api/v2/type/5/"
                    }
                }
            ]
        },
        {
            "id": 29,
            "name": "nidoran-f",
            "height": 4,
            "weight": 70,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
            "stats": [
                {
                    "base_stat": 55,
                    "effort": 1,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 47,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 52,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 40,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 40,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 41,
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
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                }
            ]
        },
        {
            "id": 30,
            "name": "nidorina",
            "height": 8,
            "weight": 200,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
            "stats": [
                {
                    "base_stat": 70,
                    "effort": 2,
                    "stat": {
                        "name": "hp",
                        "url": "https://pokeapi.co/api/v2/stat/1/"
                    }
                },
                {
                    "base_stat": 62,
                    "effort": 0,
                    "stat": {
                        "name": "attack",
                        "url": "https://pokeapi.co/api/v2/stat/2/"
                    }
                },
                {
                    "base_stat": 67,
                    "effort": 0,
                    "stat": {
                        "name": "defense",
                        "url": "https://pokeapi.co/api/v2/stat/3/"
                    }
                },
                {
                    "base_stat": 55,
                    "effort": 0,
                    "stat": {
                        "name": "special-attack",
                        "url": "https://pokeapi.co/api/v2/stat/4/"
                    }
                },
                {
                    "base_stat": 55,
                    "effort": 0,
                    "stat": {
                        "name": "special-defense",
                        "url": "https://pokeapi.co/api/v2/stat/5/"
                    }
                },
                {
                    "base_stat": 56,
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
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                }
            ]
        }
    ],



}

const orderPokemonsAlphabetical = ( currentSource ) => {
    let firstRound = filterByLetter( currentSource, 0 )
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

const applyingOrder = ( state, order ) => {
    switch ( order ) {
        case 'id':
            return state.currentRender
        case 'alphabetical':
            return orderPokemonsAlphabetical( state.currentRender )
        case 'attack':
            return orderPokemonsADS( state.currentRender, 1 )
        case 'defense':
            return orderPokemonsADS( state.currentRender, 2 )
        case 'speed':
            return orderPokemonsADS( state.currentRender, 5 )
        default:
            break;
    }
}

const orderPokemonsADS = ( currentSource, statNumber ) => {
    let j = 0
    let k = j + 1
    let temp = []
    currentSource.forEach( ( pokemon, index ) => {
        temp.push( { statName: pokemon.stats[statNumber].base_stat, index } )
    } )
    while ( k < temp.length ) {
        if ( temp[j].statName > temp[k].statName ) {
            let aux = temp[k]
            temp[k] = temp[j]
            temp[j] = aux
            j = 0
            k = j + 1
        } else {
            j++
            k++
        }
    }
    temp = temp.map( element => {
        return currentSource[element.index]
    } )

    return temp
}

const setTypesArray = ( array, type ) => {
    if ( array.includes( type ) ) {
        return array.filter( element => element !== type )
    }
    let typesArray = [...array, type]
    console.log( typesArray )
    return typesArray
}

const setTypesToRender = ( typesArray, state ) => {
    // console.log( typesArray.length === 0 )
    let temp = []

    if ( !typesArray.length ) return [...state[state.sourceToRender]]
    state[state.sourceToRender].forEach( element => {
        for ( const i of typesArray ) {
            // console.log( i, typeof i )
            if ( !temp.includes( element ) ) {
                if ( element.types[0].type.name === i.toLowerCase() || element.types[1]?.type.name === i.toLowerCase() ) {
                    // console.log( element.name )
                    temp.push( element )
                }
            }
        }
    } )
    console.log( temp )
    console.log( state.currentRender )
    if ( !temp.length ) return state.notfound
    // console.log( temp )
    return temp


    temp = temp.map( element => {
        for ( const i of state.currentRender ) {
            // console.log( state.currentRender, i )
            if ( i.id === element ) return i
        }
    } )
    // if ( state.sourceToRender === 'pokeapi' ) {
    //     temp = temp.map( element => {
    //         return state[state.sourceToRender][element - 1]
    //     } )
    // } else {
    //         }
    // }
    console.log( temp )

}


const rootReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_POKE_API:
            return {
                ...state,
                pokeapi: action.payload
            }
        case APPEND_POKE_API:
            return {
                ...state,
                pokeapi: [...state.pokeapi, ...action.payload]
            }
        case CREATE_ALPHABETICAL_ORDER:
            return {
                ...state,
                pokemonsAlphabetical: [...orderPokemonsAlphabetical( state )]
            }
        case SET_SOURCE_TO_RENDER:
            return {
                ...state,
                sourceToRender: action.payload
            }
        case SET_ORDER_TO_RENDER:
            return {
                ...state,
                orderToRender: action.payload
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
                id: [...state.pokeapi]
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
        case APPLY_ORDER:
            return {
                ...state,
                orderToRender: action.payload,
                currentPage: 1,
                currentRender: [...applyingOrder( state, action.payload )]
            }
        case SET_CURRENT_RENDER:
            return {
                ...state,
                currentRender: [...state[action.payload]]
            }
        case CLEAR_FILTERS:
            return {
                ...state,
                currentPage: 1,
                currentOrder: 'as',
                sourceToRender: 'pokeapi',
                orderToRender: 'id',
                typesToRender: [],
            }
        case LOADING_TRUE:
            return {
                ...state,
                isLoading: true,
            }
        case LOADING_FALSE:
            return {
                ...state,
                isLoading: false,
            }
        case SET_BG_COLOR:
            return {
                ...state,
                bgColor: action.payload
            }
        case TOGGLE_REMOVE_PAGE:
            return {
                ...state,
                removingPage: !state.removingPage
            }
        case SET_REMOVE_PAGE:
            return {
                ...state,
                removingPage: action.payload
            }
        case ADD_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case ADD_TYPE_FILTER:
            return {
                ...state,
                typesToRender: [...setTypesArray( state.typesToRender, action.payload )]
            }
        case SET_FILTER_BY_TYPE:
            return {
                ...state,
                currentRender: [...setTypesToRender( state.typesToRender, state )]
            }
        case CLEAR_TYPE_FILTER:
            return {
                ...state,
                typesToRender: []
            }
        case SET_DATABASE:
            return {
                ...state,
                database: action.payload
            }
        case SET_BOTH:
            return {
                ...state,
                both: [...state.database, ...state.pokeapi]
            }


        default:
            return { ...state }
    }
}

export default rootReducer