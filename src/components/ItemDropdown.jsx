// ItemDropdown component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../api/api';

const ItemDropdown = ({ itemsname, setItemsname, setObjId }) => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get(`${API}getallitems`);
        console.log(response.data.allItems)
        setNames(response.data.allItems); 
      } catch (error) {
        console.error('Error fetching names:', error);
      }
    };

    fetchNames();
  }, []);

  const handleChange = (e) => {
    const selectedItemId = e.target.value; // Get the selected item's ID
    setItemsname(e.target.value); // Set item name as needed
    setObjId(selectedItemId); // Update objId with selected item's ID
  };

  return (
    <div className="flex items-center justify-center">
      <select
        value={itemsname}
        onChange={handleChange}
        className="border-2 rounded-md px-2 h-8 w-full"
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
