

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/admin/login";
import Dashboard from "./components/Dashboard/dashboard";

import Maindashboard from "./components/mainDashboard.jxs/maindashboard";
import AddEmployee from "./components/Addemployee/addEmployee";
import CurrentEMployee from "./components/CurrentEmployee/currentEMployee";
import EmployDashboard from "./components/EmployeDashboard/employDashboard";
import Checkin from "./components/EmpCheckin/checkin";
import MyComponent from "./components/Dashboard/dataaa";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* admin Routes */}
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <Dashboard>
                <Maindashboard />
              </Dashboard>
            }
          />
           <Route
            path="/data"
            element={
              <Dashboard>
                <MyComponent/>
              </Dashboard>
            }
          />
             <Route
            path="/addEmployee"
            element={
              <Dashboard>
                <AddEmployee/>
              </Dashboard>
            }
          />
            <Route
            path="/currentEmployee"
            element={
              <Dashboard>
                <CurrentEMployee/>
              </Dashboard>
            }
          />
          {/* admin Routes */}

          {/* Employee ROutess */}
          <Route
            path="/employdashboard"
            element={
              <Dashboard>
                <EmployDashboard />
              </Dashboard>
            }
          />
            <Route
            path="/checkin"
            element={
              <Dashboard>
                <Checkin/>
              </Dashboard>
            }
          />
          

          {/* Employee Routes */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
