import { ColorModeContext, useMode } from "../../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Team from "../Team/index";
import Contacts from "../Contacts";
import Invoices from "../Invoices";
import AddForm from "../form/AddForm";
import Products from "../Products";
import FAQ from "../FAQ";
import Bar from "../Bar";
import Pie from "../Pie";
import Line from "../Line";

const Admin = () => {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/invoices" element={<Invoices/>}/>
                <Route path="/form" element={<AddForm/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/faq" element={<FAQ/>}/>
                <Route path="/bar" element={<Bar/>}/>
                <Route path="/pie" element={<Pie/>}/>
                <Route path="/line" element={<Line/>}/>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};
export default Admin;
