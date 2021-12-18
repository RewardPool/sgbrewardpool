import React from "react"
import RoadmapItem from "./RoadmapItem"

class Roadmap extends React.Component {
    render() {
        return (
            <div id={'road'}>
                <h2>Roadmap</h2>
                <ul>
                    {this.props.roadmap.map(todo => (
                        <RoadmapItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Roadmap