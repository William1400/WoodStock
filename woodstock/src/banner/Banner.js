import React from 'react'
import './Banner.css'
import background from '../img/background.png'


export default function Banner() {
    
    return (

        <div className='banner'>
            <img src={background} alt='background-image' className='backgroundImage'></img>
        </div>
    )
}

