import React from 'react'
import s from '../Styles/RightPanel.module.css'
import CreateButton from './CreateButton';
import CardsManager from './CardsManager';


const RightPanel = () => {

    return (
        <div className={s.wrapper}>
            <CreateButton />
            <CardsManager />
        </div>
    )
}

export default RightPanel