import { useMemo } from "react"
import {
    useTable,
    useResizeColumns,
    useFlexLayout,
    usePagination,
} from "react-table"
import { COLUMNS } from "./columns"
import Head from "./Head"
import Body from "./Body"
import Pagination from "./Pagination"
import styled from "styled-components"

const TableComponent = styled.table`
    width: inherit;
    padding: 0px 15px 0 15px;
    border-radius: 10px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    margin-bottom: 0;

    & {
        scrollbar-width: thin;
    }

    ::-webkit-scrollbar {
        width: 12px;
        position: absolute;
        bottom: 10px;
    }

    ::-webkit-scrollbar-track {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: 90%;
        padding: 0.2em;
        heght: 1px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
        height: 1px;
    }
`

const Dashboard = (props) => {
    const defaultColumn = useMemo(
        () => ({
            minWidth: 30,
            maxWidth: 150,
        }),
        []
    )

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => props.logs, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useFlexLayout,
        useResizeColumns,
        usePagination
    )

    const { pageIndex, pageSize } = state

    return (
        <>
            <TableComponent {...getTableProps()}>
                <Head headerGroups={headerGroups} />
                <Body
                    getTableBodyProps={getTableBodyProps}
                    page={page}
                    prepareRow={prepareRow}
                />
            </TableComponent>
            <Pagination
                gotoPage={gotoPage}
                previousPage={previousPage}
                nextPage={nextPage}
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageCount={pageCount}
                pageSize={pageSize}
                setPageSize={setPageSize}
            />
        </>
    )
}

export default Dashboard
