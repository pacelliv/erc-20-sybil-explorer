import styled from "styled-components"
import ConnectButton from "./ConnectButton"
import Hamburger from "./Hamburger"
import NewNavbar from "./Navbar"

const Div = styled.div`
    height: 10px;
    background: hsla(217, 100%, 50%, 1);

    background: linear-gradient(
        45deg,
        hsla(217, 100%, 50%, 1) 50%,
        hsla(186, 100%, 69%, 1) 100%
    );

    background: -moz-linear-gradient(
        45deg,
        hsla(217, 100%, 50%, 1) 50%,
        hsla(186, 100%, 69%, 1) 100%
    );

    background: -webkit-linear-gradient(
        45deg,
        hsla(217, 100%, 50%, 1) 50%,
        hsla(186, 100%, 69%, 1) 100%
    );

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF", GradientType=1 );
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3em 1.5em 0.3em 0.3em;
    padding-right: 1.5em;
    font-size: 0.95rem;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.12);

    .logo {
        padding: 18px 20px;
        font-weight: 600;
        color: #1c1c1c;
        text-transform: uppercase;
        font-family: "Permanent Marker", cursive;
    }

    @media (max-width: 560px) {
        padding-right: 0.5em;
        .logo {
            font-size: 0.7rem;
            padding-right: 0;
            padding-left: 10px;
        }
    }
`

const Navbar = () => {
    return (
        <>
            <Div></Div>
            <Nav>
                <p className="logo">Sybil Explorer</p>
                <NewNavbar />
                <ConnectButton />
            </Nav>
        </>
    )
}

export default Navbar
