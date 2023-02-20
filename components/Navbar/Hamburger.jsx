import styled from "styled-components"
import { useState } from "react"
import RightNavbar from "./RightNavbar"

const StyledHamburger = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 1px;
    z-index: 20;
    display: none;
    cursor: pointer;

    @media (max-width: 560px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        top: 26px;
        right: 30px;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? "whitesmoke" : "#1c1c1c")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        &:nth-child(2) {
            transform: ${({ open }) =>
                open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ open }) => (open ? 0 : 1)};
            width: 1.5rem;
            margin-left: 0.5rem;
        }

        &:nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`

const Hamburger = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => setOpen(!open)

    return (
        <>
            <StyledHamburger open={open} onClick={handleClick}>
                <div />
                <div />
                <div />
            </StyledHamburger>
            <RightNavbar open={open} />
        </>
    )
}

export default Hamburger
