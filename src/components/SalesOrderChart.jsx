import React from 'react';
import { Bar } from 'react-chartjs-2';

const SalesOrderChart  = ({ salesOrdersData }) => {
  const customerNames = salesOrdersData.map((sale) => sale.customername);
  const totalAmounts = salesOrdersData.map((sale) => sale.totalamount);

  const data = {
    labels: customerNames,
    datasets: [
      {
        label: 'Sales Order ',
        data: totalAmounts,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Sales Chart</h2>
      <Bar data={data} options={options}/>
    </div>
  );
};

export default SalesOrderChart ;
