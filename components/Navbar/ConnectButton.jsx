import { FaWallet } from "react-icons/fa"
import { useContext, useEffect } from "react"
import { Context } from "../../src/Context"
import Jazzicon, { jsNumberForAddress } from "react-jazzicon"
import styled from "styled-components"

const Div = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #f72585;
    border-radius: 30px;
    cursor: pointer;
    padding: 0.5em 1em;
    gap: 5px;
    transition: all 0.5s ease;

    .fa-wallet {
        color: white;
        margin-right: 0.3em;
    }

    @media (max-width: 630px) {
        margin: auto 45px auto auto;
    }

    &:hover {
        border: 1px solid #6d76f7;
        background-color: #6d76f7;
    }
`

const Button = styled.button`
    background: inherit;
    font-weight: 600;
    display: block;
    color: #1c1c1c;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    color: white;

    @media (max-width: 630px) {
        font-size: 0.85rem;
        margin: auto 0 auto auto;
    }
`

const ConnectButton = () => {
    const {
        isWeb3Enabled,
        isWeb3EnableLoading,
        account,
        enableWeb3,
        Moralis,
        deactivateWeb3,
    } = useContext(Context)

    const connectWallet = async () => {
        const ret = await enableWeb3()
        if (typeof ret !== "undefined") {
            if (typeof window !== "undefined") {
                window.localStorage.setItem("connected", "injected")
            }
        }
    }

    useEffect(() => {
        if (
            !isWeb3Enabled &&
            typeof window !== "undefined" &&
            window.localStorage.getItem("connected")
        ) {
            enableWeb3()
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((newAccount) => {
            if (newAccount == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
            }
        })
    }, [])

    return (
        <Div>
            {isWeb3Enabled ? (
                <Jazzicon diameter={25} seed={jsNumberForAddress(account)} />
            ) : (
                <FaWallet className="fa-wallet" />
            )}
            <Button onClick={connectWallet} disabled={isWeb3EnableLoading}>
                {isWeb3Enabled
                    ? `${account.slice(0, 5)}...${account.slice(
                          account.length - 3
                      )}`
                    : "Connect"}
            </Button>
        </Div>
    )
}

export default ConnectButton
