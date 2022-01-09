import React from "react"
import pink from '../images/pink-ticket-1.png'
import yellow from '../images/yellow-ticket-1.png'
import coin from '../images/srp-coin.png'
import git from '../images/github.png'

const Content = () => {
    return (
        <div id={'content'}>
            <h2>RewardPool Protocols</h2>
            <br/>
            <div className={'protocol'}>
                <img src={pink} alt={'Songbird Raffle Ticket'} />
                <br/>
                <h3>RewardRaffle Protocol</h3>
                <br/>
                <p>RewardRaffle allows companies, influencers, and others to reward
                   their following with weekly prizes without risking or spending
                   any of their own capital!</p>
                <br/>
                <p>Fund a contract, let your followers mint free tickets, and one lucky
                   ticket holder wins the delegation reward each week! </p>
                <br/>
                <p>End the raffle and reclaim your funds at any time!</p>
                <br/>
                <a href="https://github.com/RewardPool/RewardRaffle" target="_blank" rel="noreferrer">
                    <img src={git} alt={'GitHub'} className={'gitLink'}/>
                </a>
            </div>
            <br/>
            <div className={'protocol'}>
                <img src={coin} alt={'SRP Coin'} />
                <br/>
                <h3>RewardStake Protocol</h3>
                <br/>
                <p>RewardStake allows projects to raise funds without needing direct
                   investment.</p>
                <br/>
                <p>Instead of investing coins directly, participants lock their SGB
                   in a staking contract where delegation rewards are sent to the
                   project that is raising funds.</p>
                <br/>
                <p>In return, participants are rewarded with the project's tokens,
                   and can reclaim their SGB at any time!</p>
                <br/>
                <p style={{textAlign: "center"}}>GitHub Link Coming Soon.</p>
            </div>
            <br/>
            <div className={'protocol'}>
                <img src={yellow} alt={'Songbird Raffle Ticket'} />
                <br/>
                <h3>LosslessRaffle Protocol</h3>
                <br/>
                <p>LosslessRaffle allows participants to pool SGB in order to gamify
                   the delegation process.</p>
                <br/>
                <p>Participants trade guaranteed rewards for the chance at exponentially
                   higher rewards, and may be compensated in other ways by the raffle
                   organizer.</p>
                <br/>
                <p>Participants can burn their ticket to reclaim SGB at any time!</p>
                <br/>
                <p>This is a great way for new FTSO providers to gain delegates quickly!</p>
                <br/>
                <p style={{textAlign: "center"}}>GitHub Link Coming Soon.</p>
            </div>
            <br/>
        </div>
    )
}

export default Content