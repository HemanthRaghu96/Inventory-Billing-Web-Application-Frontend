// SidebarContext.js

import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
