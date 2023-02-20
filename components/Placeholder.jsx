import styled from "styled-components"

const Div = styled.div`
    margin: 5em auto 0;
    max-width: 650px;
    border: medium dashed #e8e8e8;
    border-radius: 30px;
    padding: 2.5em 2em 2.5em 1em;
    display: flex;
    align-items: center;
    gap: 10px;
    line-height: 1.4;

    p {
        font-weight: 500;
        font-size: 0.9rem;
    }

    img {
        display: block;
        width: 50%;
    }

    @media (min-width: 530px) {
        p {
            font-size: 1.2rem;
        }
    }
`

const Placeholder = () => {
    return (
        <Div>
            <img src="../no-connection.png" />
            <p>Connect wallet to Ethereum Göerli to launch the app.</p>
        </Div>
    )
}

export default Placeholder
