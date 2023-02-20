import { ethers } from "ethers"
import styled from "styled-components"

const CardsContainer = styled.div`
    max-width: 930px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 10px 0px;
    margin: 0 auto 4em;
    justify-items: center;
`

const Div = styled.div`
    background-color: #f4f6ff;
    width: 300px;
    border-radius: 7px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    transition: all 0.3s ease;
    align-self: center;

    :hover {
        background-color: #e0e4f7;
    }
`

const Stat = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .type {
        font-weight: 600;
        font-size: 1.3rem;
    }

    .value {
        font-weight: 700;
        font-size: 1.1rem;
    }
`

const Icon = styled.img`
    width: 35px;
`

const Cards = ({
    logsDataLength,
    initialSupply,
    totalBurnt,
    targetSupply,
    currentCirculation,
    dailyBurnAmount,
}) => {
    const reverseStr = (value) => {
        return value.split("").reverse().join("")
    }

    const addCommas = (num) => {
        const reverseStrNumber = reverseStr(String(num))
        let formattedNum = ""

        for (let i = 0; i < reverseStrNumber.length; i++) {
            if (i % 3 === 0) {
                formattedNum += "," + reverseStrNumber[i]
            } else {
                formattedNum += reverseStrNumber[i]
            }
        }

        return reverseStr(formattedNum).slice(0, -1)
    }

    return (
        <CardsContainer>
            <Div>
                <Icon src="../../money-bill-transfer-solid.svg" />
                <Stat>
                    <p className="type">Transactions</p>
                    <p className="value">{addCommas(logsDataLength)}</p>
                </Stat>
            </Div>
            <Div>
                <Icon src="../../print-solid.svg" />
                <Stat>
                    <p className="type">Initial Supply</p>
                    <p className="value">
                        {addCommas(
                            Math.floor(ethers.utils.formatEther(initialSupply))
                        )}
                    </p>
                </Stat>
            </Div>
            <Div>
                <Icon src="../../glass-water-solid.svg" />
                <Stat>
                    <p className="type">Current Supply</p>
                    <p className="value">
                        {addCommas(
                            Math.floor(
                                ethers.utils.formatEther(currentCirculation)
                            )
                        )}
                    </p>
                </Stat>
            </Div>

            <Div>
                <Icon src="../../bullseye-solid.svg" />
                <Stat>
                    <p className="type">Target Supply</p>
                    <p className="value">
                        {addCommas(
                            Math.floor(ethers.utils.formatEther(targetSupply))
                        )}
                    </p>
                </Stat>
            </Div>
            <Div>
                <Icon src="../../fire-solid.svg" />
                <Stat>
                    <p className="type">Total Burnt</p>
                    <p className="value">
                        {addCommas(
                            Math.floor(ethers.utils.formatEther(totalBurnt))
                        )}
                    </p>
                </Stat>
            </Div>
            <Div>
                <Icon src="../../arrow-trend-down-solid.svg" />
                <Stat>
                    <p className="type">Burning Rate</p>
                    <p className="value">
                        {addCommas(
                            Math.floor(
                                ethers.utils.formatEther(dailyBurnAmount)
                            )
                        )}
                        /day
                    </p>
                </Stat>
            </Div>
        </CardsContainer>
    )
}

export default Cards
