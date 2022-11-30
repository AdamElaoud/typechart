import { TableCell } from "@mui/material";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from 'react';
import { useChartContext } from "../ChartContext";

export default function ChartCell(props) {
    const { label, col, data, className, size } = props;

    const [toggled, setToggled] = useState(false);
    const [column, setColumn] = useState(document.getElementsByClassName(col));
    const { countCorrect, showChart, setCountCorrect, setCountIncorrect, testing } = useChartContext();

    const cellContent = toggled || label || showChart ? props.children : "";
    const display = toggled || (!label && showChart) ? getEffectColor(data) : "blank";
    const classes = `${display} ${className}`

    useEffect(() => {
      if (testing && countCorrect === 0)
        setToggled(false);
    
    }, [testing, countCorrect])
    
    const toggle = () => {
        if (!label && !toggled && !showChart && testing) {
            setToggled(true);

            console.log('data', data);

            if (data !== "1")
                setCountCorrect(count => count + 1);
            else
                setCountIncorrect(count => count + 1);
        }
    };

    const onMouseEnter = () => {
        const columnArray = [...column];
        columnArray.forEach(cell => cell.classList.add("highlighted"))
    };

    const onMouseLeave = () => {
        const columnArray = [...column];
        columnArray.forEach(cell => cell.classList.remove("highlighted"))
    }

    return (
        <TableCell
            onMouseEnter = {onMouseEnter}
            onMouseLeave = {onMouseLeave}
            onClick = {toggle}
            className = {classes}
            size = {size}>
                {cellContent}
        </TableCell>
    );
}

ChartCell.propTypes = {
    data: PropTypes.string.isRequired,
    label: PropTypes.bool.isRequired
}

function getEffectColor(value) {
    switch (value) {
        case "0":
            return "immune";
        case "½":
            return "not-effective";
        case "1":
            return "blank";
        case "2":
            return "super-effective";
        default:
            throw new Error("invalid value in type chart array!");
    }
}