import { Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import history from "../utils/history";
import Signup from "../pages/signup";
import Login from "../pages/login";
import AddBusiness from "../pages/addBusiness"
import Home from "../pages/Home/index.js";

const AppRouter = () => {
  
  const WrappedHome = () => (
    <Home>
      <Switch>

      </Switch>
    </Home>
  );
  return (
    <>
    <Router history={history}>
      <Switch>
        {/* <PublicRoute exact path={`${process.env.REACT_APP_DIRECTORY}/login`} component={Auth} /> */}
        
        <PublicRoute exact path={`${process.env.REACT_APP_DIRECTORY}login`} component={Login} />
        <PublicRoute exact path={`${process.env.REACT_APP_DIRECTORY}signup`} component={Signup} />
        <PublicRoute exact path={`${process.env.REACT_APP_DIRECTORY}addbusiness`} component={AddBusiness} />
        <PrivateRoute redirect={`${process.env.REACT_APP_DIRECTORY}login`}>
          <WrappedHome />
        </PrivateRoute>
      </Switch>
    </Router>
    </>
  );
};

export default AppRouter;
