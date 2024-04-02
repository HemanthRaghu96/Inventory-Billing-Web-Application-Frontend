import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";


export default function Dashboard() {
  const salesChartRef = useRef(null);
  const purchaseChartRef = useRef(null);

  useEffect(() => {
    // Sales Order Summary data
    const salesData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales Orders",
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          data: [10, 20, 15, 25, 30, 35], // Sample data, replace with actual data
        },
      ],
    };

    // Purchase Order Summary data
    const purchaseData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Purchase Orders",
          backgroundColor: "rgba(255, 159, 64, 0.5)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
          data: [15, 25, 20, 30, 35, 40], // Sample data, replace with actual data
        },
      ],
    };

    // Create Sales Order Chart
    const salesChartCtx = salesChartRef.current.getContext("2d");
    new Chart(salesChartCtx, {
      type: "bar",
      data: salesData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Create Purchase Order Chart
    const purchaseChartCtx = purchaseChartRef.current.getContext("2d");
    new Chart(purchaseChartCtx, {
      type: "bar",
      data: purchaseData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, []);

 
  return (
    <section className="ml-14 mt-16 md:ml-56 h-full">
      <div className="flex  justify-center">
        <div className="border w-[500px] rounded-lg mt-10 mr-10">
          <h1 className="bg-slate-100 p-2 flex justify-center text-2xl font-semibold">
            Sales Activity
          </h1>
          <div className="flex justify-center">
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-blue-400">
                10
              </p>
              <h1 className="p-2">Total Customers</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-yellow-400">
                10
              </p>
              <h1 className="p-2">Total Sales Orders</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-green-400">
                10
              </p>
              <h1 className="p-2"> Total Invoices</h1>
            </div>
          </div>
        </div>
        <div className="border w-[500px] rounded-lg mt-10 mr-10">
          <h1 className="bg-slate-100 p-2 flex justify-center text-2xl font-semibold">
            Purchase Activity
          </h1>
          <div className="flex justify-center">
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-blue-400">
                10
              </p>
              <h1 className="p-2">Total Vendors</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-yellow-400">
                10
              </p>
              <h1 className="p-2">Total Purchase Orders</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-green-400">
                10
              </p>
              <h1 className="p-2"> Total Bills</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center">
        <div className="border w-[500px] rounded-lg mt-10 mr-10">
          <h1 className="bg-slate-100 p-2 flex justify-center text-2xl font-semibold">
            Invoices Status
          </h1>
          <div className="flex justify-center">
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-blue-400">
                10
              </p>
              <h1 className="p-2 flex justify-center">UNPAID</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-yellow-400">
                10
              </p>
              <h1 className="p-2 flex justify-center">PARTIALLY PAID</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-green-400">
                10
              </p>
              <h1 className="p-2 flex justify-center">PAID</h1>
            </div>
          </div>
        </div>
        <div className="border w-[500px] rounded-lg mt-10 mr-10">
          <h1 className="bg-slate-100 p-2 flex justify-center text-2xl font-semibold">
            Bills Status
          </h1>
          <div className="flex justify-center">
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-blue-400">
                10
              </p>
              <h1 className="p-2 flex justify-center">UNPAID</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-yellow-400">
                10
              </p>
              <h1 className="p-2 flex justify-center">PARTIALLY PAID</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-green-400">
                10
              </p>
              <h1 className="p-2 flex justify-center">PAID</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center">
        <div className="border w-[500px] rounded-lg mt-10 mr-10">
          <h1 className="bg-slate-100 p-2 flex justify-center text-2xl font-semibold">
            Invoices Amount
          </h1>
          <div className="flex justify-center">
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-blue-400">
                34000
              </p>
              <h1 className="p-2 flex justify-center">UNPAID</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-yellow-400">
                20400
              </p>
              <h1 className="p-2 flex justify-center">PARTIALLY PAID</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-green-400">
                56360
              </p>
              <h1 className="p-2 flex justify-center">PAID</h1>
            </div>
          </div>
        </div>
        <div className="border w-[500px] rounded-lg mt-10 mr-10">
          <h1 className="bg-slate-100 p-2 flex justify-center text-2xl font-semibold">
            Bills Amount
          </h1>
          <div className="flex justify-center">
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-blue-400">
                23400
              </p>
              <h1 className="p-2 flex justify-center">UNPAID</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-yellow-400">
                23000
              </p>
              <h1 className="p-2 flex justify-center">PARTIALLY PAID</h1>
            </div>
            <div className="mx-2">
              <p className="flex justify-center m-4 text-3xl font-bold text-green-400">
                50000
              </p>
              <h1 className="p-2 flex justify-center">PAID</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <h1 className=" p-2 flex justify-center text-2xl font-semibold">
          Sales Order Summary
        </h1>
        <div className="flex justify-center">
        <div className="border w-[500px] rounded-lg mt-10 mr-10">
          <canvas ref={salesChartRef} width={500} height={300}></canvas>
        </div>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <h1 className=" p-2 flex justify-center text-2xl font-semibold">
         Purchase Order Summary
        </h1>
        <div className="flex justify-center">
        <div className="border w-[500px] rounded-lg mt-10 mr-10">
          <canvas ref={purchaseChartRef} width={500} height={300}></canvas>
        </div>
      </div>
      </div>
    </section>
  );
}
