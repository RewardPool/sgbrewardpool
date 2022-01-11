import React from "react"
import { ethers } from "ethers";
import NFT from '../nft-abi.json';
import RAFFLE from '../raffle-abi.json';
import WNAT from '../wnat-abi.json';
import pink from '../images/rpool.png';
import $ from "jquery";

const NFT_ADDRESS = "0xAD8fC70Af4d8DEC3E80F203Eade3cCeC3dbd5114";

const RAFFLE_ADDRESS = "0x4956637E9862F8b0739ACA769249070b8490E5c8";

const WNAT_ADDRESS = "0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED";

class PinkRaffle extends React.Component {
    render() {
        /* Modified from my project on buildspace.so
        * Gotta make sure this is async.
        */
        let connectedAccount = "";
        const checkIfWalletIsConnected = async () => {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Make sure you have metamask!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }

            /*
            * Check if we're authorized to access the user's wallet
            */
            const accounts = await ethereum.request({ method: 'eth_accounts' });

            /*
            * User can have multiple authorized accounts, we grab the first one if its there!
            */
            if (accounts.length !== 0) {
                const account = accounts[0];
                connectedAccount = accounts[0];
                console.log("Found an authorized account:", account);
                getMinted();
                getOwned();
                getWnatBalance();
                getWinners();
                getLastReward();
                getCollectable();
                $("button#mintButton").prop('disabled', false);
                $("span#pinkError").text("");
            } else {
                console.log("No authorized account found");

            }
        }

        const getMinted = async () => {
            const { ethereum } = window;

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, signer);

            let nMinted = await connectedContract.totalSupply();

            $("span#pinkMinted").text(`${nMinted}`);

            if (nMinted === 500) {
                $("button#mintButton").prop('disabled', true);
            }
        }

        const getWnatBalance = async () => {
            const { ethereum } = window;

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(WNAT_ADDRESS, WNAT, signer);

            let balance = await connectedContract.balanceOf(`${RAFFLE_ADDRESS}`);
            balance = (balance/(10**18)).toFixed(6);

            $("span#totalDelegated").text(`${balance}`);

        }

        const getOwned = async () => {
            const { ethereum } = window;

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, signer);

            let nOwned = await connectedContract.walletOfOwner(connectedAccount);

            if (nOwned.length > 0) {
                let ownedJson = await connectedContract.tokenURI(nOwned[0]);
                let ownedPNG;

                $.getJSON( `https://gateway.pinata.cloud/ipfs/${ownedJson.substring(7)}`, function( data ) {
                    ownedPNG = `https://gateway.pinata.cloud/ipfs/${data.image.substring(7)}`;
                    let imgTag = `<img src="${ownedPNG}" className={'myTicket'} alt={'Owned Ticket'} />`;
                    $("div.myTickets").html(`${imgTag}`);
                });

            } else {
                $("div.myTickets").html("<p>You don't own any tickets!</p>");
            }
        }

        const getWinners = async () => {
            const { ethereum } = window;

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(RAFFLE_ADDRESS, RAFFLE, signer);

            let winners = await connectedContract.seeWinners();

            if (winners.length > 5) {
                winners = winners.slice(winners.length - 5);
                $("span#pinkWinners").text(`${winners}`);
            } else if (winners.length > 0) {
                $("span#pinkWinners").text(`${winners}`);
            } else {
                $("span#pinkWinners").text(`No winners yet!`);
            }
        }

        const getLastReward = async () => {
            const { ethereum } = window;

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(RAFFLE_ADDRESS, RAFFLE, signer);

            let lastReward = await connectedContract.seeLastReward();
            lastReward = (lastReward/(10**18)).toFixed(6);

            $("span#lastReward").text(`${lastReward}`);
        }

        const getCollectable = async () => {
            const { ethereum } = window;

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(RAFFLE_ADDRESS, RAFFLE, signer);

            let collectable = await connectedContract.addressToAllowance(connectedAccount);

            if (collectable > 0) {
                collectable = (collectable/(10**18)).toFixed(6);
                $("p#pinkClaimable").text(`${collectable} SGB`);
            } else {
                $("p#pinkClaimable").text(`${collectable} SGB`);
                $("button#claimButton").prop('disabled', true);
            }
        }

        const claimWinnings = async () => {
            const { ethereum } = window;

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(RAFFLE_ADDRESS, RAFFLE, signer);

            let collectTxn = await connectedContract.collect();

            await collectTxn.wait();

            getCollectable();
        }

        const askContractToMintNft = async () => {

            try {
                const { ethereum } = window;
                $("span#pinkError").text("");

                if (ethereum) {
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const connectedContract = new ethers.Contract(NFT_ADDRESS, NFT, signer);

                    console.log("Going to pop wallet now to pay gas...");
                    let nftTxn = await connectedContract.mint(1);

                    console.log("Mining...please wait.");
                    await nftTxn.wait();

                    console.log(`Mined, see transaction: https://songbird-explorer.flare.network/tx/${nftTxn.hash}`);

                    let txLink = `<a href='https://songbird-explorer.flare.network/tx/${nftTxn.hash}' target="_blank" rel="noreferrer">
                                  View Transaction</a>`;

                    $("span#pinkError").html(`Successfully minted: ${txLink}`);
                    getMinted();
                    getOwned();
                } else {
                    console.log("Ethereum object doesn't exist!");
                    $("span#pinkError").text("Connect wallet and refresh!");
                }
            } catch (error) {
                console.log(error)
                $("span#pinkError").text(`${error.data.message}`);
            }
        }
        $(function() {
            $("span#pinkError").text("Connect your wallet and refresh.");
            $("button#mintButton").prop('disabled', true);
            $("button#claimButton").prop('disabled', true);
            $("div.myTickets").html("<p>You don't own any tickets!</p>");
            $("p#pinkClaimable").text(`0 SGB`);
            checkIfWalletIsConnected();
        });

        return (
            <div id={'pinkRaffle'}>
                <h2>Pink Raffle</h2>
                <br/>
                <p>The Pink Raffle is a test of RewardPool's RewardRaffle Protocol.</p>
                <br/>
                <img src={pink} alt={'Songbird Raffle Ticket'} />
                <p>NFT Address:<br/>
                    <span className={'address'}>
                        0xAD8fC70Af4d8DEC3E80F203Eade3cCeC3dbd5114
                    </span>
                </p>
                <p>Raffle Address:<br/>
                    <span className={'address'}>
                        0x4956637E9862F8b0739ACA769249070b8490E5c8
                    </span>
                </p>
                <br/>
                <div id={'mint'}>
                    <h3>Tickets Minted</h3>
                    <p><span id={'pinkMinted'}>0</span> / 500</p>
                    <p><span id={'pinkError'}></span></p>
                    <button onClick={askContractToMintNft} id={'mintButton'}>
                        Mint Ticket
                    </button>
                    <div id={'myPink'}>
                        <h3>Your Ticket</h3>
                        <div className={'myTickets'}></div>
                        <h3>Amount Claimable</h3>
                        <p id={'pinkClaimable'}></p>
                        <button onClick={claimWinnings} id={'claimButton'}>
                            Claim
                        </button>
                    </div>
                    <p>Last 5 winning tickets: <span id={'pinkWinners'}></span></p>
                    <p>Last Reward: <span id={'lastReward'}></span></p>
                    <p>Total WSGB Delegated: <span id={'totalDelegated'}></span></p>
                </div>
                <br/>
                <h3>How it works</h3>
                <ul>
                    <li>
                        <div className={'ticket'}>
                            <img src={pink} className={'raffle'} alt={'Pink Raffle Ticket'} />
                            <span>Contract is funded and delegated. The Pink Raffle will be funded by &nbsp;
                                  <a href="https://www.twitter.com/xrpant" target="_blank" rel="noreferrer">@xrpant</a>&nbsp;
                                  with 5,000 SGB.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={pink} className={'raffle'} alt={'Pink Raffle Ticket'} />
                            <span>Community members can mint one of 500 FREE tickets (1 per address) while they
                                  are still available, only paying for gas.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={pink} className={'raffle'} alt={'Pink Raffle Ticket'} />
                            <span>Rewards earned from delegating the prize pool each week are given to a
                                  randomly selected ticket holder.</span>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className={'ticket'}>
                            <img src={pink} className={'raffle'} alt={'Pink Raffle Ticket'} />
                            <span><a href="https://www.twitter.com/xrpant" target="_blank" rel="noreferrer">@xrpant</a>&nbsp;
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