import React from "react"

const Faq = () => {
    return (
        <div id={'faq'}>
            <h2>FAQ</h2>
            <h3>What is RewardPool?</h3>
            <p>RewardPool aims to be the first permissionless protocol to implement
                lossless lotteries on the Songbird and Flare Networks.</p>
            <br/>
            <h3>When will the protocol launch?</h3>
            <p>We will first be launching two Proof-of-Concept raffles to gauge interest
               in the protocol and test the initial design of the smart contracts.
               After these PoC raffles, the fees collected will go towards hiring a team
               and developing the full protocol.</p>
            <br/>
            <h3>What is a 'lossless lottery'?</h3>
            <p>Lossless lotteries allow participants to have the opportunity for winning
                a prize without risking their capital. RewardPool uses the funds gathered
                from participants to earn rewards each week by delegating to FTSO providers.
                The rewards earned each week is then raffled off to a lucky winner or winners.</p>
            <br/>
            <h3>But don't I lose out on the rewards I would earn by delegating myself?</h3>
            <p>While it is true that you technically lose any rewards you would gain by delegating
                yourself, RewardPool aims to offset this loss by issuing a governance token that
                would be earned by all those participating in the protocol.</p>
            <br/>
            <h3>What will the governance token do?</h3>
            <p>The RewardPool governance token will allow community members to vote on the
               direction of the protocol. In addition to voting rights, holders of the
               governance token will share in the rewards generated by delegating the
               protocol's treasury.</p>
        </div>
    )
}

export default Faq