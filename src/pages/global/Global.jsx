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
import AddCustomers from "../Sales/Customers/AddCustomers";
import ViewSingleCustomers from "../Sales/Customers/ViewSingleCustomers";
import EditCustomers from "../Sales/Customers/EditCustomers";
import EditVendors from "../Purchases/Vendors/EditVendors";
import ViewSingleVendors from "../Purchases/Vendors/ViewSingleVendors";
import AddVendors from "../Purchases/Vendors/AddVendors";
import AddSalesOrder from "../Sales/Sales Orders/AddSalesOrder";
import ViewSingleSalesOrder from "../Sales/Sales Orders/ViewSingleSalesOrder";
import EditSalesOrder from "../Sales/Sales Orders/EditSalesOrder";
import Addbills from "../Purchases/Bills/Addbills";
import ViewSinglebills from "../Purchases/Bills/ViewSinglebills";
import Editbills from "../Purchases/Bills/Editbills";
import Addpurchaseorders from "../Purchases/Purchase Orders/Addpurchaseorders";
import ViewSinglepurchaseorders from "../Purchases/Purchase Orders/ViewSinglepurchaseorders";
import Editpurchaseorders from "../Purchases/Purchase Orders/Editpurchaseorders";
import AddInvoices from "../Sales/Invoices/AddInvoices";
import ViewSingleInvoices from "../Sales/Invoices/ViewSingleInvoices";
import EditInvoices from "../Sales/Invoices/EditInvoices";
import ResetPassword from "../../resetPassword/ResetPassword";
import SucessEmailsent from "../../resetPassword/SucessEmailsent";
import UserChangePassword from "../../resetPassword/UserChangePassword";
import { SidebarProvider } from "../../components/SidebarContext";

export default function Global() {
  const location = useLocation();
  // Check if the current location is the login or signup page
  const isLoginPage = location.pathname === "/";
  const isSignupPage = location.pathname === "/Signup";
  const isResetPasswordPage = location.pathname === "/resetpassword";
  const issucessemailsendPage = location.pathname === "/sucessemailsend";
  const isChangePasswordPage = location.pathname.startsWith("/forgotpassword");
  return (
    
    <section className="app ">
     <SidebarProvider>
      {!isLoginPage &&
        !isSignupPage &&
        !isResetPasswordPage &&
        !issucessemailsendPage &&
        !isChangePasswordPage && <Topbar />}
      {!isLoginPage &&
        !isSignupPage &&
        !isResetPasswordPage &&
        !issucessemailsendPage &&
        !isChangePasswordPage && <Sidebar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/sucessemailsend" element={<SucessEmailsent />} />
        <Route
          path="/forgotpassword/:userid/:token"
          element={<UserChangePassword />}
        />
        {/* Inventory Tab */}
        {/* Items page */}
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/additems" element={<AddItem />} />
        <Route path="/items/:itemId" element={<ViewSingleItem />} />
        <Route path="/items/edititem/:itemId" element={<EditItem />} />
        {/* Items page
        <Route path="/inventoryadjustments" element={<InventoryAdjustmentList />}/>
         <Route path="/inventoryadjustments/addinventoryadjustments" element={<AddInventoryAdjustment />} />
        <Route path="/inventoryadjustments/inventoryadjustmentname" element={<ViewSingleInventoryAdjustment />} />
        <Route path="/inventoryadjustments/editinventoryadjustment" element={<EditInventoryAdjustment />} /> */}
        {/* Sales page */}
        {/* Customers page */}
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/addcustomers" element={<AddCustomers />} />
        <Route
          path="/customers/:customersId"
          element={<ViewSingleCustomers />}
        />
        <Route
          path="/customers/customersitem/:customersId"
          element={<EditCustomers />}
        />
        {/* Sales Order page */}
        <Route path="/salesorders" element={<SalesOrderList />} />
        <Route path="/salesorders/addsalesorders" element={<AddSalesOrder />} />
        <Route
          path="/salesorders/:salesordersId"
          element={<ViewSingleSalesOrder />}
        />
        <Route
          path="/salesorders/salesordersitem/:salesordersId"
          element={<EditSalesOrder />}
        />
        {/* <Route path="/packages" element={<PackageList />} />
        <Route path="/Shipments" element={<ShipmentList />} /> */}
        {/* <Route path="/deliverychallans" element={<DeliveryChallanList />} /> */}
        <Route path="/invoices" element={<InvoiceList />} />
        <Route path="/invoices/addinvoices" element={<AddInvoices />} />
        <Route path="/invoices/:invoicesId" element={<ViewSingleInvoices />} />
        <Route
          path="/invoices/invoicesitem/:invoicesId"
          element={<EditInvoices />}
        />
        {/* <Route path="/paymentsreceived" element={<PaymentsReceivedList />} /> */}
        {/* Purchases page */}
        {/* Vendor page */}
        <Route path="/vendors" element={<VendorList />} />
        <Route path="/vendors/addvendors" element={<AddVendors />} />
        <Route path="/vendors/:vendorsId" element={<ViewSingleVendors />} />
        <Route
          path="/vendors/vendorsdetails/:vendorsId"
          element={<EditVendors />}
        />
        {/* <Route path="/expenses" element={<ExpenseList />} /> */}
        <Route path="/purchaseorders" element={<PurchaseOrdersList />} />
        <Route
          path="/purchaseorders/addpurchaseorders"
          element={<Addpurchaseorders />}
        />
        <Route
          path="/purchaseorders/:purchaseordersId"
          element={<ViewSinglepurchaseorders />}
        />
        <Route
          path="/purchaseorders/purchaseordersitem/:purchaseordersId"
          element={<Editpurchaseorders />}
        />
        {/* <Route path="/purchasereceives" element={<PurchaseReceiveList />} /> */}
        <Route path="/bills" element={<BillsList />} />
        <Route path="/bills/addbills" element={<Addbills />} />
        <Route path="/bills/:billsId" element={<ViewSinglebills />} />
        <Route path="/bills/billsitem/:billsId" element={<Editbills />} />
        {/* <Route path="/paymentsmade" element={<PaymentsMadeList />} /> */}
        {/* <Route path="/vendorcredits" element={<VendorCredits />} /> */}
        {/*   */}
        {/* <Route path="/integrations" element={<Integrations />} /> */}
        {/* <Route path="/reports" element={<Reports />} /> */}
        {/* <Route path="/documents" element={<Documents />} /> */}
      </Routes>
      </SidebarProvider>
    </section>
  );
}
