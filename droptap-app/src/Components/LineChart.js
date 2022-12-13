import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function LineChart(){
    const data = {
        labels: ["May 12","May 12","May 12","May 12","May 12"],
        datasets:[{
            data: [4,8,5,6,2],
            backgroundColor: 'transparent',
            borderColor: '#55C2FF',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.4
        }]
    };
    const options = {
        scales:{
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 2,
                max: 10,
                ticks: {
                    stepSize: 2,
                    callback: (value) => value + 'k'
                }
            }
        }
    };
    return(
        <Line data={data} options={options} />
    );
}

export default LineChart;