import "./App.css";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Consult from "./pages/consult";

import { reducer, initialState } from "./reducers/userReducer";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/js/bootstrap.bundle";
export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      // if(!history.location.pathname.startsWith('/reset'))
      history.push("/SignIn");
    }
  }, []);

  return 0;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/consult" component={Consult} exact />
      </Switch>
    </Router>
  );
}

export default App;
