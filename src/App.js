import "./App.css";
import UserPage from "./UserPage/Components/UserPage";
import { useState } from "react";
import Navbar from "./Navbar/Navbar"
import SocietyPage from "./Society/SocietyPage.js";
import AdminPage from "./Admin/AdminPage.js";
import AboutPage from "./About/About";
import FAQs from "./FAQs/FAQs.js";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar"
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
          <div className="mainpage">
          <div className="item"><Navbar  user={user} email={email} showNav={showNav}/></div>

          <div className="container-user">
          
            <div className="item 1"><Sidebar/></div>
            <div className="item 2">
              <Routes>
              <Route  index element={(email==null ||  email!=="admin@cbigdtuw.in") ?<UserPage  setShowNavFunc={setShowNavFunc} />: <Navigate replace to="/Admin" />} />
              <Route  path="Society" element={(email!==null && email.includes("cbigdtuw.in") && email!=="admin@cbigdtuw.in") ? <SocietyPage  setShowNavFunc={setShowNavFunc}/>:<Navigate replace to="/" /> } />
              <Route  path="Admin" element={(email!==null && email=="admin@cbigdtuw.in")? <AdminPage setShowNavFunc={setShowNavFunc}/>:<Navigate replace to="/" /> }/>
              <Route  path="FAQs" element={(email!==null && email=="admin@cbigdtuw.in")? <FAQs setShowNavFunc={setShowNavFunc}/>:<Navigate replace to="/" /> }/>
              <Route  path="About" element={(email==null ||  email!=="admin@cbigdtuw.in")? <AboutPage setShowNavFunc={setShowNavFunc}/>:<Navigate replace to="/" /> }/>
              <Route  path="*" element={<Navigate replace to="/" />}/>
            </Routes>
            </div>
        </div>
          </div>
          
          {/* <Navbar  user={user} email={email} showNav={showNav}/> */}
            
          </div>
        </div>
      </div>

    </Router >
  );

}

export default App;
