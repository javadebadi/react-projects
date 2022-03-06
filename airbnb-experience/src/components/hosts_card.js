import React from 'react'
import Card from './card.js'


export default function HostsCard(props) {

    const hostCardComponents = props.hostCardsData.map(hostcard => {
        return <Card
                key = {hostcard.id}
                img = {hostcard.img}
                title = {hostcard.title}
                country = {hostcard.country}
                city = {hostcard.city}
        />
    }
    )

    return (
        <section className="card">
            <h2>Meet hosts around the world</h2>
            < div className = "card-items" >
                {
                    hostCardComponents
                }
            </div>
        </section>
    )
}