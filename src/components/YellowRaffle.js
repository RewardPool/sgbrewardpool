import React from "react"
import yellow from '../images/yellow-ticket-1.png'

class YellowRaffle extends React.Component {
    render() {
        return (
            <div id={'yellowRaffle'}>
                <h2>Yellow Raffle</h2>
                <br/>
                <p>The Yellow Raffle is a test of RewardPool's LosslessRaffle Protocol.</p>
                <br/>
                <img src={yellow} alt={'Songbird Raffle Ticket'} />
                <br/>
                <p>
                    Coming soon...
                </p>
                <br/>
                <h3>How it works</h3>
                <ul>
                    <li>
                        <div className={'ticket'}>
                            <img src={yellow} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                            <span>5,000 tickets will be available to mint at a price of 200SGB
                                  per ticket.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={yellow} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                            <span>All proceeds will be locked in a contract and delegated to
                                  the RewardPool FTSO.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={yellow} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                            <span>Rewards from each week will be awarded to a randomly selected
                                  ticket holder.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={yellow} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                            <span>All ticket holders will accumulate SRP, RewardPool's governance
                                  token, at a rate of 4 SRP per ticket, per week.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={yellow} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                            <span>The SRP allocated for this raffle will be 1,040,000 tokens. This
                                  means that rewards will be given for at least 52 weeks.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={yellow} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                            <span>Ticket holders can burn their ticket and reclaim their 200SGB at
                                  any time. Any unclaimed SRP rewards will be lost.</span>
                        </div>
                    </li>
                </ul>
                <br/>
            </div>
        )
    }
}

export default YellowRaffle