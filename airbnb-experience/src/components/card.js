import React from 'react'

export default function Card (props) {
    const item = props.item
    return (      
                <div className="card-item">
                    <img src={item.img} alt="card1"/>
                    <div className="title">
                        {item.title}
                    </div>
                    <div className="subtitle">
                        {item.city}, {item.country}
                    </div>
                </div>
    )
}