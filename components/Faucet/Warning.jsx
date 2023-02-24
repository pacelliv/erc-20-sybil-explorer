import { BsExclamationCircleFill } from "react-icons/bs"
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
        gap: 5px;
    }

    .warning-icon {
        color: #f72585;
        font-size: 1rem;
    }
`

const Warning = () => {
    return (
        <Div>
            <p>
                <span>
                    <BsExclamationCircleFill className="warning-icon" />
                </span>
                Connect wallet to Ethereum Göerli (5) or Hardhat-Localhost
                (31337) to request funds.
            </p>
        </Div>
    )
}

export default Warning
