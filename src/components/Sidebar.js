//Modified from https://codesandbox.io/s/m0lnr?file=/src/Sidebar.js:0-792

import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


class Sidebar extends React.Component {
    state = {
        menuOpen: false
    };

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen });
    }

    closeMenu() {
        this.setState({ menuOpen: false });
    }

    render() {
        return (
            <Menu
                isOpen={this.state.menuOpen}
                onStateChange={state => this.handleStateChange(state)}
            >
                <Link onClick={() => this.closeMenu()} to="/">Home</Link>
                <Link onClick={() => this.closeMenu()} to="/pink">Pink Raffle</Link>
                <Link onClick={() => this.closeMenu()} to="/yellow">Yellow Raffle</Link>
                <Link onClick={() => this.closeMenu()} to="/stake">Stake-to-Earn</Link>
                <Link onClick={() => this.closeMenu()} to="/srp">SRP</Link>
                <HashLink onClick={() => this.closeMenu()} to="/#faq">FAQ</HashLink>
            </Menu>
        );
    }
}

export default Sidebar