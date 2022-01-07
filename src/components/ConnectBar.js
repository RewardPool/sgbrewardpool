import React from "react"
import $ from "jquery"
import { ethers } from "ethers";

$(function() {
    checkWeb3();
    $("button#connectButton").on("click", connect);
})

// web3 connect code borrowed from A-FTSO
// Thanks to ftso.alexdupre.com
let provider
let signer
let currentNetwork
const defaultNetwork = '0x13'
const { ethereum } = window;

const networks = {
    '0x13': {
        chainId: '0x13',
        chainName: 'Songbird',
        nativeCurrency: { decimals: 18, symbol: 'SGB' },
        rpcUrls: ['https://songbird.towolabs.com/rpc'],
        blockExplorerUrls: ['https://songbird-explorer.flare.network/'],
    },
}

async function checkWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Web3 provider is installed!')
        provider = new ethers.providers.Web3Provider(window.ethereum)
        signer = provider.getSigner()
        try {
            // check if already connected by getting the wallet address
            await signer.getAddress()
            await checkNetwork()
            await checkAccount()
            $("button#connectButton").html('Connected');
            $("button#connectButton").prop('disabled', true);
        } catch (err) {
            console.log(err)
        }
    } else {
        console.log('Please install MetaMask or another web3 provider!')
        alert('Please install MetaMask or another web3 provider!')
    }
}

async function connect() {
    console.log("Connecting...")

    $("button#connectButton").prop('disabled', true);
    try {
        // connect
        await ethereum.request({ method: 'eth_requestAccounts' });
        await checkNetwork();
        await checkAccount();
        $("button#connectButton").html('Connected');
    } catch (err) {
        $("button#connectButton").prop('disabled', false);
        if (err.code === 4001) {
            // user rejected the connection
            console.log('Please connect to MetaMask.');
        } else {
            console.error(err);
        }
    }
}

async function checkNetwork() {
    ethereum.on('chainChanged', handleChainChanged);
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    if (networks[chainId] !== undefined) {
        currentNetwork = networks[chainId]
        //await handleChainChanged(chainId)
    } else if (ethereum.isMetaMask) {
        await setupNetwork(defaultNetwork)
        if (chainId === await ethereum.request({ method: 'eth_chainId' }))
            console.log('Please switch to one of the supported networks.')
    } else {
        console.log('Please switch to one of the supported networks.')
    }
}

async function checkAccount() {
    let accounts = await ethereum.request({ method: 'eth_accounts' })
    ethereum.on('accountsChanged', handleAccountsChanged)
    //await handleAccountsChanged(accounts)
}

async function setupNetwork(network) {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: networks[network].chainId }],
        });
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [networks[network]],
                });
            } catch (addError) {
                if (addError.code === 4001) {
                    console.log('Please approve the Songbird network.')
                } else {
                    // handle other "add" errors
                    console.error(addError)
                }
            }
        } else if (switchError.code === 4001) {
            // user rejected the change
            console.log('Songbird configuration already present.')
        } else {
            // handle other "switch" errors
            console.error(switchError)
        }
    }
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
}


async function handleChainChanged(chainId) {
    //window.location.reload()
    console.log("Chain changed to " + chainId)
    currentNetwork = networks[chainId]
    // reload provider and signer on chain change
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
    if (currentNetwork !== undefined) {
        // show main section
    } else {
        // reload or ask to change network
        console.log('Please switch to one of the supported networks.')
    }
}

async function handleAccountsChanged(accounts) {
    //window.location.reload()
    console.log('Account changed to ' + accounts)
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
    }
}

class ConnectBar extends React.Component {

    render() {
        return (
            <div id={'connect'}>
                <button id={'connectButton'}>Connect Wallet</button>
            </div>
        )
    }
}

export default ConnectBar