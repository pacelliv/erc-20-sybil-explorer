import Link from "next/link"
import styled from "styled-components"

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin: auto 0 auto auto;
    z-index: 10;

    li {
        padding: 18px 10px;
        color: ${({ open }) => (open ? "whitesmoke" : "black")};
        font-weight: 500;
        transition: all 0.3s ease;
    }

    li:hover {
        color: #ffb703;
    }

    @media (max-width: 560px) {
        flex-flow: column nowrap;
        background-color: #1c1c1c;
        position: fixed;
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 5rem;
        transition: transform 0.3s ease-in-out;

        li {
            font-size: 1.2rem;
            padding: 1em 2em;
        }

        li:hover {
            background-color: #3b89ff;
        }
    }
`

const RightNavbar = ({ open }) => {
    return (
        <Ul open={open}>
            <li>
                <Link href="/">Transactions</Link>
            </li>
            <li>
                <Link href="/faucet">Faucet</Link>
            </li>
            <li>
                <Link href="/dashboard">Dashboard</Link>
            </li>
        </Ul>
    )
}

export default RightNavbar
