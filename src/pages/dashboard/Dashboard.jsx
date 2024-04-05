import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { API } from "../../api/api";
import axios from "axios";
import SalesOrderChart from "../../components/SalesOrderChart";
import PurchaseOrderChart from "../../components/PurchaseOrderChart";
import { useSidebar } from "../../components/SidebarContext";

export default function Dashboard() {
  const { open, setOpen } = useSidebar();
  const salesChartRef = useRef(null);
  const purchaseChartRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [totalCustomers, setTotalCustomers] = useState("");
  const [totalSalesOrders, setTotalSalesOrders] = useState("");
  const [totalInvoices, setTotalInvoices] = useState("");
  const [invoicesStatusUNPAID, setInvoicesStatusUNPAID] = useState("");
  const [invoicesStatusPARTIALLYPAID, setInvoicesStatusPARTIALLYPAID] =
    useState("");
  const [invoicesStatusPAID, setInvoicesStatusPAID] = useState("");
  const [salesOrdersData, setSalesOrdersData] = useState([]);

  const [totalVendors, setTotalVendor] = useState("");
  const [totalPurchaseOrders, setTotalPurchaseOrders] = useState("");
  const [totalBills, setTotalBills] = useState("");
  const [billsStatusUNPAID, setBillsStatusUNPAID] = useState("");
  const [billsStatusPARTIALLYPAID, setBillsStatusPARTIALLYPAID] = useState("");
  const [billsStatusPAID, setBillsStatusPAID] = useState("");
  const [purchaseOrdersData, setPurchaseOrdersData] = useState([]);

  useEffect(() => {
    fetchtotalCustomers();
    fetchtotalSalesOrders();
    fetchtotalInvoices();
    fetchtotalVendors();
    fetchtotalPurchaseOrders();
    fetchtotalBills();
  }, [totalCustomers]);

  const fetchtotalCustomers = async () => {
    try {
      const response = await axios.get(`${API}getallcustomer`);
      let count = 0;
      response.data.allCustomer.map((record) => {
        count++;
      });
      setTotalCustomers(count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchtotalSalesOrders = async () => {
    try {
      const response = await axios.get(`${API}getallsalesorder`);
      let count = 0;
      response.data.allSalesorders.map((record) => {
        count++;
      });
      setTotalSalesOrders(count);
      const allSalesOrders = response.data.allSalesorders;
      setSalesOrdersData(allSalesOrders);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchtotalInvoices = async () => {
    try {
      const response = await axios.get(`${API}getallinvoice`);
      let count = 0;
      let countunpaid = 0;
      let countpp = 0;
      let countpaid = 0;
      response.data.allInvoices.map((record) => {
        if (record.payment === "UNPAID") {
          countunpaid++;
        } else if (record.payment === "PARTIALLY PAID") {
          countpp++;
        } else if (record.payment === "PAID") {
          countpaid++;
        }
        count++;
      });
      setTotalInvoices(count);
      setInvoicesStatusUNPAID(countunpaid);
      setInvoicesStatusPARTIALLYPAID(countpp);
      setInvoicesStatusPAID(countpaid);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchtotalVendors = async () => {
    try {
      const response = await axios.get(`${API}getallvendor`);
      let count = 0;
      response.data.allVendor.map((record) => {
        count++;
      });
      setTotalVendor(count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchtotalPurchaseOrders = async () => {
    try {
      const response = await axios.get(`${API}getAllPurchaseorder`);
      let count = 0;
      response.data.allPurchaseorders.map((record) => {
        count++;
      });
      setTotalPurchaseOrders(count);
      const allPurchaseOrders = response.data.allPurchaseorders;
      setPurchaseOrdersData(allPurchaseOrders);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  const fetchtotalBills = async () => {
    try {
      const response = await axios.get(`${API}getallbill`);
      let count = 0;
      let countunpaid = 0;
      let countpp = 0;
      let countpaid = 0;
      response.data.allBills.map((record) => {
        if (record.payment === "UNPAID") {
          countunpaid++;
        } else if (record.payment === "PARTIALLY PAID") {
          countpp++;
        } else if (record.payment === "PAID") {
          countpaid++;
        }
        count++;
      });
      setTotalBills(count);
      setBillsStatusUNPAID(countunpaid);
      setBillsStatusPARTIALLYPAID(countpp);
      setBillsStatusPAID(countpaid);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  if (loading) {
    return <div className="ml-14 mt-16 md:ml-56 h-full">Loading...</div>;
  }
  // console.log(totalSalesOrders)
  return (
    <section className={open?"ml-16 mt-16  h-full":"ml-14 mt-16 md:ml-56 h-full"}>
    <h1 className=" p-2 flex justify-center text-xl md:text-3xl font-bold">Dashboard</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div>
          <div className="border w-[250px] md:w-[350px] lg:w-[400px] rounded-lg mt-10 mr-10">
            <h1 className="bg-slate-100 p-2 flex justify-center text-base md:text-2xl font-semibold">
              Sales Activity
            </h1>
            <div className="flex justify-center">
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-blue-400">
                  {totalCustomers}
                </p>
                <h1 className="p-2 text-xs md:text-base">Total Customers</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-yellow-400">
                  {totalSalesOrders}
                </p>
                <h1 className="p-2 text-xs md:text-base">Total Sales Orders</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-green-400">
                  {totalInvoices}
                </p>
                <h1 className="p-2 text-xs md:text-base"> Total Invoices</h1>
              </div>
            </div>
          </div>
          <div className="border w-[250px] md:w-[350px] lg:w-[400px] rounded-lg mt-10 mr-10">
            <h1 className="bg-slate-100 p-2 flex justify-center text-base md:text-2xl font-semibold">
              Invoices Status
            </h1>
            <div className="flex justify-center">
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-blue-400">
                  {invoicesStatusUNPAID}
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">UNPAID</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-yellow-400">
                  {invoicesStatusPARTIALLYPAID}
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">PARTIALLY PAID</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-green-400">
                  {invoicesStatusPAID}
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">PAID</h1>
              </div>
            </div>
          </div>
          {/* <div className="border w-[250px] md:w-[350px] lg:w-[400px] rounded-lg mt-10 mr-10">
            <h1 className="bg-slate-100 p-2 flex justify-center text-base md:text-2xl font-semibold">
              Invoices Amount
            </h1>
            <div className="flex justify-center">
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-blue-400">
                  34000
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">UNPAID</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-yellow-400">
                  20400
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">PARTIALLY PAID</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-green-400">
                  56360
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">PAID</h1>
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <h1 className=" p-2 flex justify-center text-lg md:text-2xl font-semibold">
            Sales Order Summary
          </h1>
          <div className="flex justify-center">
            <div className="border w-[250px]  md:w-[400px] rounded-lg mt-10 mr-10">
              <SalesOrderChart salesOrdersData={salesOrdersData} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-10">
        <div>
          <div className="border w-[250px] md:w-[350px] lg:w-[400px] rounded-lg mt-10 mr-10">
            <h1 className="bg-slate-100 p-2 flex justify-center text-base md:text-2xl font-semibold">
              Purchase Activity
            </h1>
            <div className="flex justify-center">
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-blue-400">
                  {totalVendors}
                </p>
                <h1 className="p-2 text-xs md:text-base">Total Vendors</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-yellow-400">
                  {totalPurchaseOrders}
                </p>
                <h1 className="p-2 text-xs md:text-base">Total Purchase Orders</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-green-400">
                  {totalBills}
                </p>
                <h1 className="p-2 text-xs md:text-base"> Total Bills</h1>
              </div>
            </div>
          </div>
          <div className="border w-[250px] md:w-[350px] lg:w-[400px] rounded-lg mt-10 mr-10">
            <h1 className="bg-slate-100 p-2 flex justify-center text-base md:text-2xl font-semibold">
              Bills Status
            </h1>
            <div className="flex justify-center">
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-blue-400">
                  {billsStatusUNPAID}
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">UNPAID</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-yellow-400">
                  {billsStatusPARTIALLYPAID}
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">PARTIALLY PAID</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-green-400">
                  {billsStatusPAID}
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">PAID</h1>
              </div>
            </div>
          </div>
          {/* <div className="border w-[250px] md:w-[350px] lg:w-[400px] rounded-lg mt-10 mr-10">
            <h1 className="bg-slate-100 p-2 flex justify-center text-base md:text-2xl font-semibold">
              Bills Amount
            </h1>
            <div className="flex justify-center">
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-blue-400">
                  23400
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">UNPAID</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-yellow-400">
                  23000
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">PARTIALLY PAID</h1>
              </div>
              <div className="mx-2">
                <p className="flex justify-center m-4 text-xl md:text-3xl font-bold text-green-400">
                  50000
                </p>
                <h1 className="p-2 flex justify-center text-xs md:text-base">PAID</h1>
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <h1 className=" p-2 flex justify-center  text-lg md:text-2xl font-semibold">
            Purchase Order Summary
          </h1>
          <div className="flex justify-center mb-10">
            <div className="border w-[250px] md:w-[400px] rounded-lg mt-10 mr-10">
              <PurchaseOrderChart purchaseOrdersData={purchaseOrdersData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
