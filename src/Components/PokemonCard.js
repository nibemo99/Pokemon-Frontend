import React from 'react'

const PokemonCard = ( { id, name } ) => {
    return (
        <div>{`${id} ${name}`}</div>
    )
}

export default PokemonCard