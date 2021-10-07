import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ProtectedRoutes from "./helpers/ProtectedRoutes/ProtectedRoutes";

import { AuthProvdider } from "./contexts/AuthContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvdider>
        <Switch>
          <ProtectedRoutes exact path="/" component={Dashboard} />
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword></ForgotPassword>
          </Route>
        </Switch>
      </AuthProvdider>
    </Router>
  );
}

export default App;
