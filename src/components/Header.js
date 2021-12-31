import React from "react"
import discord from "../images/discord.png";

class Header extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Songbird RewardPool</h1>
                </header>
                <div id={'announcement'}>
                    <h2>Coming Soon!</h2>
                    <a href="https://twitter.com/RewardPool" className="twitter-follow-button"
                       data-show-count="false">Follow @RewardPool</a>
                    <br/>
                    <p>Giving away 2 Songbird Bazooka Chicks on Discord! Join Now!</p>
                    <a href="https://discord.gg/js5ruFtW" target="_blank"  rel="noreferrer">
                        <img id={'disc'} src={discord} alt={'Discord'} />
                    </a>
                    <p>RewardPool will be releasing open-source protocols that anyone can use
                       to build innovative projects on the Songbird and Flare Networks.</p> <br/>
                    <p>These protocols will be tested in the coming weeks, starting with the
                       FREE Pink Raffle.</p>
                </div>
                <br/>
            </div>
        );
    }
}

export default Header