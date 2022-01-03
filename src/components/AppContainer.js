import React from "react"
import Roadmap from "./Roadmap"
import Header from "./Header"
import Content from "./Content"
import Faq from "./Faq"
import Footer from "./Footer"

class AppContainer extends React.Component {
    state = {
        roadmap: [
            {
                id: 1,
                title: "Pink Raffle Whitelist Sale",
                time: "January 16, 2022",
                completed: false
            },
            {
                id: 2,
                title: "Pink Raffle Public Sale",
                time: "January 19, 2022",
                completed: false
            },
            {
                id: 3,
                title: "Launch Stake-to-Earn SRP Rewards",
                time: "February 6, 2022",
                completed: false
            },
            {
                id: 4,
                title: "Launch RewardPool FTSO",
                time: "Feb/March 2022",
                completed: false
            },
            {
                id: 5,
                title: "Yellow Raffle",
                time: "Feb/March 2022",
                completed: false
            },
            {
                id: 6,
                title: "First Governance Town Hall",
                time: "Q2 2022",
                completed: false
            }
        ]
    };
    render() {
        return (
            <div>
                <Content />
                <Faq />
                <Roadmap roadmap={this.state.roadmap} />
            </div>
        );
    }
}

export default AppContainer