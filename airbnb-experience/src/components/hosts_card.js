import React from 'react'
import Card from './card.js'
import card1 from '../images/card1.webp'
import card2 from '../images/card2.webp'
import card3 from '../images/card3.jpg'
import card4 from '../images/card4.jpg'

export default function HostsCard () {
    return (
        <section className="card">
            <h2>Meet hosts around the world</h2>
            < div className = "card-items" >
                <Card
                    img = {card1}
                    title = "Music history and culture tour with a DJ"
                    city = "Havana"
                    country = "Cuba"
                    isPublished = {true}
                />
                <Card
                    img = {card2}
                    title = "Mole cooking class with an Indigenous cook"
                    city = "Mexico City"
                    country = "Mexico"
                />
                <Card
                    img = {card3}
                    title = "Golden desert adventure with a local guide"
                    city = "Muscat"
                    country = "Oman"
                />
                <Card
                    img = {card4}
                    title = "Horse whispering with an equine therapist"
                    city = "Barcelona"
                    country = "Spain"
                />
            </div>
        </section>
    )
}