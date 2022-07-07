import React from 'react';
import SideBar from "./Components/SideBar"
import Name from "./Components/Name/Name"
import StatsCard from "./Components/Stats/StatsCard"

// import 'C:/Users/DELL/Documents/Events_Portal/src/App.css'
import Home from './pages/Home';
import Events from './pages/Events'
const admin='admin';
const App = () => {
  return (
  <>

    <SideBar/>
    <Name admin={admin}/>
    <StatsCard/>
  </>   
  );
}

export default App;