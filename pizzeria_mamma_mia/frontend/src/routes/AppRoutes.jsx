import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes globales
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// Páginas
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Pizza from "../pages/Pizza";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";


const AppRoutes = () => {
  return (
    <Router basename="/">
      <Navbar></Navbar>
    
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />}/>
          <Route path="/404" element={<NotFound />}/>
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
};

export default AppRoutes;