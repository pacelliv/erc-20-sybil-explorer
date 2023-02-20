import styled from "styled-components"

const StyleHead = styled.thead`
    border-top: 1px #e8e8e8 solid;
    border-bottom: 2px #e8e8e8 solid;
    padding: 0.8em 0;
    color: #696969;
    background-color: #f4f6ff;
`

const Head = ({ headerGroups }) => {
    return (
        <StyleHead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                            {column.render("Header")}
                        </th>
                    ))}
                </tr>
            ))}
        </StyleHead>
    )
}
export default Head
