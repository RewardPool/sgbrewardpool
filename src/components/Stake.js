import React from "react"
import coin from '../images/srp-coin.png'

class Stake extends React.Component {
    render() {
        return (
            <div id={'stake'}>
                <h2>Stake-to-Earn</h2>
                <br/>
                <p>Stake-to-Earn is a test of RewardPool's RewardStake Protocol.</p>
                <br/>
                <img src={coin} alt={'SRP Coin'} />
                <br/>
                <p>
                    Coming soon...
                </p>
                <br/>
                <h3>How it works</h3>
                <ul>
                    <li>
                        <div className={'ticket'}>
                            <img src={coin} className={'raffle'} alt={'SRP Coin'} />
                            <span>3,960,000 SRP tokens have been allocated as staking rewards, and will be
                                  distributed over 1 year (~76,153.846 tokens per week).</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={coin} className={'raffle'} alt={'SRP Coin'} />
                            <span>SGB locked in the Stake-to-Earn contract will be delegated, and rewards
                                  will go into the RewardPool treasury.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={coin} className={'raffle'} alt={'SRP Coin'} />
                            <span>When rewards are claimed, users who have staked SGB will earn SRP tokens
                                  based on their percentage of the total SGB staked.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={coin} className={'raffle'} alt={'SRP Coin'} />
                            <span>Unstaking before the reward is claimed will result in the loss of any
                                  staking rewards for that epoch.</span>
                        </div>
                    </li>
                </ul>
                <br/>
            </div>
        )
    }
}

export default Stake