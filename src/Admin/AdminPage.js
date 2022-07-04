import React from 'react';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
import SideBar from "./Components/SideBar"
import 'C:/Users/DELL/Documents/Events_Portal/src/App.css'
import Home from './pages/Home';
import Events from './pages/Events'
function App() {
  return (
  <>

    <SideBar/>
    <Home/>
    <Events/>
  </>   
  );
}

export default App;