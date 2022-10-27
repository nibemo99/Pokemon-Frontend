import React, { useState } from 'react'
import s from '../Styles/CreatePage.module.css'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
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
import empty from '../Assets/empty.png'
import yellowAlert from '../Assets/alert.svg'
import greenCheck from '../Assets/check.svg'
import { InsectNames } from '../Utils/InsectNames';
import { TypeColors } from '../Utils/TypeColors'
import { AnimalsImages } from '../Utils/AnimalsImages'

const Create = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [removing, setRemoving] = useState( false )
    const [modalInfo, setModalInfo] = useState( {
        removing: false,
        show: false,
        code: ''
    } )
    const [form, setForm] = useState( {
        url: '',
        name: '',
        id: '',
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
    const POST_URL = 'http://localhost:3001/pokemons/'

    dispatch( setRemovePage( false ) )

    const navigateHandler = ( event ) => {
        setRemoving( prev => !prev )
        setTimeout( () => {
            history.push( '/pokemons' )
        }, 500 );
    }

    const handleCreate = async ( event ) => {
        if ( !form.name || !form.id || !form.height || !form.weight || !form.hp || !form.type1 ) return setModalInfo( prev => ( { ...prev, show: true, code: 'fields' } ) )

        const typeCheck1 = TypeColors[form.type1]
        const typeCheck2 = TypeColors[form.type2]
        if ( !typeCheck1 || ( form.type2 !== '' && !typeCheck2 ) ) return setModalInfo( prev => ( { ...prev, show: true, code: 'types' } ) )

        const formPokemon = {
            url: form.url,
            name: form.name.toLowerCase(),
            id: Number( form.id ),
            height: Number( form.height ),
            weight: Number( form.weight ),
            hp: Number( form.hp ),
            attack: Number( form.attack ),
            defense: Number( form.defense ),
            specialAttack: Number( form.specialAttack ),
            specialDefense: Number( form.specialDefense ),
            speed: Number( form.speed ),
            type1: form.type1.toLowerCase(),
            type2: form.type2.toLowerCase(),
        }
        try {
            const data = await fetch( POST_URL, {
                method: 'POST',
                body: JSON.stringify( formPokemon ),
                headers: {
                    'Content-Type': 'application/json'
                },
            } )
            const json = await data.json()
            const { code } = json
            setModalInfo( prev => ( { ...prev, show: true, code } ) )
        } catch ( error ) {
            console.log( error )
        }
    }

    const handleOnChange = ( event ) => {
        const field = event.target.name
        let value = event.target.value
        if ( field === 'url' ) {
            if ( !value.includes( 'https://' ) ) value = ''
        }
        if ( field === 'name' ) {
            if ( value.includes( '1' ) ||
                value.includes( '2' ) ||
                value.includes( '3' ) ||
                value.includes( '4' ) ||
                value.includes( '5' ) ||
                value.includes( '6' ) ||
                value.includes( '7' ) ||
                value.includes( '8' ) ||
                value.includes( '9' ) ||
                value.includes( '0' ) ||
                value.includes( '<' ) ||
                value.includes( '>' ) ||
                value.includes( '&' ) ||
                value.includes( '|' ) ||
                value.includes( '=' ) ||
                value.includes( '$' ) ||
                value.includes( '%' ) ||
                value.includes( '#' ) ||
                value.includes( '"' ) ||
                value.includes( '``' ) ) value = ''
        }
        if ( field === 'id' ||
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
        if ( field === 'height' || field === 'weight' ) {
            if ( Number( value > 2000 ) ) {
                value = '2000'
            }
        }
        if ( field === 'hp'
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
        if ( field === 'type1' || field === 'type2' ) {
            let aux = 0
            for ( let key in TypeColors ) {
                if ( !key.toLowerCase().includes( value.toLowerCase() ) ) aux++
            }
            if ( aux === Object.keys( TypeColors ).length ) value = ''
        }
        if ( field === 'id' ) {
            console.log( value )
            if ( Number( value < 1000 ) ) {
                value = '1000'
            }
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
        const id = `${now.getMilliseconds()}${now.getSeconds()}`

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
        if ( type2 === 'Sorry' ) type2 = ''
        // setForm( prev => ( { ...prev, url: '' } ) )

        randomNumber = Math.floor( Math.random() * AnimalsImages.length )
        let url = AnimalsImages[randomNumber]

        setForm( prev => ( {
            url,
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

    const handleModal = ( event ) => {
        setModalInfo( prev => ( { ...prev, removing: true } ) )
        setTimeout( () => {
            setModalInfo( prev => ( { ...prev, show: false, removing: false } ) )

        }, 200 );
    }




    return (
        <AnimatedPage2 removing={removing}>

            <div className={s.wrapper}>
                <p
                    className={s.click}
                    onClick={navigateHandler}
                >
                    Back
                </p>

                {( modalInfo.show ) && (
                    <div
                        className={s.modal}
                        onClick={handleModal}
                        data-removing={modalInfo.removing}
                    >
                        <div>
                            <img alt='Please review the information provided on the fields' src={( modalInfo.code === 'created' ) ? greenCheck : yellowAlert} />
                            {( modalInfo.code === 'types' ) && (
                                <p>
                                    Please select a type from the list.
                                </p>
                            )}
                            {( modalInfo.code === 'fields' ) && (
                                <p>
                                    Please make sure to fill all of the fields highlighted with red.
                                </p>
                            )}
                            {( modalInfo.code === 'id' ) && (
                                <p>
                                    {`The ID: ${form.id} is already taken, please change it and try again.`}
                                </p>
                            )}
                            {( modalInfo.code === 'name' ) && (
                                <p>
                                    {`The name ${form.name} is already taken, please change it and try again.`}
                                </p>
                            )}
                            {( modalInfo.code === 'created' ) && (
                                <p>
                                    {`${form.name} was created and saved in the database!`}
                                </p>
                            )}
                            <p>Click anywhere to go back</p>
                        </div>
                    </div>

                )}

                <div className={s.card}>
                    <div>
                        <img alt='' className={s.image} src={form.url || empty} />
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
                                <div className={s.inputWrapper2} required={!Boolean( form.height )} >
                                    <input onChange={handleOnChange} value={form.height} name='height' className={s.wh} type='text' placeholder='-' />
                                </div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Weight} />
                                Weight:
                                <div className={s.inputWrapper2} required={!Boolean( form.weight )} >
                                    <input onChange={handleOnChange} value={form.weight} name='weight' className={s.wh} type='text' placeholder='-' />
                                </div>
                            </div>
                        </div>
                        <div className={s.stats} >
                            <div>
                                <img alt='' className={s.icons} src={Hp} />
                                HP:
                                <div className={s.inputWrapper2} required={!Boolean( form.hp )}>
                                    <input onChange={handleOnChange} value={form.hp} name='hp' className={s.wh} type='text' placeholder='-' />
                                </div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Attack} />
                                Attack:
                                <div className={s.inputWrapper2}>
                                    <input onChange={handleOnChange} value={form.attack} name='attack' className={s.wh} type='text' placeholder='-' />
                                </div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Defense} />
                                Defense:
                                <div className={s.inputWrapper2}>
                                    <input onChange={handleOnChange} value={form.defense} name='defense' className={s.wh} type='text' placeholder='-' />
                                </div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={SpecialAttack} />
                                Special Attack:
                                <div className={s.inputWrapper2}>
                                    <input onChange={handleOnChange} value={form.specialAttack} name='specialAttack' className={s.wh} type='text' placeholder='-' />
                                </div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={SpecialDefense} />
                                Special Defense:
                                <div className={s.inputWrapper2}>
                                    <input onChange={handleOnChange} value={form.specialDefense} name='specialDefense' className={s.wh} type='text' placeholder='-' />
                                </div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Speed} />
                                Speed:
                                <div className={s.inputWrapper2}>
                                    <input onChange={handleOnChange} value={form.speed} name='speed' className={s.wh} type='text' placeholder='-' />
                                </div>
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