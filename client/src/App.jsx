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
import CreateTaskForm from "./pages/CreateTaskForm";
import Nav from "./pages/nav";
import Bar from "./pages/Bar";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <TaskContextProvider>
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Login />} />
          <Route
            path="/register"
            element={ <Register />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/bar" element={<Bar />} />
          
          <Route path="*" element={<Navigate to="/" />} />
    <Route path="/dash" element={<Dashboard/>}/>
    
          <Route path="/all-tasks" element={<AllTasks />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/createtaskform' element={<CreateTaskForm/>}/>
          <Route path="/completed" element={<Completed />} />
          <Route
            path="/incomplete"
            element={<Incomplete /> }
          />
          <Route path="/profile" element={<Profile /> } />
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