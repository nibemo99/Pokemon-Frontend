import React from 'react'
import { useSelector } from 'react-redux'

const Order = () => {
    const { currentOrder } = useSelector( state => state )
    console.log( currentOrder )
    return (
        <>
            {( currentOrder === 'as' ) ? 'Order ↓' : 'Order ↑'}
        </>
    )
}

export default Order