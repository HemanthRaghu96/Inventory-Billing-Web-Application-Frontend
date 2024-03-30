import React, { useState } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../../api/api';
import axios from 'axios';

export default function AddSalesOrder() {
  const navigate = useNavigate();
  const [customername, setCustomerName] = useState('');
  const [salesorder, setSalesOrder] = useState('');
  const [date, setDate] = useState('');
  const [shipmentdate, setShipmentDate] = useState('');
  const [items, setItems] = useState('');
  const [shippingcharges, setShippingCharges] = useState('');
  const [customernote, setCustomerNote] = useState('');

  const handleSave = async () => {
    const salesorderData = {
      customername,
      salesorder,
      date,
      shipmentdate,
      items,
      shippingcharges,
      customernote,
    };
    try {
      const response = await axios.post(`${API}addsalesorder`, salesorderData);
      console.log(response.data); // handle response as needed
      navigate('/sales-orders'); // navigate to sales orders page on successful save
    } catch (error) {
      console.error('Error adding sales order:', error);
      // Handle error state or display error message to the user
    }
  };

  return (
    <section className="ml-14 mt-16 md:ml-56 h-full overflow-y-auto">
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">New Sales Order</h1>
        <Link to="/sales-orders">
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* Sales Order Form */}
      <div className="flex justify-start">
        <div className="mt-5 w-[420px]">
          <div className="flex justify-between my-4">
            <h1>Customer Name</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setCustomerName(e.target.value)}
              value={customername}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1>Sales Order Number</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setSalesOrder(e.target.value)}
              value={salesorder}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1>Sales Order Date</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setCustomerName(e.target.value)}
              value={date}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1>Expected Shipment Date</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-8"
              onChange={(e) => setShipmentDate(e.target.value)}
              value={shipmentdate}
            />
          </div>
         
        </div>
      </div>
      {/* Item Table */}
      
      {/* Buttons for Save and Cancel */}
      <div className="flex my-4">
        <button
          className="border rounded-lg bg-buttonColor text-white px-2 py-1 mr-3"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="border rounded-lg px-2 py-1"
          onClick={() => navigate('/sales-orders')}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}
