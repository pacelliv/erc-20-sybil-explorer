import Link from "next/link"
import styled from "styled-components"

const Div = styled.div`
    position: absolute;
    bottom: 0;
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

    width: 100%;
    padding: 0.75em 2.2em 0.4em 1.5em;
    display: flex;
    justify-content: center;
    gap: 10px;

    .logo {
        width: 20px;
    }

    .link {
        display: flex;
        align-items: center;
        border-bottom: 1px dashed black;
        font-size: 0.8rem;
        margin: auto 0 0.6em auto;
        gap: 5px;
    }
    .link a {
        font-weight: 500;
    }

    .link a:hover {
        font-weight: 700;
    }

    .link .logo {
        width: 15px;
    }
`

const Footer = () => {
    return (
        <Div>
            <Link href="https://github.com/pacelliv" target="_blank">
                <img className="logo" src="../github.png" />
            </Link>
            <Link href="https://twitter.com/pacelliv3" target="_blank">
                <img className="logo" src="../twitter.png" />
            </Link>
            <div className="link">
                <a
                    href="https://github.com/pacelliv/erc20-sybil-token"
                    target="_blank"
                >
                    Fork on Github
                </a>
                <img
                    className="logo"
                    src="../square-arrow-up-right-solid.svg"
                />
            </div>
        </Div>
    )
}

export default Footer
