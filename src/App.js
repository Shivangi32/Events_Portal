import "./App.css";
import UserPage from "./UserPage/Components/UserPage";
import Navbar from "./Navbar/Navbar"
import SocietyPage from "./Society/SocietyPage";
import {setUpUI} from "./Navbar/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  const user = localStorage.getItem("name");
  return (

    <Router>
      <div className='stars'>
        <div className="twinkling">
          <div className="clouds">
            <Navbar user={user}/>
            <Switch>
              <Route exact path="/" component={UserPage} />
              <Route exact path="/src/Society/SocietyPage" component={SocietyPage}>
              </Route>
            </Switch>
          </div>
        </div>
      </div>

    </Router >
  );

}

export default App;
