import "./App.css";
import UserPage from "./UserPage/Components/UserPage";
import Navbar from "./Navbar/Navbar"
import SocietyPage from "./Society/SocietyPage.js";
import AdminPage from "./Admin/AdminPage.js";

import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";

function App() {

  const user = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (

    <Router>
      <div className='stars'>
        <div className="twinkling">
          <div className="clouds">
          <Navbar user={user} email={email}/>
            <Routes>
              <Route  index element={<UserPage />} />
              <Route  path="Society" element={(email!=null && email.includes("cbigdtuw.in"))? <SocietyPage/>:<Navigate replace to="/" /> } />
              <Route  path="Admin" element={(email!=null && email.includes("cbigdtuw.in"))? <AdminPage/>:<Navigate replace to="/" /> }/>
              <Route  path="*" element={<Navigate replace to="/" />}/>
            </Routes>
          </div>
        </div>
      </div>

    </Router >
  );

}

export default App;
