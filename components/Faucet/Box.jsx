import Link from "next/link"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    margin-top: 3em;
    padding: 2.5em 2em;
    max-width: 900px;
    border-radius: 15px;
    margin: 0 auto;
    border: none;
    background-color: #f4f6ff;

    .confirmation {
        font-weight: 500;
        margin-top: 0.5em;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .input,
    .button {
        display: block;
        padding: 0.75em 1em;
        border-radius: 7px;
        font-size: 1.1rem;
        font-family: inherit;
    }

    .input {
        border: solid 1px grey;
        background-color: white;
        outline: none;
    }

    .button {
        border: none;
        background-color: #1c1c1c;
        cursor: ${({ isWeb3Enabled, isChainSupported, isAllowed }) =>
            isWeb3Enabled && isChainSupported && isAllowed
                ? "pointer"
                : "not-allowed"};
        font-weight: 700;
        color: white;
    }

    .panel {
        margin-top: 1.5em;
        padding-top 1.5em;
        border-top: 1px solid #CBCBCB;
    }

    .panel-head {
        margin-bottom: 0;
    }

    .panel-heading {
        background-color: #1c1c1c;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        color: white;
        padding: 0.85em 1em;
        margin-bottom: 0;
    }

    .hash {
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        border: solid 1px grey;
        background-color: white;
        display: block;
        padding: 0.85em 1em;
        text-decoration: ${({ hash }) => (hash ? "underline" : "none")};
        text-overflow: ellipsis;
        overflow: hidden;
    }

    @media (min-width: 700px) {
        .form {
            display: flex;
            flex-direction: row;
            width: 100%;
        }

        .input {
            width: 75%;
        }

        .button {
            width: 25%;
        }

        .panel {
            margin-top: 2em;
            padding-top 2em;
        }

        .panel-head {
            width: 100%;
        }
    }
`

const Box = ({
    isWeb3Enabled,
    requestTokens,
    handleSuccess,
    hash,
    account,
    isChainSupported,
    isAllowed,
}) => {
    const [walletAddress, setWalletAddress] = useState("")

    useEffect(() => {
        setWalletAddress(account)
    }, [isWeb3Enabled, account])

    return (
        <Container
            isChainSupported={isChainSupported}
            hash={hash}
            isWeb3Enabled={isWeb3Enabled}
            isAllowed={isAllowed}
            className="container"
        >
            <div className="form">
                <input
                    className="input"
                    type="text"
                    placeholder="No address detected"
                    defaultValue={walletAddress}
                />
                <button
                    onClick={async () => {
                        await requestTokens({
                            onSuccess: handleSuccess,
                            onError: (error) => console.error(error),
                        })
                    }}
                    className="button"
                >
                    Send Me SYL
                </button>
            </div>
            {isWeb3Enabled && (
                <p className="confirmation">
                    {isAllowed
                        ? "✅ You can request tokens."
                        : "❌ You need to wait 10 minutes between requests."}
                </p>
            )}
            <div className="form panel">
                <div className="panel-head">
                    <p className="panel-heading">Your transaction:</p>
                    <Link
                        href={`https://goerli.etherscan.io/tx/${hash}`}
                        target="_blank"
                        className="hash"
                    >
                        {hash ? hash : "--"}
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Box
