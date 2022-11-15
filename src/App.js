import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import PaymentPage from "./Pages/PaymentPage";
import Orderbooked from "./Pages/Orderbooked";
import Profile from "./Pages/Profile";
import AdminLogin from "./Pages/AdminLogin";

function App() {
  return (
    <div className="App bg-white">
      {/* <Home/> */}
    
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/payment" element={<PaymentPage />}/>
      <Route path="/adminlogin" element={<AdminLogin />}/>
      <Route path="/orderbooked" element={<Orderbooked />}/>
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
    </Routes>
  </Router>
     


    </div>
  );
}

export default App;
