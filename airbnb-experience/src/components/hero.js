// hero section
import React from 'react'
import hero from '../images/hero.png'

export default function Hero () {
    return (
        <div className="hero">
            <img src={hero} alt="hero" />
            <h1>
                Online Experiences
            </h1>
            <p>
                Join unique interactive activities led by
                one-of-a-kind hosts-all without leaving home
            </p>
        </div>
    )
}