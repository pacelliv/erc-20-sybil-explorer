import styled from "styled-components"

const Div = styled.div`
    margin-top: 6em;
`

const Image = styled.img`
    width: 250px;
`

const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
`

const Loader = () => {
    return (
        <Div>
            <Image src="../../loading.svg" />
            <Text>Loading transactions...</Text>
        </Div>
    )
}

export default Loader
