import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { buildTableBody, createData } from "./TableFactory";
import { typeChartHeader } from "../../util/typeChart";
import "../../themes/types.scss";
import "./Chart.scss";
import { useChartContext } from "../ChartContext";

const tableHeadData = [ createData(typeChartHeader) ];

export default function Chart() {
    const { chart } = useChartContext();

    const tableBodyData = getTableBodyData(chart);

    const chartStyles = {
        borderCollapse: "separate",
        width: "50%"
    }

    return (
        <Table sx = {chartStyles}>
            <TableHead>
                {tableHeadData.map((row) => (
                    <TableRow key = "head">
                        <TableCell>{row.type}</TableCell>
                        <TableCell className = "normal">{row.nor}</TableCell>
                        <TableCell className = "fire">{row.fir}</TableCell>
                        <TableCell className = "water">{row.wat}</TableCell>
                        <TableCell className = "electric">{row.ele}</TableCell>
                        <TableCell className = "grass">{row.gra}</TableCell>
                        <TableCell className = "ice">{row.ice}</TableCell>
                        <TableCell className = "fighting">{row.fig}</TableCell>
                        <TableCell className = "poison">{row.poi}</TableCell>
                        <TableCell className = "ground">{row.gro}</TableCell>
                        <TableCell className = "flying">{row.fly}</TableCell>
                        <TableCell className = "psychic">{row.psy}</TableCell>
                        <TableCell className = "bug">{row.bug}</TableCell>
                        <TableCell className = "rock">{row.roc}</TableCell>
                        <TableCell className = "ghost">{row.gho}</TableCell>
                        <TableCell className = "dragon">{row.dra}</TableCell>
                        <TableCell className = "dark">{row.dar}</TableCell>
                        <TableCell className = "steel">{row.ste}</TableCell>
                        <TableCell className = "fairy">{row.fai}</TableCell>
                    </TableRow>
                ))}
            </TableHead>

            <TableBody>
                {buildTableBody(tableBodyData)}
            </TableBody>
        </Table>
    );
}

function getTableBodyData(chartData) {
    return [
        createData(chartData[0]),
        createData(chartData[1]),
        createData(chartData[2]),
        createData(chartData[3]),
        createData(chartData[4]),
        createData(chartData[5]),
        createData(chartData[6]),
        createData(chartData[7]),
        createData(chartData[8]),
        createData(chartData[9]),
        createData(chartData[10]),
        createData(chartData[11]),
        createData(chartData[12]),
        createData(chartData[13]),
        createData(chartData[14]),
        createData(chartData[15]),
        createData(chartData[16]),
        createData(chartData[17])
    ];
}