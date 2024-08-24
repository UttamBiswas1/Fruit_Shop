import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Menus from "./components/Menus/Menus.jsx";
import Footer from "./components/Footer/Footer";
import Cart from "./Pages/Cart.jsx";
import Home from "./Pages/Home.jsx";
import Banner from "./components/Banners/Banner.jsx";
import LoginPopup from "./components/Login/LoginPopup.jsx";
import PlaceOrder from "./Pages/placeOrder.jsx";
import Verify from "./Pages/Verify.jsx";
import MyOrders from "./Pages/MyOrder.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    

    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} />:<></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/brand-info" element={<Banner />} />
        <Route path="/myorders" element={<MyOrders/>}/>

      </Routes>
      <Footer />
    </>
  );
};

export default App;
