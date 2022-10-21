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
import notfound from '../Assets/notfound-compressed.png'

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
        console.log( event.target.value, typeof event.target.value );
        switch ( field ) {
            case 'url':
                setForm( prev => ( { ...form, url: event.target.value } ) )
                break;
            case 'name':
                setForm( prev => ( { ...form, name: event.target.value } ) )
                break;
            case 'id':
                setForm( prev => ( { ...form, id: event.target.value } ) )
                break;
            case 'height':
                setForm( prev => ( { ...form, height: event.target.value } ) )
                break;
            case 'weight':
                setForm( prev => ( { ...form, weight: event.target.value } ) )
                break;
            case 'hp':
                setForm( prev => ( { ...form, hp: event.target.value } ) )
                break;
            case 'attack':
                setForm( prev => ( { ...form, attack: event.target.value } ) )
                break;
            case 'defense':
                setForm( prev => ( { ...form, defense: event.target.value } ) )
                break;
            case 'specialAttack':
                setForm( prev => ( { ...form, specialAttack: event.target.value } ) )
                break;
            case 'specialDefense':
                setForm( prev => ( { ...form, specialDefense: event.target.value } ) )
                break;
            case 'speed':
                setForm( prev => ( { ...form, speed: event.target.value } ) )
                break;
            case 'type1':
                setForm( prev => ( { ...form, type1: event.target.value } ) )
                break;
            case 'type2':
                setForm( prev => ( { ...form, type2: event.target.value } ) )
                break;
            default:
                break;
        }
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
                            <div className={s.inputWrapper3} ><input onChange={handleOnChange} value={form.url} name='url' className={s.wh} type='text' placeholder='Image URL' /></div>
                            <button onClick={handleClear} className={s.cr} >Clear</button>
                            <button onClick={handleRandom} className={s.cr} >Random</button>
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.title}>
                            <div className={s.inputWrapper} ><input onChange={handleOnChange} value={form.name} name='name' className={s.name} type='text' placeholder='Name' /></div>
                            <div className={s.inputWrapper} ><input onChange={handleOnChange} value={form.id} name='id' className={s.id} type='text' placeholder='ID' /></div>
                        </div>
                        <div className={s.stats}>
                            <div>
                                <img alt='' className={s.icons} src={Vertical} />
                                Height:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.height} name='height' className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Weight} />
                                Weight:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.weight} name='weight' className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                        </div>
                        <div className={s.stats} >
                            <div>
                                <img alt='' className={s.icons} src={Hp} />
                                HP:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.hp} name='hp' className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Attack} />
                                Attack:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.attack} name='attack' className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Defense} />
                                Defense:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.defense} name='defense' className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={SpecialAttack} />
                                Special Attack:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.specialAttack} name='specialAttack' className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={SpecialDefense} />
                                Special Defense:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.specialDefense} name='specialDefense' className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                            <div>
                                <img alt='' className={s.icons} src={Speed} />
                                Speed:
                                <div className={s.inputWrapper2} ><input onChange={handleOnChange} value={form.speed} name='speed' className={s.wh} type='text' placeholder='1' /></div>
                            </div>
                        </div>
                        <div className={s.types}>
                            <input onChange={handleOnChange} value={form.type1} name='type1' className={s.type1} placeholder='Type 1' list="types" />
                            <input onChange={handleOnChange} value={form.type2} name='type2' className={s.type1} placeholder='Type 2' list="types" />
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