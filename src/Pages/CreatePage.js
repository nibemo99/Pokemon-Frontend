import React, { useState } from 'react'
import s from '../Styles/CreatePage.module.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { setRemovePage } from '../Redux/Actions'
import AnimatedPage2 from './AnimatedPage2'
import SpecialDefense from '../Assets/Icons/blue-shield.svg'
import Defense from '../Assets/Icons/green-shield.svg'
import Hp from '../Assets/Icons/heart.svg'
import Weight from '../Assets/Icons/weight.svg'
import SpecialAttack from '../Assets/Icons/sword-double.svg'
import Attack from '../Assets/Icons/sword-single.svg'
import Vertical from '../Assets/Icons/vertical.svg'
import Speed from '../Assets/Icons/speed.svg'
import Types from '../Components/Types';

const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [removing, setRemoving] = useState( false )
    const [form, setForm] = useState( {
        id: '',
        name: '',
        height: '',
        weight: '',
        hp: '',
        attack: '',
        defense: '',
        specialAttack: '',
        specialDefense: '',
        speed: '',
        type1: '',
        type2: '',
    } )

    dispatch( setRemovePage( false ) )

    const navigateHandler = ( event ) => {
        setRemoving( prev => !prev )
        setTimeout( () => {
            navigate( '/pokemons' )
        }, 300 );
    }

    const capFirstLetter = ( name ) => {
        return name.replace( name[0], name[0].toUpperCase() )
    }



    const detail = {
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
    }


    return (
        <AnimatedPage2 removing={removing}>

            <div
                className={s.wrapper}
            >
                <p
                    className={s.click}
                    onClick={navigateHandler}
                >
                    Back
                </p>

                <div className={s.card}>
                    <img alt='' className={s.image} src={detail.image} />
                    <div className={s.info}>
                        <div className={s.title}>
                            <div className={s.inputWrapper} ><input className={s.name} type='text' placeholder='Name' /></div>
                            <div className={s.inputWrapper} ><input className={s.id} type='text' placeholder='ID' /></div>
                        </div>
                        <div className={s.stats}>
                            <div>
                                <img alt='' className={s.icons} src={Vertical} />
                                Height:
                                <div className={s.inputWrapper2} ><input className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Weight} />
                                Weight:
                                <div className={s.inputWrapper2} ><input className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                        </div>
                        <div className={s.stats} >
                            <div>
                                <img alt='' className={s.icons} src={Hp} />
                                HP:
                                <div className={s.inputWrapper2} ><input className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Attack} />
                                Attack:
                                <div className={s.inputWrapper2} ><input className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Defense} />
                                Defense:
                                <div className={s.inputWrapper2} ><input className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={SpecialAttack} />
                                Special Attack:
                                <div className={s.inputWrapper2} ><input className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={SpecialDefense} />
                                Special Defense:
                                <div className={s.inputWrapper2} ><input className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Speed} />
                                Speed:
                                <div className={s.inputWrapper2} ><input className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                        </div>
                        <div className={s.types}>
                            <input className={s.type1} placeholder='Type 1' list="types" />
                            <input className={s.type1} placeholder='Type 2' list="types" />
                            <datalist id="types">
                                <option value='Grass' />
                                <option value='Poison' />
                                <option value='Fire' />
                                <option value='Flying' />
                                <option value='Water' />
                                <option value='Bug' />
                                <option value='Normal' />
                                <option value='Electric' />
                                <option value='Ground' />
                                <option value='Fairy' />
                                <option value='Fighting' />
                                <option value='Psychic' />
                                <option value='Rock' />
                                <option value='Steel' />
                                <option value='Ice' />
                                <option value='Ghost' />
                                <option value='Dragon' />
                                <option value='Dark' />
                            </datalist>
                        </div>

                    </div>
                </div>


            </div>

        </AnimatedPage2>
    )
}

export default Create