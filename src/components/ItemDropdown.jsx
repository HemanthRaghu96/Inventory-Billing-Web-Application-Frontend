import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../api/api';

const ItemDropdown = ({ selectedItemId, handleItemChange }) => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get(`${API}getallitems`);
        setNames(response.data.allItems);
      } catch (error) {
        console.error('Error fetching names:', error);
      }
    };

    fetchNames();
  }, []);

  const handleChange = (e) => {
    const selectedItemId = e.target.value;
    handleItemChange(selectedItemId); // Notify parent component about item selection change
  };

  return (
    <div className="flex items-center justify-center">
      <select
        value={selectedItemId} // Set the selected item ID in the dropdown
        onChange={handleChange}
        className="border-2 rounded-md px-2 h-5 md:h-8 w-[60px] md:w-full text-xs md:text-base"
      >
        <option value="">Select an Item</option>
        {names.map((name) => (
          <option key={name._id} value={name._id}>
            {name.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ItemDropdown;
