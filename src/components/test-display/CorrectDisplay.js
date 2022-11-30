import { useChartContext } from "../ChartContext";
import fullTypeChart from "../../util/typeChart";
import "./CorrectDisplay.scss";

export default function CorrectDisplay() {
    const { chart, countCorrect, maxCorrect, testing } = useChartContext();

    const complete = testing && countCorrect === maxCorrect;
    const successMessage = complete ? "well done!" : "";
    const display = testing && chart !== fullTypeChart ? `${countCorrect} / ${maxCorrect} ${successMessage}` : ""; 
        
    return (
        <div className = {`display ${complete && "complete"}`}>{display}</div>
    );
}