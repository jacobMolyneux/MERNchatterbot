import "./App.css";
import { Homepage } from "./pages/homepage";
import { InfluencerPage } from "./pages/influencerPage";
import { LogInPage } from "./pages/loginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav>
          <Nav.Item className="m-3">
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item className="m-3">
            <Link to="/Influencer">Influencer</Link>
          </Nav.Item>
          <Nav.Item className="m-3">
            <Link to="/LogIn">Users</Link>
          </Nav.Item>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Influencer">
            <InfluencerPage />
          </Route>
          <Route path="/LogIn">
            <LogInPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
