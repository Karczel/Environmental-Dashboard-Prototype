import SimpleBarChart from "@/components/Charts/BarChart";
import MyLineChart from "@/components/Charts/LineChart";
import TwoLevelPieChart from "@/components/Charts/PieChat";
import SimpleScatterChart from "@/components/Charts/ScatterChart";

export const chartTypes = [
        {id: 1, name: "BarChart", iconURL: "BarChart.png", chartNode: <SimpleBarChart/>},
        {id: 2, name: "LineChart", iconURL: "LineChart.png", chartNode: <MyLineChart/>},
        {id: 3, name: "ScatterChart", iconURL: "ScatterChart.png", chartNode: <SimpleScatterChart/>},
        {id: 4, name: "PieChart", iconURL: "PieChart.png", chartNode:  <TwoLevelPieChart />}
    ]