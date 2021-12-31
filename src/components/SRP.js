import React from "react"
import coin from '../images/srp-coin.png'

class SRP extends React.Component {
    render() {
        return (
            <div id={'srp'}>
                <h2>Songbird Reward Pool (SRP) Token Allocations</h2>
                <br/>
                <p>SRP is the governance token of the RewardPool DAO on the Songbird
                   Network.</p>
                <br/>
                <img src={coin} alt={'SRP Coin'} />
                <br/>
                <p>
                    Coming soon...
                </p>
                <br/>
                <h3>Tokenomics</h3>
                <ul>
                    <li>
                        <div className={'ticket'}>
                            <img src={coin} className={'raffle'} alt={'SRP Coin'} />
                            <span>Total Supply: 10,000,000</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={coin} className={'raffle'} alt={'SRP Coin'} />
                            <span>Founder: 1,000,000 (10%)</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={coin} className={'raffle'} alt={'SRP Coin'} />
                            <span>Early Contributors/Advisors: 500,000 (5%)</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={coin} className={'raffle'} alt={'SRP Coin'} />
                            <span>Treasury: 3,500,000 (35%)</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={coin} className={'raffle'} alt={'SRP Coin'} />
                            <span>Community: 5,000,000 (50%)</span>
                        </div>
                    </li>
                </ul>
                <br/>
            </div>
        )
    }
}

export default SRP