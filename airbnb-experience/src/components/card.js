import React from 'react'

export default function Card (props) {
    return (      
                <div className="card-item">
                    <img src={props.img} alt="card1"/>
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="subtitle">
                        {props.city}, {props.country}
                    </div>
                </div>
    )
}