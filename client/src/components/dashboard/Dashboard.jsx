import React from 'react'
import {Box ,Grid, Container} from '@mui/material'
import CardDashboard from '../cardDashboard/CardDashboard'
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
    <Box sx={{widh:"100%"}} >
      <Container maxWidth="md">
       <Bar options={options} data={data} width={500} height={250} />
      </Container>
      <Grid container spacing={3}>
          <Grid item xs={6}sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}} >
            <CardDashboard content={143} text="Total de Clientes"  />
          </Grid>
          <Grid item xs={6} sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}} >
            <CardDashboard content={'$245.456'} text="Ganancias de este Mes"  />
          </Grid>
          <Grid item xs={6} sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}} >
            <CardDashboard content={'$28.264'} text="Gastos del Mes"  />
          </Grid>
          <Grid item xs={6} sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}  >
            <CardDashboard content={'12'} text="Bajas de Mes"  />
          </Grid>
      </Grid>
      


    </Box>
  )
}

export default Dashboard