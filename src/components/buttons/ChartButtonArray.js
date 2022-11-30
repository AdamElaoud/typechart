import { useState } from "react";
import Button from "./Button";
import {
    fullTypeChart,
    FULL_TOTAL,
    immunityTypeChart,
    IMMUNITY_TOTAL,
    resistanceTypeChart,
    RESISTANCE_TOTAL,
    superEffectiveTypeChart,
    SUPER_EFFECTIVE_TOTAL
} from "../../util/typeChart";
import { useChartContext } from "../ChartContext";
import "./ChartButtonArray.scss";

export default function ChartButtonArray() {
    const { setChart, setCountCorrect, setCountIncorrect, setShowChart, setMaxCorrect, setTesting } = useChartContext();
    const [chartType, setChartType] = useState({
        full: true,
        superEffective: false,
        resistance: false,
        immune: false
    });

    const resetChart = () => {
        setCountCorrect(0);
        setCountIncorrect(0);
        setShowChart(true);
        setTesting(false);
    };

    const switchToFull = () => {
        resetChart();
        setChart(fullTypeChart);
        setMaxCorrect(FULL_TOTAL);
        setChartType({
            full: true,
            superEffective: false,
            resistance: false,
            immune: false
        });
    }

    const switchToSuperEffective = () => {
        resetChart();
        setChart(superEffectiveTypeChart);
        setMaxCorrect(SUPER_EFFECTIVE_TOTAL);
        setChartType({
            full: false,
            superEffective: true,
            resistance: false,
            immune: false
        });
    }

    const switchToResistance = () => {
        resetChart();
        setChart(resistanceTypeChart);
        setMaxCorrect(RESISTANCE_TOTAL);
        setChartType({
            full: false,
            superEffective: false,
            resistance: true,
            immune: false
        });
    }

    const switchToImmune = () => {
        resetChart();
        setChart(immunityTypeChart);
        setMaxCorrect(IMMUNITY_TOTAL);
        setChartType({
            full: false,
            superEffective: false,
            resistance: false,
            immune: true
        });
    }

    return (
        <div className = "chart-button-array">
            <Button className = {chartType.full && "active"} onClick = {switchToFull}>Full</Button>
            <Button className = {chartType.superEffective && "active"} onClick = {switchToSuperEffective}>Super-Effective</Button>
            <Button className = {chartType.resistance && "active"} onClick = {switchToResistance}>Not-Effective</Button>
            <Button className = {chartType.immune && "active"} onClick = {switchToImmune}>Immune</Button>
        </div>
    );
}