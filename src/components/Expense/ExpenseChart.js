import Chart from '../Chart/Chart';

const ExpenseChart = props => {
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];
console.log(props)
    // for(const expense of ){
    //     const expenseMonth = expense.Date.getMonth();    
    //     chartDataPoints[expenseMonth].value += expense.Amount;
    // }

    return <Chart dataPoints={chartDataPoints}/>
};

export default ExpenseChart;