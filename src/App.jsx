import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";
import HomePage from "./pages/Home.jsx";
import Notfound from "./Component/Notfound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        {/* Simple routes for preview */}
        <Routes>
          <Route path="/" element={<div className=""><HomePage/></div>} />
          <Route path="/who" element={<div className="p-10 text-3xl">Who We Are</div>} />
          <Route path="/services/web" element={<div className="p-10 text-3xl">Web Development</div>} />
          <Route path="/services/app" element={<div className="p-10 text-3xl">App Development</div>} />
          <Route path="/services/dm" element={<div className="p-10 text-3xl">Digital Marketing</div>} />
          <Route path="/contact" element={<div className="p-10 text-3xl">Contact Us</div>} />
            {/* 404 Page Route */}
           <Route path="*" element={<Notfound/>}/>
       / </Routes>
      </div>
    </BrowserRouter>
  );
}
