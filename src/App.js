import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import WebCourse from "./pages/WebCourse";
import WebDesiging from "./pages/WebDesiging";
import Dashboard from "./components/Dashboard";
import MyProfile from "./components/MyProfile";
import EditProfile from "./components/EditProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/webdev" element={<WebCourse />} />
        <Route path="/webdesign" element={<WebDesiging />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
