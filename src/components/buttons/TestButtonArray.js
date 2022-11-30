import Button from "./Button";
import { useChartContext } from "../ChartContext";
import { fullTypeChart } from "../../util/typeChart";
import "./TestButtonArray.scss";

export default function TestButtonArray() {
    const { chart, setShowChart, showChart, setCountCorrect, countCorrect, maxCorrect, setTesting, testing } = useChartContext();

    const toggleShowChartText = showChart ? "Hide Solution" : "Show Solution";
    const toggleTestText = testing ? "Stop Test" : "Test Yourself";

    const isFullTypeChart = chart === fullTypeChart;
    const testComplete = countCorrect === maxCorrect;

    const toggleTest = () => {
        if (!isFullTypeChart) {
            setShowChart(prevShowChart => !prevShowChart);
            setTesting(prevTesting => !prevTesting);
            setCountCorrect(0);
        }
    };

    const toggleShowChart = () => {
        if (!isFullTypeChart)
            setShowChart(showChart => !showChart);
    };

    return (
        <div className = "test-button-array">
            {/* <Button onClick = {() => console.log("toggle type!")}>Type</Button> */}
            <Button disabled = {isFullTypeChart} className = {testing && "active"} onClick = {() => toggleTest()}>{toggleTestText}</Button>
            <Button disabled = {isFullTypeChart || testComplete} onClick = {() => toggleShowChart()}>{toggleShowChartText}</Button>
        </div>
    );
}