import Chart from 'react-google-charts';
import {
    Container,
} from './styles';

const LineData = [
    ['x', 'Data'],
    [0, 0],
    [0.10, 100],
    [0.20, 150],
    [0.30, 200],
    [0.40, 250],
    [0.50, 300],
    [0.60, 350],
    [0.70, 400],
    [0.80, 450],
    [0.90, 500],
    [1, 550],
    [1.20, 600],
    [1.75, 700],
    [2, 800],
];

const LineChartOptions = {
    hAxis: {
        title: 'Spending',
        gridlines: {
            color: 'transparent'
        },
        textStyle: { color: '#6E818C' }
    },
    vAxis: {
        title: 'Likes',
        textStyle: { color: '#6E818C' }
    },
    title: "Social_facebook",
    titleTextStyle: {
        color: '#6E818C',
        fontSize: 20,
    },
    curveType: "function",
    legend: { position: "bottom" },
    // series: {
    //     0: {
    //         color: '#6E818C',
    //         pointSize: 8,
    //     },

    // },
    colors: ['#6E818C'],
    lineWidth: 3,
    focusTarget: 'category' 
};
export default function SocialGraph() {
    return (
        <Container>
            <Chart
                width="100%"
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={LineData}
                options={LineChartOptions}
                rootProps={{ 'data-testid': '2' }}
            />
        </Container>
    )
};