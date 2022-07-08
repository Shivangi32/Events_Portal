import "./App.css";
import UserPage from "./UserPage/Components/UserPage";
import { useState } from "react";
import Navbar from "./Navbar/Navbar"
import SocietyPage from "./Society/SocietyPage.js";
import AdminPage from "./Admin/AdminPage.js";

import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";

function App() {

  const user = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const [showNav, setShowNav] = useState(true);
  const setShowNavFunc= (value)=>{
    setShowNav(value);
  }
  return (

    <Router>
      <div className='stars'>
        <div className="twinkling">
          <div className="clouds">

          {showNav && <Navbar user={user} email={email}/>}
            <Routes>
              <Route  index element={<UserPage  setShowNavFunc={setShowNavFunc} />} />
              <Route  path="Society" element={(email!=null && email.includes("cbigdtuw.in"))? <SocietyPage  setShowNavFunc={setShowNavFunc}/>:<Navigate replace to="/" /> } />
              <Route  path="Admin" element={(email!=null && email.includes("cbigdtuw.in"))? <AdminPage setShowNavFunc={setShowNavFunc}/>:<Navigate replace to="/" /> }/>
              <Route  path="*" element={<Navigate replace to="/" />}/>
            </Routes>
          </div>
        </div>
      </div>

    </Router >
  );

}

export default App;
