import "./App.css";
import UserPage from "./UserPage/Components/UserPage";
import Navbar from "./Navbar/Navbar"
import SocietyPage from "./Society/SocietyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='stars'>
        <div className="twinkling">
          <div className="clouds">
            <Navbar />
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
