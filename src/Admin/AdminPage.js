import React from "react";
import Name from "./Components/Name/Name";
import ReviewPosts from "./Components/ReviewPosts/Posts";
import StatsCard from "./Components/Stats/StatsCard";

import Statistics from "./Components/StatsCounter/statsCounter";

const admin = "Admin";
const AdminPage = () => {
  return (
    <>
      <Name admin={admin} />
      <Statistics />
      <ReviewPosts />
    </>
  );
};

export default AdminPage;
