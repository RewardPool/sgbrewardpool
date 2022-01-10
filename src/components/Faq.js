import React from "react"
import { Link } from "react-router-dom";

const Faq = () => {
    return (
        <div id={'faq'}>
            <h2>FAQ</h2>
            <h3>What is RewardPool?</h3>
            <p>RewardPool aims to be the first DAO on the Songbird and Flare Networks
               focusing on creating and implementing innovative, open-source uses for
               the FTSO Rewards System.</p>
            <br/>
            <h3>What is SRP?</h3>
            <p>The Songbird Reward Pool (SRP) token will be the governance token of the
               RewardPool DAO on the Songbird Network. You can read about the tokenomics &nbsp;
               <Link to="/srp">Here.</Link></p>
            <br/>
            <h3>What is a DAO?</h3>
            <p>A Decentralized Autonomous Organization (DAO) is an organization that achieves
               its goals through an autonomous governing system. Anyone is allowed to participate
               in the governance of the organization through voting and contributing to the
               project. In the case of RewardPool, voting will be done using the SRP token.</p>
            <br/>
            <h3>What will the RewardPool Treasury be used for?</h3>
            <p>The RewardPool Treasury will be used to develop and implement project on the
               Songbird and Flare Networks. The treasury will also be used to reward SRP token
               holders through delegation rewards and other innovative means.</p>
            <br/>
            <h3>What is the purpose of the RewardPool FTSO?</h3>
            <p>In addition to contributing to and helping secure the Songbird Network, the
               RewardPool FTSO will operate at cost, directing all profits to the RewardPool
               Treasury.</p>
            <br/>
            <h3>How can I contribute?</h3>
            <p>Everyone is encouraged to promote and contribute to RewardPool in any way they
               can. Join the &nbsp; <a href="https://discord.gg/mZRSRnmeyG" target="_blank" rel="noreferrer">
               Discord</a> &nbsp;, contribute to the protocols on GitHub, or participate in the
               protocols to help grow our treasury. You can also donate&nbsp;
                <Link to="/treasury">Here.</Link></p>
            <br/>
        </div>
    )
}

export default Faq