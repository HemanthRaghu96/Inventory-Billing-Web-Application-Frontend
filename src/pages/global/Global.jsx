import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../login/Login";
import Dashboard from "../dashboard/Dashboard";
import Signup from "../Signup/Signup";
import ItemList from "../Inventory/Items/ItemList";
import InventoryAdjustmentList from "../Inventory/Inventory adjustments/InventoryAdjustmentList";
import Customers from "../Sales/Customers/Customers";
import SalesOrderList from "../Sales/Sales Orders/SalesOrderList";
import PackageList from "../Sales/Packages/PackageList";
import ShipmentList from "../Sales/Shipments/ShipmentList";
import DeliveryChallanList from "../Sales/Delivery Challans/DeliveryChallanList";
import InvoiceList from "../Sales/Invoices/InvoiceList";
import PaymentsReceivedList from "../Sales/Payments Received/PaymentsReceivedList";
import VendorList from "../Purchases/Vendors/VendorList";
import ExpenseList from "../Purchases/Expenses/ExpenseList";
import PurchaseOrdersList from "../Purchases/Purchase Orders/PurchaseOrdersList";
import PurchaseReceiveList from "../Purchases/Purchase Receives/PurchaseReceiveList";
import BillsList from "../Purchases/Bills/BillsList";
import Integrations from "../Integrations/Integrations";
import Reports from "../Reports/Reports";
import Documents from "../Documents/Documents";
import PaymentsMadeList from "../Purchases/Payments Made/PaymentsMadeList";
import VendorCredits from "../Purchases/Vendor Credits/VendorCredits";
import AddItem from "../Inventory/Items/AddItem";
import ViewSingleItem from "../Inventory/Items/ViewSingleItem";
import EditItem from "../Inventory/Items/EditItem";
import AddInventoryAdjustment from "../Inventory/Inventory adjustments/AddInventoryAdjustment";
import ViewSingleInventoryAdjustment from "../Inventory/Inventory adjustments/ViewSingleInventoryAdjustment";
import EditInventoryAdjustment from "../Inventory/Inventory adjustments/EditInventoryAdjustment";

export default function Global() {
  const location = useLocation();
  // Check if the current location is the login or signup page
  const isLoginPage = location.pathname === "/";
  const isSignupPage = location.pathname === "/signup";
  return (
    <section className="app ">
      {!isLoginPage && !isSignupPage && <Topbar />}
      {!isLoginPage && !isSignupPage && <Sidebar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Inventory Tab */}
        {/* Items page */}
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/additems" element={<AddItem />} />
        <Route path="/items/:itemId" element={<ViewSingleItem />} />
        <Route path="/items/edititem/:itemId" element={<EditItem />} />
         {/* Items page */}
        <Route
          path="/inventoryadjustments"
          element={<InventoryAdjustmentList />}
        />
         <Route path="/inventoryadjustments/addinventoryadjustments" element={<AddInventoryAdjustment />} />
        <Route path="/inventoryadjustments/inventoryadjustmentname" element={<ViewSingleInventoryAdjustment />} />
        <Route path="/inventoryadjustments/editinventoryadjustment" element={<EditInventoryAdjustment />} />
        {/* Sales page */}
        <Route path="/customers" element={<Customers />} />
        <Route path="/salesorders" element={<SalesOrderList />} />
        <Route path="/packages" element={<PackageList />} />
        <Route path="/Shipments" element={<ShipmentList />} />
        <Route path="/deliverychallans" element={<DeliveryChallanList />} />
        <Route path="/invoices" element={<InvoiceList />} />
        <Route path="/paymentsreceived" element={<PaymentsReceivedList />} />
        {/* Purchases page */}
        <Route path="/vendors" element={<VendorList />} />
        <Route path="/expenses" element={<ExpenseList />} />
        <Route path="/purchaseorders" element={<PurchaseOrdersList />} />
        <Route path="/purchasereceives" element={<PurchaseReceiveList />} />
        <Route path="/bills" element={<BillsList />} />
        <Route path="/paymentsmade" element={<PaymentsMadeList />} />
        <Route path="/vendorcredits" element={<VendorCredits />} />
        {/*   */}
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </section>
  );
}
