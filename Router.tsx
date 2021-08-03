import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Router>
         <h1>This is header</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/users">
          <ul>
            <li>
              <Link to="/users/edit">Edit</Link>
            </li>
            <li>
              <Link to="/users/view">View</Link>
            </li>
            <li>
              <Link to="/users/delete">Delete</Link>
            </li>
          </ul>
              <Switch>
              <Route exact path="/users">
                <h1>home user</h1>
              </Route>
              <Route exact path="/users/edit">
                <h1>edit user</h1>
              </Route>
              <Route exact path="/users/view">
                <h1>user view</h1>
              </Route>
              <Route exact path="/users/delete">
                <h1>home delete</h1>
              </Route>
            </Switch>
          </Route>
          <Route path="/">
            <h1>home</h1>
          </Route>
        </Switch>
      </div>
      <h1>This is foooter</h1>

    </Router>
    </div>
  );
}

export default App;
