import React, { Component } from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import Building from "./Building";


class App extends Component {

  render() {
    return (
      <Router>

        <div className="App">
          <Building />
          {/* <Rooms /> */}

          {/* <Users title="My Users List" />


            <Link to="/login" active strict >Login</Link>
            <Link to="/stopwatch" active strict >stopwatch</Link>
            <Link to="/users" active strict >Users</Link> */}
          {/* </div>
          <Switch>
            <Route exact path="/Messages" component={Messages} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/stopwatch" component={stopwatch} />
            <Route exact path="/users" component={Users} />

          </Switch>
        </div> */}
        </div>
      </Router>
    );
  }
}

export default App;