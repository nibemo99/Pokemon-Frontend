
import React, { useEffect } from 'react'
import AnimatedPage from './AnimatedPage'
import s from '../Styles/Page1.module.css'
import { useNavigate } from 'react-router';
import CardsContainer from '../Components/CardsContainer';
import { addPokemonsAPI } from '../Redux/Actions';
import { useDispatch } from 'react-redux';

const Page1 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()


    useEffect( () => {
        const pokemons = []
        const fetchData = async () => {
            try {
                for ( let i = 1; i < 25; i++ ) {
                    let res = await fetch( `https://pokeapi.co/api/v2/pokemon/${i}` )
                    let json = await res.json()
                    let { id, name, height, weight, stats, types } = json
                    pokemons.push( { id, name, height, weight, stats, types } )
                }
                dispatch( addPokemonsAPI( pokemons ) )
                console.log( pokemons )
            } catch ( error ) {
                console.log( error )
            }
        }
        fetchData()
        return () => { }
    }, [] )

    const imagen = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png`

    // FUNCTIONS

    return (
        <AnimatedPage>
            <div
                className={s.window}
                onClick={() => navigate( "/" )}
            >
                <div className={s.interface}>
                    <div className={s.filters}>
                        <div className={` ${s.flexColCenter} ${s.filterTitleMargin}`} >
                            <p className={`${s.filterTitle}`} >Filter by...</p>
                            <input
                                placeholder='Name'
                                className={s.input}
                            />
                        </div>
                        <div className={`${s.topBorder} ${s.flexColCenter} ${s.mediumGap}`} >
                            <p className={`${s.searchTitle}`} >Source</p>
                            <div className={`${s.flexColCenter} ${s.smallGap}`} >
                                <p>Both</p>
                                <p>PokeAPI</p>
                                <p>Database</p>
                            </div>
                        </div>
                        <div className={`${s.topBorder} ${s.flexColCenter} ${s.mediumGap}`} >
                            <p className={`${s.searchTitle}`} >Order ↓</p>
                            <div className={`${s.flexColCenter} ${s.smallGap}`} >
                                <p>Alphabetical</p>
                                <p>Attack</p>
                                <p>Defense</p>
                                <p>Speed</p>
                            </div>
                        </div>
                        <div className={`${s.topBorder}`} >
                            <p className={`${s.searchTitle}`} >Type</p>
                            <div>
                                <p>Fire</p>
                                <p>Water</p>
                                <p>Grass</p>
                                <p>Rock</p>
                            </div>
                        </div>

                    </div>
                    <div className={s.cardsContainer}>
                        <CardsContainer />
                        <img alt='' src={imagen} />
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Page1