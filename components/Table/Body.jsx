import Link from "next/link"
import styled from "styled-components"

const StyleBody = styled.tbody`
    border: none;
`

const Row = styled.tr`
    border-bottom: 1px #e8e8e8 solid;
    transition: all 0.2s ease;

    :hover {
        background-color: whitesmoke;
    }

    :last-child {
        .td {
            border-bottom: 0;
        }
    }
`

const Cell = styled.td`
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0.8em;
`

const Body = ({ getTableBodyProps, page, prepareRow }) => {
    return (
        <StyleBody {...getTableBodyProps()}>
            {page.map((row) => {
                prepareRow(row)
                return (
                    <Row {...row.getRowProps()}>
                        {row.cells.map((row) => {
                            if (row.column.id === "_value") {
                                return (
                                    <Cell {...row.getCellProps()}>
                                        {`${
                                            row.value % 1 != 0
                                                ? row.value.toFixed(2)
                                                : row.value
                                        } SYL`}
                                    </Cell>
                                )
                            } else if (row.column.id === "transactionHash") {
                                return (
                                    <Cell {...row.getCellProps()}>
                                        <Link
                                            href={`https://goerli.etherscan.io/tx/${row.value}`}
                                            target="_blank"
                                            style={{ color: "#0077C6" }}
                                        >
                                            {row.value}
                                        </Link>
                                    </Cell>
                                )
                            } else if (row.column.id === "_from") {
                                return (
                                    <Cell {...row.getCellProps()}>
                                        <Link
                                            href={`https://goerli.etherscan.io/address/${row.value}`}
                                            target="_blank"
                                            style={{ color: "#0077C6" }}
                                        >
                                            {row.value}
                                        </Link>
                                    </Cell>
                                )
                            } else if (row.column.id === "_to") {
                                return (
                                    <Cell {...row.getCellProps()}>
                                        <Link
                                            href={`https://goerli.etherscan.io/address/${row.value}`}
                                            target="_blank"
                                            style={{ color: "#0077C6" }}
                                        >
                                            {row.value}
                                        </Link>
                                    </Cell>
                                )
                            } else if (row.column.id === "blockNumber") {
                                return (
                                    <Cell {...row.getCellProps()}>
                                        <Link
                                            href={`https://goerli.etherscan.io/block/${row.value}`}
                                            target="_blank"
                                            style={{ color: "#0077C6" }}
                                        >
                                            {row.value}
                                        </Link>
                                    </Cell>
                                )
                            }
                        })}
                    </Row>
                )
            })}
        </StyleBody>
    )
}

export default Body
