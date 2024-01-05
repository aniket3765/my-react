import ChartBar from './ChartBar';
import './ChartBar.css';


const Chart = props => {
    const dataPointValues = props.dataPoints.map(datapoint => {datapoint.value})
    const totalMaximum  = Math.max(...dataPointValues)
    return <div className='chart'>
        {props.dataPoints.map(dataPoints => 
            (<ChartBar 
             key = {dataPoints.label}   
             value={dataPoints.value}
             maxValue= {totalMaximum} 
             label= {dataPoints.label
             }
             />
             ))}
    </div>
};

export default Chart;