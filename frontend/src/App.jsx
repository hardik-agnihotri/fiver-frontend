import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import MyGigs from "./pages/myGigs/MyGigs";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders"
import Messages from "./pages/messages/Messages"
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-gigs" element={<MyGigs />} />
        <Route path="/add" element={<Add />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/gig-cat" element={<Gigs />} />
        <Route path="/gig/:id" element={<Gig />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
