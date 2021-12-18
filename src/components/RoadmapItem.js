import React from "react"
import image from '../images/sgbticket.png'

function RoadmapItem(props) {
    return (
        <li>
            <div className={'ticket'}>
                <img src={image} alt={'Songbird Raffle Ticket'} />
                <span>{props.todo.time} <br/>
                <span className={'timeline'}>{props.todo.title}</span></span>
            </div>
        </li>
    )
}

export default RoadmapItem