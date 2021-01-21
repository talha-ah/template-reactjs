import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import GLOBALS from "../globals";
import Loader from "../components/Loader";

import LandingPage from "../pages/LandingPage";

// Auth
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";

// User
import Profile from "../pages/User/Profile";

export default function Main() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    checkLogin();
    // eslint-disable-next-line
  }, []);

  const checkLogin = async () => {
    try {
      const token = localStorage.getItem("test");
      if (!token) {
        setLoading(false);
        return;
      }

      // const data = await GLOBALS.API({
      //   uri: GLOBALS.Constants.GET_PROFILE,
      //   token: token,
      // });
      dispatch({
        type: GLOBALS.ActionTypes.LOGIN,
        user: "data.user",
        token: "token",
      });
      setLoading(false);
    } catch (err) {
      localStorage.removeItem("token");
      console.log(err);
    }
  };

  return (
    <>
      {store.loading && <Loader.AbsoluteLinear />}
      {loading ? (
        <Loader.CenterProgress />
      ) : (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* Un-Authenticated */}
          {!store.auth && <Route exact path="/login" component={Login} />}
          {!store.auth && <Route exact path="/register" component={Register} />}
          {!store.auth && (
            <Route exact path="/password-forgot" component={ResetPassword} />
          )}
          {/* Authenticated */}
          {/* User */}
          {store.auth && <Route exact path="/profile" component={Profile} />}
          <Redirect from="*" to="/" />
        </Switch>
      )}
    </>
  );
}
