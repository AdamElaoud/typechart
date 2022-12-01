import { TableCell, TableRow } from "@mui/material";
import ChartCell from "./ChartCell";

export function createData([type, nor, fir, wat, ele, gra, ice, fig, poi, gro, fly, psy, bug, roc, gho, dra, dar, ste, fai]) {
    return { type, nor, fir, wat, ele, gra, ice, fig, poi, gro, fly, psy, bug, roc, gho, dra, dar, ste, fai };
}

export function buildTableBody(tableBodyData) {
    return tableBodyData.map((row) => (
        <TableRow key = {row.type}>
            {buildTableRow(row)}
        </TableRow>
    ))
}

function buildTableRow(tableRowData) {
    const rowKeys = Object.keys(tableRowData);
    
    return rowKeys.reduce((row, cell) => {
        const value = tableRowData[cell];
        const cellContent = value === "1" ? "" : value;
        const key = `${value}-${cell}`;

        if (cell === "type") {
            return [
                ...row,
                <ChartCell
                    col = {`${cell}-col`}
                    label = {true}
                    data = {value}
                    key = {key}
                    className = {`${cell}-col ${value.toLowerCase()}`}>
                        {cellContent}
                </ChartCell>
            ];
        }

        return [
            ...row,
            <ChartCell
                label = {false}
                col = {`${cell}-col`}
                data = {value}
                key = {key}
                className = {`${cell}-col cell clickable`}>
                    {cellContent}
            </ChartCell>
        ];

    }, []);
}
