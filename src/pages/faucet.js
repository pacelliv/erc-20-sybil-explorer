import { useContext, useEffect, useState } from "react"
import { Context } from "../Context"
import styled from "styled-components"
import { useWeb3Contract } from "react-moralis"
import Box from "components/Faucet/Box"
import Warning from "components/Faucet/Warning"
import Meta from "components/Meta"
import { faucetAbi, faucetAddresses } from "../../constants"

const Main = styled.main`
    padding: 0 0.5em;
`

const Div = styled.div`
    display: flex;
    margin: 1.3em 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1c1c1c;

    .title {
        margin-bottom: 0.5em;
        font-size: 1.7rem;
        font-weight: 900;
    }

    .subtitle {
        font-weight: 500;
        color: #696969;
    }

    @media (min-width: 700px) {
        margin-top: 2em;

        .title {
            font-size: 2.5rem;
        }
    }
`

const Faucet = () => {
    const {
        isWeb3Enabled,
        account,
        chainId,
        supportedChains,
        isChainSupported,
    } = useContext(Context)
    const [isAllowed, setIsAllowed] = useState(false)
    const [hash, setHash] = useState("")

    const faucetAddress =
        chainId in faucetAddresses ? faucetAddresses[chainId][0] : null

    const { runContractFunction: requestTokens } = useWeb3Contract({
        abi: faucetAbi,
        contractAddress: faucetAddress,
        functionName: "requestTokens",
        params: {},
    })

    const { runContractFunction: isAllowedToWithdraw } = useWeb3Contract({
        abi: faucetAbi,
        contractAddress: faucetAddress,
        functionName: "isAllowedToWithdraw",
        params: { _petitioner: account },
    })

    const canWithdraw = async () => {
        const isAllowedFromContractCall = await isAllowedToWithdraw()
        setIsAllowed(isAllowedFromContractCall)
    }

    useEffect(() => {
        canWithdraw()
    }, [isAllowed])

    const handleSuccess = async (tx) => {
        try {
            const transactionReceipt = await tx.wait(1)
            setHash(transactionReceipt.transactionHash)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Main>
            <Meta title="Sybilscan | Faucet" />
            <Div>
                <h1 className="title">Sybil Faucet</h1>
                <p className="subtitle">Fast and reliable. 10 SYL/request.</p>
            </Div>
            {(!isWeb3Enabled ||
                !supportedChains.includes(chainId.toString())) && <Warning />}
            <Box
                isWeb3Enabled={isWeb3Enabled}
                requestTokens={requestTokens}
                handleSuccess={handleSuccess}
                hash={hash}
                account={account}
                isChainSupported={isChainSupported}
                isAllowed={isAllowed}
            />
        </Main>
    )
}

export default Faucet
