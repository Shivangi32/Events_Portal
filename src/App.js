import "./App.css";
import Header from "./UserPage/Components/Header/Header";
import SocietyPage from "./Society/SocietyPage";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header}/>
        <Route exact path="/src/Society/SocietyPage">
          <div className="societyPage-background">
            <SocietyPage />
          </div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
