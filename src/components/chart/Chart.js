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

    return (
        <Table sx = {{ width: "50%" }} size = "small">
            <TableHead>
                {tableHeadData.map((row) => (
                    <TableRow key = "head">
                        <TableCell size = "small">{row.type}</TableCell>
                        <TableCell className = "normal" size = "small">{row.nor}</TableCell>
                        <TableCell className = "fire" size = "small">{row.fir}</TableCell>
                        <TableCell className = "water" size = "small">{row.wat}</TableCell>
                        <TableCell className = "electric" size = "small">{row.ele}</TableCell>
                        <TableCell className = "grass" size = "small">{row.gra}</TableCell>
                        <TableCell className = "ice" size = "small">{row.ice}</TableCell>
                        <TableCell className = "fighting" size = "small">{row.fig}</TableCell>
                        <TableCell className = "poison" size = "small">{row.poi}</TableCell>
                        <TableCell className = "ground" size = "small">{row.gro}</TableCell>
                        <TableCell className = "flying" size = "small">{row.fly}</TableCell>
                        <TableCell className = "psychic" size = "small">{row.psy}</TableCell>
                        <TableCell className = "bug" size = "small">{row.bug}</TableCell>
                        <TableCell className = "rock" size = "small">{row.roc}</TableCell>
                        <TableCell className = "ghost" size = "small">{row.gho}</TableCell>
                        <TableCell className = "dragon" size = "small">{row.dra}</TableCell>
                        <TableCell className = "dark" size = "small">{row.dar}</TableCell>
                        <TableCell className = "steel" size = "small">{row.ste}</TableCell>
                        <TableCell className = "fairy" size = "small">{row.fai}</TableCell>
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