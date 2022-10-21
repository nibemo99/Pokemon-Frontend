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
import { InsectNames } from '../Utils/InsectNames';
import notfound from '../Assets/notfound-compressed.png'
import { TypeColors } from '../Utils/TypeColors'

const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [removing, setRemoving] = useState( false )
    const [form, setForm] = useState( {
        url: '',
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

    const handleCreate = ( event ) => {

    }




    const handleOnChange = ( event ) => {
        const field = event.target.name
        let value = event.target.value
        console.log( value );

        if ( field === 'url' ) {
            if ( !value.includes( 'https://' ) ) value = ''
        }
        else if ( field === 'name' ) {
            if ( value.includes( '1' ) ||
                value.includes( '2' ) ||
                value.includes( '3' ) ||
                value.includes( '4' ) ||
                value.includes( '5' ) ||
                value.includes( '6' ) ||
                value.includes( '7' ) ||
                value.includes( '8' ) ||
                value.includes( '9' ) ||
                value.includes( '0' ) ) value = ''
        }
        else if ( field === 'id' ||
            field === 'height' ||
            field === 'weight' ||
            field === 'hp' ||
            field === 'attack' ||
            field === 'defense' ||
            field === 'specialAttack' ||
            field === 'specialDefense' ||
            field === 'speed'
        ) {
            if ( !Number( value ) ) value = ''
        }
        else if ( field === 'id' ) {

        }
        else if ( field === 'height' || field === 'weight' ) {
            if ( Number( Number( value ) > 2000 ) ) {
                value = '2000'
            }
        }
        else if ( field === 'hp'
            || field === 'attack'
            || field === 'defense'
            || field === 'specialAttack'
            || field === 'specialDefense'
            || field === 'speed'
        ) {
            if ( Number( Number( value ) > 500 ) ) {
                value = '500'
            }
        }
        else if ( field === 'type1' || field === 'type2' ) {
            let aux = 0
            for ( let key in TypeColors ) {
                if ( !key.toLowerCase().includes( value ) ) aux++
            }
            if ( aux === Object.keys( TypeColors ).length ) value = ''
        }

        setForm( prev => ( { ...form, [field]: value } ) )
    }

    const handleClear = ( event ) => {
        setForm( prev => ( {
            url: '',
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
        } ) )
    }

    const handleRandom = ( event ) => {
        let randomNumber = Math.floor( Math.random() * InsectNames.length )
        const name = InsectNames[randomNumber]
        const now = new Date()
        const id = `${now.getMilliseconds()}${now.getSeconds()}${now.getMinutes()}${now.getHours()}`

        const height = Math.floor( Math.random() * 2000 )
        const weight = Math.floor( Math.random() * 2000 )
        const hp = Math.floor( Math.random() * 500 )
        const attack = Math.floor( Math.random() * 500 )
        const defense = Math.floor( Math.random() * 500 )
        const specialAttack = Math.floor( Math.random() * 500 )
        const specialDefense = Math.floor( Math.random() * 500 )
        const speed = Math.floor( Math.random() * 500 )

        randomNumber = Math.floor( Math.random() * Object.keys( TypeColors ).length )
        let type1 = Object.keys( TypeColors )[randomNumber]
        if ( type1 === 'Sorry' ) type1 = 'Dark'

        let type2 = ''
        if ( randomNumber % 2 === 0 ) {
            while ( type2 === '' ) {
                randomNumber = Math.floor( Math.random() * Object.keys( TypeColors ).length )
                type2 = Object.keys( TypeColors )[randomNumber]
                if ( type2 === type1 ) type2 = ''
            }
        }
        if ( type1 === 'Sorry' ) type1 = 'Dragon'
        console.log( type1, type2 )

        setForm( prev => ( {
            url: '',
            id,
            name,
            height,
            weight,
            hp,
            attack,
            defense,
            specialAttack,
            specialDefense,
            speed,
            type1,
            type2,
        } ) )

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
                    <div>
                        <img alt='' className={s.image} src={form.url || notfound} />
                        <div className={s.buttons}>
                            <div className={`${s.inputWrapper3} ${( !form.url ) ? s.required : ''}`} ><input onChange={handleOnChange} value={form.url} name='url' className={s.wh} type='text' placeholder='Image URL' /></div>
                            <button onClick={handleClear} className={s.cr} >Clear</button>
                            <button onClick={handleRandom} className={s.cr} >Random</button>
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.title}>
                            <div className={s.inputWrapper} required={!Boolean( form.name )} ><input onChange={handleOnChange} value={form.name} name='name' className={s.name} type='text' placeholder='Name' /></div>
                            <div className={s.inputWrapper} required={!Boolean( form.id )} ><input onChange={handleOnChange} value={form.id} name='id' className={s.id} type='text' placeholder='ID' /></div>
                        </div>
                        <div className={s.stats}>
                            <div>
                                <img alt='' className={s.icons} src={Vertical} />
                                Height:
                                <div className={s.inputWrapper2} required={!Boolean( form.height )} ><input onChange={handleOnChange} value={form.height} name='height' className={s.wh} type='text' placeholder='-' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Weight} />
                                Weight:
                                <div className={s.inputWrapper2} required={!Boolean( form.weight )} ><input onChange={handleOnChange} value={form.weight} name='weight' className={s.wh} type='text' placeholder='-' /></div>
                            </div>
                        </div>
                        <div className={s.stats} >
                            <div>
                                <img alt='' className={s.icons} src={Hp} />
                                HP:
                                <div className={s.inputWrapper2} required={!Boolean( form.hp )} ><input onChange={handleOnChange} value={form.hp} name='hp' className={s.wh} type='text' placeholder='-' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Attack} />
                                Attack:
                                <div className={s.inputWrapper2}  ><input onChange={handleOnChange} value={form.attack} name='attack' className={s.wh} type='text' placeholder='-' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Defense} />
                                Defense:
                                <div className={s.inputWrapper2}  ><input onChange={handleOnChange} value={form.defense} name='defense' className={s.wh} type='text' placeholder='-' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={SpecialAttack} />
                                Special Attack:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.specialAttack} name='specialAttack' className={s.wh} type='text' placeholder='-' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={SpecialDefense} />
                                Special Defense:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.specialDefense} name='specialDefense' className={s.wh} type='text' placeholder='-' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Speed} />
                                Speed:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.speed} name='speed' className={s.wh} type='text' placeholder='-' /></div>
                            </div>
                        </div>
                        <div className={s.types}>
                            <input onChange={handleOnChange} data={form.type1} value={form.type1} name='type1' className={s.type1} placeholder='Type 1' list="types" required={!Boolean( form.type1 )} />
                            <input onChange={handleOnChange} data={form.type2} value={form.type2} name='type2' className={s.type1} placeholder='Type 2' list="types" />
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

                        <button onClick={handleCreate} className={s.create}>Create</button>

                    </div>
                </div>


            </div>

        </AnimatedPage2>
    )
}

export default Create