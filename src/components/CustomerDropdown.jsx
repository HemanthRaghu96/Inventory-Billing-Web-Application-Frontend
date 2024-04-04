import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../api/api';

const CustomerDropdown = ({customername, setCustomerName}) => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get(`${API}getallcustomer`);
        // console.log(response.data.allCustomer)
        setNames(response.data.allCustomer); 
      } catch (error) {
        console.error('Error fetching names:', error);
      }
    };

    fetchNames();
  }, []);

  const handleChange = (e) => {
    setCustomerName(e.target.value);  
  };

  return (
    <div className="flex items-center justify-center">
      <select
        value={customername}
        onChange={handleChange}
        className="border-2 rounded-md px-2 h-5 md:h-8 w-[140px] md:w-[200px] text-xs md:text-base"
      >
        <option value="">Select a Customer </option>
        {names.map((name) => (
          <option key={name._id}>
            {name.displayname}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomerDropdown;
