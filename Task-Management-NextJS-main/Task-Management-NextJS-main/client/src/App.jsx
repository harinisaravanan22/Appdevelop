import react, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Completed from "./pages/Completed";
import Incomplete from "./pages/Incomplete";
import AllTasks from "./pages/AllTasks";
import { AuthContext } from "./context/AuthContext";
import { TaskContextProvider } from "./context/TaskContext";
import Profile from "./pages/Profile";
import Footer from "./pages/footer";
import Admin from "./pages/Admin";
import Adminnav from "./pages/Adminnav";
import Barchart from "./pages/BarChart";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <TaskContextProvider>
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Login />} />
          <Route
            path="/register"
            element={user ? <Dashboard /> : <Register />}
          />
          <Route path="/login" element={user ? <Dashboard /> : <Login />} />
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="/all-tasks" element={<AllTasks />} />
          <Route path="/completed" element={user ? <Completed /> : <Login />} />
          <Route
            path="/incomplete"
            element={user ? <Incomplete /> : <Login />}
          />
          <Route path="/profile" element={user ? <Profile /> : <Login />} />
          <Route path="/Admin" element={user ? <Admin /> : <Login />} />
          <Route path="/Adminnav" element={user ? <Adminnav /> : <Login />} />
          <Route path="/Barchart" element={user ? <Barchart /> : <Admin />} /> 
        </Routes>
      </TaskContextProvider>
      <Footer/>
    </>
  );
};

export default App;
