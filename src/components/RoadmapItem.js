import React from "react"
import image from '../images/sgbticket.png'

function RoadmapItem(props) {
    return (
        <li>
            <div className={'ticket'}>
                <img src={image} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                <span><span className={'timeline'}>{props.todo.time}</span> <br/>
                {props.todo.title}</span>
            </div>
        </li>
    )
}

export default RoadmapItem