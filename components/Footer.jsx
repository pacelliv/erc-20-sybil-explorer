import Link from "next/link"
import styled from "styled-components"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { BsArrowUpRightSquareFill } from "react-icons/bs"

const Div = styled.div`
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

    width: 100%;
    padding: 0.8em 2em 0.5em;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    position: fixed;
    bottom: 0;

    .logo {
        font-size: 20px;
    }

    .margin {
        margin-left: 0.5em;
    }

    .link {
        display: flex;
        font-size: 0.8rem;
        gap: 5px;
    }
    .link a {
        margin-top: 0.1em;
        font-weight: 500;
    }

    .link a:hover {
        font-weight: 700;
    }

    .link .logo {
        font-size: 17px;
    }
`

const Footer = () => {
    return (
        <Div>
            <div>
                <Link href="https://github.com/pacelliv" target="_blank">
                    <FaGithub className="logo" />
                </Link>
                <Link href="https://twitter.com/pacelliv3" target="_blank">
                    <FaTwitter className="logo margin" />
                </Link>
            </div>

            <div className="link">
                <a
                    href="https://github.com/pacelliv/erc20-sybil-token"
                    target="_blank"
                >
                    Fork on Github
                </a>
                <BsArrowUpRightSquareFill className="logo" />
            </div>
        </Div>
    )
}

export default Footer
