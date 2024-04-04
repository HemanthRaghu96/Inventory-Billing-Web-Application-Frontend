import React from 'react';
import { Bar } from 'react-chartjs-2';

const PurchaseOrderChart  = ({ purchaseOrdersData }) => {
  const customerNames = purchaseOrdersData.map((sale) => sale.vendorname);
  const totalAmounts = purchaseOrdersData.map((sale) => sale.totalamount);

  const data = {
    labels: customerNames,
    datasets: [
      {
        label: 'Purchase Order',
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
      <h2>Purchase Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PurchaseOrderChart ;
