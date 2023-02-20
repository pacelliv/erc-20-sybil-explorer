import { FaBars, FaTimes } from "react-icons/fa"
import { Component } from "react"
import Link from "next/link"
import styled from "styled-components"
import { MenuItems } from "./MenuItems"
import ConnectButton from "./ConnectButton"

const Nav = styled.nav`
    background: linear-gradient(
        90deg,
        rgb(110, 94, 245) 0%,
        rgba(73, 63, 252, 100%)
    );
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0 1.2em;

    .navbar-logo {
        font-family: "Permanent Marker", cursive;
        font-weight: 600;
    }

    .nav-menu {
        margin: auto 10px auto auto;
    }

    .nav-links {
        color: white;
        padding: 0.4em 0.6em;
        font-weight: 600;
    }

    .nav-links:hover {
        background-color: #6d76f7;
        border-radius: 4px;
        transition: all 0.2s ease-out;
    }

    .menu-icon {
        display: none;
    }

    .fa-bars {
        color: whitesmoke;
    }

    @media (max-width: 630px) {
        position: relative;

        .nav-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            width: 100%;
            height: 300px;
            top: 55px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
        }

        .nav-menu.active {
            background-color: #6668f4;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
        }

        .nav-links {
            text-align: center;
            padding: 2rem 2rem;
            display: table;
            font-size: 1.1rem;
        }

        .nav-links:nth-of-type(1) {
            margin-top: 1.5em;
        }

        .nav-link:hover {
            background-color: #7577fa;
            border-radius: 0;
        }

        .nav-logo {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(10%, 50%);
        }

        .menu-icon {
            display: flex;
            flex-direction: column;
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-75%, 35%);
            font-size: 1.8rem;
            cursor: pointer;
        }
    }
`

class Navbar extends Component {
    state = {
        clicked: false,
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <Nav className="navbar-items">
                <p className="navbar-logo">Sybil Explorer</p>
                <div className="menu-icon" onClick={this.handleClick}>
                    {this.state.clicked ? (
                        <FaTimes className="fa-times" />
                    ) : (
                        <FaBars className="fa-bars" />
                    )}
                </div>
                <ul
                    className={
                        this.state.clicked ? "nav-menu active" : "nav-menu"
                    }
                >
                    {MenuItems.map((item, index) => (
                        <Link
                            key={index}
                            className={item.cName}
                            href={item.url}
                        >
                            {item.title}
                        </Link>
                    ))}
                </ul>
                <ConnectButton />
            </Nav>
        )
    }
}

export default Navbar
