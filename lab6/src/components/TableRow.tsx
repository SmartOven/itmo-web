import React from "react";

interface TableRowProps {
    columns: any[],
    cellClassName: string,
}

const TableRow: React.FC<TableRowProps> = ({columns, cellClassName}) => {
    const tableRowStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(" + columns.length + ", 1fr)",
    }

    return (
        <div style={tableRowStyle}>
            {columns.map((value, index) => (
                <div
                    className={cellClassName}
                    key={"cell-" + index}
                >
                    {value}
                </div>
            ))}
        </div>
    )
}

export default TableRow;
