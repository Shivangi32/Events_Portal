import "./App.css";
import UserPage from "./UserPage/Components/UserPage";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import SocietyPage from "./Society/SocietyPage.js";
import AdminPage from "./Admin/AdminPage.js";
import AboutPage from "./About/About";
import FAQs from "./FAQs/FAQs.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

function App() {

  if(localStorage.getItem("SocLogin")===null)
    localStorage.setItem("SocLogin","false")
  if(localStorage.getItem("AdminLogin")===null)
    localStorage.setItem("AdminLogin","false")
  if(localStorage.getItem("email")===null)
    localStorage.setItem("email","null")


  const user = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const SocLogin=localStorage.getItem("SocLogin");
  const AdminLogin=localStorage.getItem("AdminLogin");
  return (
    <Router>
      <div className="mainpage">
        <div className="item">
          <Navbar user={user} email={email}/>
        </div>
        <div className="container-user">
          <div className="item1">
            <Sidebar />
          </div>

          <div className="item2">
            <Routes>
              <Route
                index
                element={ AdminLogin==="false" ? ( <UserPage/> ) : (<Navigate replace to="/Admin" />)}
              />
              <Route
                path="Society"
                element={(SocLogin==="true" && AdminLogin==="false") ? (
                    <SocietyPage  />
                  ) : (
                    <Navigate replace to="/" />
                  )
                }
              />
              <Route
                path="Admin"
                element={
                  AdminLogin ==="true" ? (
                    <AdminPage />
                  ) : (
                    <Navigate replace to="/" />
                  )
                }
              />
              {/* <Route  path="FAQs" element={(email!==null && email=="admin@cbigdtuw.in")? <FAQs setShowNavFunc={setShowNavFunc}/>:<Navigate replace to="/" /> }/> */}
              <Route
                path="About"
                element={
                  email == null || AdminLogin==="false" ? (
                    <AboutPage/>
                  ) : (
                    <Navigate replace to="/" />
                  )
                }
              />
              <Route
                path="FAQs"
                element={
                  email == null || AdminLogin=="false" ? (
                    <FAQs />
                  ) : (
                    <Navigate replace to="/" />
                  )
                }
              />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
        </div>
      </div>

      {/* <Navbar  user={user} email={email} showNav={showNav}/> */}
    </Router>
  );
}

export default App;
