import { useEffect, createContext, useState } from "react"
import { useMoralis } from "react-moralis"
import { tokenAbi } from "../constants"
import { ethers } from "ethers"

const Context = createContext()

const ContextProvider = ({ children }) => {
    const {
        enableWeb3,
        isWeb3Enabled,
        account,
        isWeb3EnableLoading,
        Moralis,
        deactivateWeb3,
        chainId: chaindIdHex,
    } = useMoralis()

    const chainId = parseInt(chaindIdHex)
    const supportedChains = ["5", "31337"]
    const [isChainSupported, setIsChainSupported] = useState(false)
    const [logs, setLogs] = useState([])

    const getFormattedLogData = (data) => {
        const formattedData = []

        data.forEach((data) => {
            const { transactionHash, blockNumber, args } = data

            formattedData.push({
                transactionHash: transactionHash,
                blockNumber: blockNumber,
                _from: args[0],
                _to: args[1],
                _value: parseInt(args[2]) / 1e18,
            })
        })

        return formattedData
    }

    const mergeLogsData = (logs, parsedLogs) => {
        const arrayData = []
        for (let i = 0; i < logs.length; i++) {
            arrayData.unshift({
                ...logs[i],
                ...parsedLogs[i],
            })
        }

        return getFormattedLogData(arrayData)
    }

    const fetchLogs = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const currentBlock = await provider.getBlockNumber()
        const filter = {
            address: "0x34Fb07E66f2Af15431303980b7C5783B0A342BD1",
            topics: [ethers.utils.id("Transfer(address,address,uint256)")],
            fromBlock: 8445689,
            toBlock: currentBlock,
        }

        const iface = new ethers.utils.Interface(tokenAbi)
        const transferLogs = await provider.getLogs(filter)
        const parsedTransferLogs = transferLogs.map((log) =>
            iface.parseLog(log)
        )

        return mergeLogsData(transferLogs, parsedTransferLogs)
    }

    useEffect(() => {
        fetchLogs()
            .then((logsData) => setLogs(logsData))
            .catch(console.error)
    }, [])

    useEffect(() => {
        supportedChains.includes(chainId.toString())
            ? setIsChainSupported(true)
            : setIsChainSupported(false)
    }, [chainId])

    return (
        <Context.Provider
            value={{
                isWeb3Enabled,
                isWeb3EnableLoading,
                account,
                chainId,
                supportedChains,
                isChainSupported,
                logs,
                enableWeb3,
                Moralis,
                deactivateWeb3,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
