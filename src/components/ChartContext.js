import { createContext, useContext, useState } from 'react';
import { fullTypeChart, FULL_TOTAL } from '../util/typeChart';

const ChartContext = createContext();

export function ChartProvider(props) {
    const [chart, setChart] = useState(fullTypeChart);
    const [countCorrect, setCountCorrect] = useState(0);
    const [maxCorrect, setMaxCorrect] = useState(FULL_TOTAL);
    const [countIncorrect, setCountIncorrect] = useState(0);
    const [showChart, setShowChart] = useState(true);
    const [testing, setTesting] = useState(false);

    const value = {
        chart,
        setChart,
        countCorrect,
        setCountCorrect,
        countIncorrect,
        setCountIncorrect,
        showChart,
        setShowChart,
        maxCorrect,
        setMaxCorrect,
        testing,
        setTesting
    };

    return (
        <ChartContext.Provider value = {value}>
            {props.children}
        </ChartContext.Provider>
    );
}

export function useChartContext() {
    const context = useContext(ChartContext);

    if (!context)
        throw new Error("useChartContext must be used within a ChartProvider!");

    return context;
}