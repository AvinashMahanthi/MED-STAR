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
import specialists from "./pages/specialists";
import Consult from "./pages/consult";
import Confirm_Booking from "./pages/Confirm_booking";

// import { reducer, initialState } from "./reducers/userReducer";

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
        <Route path="/specialists" component={specialists} exact />
        <Route path="/consult" component={Consult} exact />
        <Route path="/Confirm_Booking" component={Confirm_Booking} exact />
      </Switch>
    </Router>
  );
}

export default App;
