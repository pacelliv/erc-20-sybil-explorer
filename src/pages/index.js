import { useContext } from "react"
import styled from "styled-components"
import { Context } from "../Context"
import Meta from "components/Meta"
import TableComponent from "../../components/Table/TableComponent"
import Loader from "../../components/Loader"
import Placeholder from "components/Placeholder"
import { tokenContractAddresses } from "../../constants"

const Div = styled.div`
    padding: 0 0.5em;
    text-align: center;
`

const Title = styled.h1`
    margin: 1em 0;
    font-weight: 900;

    @media (min-width: 800px) {
        font-size: 2.5rem;
    }
`

const Home = () => {
    const { isWeb3Enabled, isChainSupported, chainId, logs } =
        useContext(Context)

    const tokenAddress =
        chainId in tokenContractAddresses
            ? tokenContractAddresses[chainId][0]
            : null

    return (
        <>
            <Meta title="Sybilscan | Explorer" />
            {isWeb3Enabled && isChainSupported ? (
                <Div>
                    <Title>Latest Transactions</Title>
                    {logs.length > 0 ? (
                        <TableComponent
                            logs={logs}
                            tokenAddress={tokenAddress}
                        />
                    ) : (
                        <Loader />
                    )}
                </Div>
            ) : (
                <Div>
                    <Placeholder />
                </Div>
            )}
        </>
    )
}

export default Home
