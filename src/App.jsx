import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
const App = () => {
  const[isLoggedin,setLoggedin] = useState(false);
  return(
    <div>
      <div className="bg-slate-900">
        <Navbar isLoggedin={isLoggedin} setLoggedin={setLoggedin}/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path="/category/:category" element={<Category />}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/Login" element={<Login setLoggedin={setLoggedin}/>}/>
        <Route path="/Signup" element={<Signup setLoggedin={setLoggedin}/>}/>
      </Routes>
    </div>
  )
};

export default App;
