import React from 'react'
import '../Styles/Chart.css';
import { Chart } from "react-google-charts";



const SelectorChart = () => {
    const chartData = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    const options = {
        title: "My Daily Activities",
    };

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={chartData}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    )
}

export default SelectorChart
