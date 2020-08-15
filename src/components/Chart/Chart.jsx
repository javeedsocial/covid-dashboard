
import React , {useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data:{confirmed, deaths, recovered}, country}) => { 
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
  
        setDailyData(initialDailyData);
      };
  
      fetchMyAPI();
    }, []);

const lineChart = (
dailyData[0] 
?( 
<Line 
        data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
              data: dailyData.map((data) => data.confirmed),
              label: 'Infected',
              borderColor: 'rgba(253, 246, 212, 0.678)',
              backgroundColor: 'rgba(253, 229, 109, 0.1)',
              pointBackgroundColor: '#2c0e3ds',
              fill: true,
            }, {
              data: dailyData.map((data) => data.deaths),
              label: 'Deaths',
              borderColor: 'rgba(255, 189, 189, 0.438)',
              backgroundColor: 'rgba(255, 112, 112, 0.1)',
              pointBackgroundColor: '#2c0e3ds',
              fill: true,
            },
            ],
          }}

/>) : null
);
const barChart = (
  confirmed ? (
    <Bar 
      data = {{
      labels:['infected', 'recovered', 'deaths'],
      datasets:[{ 
      lable:'People',
      backgroundColor:['rgba(253, 246, 212, 0.699)','rgba(134, 150, 253, 0.699)','rgba(255, 189, 189, 0.699)'],
      data: [confirmed.value, recovered.value, deaths.value],}
      ]}}
      options={{
        legend: {display: false},
        title: {display: true, text:`Current state in ${country}`},
      }}
    />
  ) : null
)

return (
    <div className={styles.container}>
        {country ? barChart : lineChart}
    </div>
)
}

export default Chart;
