import ChartButtonArray from "../buttons/ChartButtonArray";
import "./Header.scss";

export default function Header() {
    return (
        <div className = "site-header">
            <div className = "top">
                POKÉMON TYPE CHART
            </div>
            <div className = "pokeball"></div>
            <div className = "bottom">
                <ChartButtonArray />
            </div>
        </div>
    );
}