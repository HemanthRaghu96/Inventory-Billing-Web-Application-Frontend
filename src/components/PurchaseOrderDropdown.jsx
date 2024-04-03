import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../api/api';

const PurchaseOrderDropdown = ({ ordernumber, setOrderNumber }) => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get(`${API}getAllPurchaseorder`);
        console.log(response.data.allPurchaseorders)
        setNames(response.data.allPurchaseorders);
      } catch (error) {
        console.error('Error fetching names:', error);
      }
    };

    fetchNames();
  }, []);

  const handleChange = (e) => {
    setOrderNumber( e.target.value);
    console.log(e.target.value) // Notify parent component about item selection change
  };

  return (
    <div className="flex items-center justify-center">
      <select
        value={ordernumber} // Set the selected item ID in the dropdown
        onChange={handleChange}
        className="border-2 rounded-md px-2 h-5 md:h-8 w-[60px] md:w-full text-xs md:text-base"
      >
        <option value="">Select Sales Order</option>
        {names.map((name) => (
          <option key={name._id} value={name.salesorder}>
            {name.purchaseorder}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PurchaseOrderDropdown;
