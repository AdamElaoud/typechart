import { useChartContext } from "../ChartContext";
import CorrectDisplay from "./CorrectDisplay";
import IncorrectDisplay from "./IncorrectDisplay";
import "./TestDisplay.scss";

export default function TestDisplay() {
    const { testing, countCorrect, maxCorrect } = useChartContext();

    const complete = testing && countCorrect === maxCorrect;

    return (
        <div className = "test-display">
            {!testing && `${maxCorrect} interactions`}
            {testing && <CorrectDisplay />}
            {testing && !complete && <IncorrectDisplay />}
        </div>
    );
}