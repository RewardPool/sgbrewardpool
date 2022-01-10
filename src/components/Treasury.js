import React from "react"
import { ethers } from "ethers";
import TREASURY from '../treasury-abi.json';
import WNAT from '../wnat-abi.json';
import pink from '../images/rpool.png';
import $ from "jquery";
import git from "../images/github.png";

const TREASURY_ADDRESS = "0xBdf6A975bf0c005c635E90b920A2D5aEEA3c39Aa";

const WNAT_ADDRESS = "0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED";

class Treasury extends React.Component {
    render() {
        try {
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
                    getWnatBalance();
                    getBalance();
                    $("span#pinkError").text("");
                    $("button#donateButton").prop('disabled', false);
                } else {
                    console.log("No authorized account found");

                }

            }

            const getWnatBalance = async () => {
                const { ethereum } = window;

                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(WNAT_ADDRESS, WNAT, signer);

                let balance = await connectedContract.balanceOf(`${TREASURY_ADDRESS}`);
                balance = (balance/(10**18)).toFixed(6);

                $("span#wsgb").text(`${balance}`);

            }

            const getBalance = async () => {
                const { ethereum } = window;

                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(TREASURY_ADDRESS, TREASURY, signer);

                let balance = await connectedContract.balance();
                balance = (balance/(10**18)).toFixed(6);

                $("span#sgb").text(`${balance}`);

            }

            const donate = async () => {
                try {
                    const { ethereum } = window;

                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const connectedContract = new ethers.Contract(TREASURY_ADDRESS, TREASURY, signer);

                    let amount = $("input#donateAmount").val();
                    console.log(amount);

                    let overrides = {
                        value: ethers.utils.parseEther(`${amount}`)
                    };

                    let donateTx = await connectedContract.depositSGB(overrides);
                    $("label#donateLabel").text('Processing Transaction...').css("color", "red");
                    await donateTx.wait();
                    $("label#donateLabel").text('Thank you for donating!').css("color", "red");

                    getWnatBalance();

                } catch (error) {
                    console.log(error)
                    $("span#pinkError").text(`${error.data.message}`);
                }

            }

            $(function() {
                $("span#pinkError").text("Connect your wallet and refresh.");
                $("button#donateButton").prop('disabled', true);
                $("button#donateButton").off().on("click", function(event){
                            event.preventDefault();
                            donate();
                });
                checkIfWalletIsConnected();
            });
        } catch (error) {
            console.log(error)
            $("span#pinkError").text(`${error.data.message}`);
        }

        return (
            <div id={'pinkRaffle'}>
                <h2>RewardPool Treasury</h2>
                <br/>
                <p>Help fund future projects by donating!</p>
                <br/>
                <img src={pink} alt={'Pink Raffle Ticket'} />
                <p>Treasury Address:<br/>
                    <span className={'address'}>
                        0xBdf6A975bf0c005c635E90b920A2D5aEEA3c39Aa
                    </span>
                </p>
                <div id={'treasury'}>
                    <h3>Treasury Balance</h3>
                    <p><span id={'pinkError'}></span></p>
                    <p><span id={'sgb'}>0</span> SGB</p>
                    <p><span id={'wsgb'}>0</span> WSGB</p>
                    <h3>Donate SGB</h3>
                    <form>
                        <label id={'donateLabel'}>Amount to Donate
                            <br/>
                            <input name="donateAmount" type="number" id={'donateAmount'} />
                        </label>
                        <br/>
                        <button id={'donateButton'}>
                            Donate
                        </button>
                    </form>
                </div>
                <br/>
                <a href="https://github.com/RewardPool/Treasury" target="_blank" rel="noreferrer">
                    <img src={git} alt={'GitHub'} className={'gitLink'}/>
                </a>
            </div>
        )
    }
}

export default Treasury