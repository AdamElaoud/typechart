import { useChartContext } from "../ChartContext";
import fullTypeChart from "../../util/typeChart";
import "./IncorrectDisplay.scss";

export default function IncorrectDisplay() {
    const { chart, countIncorrect, testing } = useChartContext();

    const display = testing && chart !== fullTypeChart ? `${countIncorrect} incorrect` : ""; 
        
    return (
        <div className = "incorrect display">{display}</div>
    );
}