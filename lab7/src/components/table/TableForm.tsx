import React, {useState} from 'react';
import "../../styles/table/TableForm.css"
import Table from "./Table.tsx";
import TableRow from "./TableRow.tsx";

interface TableFormProps {
    onFinish: (tableData: TableData) => void;
}

export interface Column {
    id: number;
    value: string
}

export interface TableData {
    tableName: string;
    columns: Column[];
    rows: string[][];
}

const TableForm: React.FC<TableFormProps> = ({onFinish}) => {
    const [tableData, setTableData] = useState<TableData>({
            tableName: "",
            columns: [
                {
                    id: 0,
                    value: '',
                }
            ],
            rows: []
        }
    );
    const [tableHeaderReady, setTableHeaderReady] = useState<boolean>(false);
    const [currentRowData, setCurrentRowData] = useState<Column[]>([]);

    const handleTableNameChange = (value: string) => {
        setTableData((prevTableData) => ({
            ...prevTableData,
            tableName: value,
        }));
    };

    const handleColumnNameChange = (id: number, value: string) => {
        setTableData((prevTableData) => ({
            ...prevTableData,
            columns: prevTableData.columns.map((column) =>
                column.id === id ? {...column, value: value} : column
            ),
        }));
    };

    const handleColumnValueChange = (id: number, value: string) => {
        setCurrentRowData((prevCurrentRowData) => {
            if (!prevCurrentRowData) {
                return [{id: id, value: value}]
            }
            return prevCurrentRowData.map((column) => (
                column.id === id ? {...column, value: value} : column
            ))
        })
    }

    const createInitCurrentRowData = () => {
        return tableData.columns.map(value => ({id: value.id, value: ''}))
    }

    const handleAddRow = () => {
        const sorted: Column[] = currentRowData.sort((a, b) => (a.id < b.id ? -1 : 1));
        setTableData((prevTableData) => {
            return {
                ...prevTableData,
                rows: [
                    ...prevTableData.rows,
                    sorted.map((column) => column.value)
                ]
            }
        })
        setCurrentRowData(createInitCurrentRowData())
    }

    const handleCreateTable = () => {
        setCurrentRowData(createInitCurrentRowData())
        setTableHeaderReady(true)
    }

    const addColumn = () => {
        setTableData((prevTableData) => ({
            ...prevTableData,
            columns: [
                ...prevTableData.columns,
                {id: prevTableData.columns.length, value: ''},
            ],
        }));
    };

    const handleFinish = () => {
        onFinish(tableData)
    }

    const renderColumnNamesInput = () => {
        return tableData.columns.map((column) => (
            <input
                key={column.id}
                type="text"
                value={column.value}
                onChange={(e) => handleColumnNameChange(column.id, e.target.value)}
            />
        ));
    }

    const createColumnValuesInputs = () => {
        return currentRowData.map((column) => (
            <input
                className="table-row-input-cell"
                key={"input-" + column.id}
                type="text"
                value={column.value}
                placeholder={"Введите значение для столбца..."}
                onChange={(e) => handleColumnValueChange(column.id, e.target.value)}
            />
        ));
    }

    return (
        <div>
            {tableHeaderReady
                ?
                <div>
                    <div className="flex-horizontal-center table-name">
                        {tableData.tableName}
                    </div>
                    <Table tableData={tableData}/>
                    <TableRow
                        columns={createColumnValuesInputs()}
                        cellClassName={"flex-horizontal-center"}
                    />
                    <button onClick={handleAddRow}>Добавить строку</button>
                    <button onClick={handleFinish}>Сохранить и завершить</button>
                </div>
                :
                <div>
                    <div>
                        <label>Название таблицы: </label>
                        <input
                            id="table-name-text-input"
                            type="text"
                            value={tableData.tableName}
                            onChange={(e) => handleTableNameChange(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Названия столбцов: </label>
                        {renderColumnNamesInput()}
                        <button onClick={addColumn}>+</button>
                    </div>
                    <div>
                        <button onClick={handleCreateTable}>Создать таблицу</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default TableForm;
