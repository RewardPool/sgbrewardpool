import React from "react"
import pink from '../images/sgbticket.png'

class PinkRaffle extends React.Component {
    render() {
        return (
            <div id={'pinkRaffle'}>
                <h2>Pink Raffle</h2>
                <br/>
                <p>The Pink Raffle is a test of RewardPool's RewardRaffle Protocol.</p>
                <br/>
                <img src={pink} alt={'Songbird Raffle Ticket'} />
                <br/>
                <p>
                    Coming soon...
                </p>
                <br/>
                <h3>How it works</h3>
                <ul>
                    <li>
                        <div className={'ticket'}>
                            <img src={pink} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                            <span>Contract is funded and delegated. The Pink Raffle will be funded by &nbsp;
                                  <a href="https://www.twitter.com/xrpant" target="_blank">@xrpant</a>&nbsp;
                                  with 5,000 SGB.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={pink} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                            <span>Community members can mint one of 500 FREE tickets (1 per address) while they
                                  are still available, only paying for gas.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={pink} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                            <span>Rewards earned from delegating the prize pool each week are given to a
                                  randomly selected ticket holder.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={pink} className={'raffle'} alt={'Songbird Raffle Ticket'} />
                            <span><a href="https://www.twitter.com/xrpant" target="_blank">@xrpant</a>&nbsp;
                                  will at some point in the future (at least 26 weeks) end the raffle
                                  and reclaim his 5,000 SGB.</span>
                        </div>
                    </li>
                </ul>
                <br/>
            </div>
        )
    }
}

export default PinkRaffle