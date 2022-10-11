
import React from 'react'
import AnimatedPage from './AnimatedPage'
import s from '../Styles/Page1.module.css'
import { useNavigate } from 'react-router';

const Page1 = () => {
    const navigate = useNavigate();

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
                        cards
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Page1