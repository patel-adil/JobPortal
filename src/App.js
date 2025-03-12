import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Recruiter from './components/Recruiter';
import { Route, Routes } from 'react-router';


function App() {
  return (
    <div>
      <Navbar />
      
  
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;