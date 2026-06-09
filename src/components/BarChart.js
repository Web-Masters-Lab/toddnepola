'use client';
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Cash on Cash Return',
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: () => 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export function BarChart(props) {
    const { 
        propertyValue,
        cashInvested,
        annualCashFlow,
        growthRate,
        numYears,
    } = props;
    const [labels, setLabels] = useState([new Date().getFullYear()]);
    const [income, setIncome] = useState([]);
    const [appreciation, setAppreciation] = useState([]);
   
    // useEffect(() => {
    //     const parsedYears = parseInt(numYears);
    //     if(parsedYears > 1){
    //         const updatedLabels = [...Array(parsedYears).keys()].map((_, idx) => { return new Date().getFullYear() + idx});
    //         setLabels(updatedLabels)
    //     }
    // }, [numYears]);

    useEffect(() => {
        const parsedYears = parseInt(numYears);
        if(parsedYears > 1){
            const updatedLabels = [...Array(parsedYears).keys()].map((_, idx) => { return new Date().getFullYear() + 1 + idx});
            setLabels(updatedLabels)
        }

        const rental = labels?.map((_, idx) =>{
            return annualCashFlow * (idx + 1);
        })
        const gain = labels?.map((_, idx) =>{
            return (propertyValue * Math.pow(1 + growthRate, idx + 1)) - propertyValue
        })
        setAppreciation(gain)
        setIncome(rental)
    }, [ annualCashFlow, propertyValue, growthRate, numYears])
    
    

    const data = {
        labels,
        datasets: [
          {
            label: 'Cash Invested',
            data: labels.map(() => cashInvested),
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'Stack 0',
          },
          {
            label: 'Property Value',
            data: labels.map((_, idx) => (propertyValue * Math.pow(1 + growthRate, idx + 1))),
            backgroundColor: 'purple',
            stack: 'Stack 1',
          },
          {
            label: 'Rental Income',
            data: income,
            backgroundColor: 'blue',
            stack: 'Stack 2',
          },
          {
            label: 'Property Appreciation',
            data: appreciation,
            backgroundColor: 'rgb(75, 192, 192)',
            stack: 'Stack 2',
          },
        ],
      };


    return(
        <div style={{ width: '80%', height: '400px' }}>
            <Bar options={options} data={data} />
        </div>   
    )
}
