import "./App.css";
import { Homepage } from "./pages/homepage";
import { LogInPage } from "./pages/logIn";
import { UserPage } from "./pages/user.js";
import { SignUpPage } from "./pages/signUp";
import Nav from "react-bootstrap/Nav";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <div className="d-flex">
          <h1 className="ml-3">Influence</h1>
          <Nav className="d-flex justify-content-center">
            <Nav.Item className="m-3">
              <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item className="m-3">
              <Link to="/about">About</Link>
            </Nav.Item>
            <Nav.Item className="m-3">
              <Link to="/SignUp">Sign up</Link>
            </Nav.Item>
            <Nav.Item className="m-3">
              <Link to="/LogIn">Log In</Link>
            </Nav.Item>
            <Nav.Item className="m-3">
              <Link to="/users">User</Link>
            </Nav.Item>
          </Nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/SignUp">
            <SignUpPage />
          </Route>
          <Route path="/users">
            <UserPage />
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
