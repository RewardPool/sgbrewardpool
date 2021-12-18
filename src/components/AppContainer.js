import React from "react"
import Roadmap from "./Roadmap"
import Header from "./Header"
import Content from "./Content"
import Faq from "./Faq"

class AppContainer extends React.Component {
    state = {
        roadmap: [
            {
                id: 1,
                title: "Pink Proof-of-Concept Raffle",
                time: "January 2022",
                completed: false
            },
            {
                id: 2,
                title: "Yellow Proof-of-Concept Raffle",
                time: "2-3 weeks after Pink Raffle sells out",
                completed: false
            },
            {
                id: 3,
                title: "Launch RewardPool FTSO",
                time: "End of Q1 2022",
                completed: false
            },
            {
                id: 4,
                title: "Launch RewardPool Protocol and Governance Token",
                time: "Q2 2022",
                completed: false
            }
        ]
    };
    render() {
        return (
            <div id={'container'}>
                <Header />
                <Content />
                <Faq />
                <Roadmap roadmap={this.state.roadmap} />
            </div>
        );
    }
}

export default AppContainer