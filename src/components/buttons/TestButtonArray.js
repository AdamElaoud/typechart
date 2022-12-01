import Button from "./Button";
import { useChartContext } from "../ChartContext";
import { fullTypeChart } from "../../util/typeChart";
import "./TestButtonArray.scss";

export default function TestButtonArray() {
    const { chart, setChart, setShowChart, showChart, setCountCorrect, countCorrect, setCountIncorrect, maxCorrect, setTesting, testing } = useChartContext();
    
    const isFullTypeChart = chart === fullTypeChart;
    const testComplete = countCorrect === maxCorrect;

    const toggleShowChartText = showChart ? "Hide Solution" : "Show Solution";
    const toggleTestText = testing ? testComplete ? "Start New Test" : "Stop Test" : "Test Yourself";

    const toggleTest = () => {
        if (!isFullTypeChart) {
            // is starting new test
            if (testComplete) {
                setChart(prevChart => prevChart);
                setShowChart(false);

            // if toggling test mode
            } else {
                setShowChart(prevShowChart => !prevShowChart);
                setTesting(prevTesting => !prevTesting);
            }

            setCountCorrect(0);
            setCountIncorrect(0);
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