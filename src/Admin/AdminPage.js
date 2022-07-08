import React from 'react';
import SideBar from "./Components/SideBar"
import Name from "./Components/Name/Name"
import StatsCard from "./Components/Stats/StatsCard"
import Searchbar from './Components/Searchbar/Searchbar';
// import 'C:/Users/DELL/Documents/Events_Portal/src/App.css'
// import Home from './pages/Home';
// import Events from './pages/Events'

import Statistics from './Components/StatsCounter/statsCounter';

const admin='admin';
const App = ({setShowNavFunc}) => {
  setShowNavFunc(false);
  return (
  <>

    <SideBar/>
    <Searchbar />
    <Name admin={admin}/>
    <Statistics />
    <StatsCard/>
  </>   
  );
}

export default App;