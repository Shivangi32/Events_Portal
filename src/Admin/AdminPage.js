import React from "react";
import Name from "./Components/Name/Name";
import Title from "./Components/Title/Title";
import ReviewPosts from "./Components/ReviewPosts/Posts";
import StatsCard from "./Components/Stats/StatsCard";
import Searchbar from "./Components/Searchbar/Searchbar";
// import './src/App.css'
// import Home from './pages/Home';
// import Events from './pages/Events'

import Statistics from "./Components/StatsCounter/statsCounter";

const admin = "admin";
const AdminPage = ({ setShowNavFunc }) => {
  setShowNavFunc(true);
  return (
    <>
      <Searchbar />
      <Name admin={admin} />
      <Statistics />
      <Title />
      {/* <StatsCard/> */}
      <ReviewPosts />
    </>
  );
};

export default AdminPage;
