import React from "react"

function RoadmapItem(props) {
    return (
        <li>
            <div className={'ticket'}>
                <img src={`../images/pink-ticket-${props.todo.id}.png`} className={'raffle'} alt={'Pink Raffle Ticket'} />
                <span><span className={'timeline'}>{props.todo.time}</span> <br/>
                {props.todo.title}</span>
            </div>
        </li>
    )
}

export default RoadmapItem