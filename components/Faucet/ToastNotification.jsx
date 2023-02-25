import styled from "styled-components"
import { BsFillCheckCircleFill } from "react-icons/bs"

const Div = styled.div`
    position: fixed;
    z-index: 10;
    top: 5.6rem;
    right: 4rem;
    display: ${({ on }) => (on ? "block" : "none")};

    .animation {
        animation: toast-in-top 0.6s;
    }

    .notification {
        border: 2px #97c0fa solid;
        background-color: white;
        box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.12);
        position: relative;
        border-radius: 7px;
        transition: 0.3s ease;
        padding: 0.7em 1.8em 0.7em;
    }

    .xmark {
        position: absolute;
        top: 0;
        right: 4px;
        cursor: pointer;
        font-weight: 700;
    }

    .xmark:active {
        opacity: 0.5;
    }

    .green {
        color: #2edc6e;
    }

    .message {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        padding: 0.15em 0.4em 0.15em 0em;
    }

    .text {
        font-size: 0.9rem;
        font-weight: 400;
    }

    .button {
        display: block;
        transform: translateX(500px);
    }

    @media (min-width: 850px) {
        right: 2rem;
    }

    @media (min-width: 1050px) {
        right: 5rem;
    }

    @media (min-width: 1300px) {
        right: 8rem;
    }

    @keyframes toast-in-top {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0%);
        }
    }
`

const ToastNotification = ({ on, closeNotification }) => {
    return (
        <Div on={on}>
            <div className="notification animation">
                <span className="xmark" onClick={closeNotification}>
                    X
                </span>
                <div className="message">
                    <BsFillCheckCircleFill className="green" />
                    <p className="text">Transfer completed</p>
                </div>
            </div>
        </Div>
    )
}

export default ToastNotification
