import { styled } from "@chakra-ui/react";

import { useSortBy, useTable } from "react-table";

export const StyledTable = styled.table`
  thead th {
    padding-right: 12px;
  }
  tbody > tr {
    td {
      padding-right: 12px;
    }
    border-top: 1px solid black;
    cursor: pointer;
    &:hover {
      background-color: ${({ bg }: any) => bg};
    }
  }
`;

export const Table = (props: any) => {
  // extract props for useTable hook config
  const { columns, data, initialState } = props;

  if (!columns || !data) return null;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState
      },
      useSortBy
    );

  return (
    <StyledTable {...getTableProps()} {...props}>
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => {
              //console.log(column);
              return (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}

                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row: any, i: any) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
