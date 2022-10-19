import React from 'react'
import { TypeColors } from '../Utils/TypeColors'

const Types = ( { type } ) => {
    // let color1 = 'transparent'
    // let color2 = 'transparent'
    // let color3 = 'white'
    const { color1, color2, color3 } = TypeColors[type]
    // console.log( colors )


    // switch ( type ) {
    //     case 'Grass':
    //         color1 = '#a0cc54'
    //         color2 = '#a0cc54'
    //         color3 = 'black'
    //         break;
    //     case 'Poison':
    //         color1 = '#Dc07cc'
    //         color2 = '#Dc07cc'
    //         break;
    //     case 'Fire':
    //         color1 = '#ff7c24'
    //         color2 = '#ff7c24'
    //         break;
    //     case 'Flying':
    //         color1 = '#40c4ec'
    //         color2 = '#c0bcbc'
    //         color3 = 'black'
    //         break;
    //     case 'Water':
    //         color1 = '#4894c4'
    //         color2 = '#4894c4'
    //         break;
    //     case 'Bug':
    //         color1 = '#789c3c'
    //         color2 = '#789c3c'
    //         break;
    //     case 'Normal':
    //         color1 = '#a8acac'
    //         color2 = '#a8acac'
    //         color3 = 'black'
    //         break;
    //     case 'Electric':
    //         color1 = '#f0d434'
    //         color2 = '#f0d434'
    //         color3 = 'black'
    //         break;
    //     case 'Ground':
    //         color1 = '#f8dc3c'
    //         color2 = '#b09c44'
    //         color3 = 'black'
    //         break;
    //     case 'Fairy':
    //         color1 = '#ffbcec'
    //         color2 = '#ffbcec'
    //         color3 = 'black'
    //         break;
    //     case 'Fighting':
    //         color1 = '#b4581c'
    //         color2 = '#b4581c'
    //         break;
    //     case 'Psychic':
    //         color1 = '#f864bc'
    //         color2 = '#f864bc'
    //         break;
    //     case 'Rock':
    //         color1 = '#a88c24'
    //         color2 = '#a88c24'
    //         break;
    //     case 'Steel':
    //         color1 = '#a0b4bc'
    //         color2 = '#a0b4bc'
    //         color3 = 'black'
    //         break;
    //     case 'Ice':
    //         color1 = '#58c4e4'
    //         color2 = '#58c4e4'
    //         color3 = 'black'
    //         break;
    //     case 'Ghost':
    //         color1 = '#8064a4'
    //         color2 = '#8064a4'
    //         break;
    //     case 'Dragon':
    //         color1 = '#58a4cc'
    //         color2 = '#f86c54'
    //         break;
    //     case '':
    //         color1 = ''
    //         color2 = ''
    //         break;
    //     case '':
    //         color1 = ''
    //         color2 = ''
    //         break;

    //     default:
    //         break;
    // }

    return (
        <p
            style={{
                backgroundImage: `linear-gradient(${color1} 50%, ${color2} 50%)`,
                padding: '0 5%',
                paddingBottom: '1%',
                borderRadius: '8px',
                fontSize: 'medium',
                color: color3
            }}
        >{type}</p>
    )
}

export default Types