import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import NavMenu from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import Home from './pages/Home';
import Kart from './pages/Kart';
import Login from './pages/login'
import Register from './pages/Register'
import Order from './pages/Orders';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router> {/* Wrap your routes with the Router component */}
      <div className="App">
        <NavMenu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kart" element={<Kart />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
