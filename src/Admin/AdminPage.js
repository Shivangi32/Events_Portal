import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import './App.css'
import Home from './pages/Home';
import Events from './pages/Events'
function App() {
  return (
  <>

  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' component={Home} />
      <Route path='/events' component={Events} />
    </Routes>
  </Router>
  </>   
  );
}

export default App;