import { useContext, useEffect, useState } from "react"
import { useWeb3Contract } from "react-moralis"
import {
    tokenAbi,
    burnerAbi,
    tokenContractAddresses,
    burnerContractAddresses,
} from "../../constants"
import { Context } from "../../src/Context"
import Cards from "./Cards"

const Stats = ({ logsDataLength }) => {
    const { chainId } = useContext(Context)
    const [initialSupply, setInitialSupply] = useState(0)
    const [totalBurnt, setTotalBurnt] = useState(0)
    const [targetSupply, setTargetSupply] = useState(0)
    const [currentCirculation, setCurrentCirculation] = useState(0)
    const [dailyBurnAmount, setDailyBurnAmount] = useState(0)

    const tokenAddress =
        chainId in tokenContractAddresses
            ? tokenContractAddresses[chainId][0]
            : null

    const burnerAddress =
        chainId in burnerContractAddresses
            ? burnerContractAddresses[chainId][0]
            : null

    const { runContractFunction: _dailyBurnAmount } = useWeb3Contract({
        abi: burnerAbi,
        contractAddress: burnerAddress,
        functionName: "_dailyBurnAmount",
        params: {},
    })

    const { runContractFunction: getInitialSupply } = useWeb3Contract({
        abi: tokenAbi,
        contractAddress: tokenAddress,
        functionName: "getInitialSupply",
        params: {},
    })

    const { runContractFunction: getBurntAmount } = useWeb3Contract({
        abi: tokenAbi,
        contractAddress: tokenAddress,
        functionName: "getBurntAmount",
        params: {},
    })

    const { runContractFunction: getTargetSupply } = useWeb3Contract({
        abi: tokenAbi,
        contractAddress: tokenAddress,
        functionName: "getTargetSupply",
        params: {},
    })

    const { runContractFunction: totalSupply } = useWeb3Contract({
        abi: tokenAbi,
        contractAddress: tokenAddress,
        functionName: "totalSupply",
        params: {},
    })

    const updateUI = async () => {
        const initialSupplyFromContractCall = (
            await getInitialSupply()
        ).toString()
        const totalBurntFromContractCall = (await getBurntAmount()).toString()
        const targetSupplyFromContractCall = (
            await getTargetSupply()
        ).toString()
        const currentCirculationFromContractCall = (
            await totalSupply()
        ).toString()
        const dailyBurnAmountFromContractCall = (
            await _dailyBurnAmount()
        ).toString()

        setInitialSupply(initialSupplyFromContractCall)
        setTotalBurnt(totalBurntFromContractCall)
        setTargetSupply(targetSupplyFromContractCall)
        setCurrentCirculation(currentCirculationFromContractCall)
        setDailyBurnAmount(dailyBurnAmountFromContractCall)
    }

    useEffect(() => {
        updateUI()
    }, [])

    return (
        <Cards
            logsDataLength={logsDataLength}
            initialSupply={initialSupply}
            totalBurnt={totalBurnt}
            targetSupply={targetSupply}
            currentCirculation={currentCirculation}
            dailyBurnAmount={dailyBurnAmount}
        />
    )
}

export default Stats
