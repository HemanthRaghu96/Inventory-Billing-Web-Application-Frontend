import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <main className="app ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/invoices" element={<Invoices />} />
        <Route path="/form" element={<Form />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/geography" element={<Geography />} /> */}
      </Routes>
    </main>
  );
}

export default App;
