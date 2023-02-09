import React from "react";
import Name from "./Components/Name/Name";
import Title from "./Components/Title/Title";
import ReviewPosts from "./Components/ReviewPosts/Posts";
import StatsCard from "./Components/Stats/StatsCard";
import SearchBar from "./Components/Searchbar/Searchbar";

import Statistics from "./Components/StatsCounter/statsCounter";

const admin = "Admin";
const AdminPage = () => {
  return (
    <>
      {/* <SearchBar /> */}
      <Name admin={admin} />
      <Statistics />
      <Title />
      {/* <StatsCard/> */}
      <ReviewPosts />
    </>
  );
};

export default AdminPage;
