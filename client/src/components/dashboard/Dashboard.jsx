import React from 'react'
import {Box} from '@mui/material'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'center',
    },
    title: {
      display: true,
      text: 'Altas y Bajas',
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Altas',
      data:[3,7,4,2,6,7],
      backgroundColor: 'rgba(83,212, 238, 0.5)',
    }
  ],
};


const Dashboard = () => {
  return (
    <Box >
      <Bar options={options} data={data} width={500} height={250} />


    </Box>
  )
}

export default Dashboard