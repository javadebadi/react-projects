import React from 'react'
import Card from './card.js'


export default function HostsCard(props) {

    const hostCardData = props.hostCardsData

    const hostCardComponents = hostCardData.map(hostcard => {
        return <Card
                key = {hostcard.id}
                item = {hostcard}
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