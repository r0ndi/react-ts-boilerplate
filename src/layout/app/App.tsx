import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React, { useContext } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import RegisterPage from "../../pages/register/RegisterPage";
import LoginPage from "../../pages/login/LoginPage";
import HomePage from "../../pages/home/HomePage";
import Dashboard from "../dashboard/Dashboard";
import UserContext from "../../contexts/user-context/UserContext";
import UserContextType from "../../types/UserContext.type";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import UserPage from "../../pages/user/UserPage";

function App() {
  const userContext: UserContextType = useContext(UserContext);

  if (userContext.user?.id) {
    return (
      <>
        <BrowserRouter>
          <ReactNotification />
          <CssBaseline />
          <Dashboard>

            <Switch>
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/user" component={UserPage} />
              <Route path="*" component={() => <Redirect to="/home" />} />
            </Switch>

          </Dashboard>
        </BrowserRouter>
      </>
    );
  }

  return (
    <>
      <BrowserRouter>
        <ReactNotification />
        <CssBaseline />

        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="*" component={LoginPage} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
