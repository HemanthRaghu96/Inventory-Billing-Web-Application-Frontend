import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { MdQueryStats } from "react-icons/md";
import { IoFolderOpenOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { PiPlugsConnected } from "react-icons/pi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [showInventorySubPage, setShowInventorySubPage] = useState(false);
  const [showSalesSubPage, setShowSalesSubPage] = useState(false);
  const [showPurchasesSubPage, setShowPurchasesSubPage] = useState(false);

  const handleClickHome = () => {
    if (open) {
      setOpen(!open);
    }
  };

  const handleClickIntegration = () => {
    if (open) {
      setOpen(!open);
    }
  };

  const handleClickReport = () => {
    if (open) {
      setOpen(!open);
    }
  };

  const handleClickDocument = () => {
    if (open) {
      setOpen(!open);
    }
  };

  const handleOpenClose = () => {
    if (!open) {
      setShowInventorySubPage(false);
      setShowSalesSubPage(false);
      setShowPurchasesSubPage(false);
    }
    setOpen(!open);
  };

  const toggleInventorySubPage = () => {
    setShowInventorySubPage(!showInventorySubPage);
    setShowSalesSubPage(false);
    setShowPurchasesSubPage(false);
    if (open) {
      setOpen(!open);
    }
  };

  const toggleSalesSubPage = () => {
    setShowSalesSubPage(!showSalesSubPage);
    setShowInventorySubPage(false);
    setShowPurchasesSubPage(false);
    if (open) {
      setOpen(!open);
    }
  };

  const togglePurchasesSubPage = () => {
    setShowPurchasesSubPage(!showPurchasesSubPage);
    setShowInventorySubPage(false);
    setShowSalesSubPage(false);
    if (open) {
      setOpen(!open);
    }
  };
  return (
    <main className="relative">
      <section
        className={
          open
            ? "fixed top-12 h-screen  w-[45px] overflow-y-auto z-20 border-r bg-sidebarColor"
            : "fixed top-12 h-screen  w-[200px] overflow-y-auto z-20 border-r bg-sidebarColor"
        }
      >
        <div className="text-black">
          {/* Home Page */}
          <div
            className="flex justify-between items-center cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1"
            onClick={() => handleClickHome()}
          >
            <h1 className=" flex  items-center h-10   mx-2 ">
              <HiOutlineHome className="mr-3" />
              Home
            </h1>
          </div>
          {/* Inventory Page */}
          <div
            className="flex justify-between items-center cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1"
            onClick={toggleInventorySubPage}
          >
            <h1 className=" flex  items-center h-10   mx-2 ">
              <MdOutlineInventory2 className="mr-3" />
              Inventory
            </h1>
            {showInventorySubPage ? (
              <RiArrowDropDownLine className="mr-3 size-6" />
            ) : (
              <RiArrowDropRightLine className="mr-3 size-6" />
            )}
          </div>
          {/* Inventory Sub-Page */}
          {showInventorySubPage && (
            <div>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Items
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Item Groups
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Inventory <br />
                Adjustments
                <IoMdAddCircle className="size-5" />
              </h1>
            </div>
          )}
          {/* Sales Page */}
          <div
            className="flex justify-between items-center cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1"
            onClick={toggleSalesSubPage}
          >
            <h1 className=" flex  items-center h-10   mx-2 ">
              <FiShoppingCart className="mr-3" />
              Sales
            </h1>
            {showSalesSubPage ? (
              <RiArrowDropDownLine className="mr-3 size-6" />
            ) : (
              <RiArrowDropRightLine className="mr-3 size-6" />
            )}
          </div>
          {/* Sales Sub-Page */}
          {showSalesSubPage && (
            <div>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Customers
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Sales Orders
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Packages
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Shipments
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Delivery Challans
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Invoices
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Payments Received
                <IoMdAddCircle className="size-5" />
              </h1>
            </div>
          )}
          {/* Purchases Page */}
          <div
            className="flex justify-between items-center cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1"
            onClick={togglePurchasesSubPage}
          >
            <h1 className=" flex  items-center h-10   mx-2 ">
              <HiOutlineShoppingBag className="mr-3" />
              Purchases
            </h1>
            {showPurchasesSubPage ? (
              <RiArrowDropDownLine className="mr-3 size-6" />
            ) : (
              <RiArrowDropRightLine className="mr-3 size-6" />
            )}
          </div>
          {/* Purchases Sub-Page */}
          {showPurchasesSubPage && (
            <div>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Vendors
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Expenses
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Purchase Orders
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Purchase Receives
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Bills
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Payments Made
                <IoMdAddCircle className="size-5" />
              </h1>
              <h1 className=" flex justify-between  items-center text-sm py-2    pl-9 pr-3 cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 ">
                Vendor Credits
                <IoMdAddCircle className="size-5" />
              </h1>
            </div>
          )}
          {/* Integrations Page */}
          <div
            className="flex justify-between items-center cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1"
            onClick={() => handleClickIntegration()}
          >
            <h1 className=" flex  items-center h-10   mx-2 ">
              <PiPlugsConnected className="mr-3" />
              Integrations
            </h1>
          </div>
          {/* Reports Page */}
          <div
            className="flex justify-between items-center cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1"
            onClick={() => handleClickReport()}
          >
            <h1 className=" flex  items-center h-10   mx-2 ">
              <MdQueryStats className="mr-3" />
              Reports
            </h1>
          </div>
          {/* Documents Page */}
          <div
            className="flex justify-between items-center cursor-pointer hover:bg-slate-200 rounded-lg p-1 m-1 "
            onClick={() => handleClickDocument()}
          >
            <h1 className=" flex  items-center h-10   mx-2 ">
              <IoFolderOpenOutline className="mr-3" />
              Documents
            </h1>
          </div>
          <div className="pb-20"></div>

          {open ? (
            <button
              className=" fixed bottom-2 left-1 w-8 p-1 rounded-full border"
              onClick={() => handleOpenClose()}
            >
              <RiArrowDropRightLine className="mr-3 size-6" />
            </button>
          ) : (
            <button
              className="fixed bottom-2 left-20 w-8 p-1 rounded-full border"
              onClick={() => handleOpenClose()}
            >
              <RiArrowDropLeftLine className="mr-3 size-6" />
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
