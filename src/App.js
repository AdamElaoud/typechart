import Chart from './components/chart/Chart';
import { ChartProvider } from './components/ChartContext';
import Header from './components/header/Header';
import TestButtonArray from './components/buttons/TestButtonArray';
import TestDisplay from './components/test-display/TestDisplay';
import './App.scss';

function App() {
    return (
        <div className = "app">
            <ChartProvider>
                <Header />
                <TestDisplay />
                <Chart />
                <TestButtonArray />
            </ChartProvider>
        </div>
    );
}

export default App;