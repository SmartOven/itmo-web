import React from "react";
import {TableData} from "./TableForm.tsx";
import TableRow from "./TableRow.tsx";

const Table: React.FC<{tableData: TableData}> = ({tableData}) => {
    return (
        <div className="created-table">
            <TableRow
                columns={tableData.columns.map((column) => column.value)}
                cellClassName={"flex-horizontal-center table-cell table-header-cell"}
            />
            {tableData.rows.map((row, index) => (
                <TableRow
                    key={index}
                    columns={row}
                    cellClassName={"flex-horizontal-center table-cell"}
                />
            ))}
        </div>
    )
}

export default Table;
