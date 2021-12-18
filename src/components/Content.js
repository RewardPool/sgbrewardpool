import React from "react"
import pink from '../images/sgbticket.png'
import yellow from '../images/sgbticket-yellow.png'

const Content = () => {
    return (
        <div id={'content'}>
            <div id={'announcement'}>
                <h2>Coming Soon!</h2>
                <a href="https://twitter.com/RewardPool" className="twitter-follow-button"
                   data-show-count="false">Follow @RewardPool</a>
                <p>RewardPool will be launching two Proof-of-Concept raffles in the coming
                   weeks.</p>
                <p class={'bold'}>Win up to 9,999x normal delegation rewards!</p>
            </div>
            <br/>
            <h3>How it works</h3>
            <ul>
                <li>
                    <div class={'ticket'}>
                        <img src={pink} alt={'Songbird Raffle Ticket'} />
                        <span>Mint a raffle ticket</span>
                    </div>
                </li>
                <li>
                    <div className={'ticket'}>
                        <img src={pink} alt={'Songbird Raffle Ticket'} />
                        <span>All proceeds held by a smart contract and delegated to FTSO</span>
                    </div>
                </li>
                <li>
                    <div className={'ticket'}>
                        <img src={pink} alt={'Songbird Raffle Ticket'} />
                        <span>Rewards each week are given to a randomly selected ticket holder</span>
                    </div>
                </li>
                <li>
                    <div className={'ticket'}>
                        <img src={pink} alt={'Songbird Raffle Ticket'} />
                        <span>Ticket value can be reclaimed at any time by burning the ticket!</span>
                    </div>
                </li>
            </ul>
            <h3>PoC Raffle Structure</h3>
            <ul>
                <li>
                    <div className={'ticket'}>
                        <img src={yellow} alt={'Songbird Raffle Ticket'} />
                        <span>Two separate raffles, 10,000 tickets each</span>
                    </div>
                </li>
                <li>
                    <div className={'ticket'}>
                        <img src={yellow} alt={'Songbird Raffle Ticket'} />
                        <span>Tickets will cost 250SGB</span>
                    </div>
                </li>
                <li>
                    <div className={'ticket'}>
                        <img src={yellow} alt={'Songbird Raffle Ticket'} />
                        <span>200SGB from each ticket will be pooled in a smart contract
                              and delegated. Burn ticket to reclaim at any time!</span>
                    </div>
                </li>
                <li>
                    <div className={'ticket'}>
                        <img src={yellow} alt={'Songbird Raffle Ticket'} />
                        <span>50SGB fee from each ticket sale will be used to fund the
                              development of the protocol</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Content