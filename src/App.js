import Sidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";

function App() {
  return (
    <section>
      <main className="app ">
        <Topbar />
        <Sidebar />

        {/* <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes> */}
            
      </main>
    </section>
  );
}

export default App;
