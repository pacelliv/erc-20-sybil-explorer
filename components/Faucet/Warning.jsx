import styled from "styled-components"

const Div = styled.div`
    background-color: rgb(235, 245, 248);
    border-radius: 7px;
    font-weight: 600;
    padding: 1.5em 1em;
    font-size: 0.85rem;
    max-width: 900px;
    margin: 0 auto 3em;

    & p {
        display: flex;
        justify-content: center;
    }

    .warning-icon {
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
`

const Warning = () => {
    return (
        <Div>
            <p>
                <span>
                    <img className="warning-icon" src="../warning-icon.png" />
                </span>
                Connect wallet to Ethereum Göerli (5) or Hardhat-Localhost
                (31337) to request funds.
            </p>
        </Div>
    )
}

export default Warning
