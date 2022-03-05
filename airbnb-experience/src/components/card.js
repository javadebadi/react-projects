import React from 'react'
import card1 from '../images/card1.webp'

export default function Card () {
    return (
        <section className="card">
            <h2>Meet hosts around the world</h2>
            <div className="card-items">
                <div className="card-item">
                    <img src={card1} alt="card1"/>
                    <div className="title">
                        Music history and culture tour with a DJ
                    </div>
                    <div className="subtitle">
                        Havana, Cuba
                    </div>
                </div>
            </div>
        </section>
    )
}