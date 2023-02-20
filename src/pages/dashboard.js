import { useContext } from "react"
import { Context } from "../Context"
import Meta from "components/Meta"
import Stats from "components/Cards/Stats"
import Loader from "components/Loader"
import Placeholder from "components/Placeholder"
import styled from "styled-components"

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

const Dashboard = () => {
    const { isWeb3Enabled, isChainSupported, logs } = useContext(Context)

    return (
        <>
            <Meta title="Sybilscan | Dashboard" />
            {isWeb3Enabled && isChainSupported ? (
                <Div>
                    <Title>Sybil Stats</Title>
                    {logs.length > 0 ? (
                        <Stats logsDataLength={logs.length} />
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

export default Dashboard
