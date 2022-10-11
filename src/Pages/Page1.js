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
                Page1
            </div>
        </AnimatedPage>
    )
}

export default Page1