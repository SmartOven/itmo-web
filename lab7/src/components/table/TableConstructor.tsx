import React, {useState} from "react";
import TableForm, {TableData} from "./TableForm.tsx";
import {useAppDispatch, useAppSelector} from "../../features/redux/hooks.ts";
import {setLastSavedTable} from "../../features/redux/appSlice.ts";
import Table from "./Table.tsx";

const TableConstructor: React.FC = () => {
    const dispatch = useAppDispatch();
    const [tableData, setTableData] = useState<TableData | null>(useAppSelector((state) => state.app.lastSavedTable));

    const onTableCreationFinish = (tableData: TableData) => {
        dispatch(setLastSavedTable(tableData))
        setTableData(tableData)
    }

    return (
        <div>
            <TableForm onFinish={onTableCreationFinish}/>
            {tableData !== null && <div>
                <details>
                    <summary>Предыдущая сохраненная таблица</summary>
                    <Table tableData={tableData}/>
                </details>
            </div>}
        </div>
    )
}

export default TableConstructor;
