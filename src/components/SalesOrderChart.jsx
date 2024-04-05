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
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1,
      },
    ],
  };

  const options = {
     indexAxis: 'y' 
  };

  return (
    <div className="chart-container p-1">
      <h2>Sales Chart</h2>
      <Bar data={data} options={options}/>
    </div>
  );
};

export default SalesOrderChart ;
