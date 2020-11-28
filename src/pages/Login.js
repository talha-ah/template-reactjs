import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";

import * as actionTypes from "../store/actions/actionTypes";
import Input from "../components/Input";
import Button from "../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: "100vw",
    minHeight: "100vh",
    alignItems: "center",
    flexDirection: "column",
    backgroundSize: "cover",
    justifyContent: "center",
    backgroundColor: "#f5f7fb",
    backgroundPosition: "center",
  },
  header: {
    fontSize: 26,
    marginBottom: 40,
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  form: {
    width: 280,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  formItem: {
    width: "100%",
    margin: "10px 0",
  },
  smallText: {
    fontSize: 10,
    margin: "5px 0",
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

export default function Login(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "test@user.com",
    password: "password12",
  });
  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
  });

  const onSubmit = async () => {
    try {
      if (values.email === "") {
        setErrors({ ...errors, email: true });
      } else if (values.password === "") {
        setErrors({ ...errors, password: true });
      } else {
        setLoading(true);
        setLoading(false);
        dispatch({
          type: actionTypes.LOGIN,
          user: "user",
          token: "token",
        });
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Login to your account</Typography>
      <div className={classes.form}>
        <div className={classes.formItem}>
          <Input
            type="email"
            name="email"
            value={values.email}
            placeholder="E-mail address"
            onChange={(event) => {
              const re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
              if (!re.test(String(event.target.value).toLowerCase())) {
                setErrors({ ...errors, email: true });
              } else {
                setErrors({ ...errors, email: false });
              }
              setValues({ ...values, email: event.target.value });
            }}
            error={errors.email && "Something"}
          >
            <PersonIcon />
          </Input>
        </div>
        <div className={classes.formItem}>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={(event) => {
              if (event.target.value.length < 8) {
                setErrors({ ...errors, password: true });
              } else {
                setErrors({ ...errors, password: false });
              }
              setValues({ ...values, password: event.target.value });
            }}
            error={errors.password && "Something"}
          >
            <LockIcon />
          </Input>
        </div>
        <div className={classes.formItem}>
          <Button
            type="submit"
            onClick={onSubmit}
            disabled={loading}
            text={loading ? "Loading..." : "Login"}
          />
        </div>
        <div className={classes.formItem}>
          <Link to="/register" className={classes.smallText}>
            Don't have an account ? Register !
          </Link>
          <br />
          <Link to="/password-forgot" className={classes.smallText}>
            Forgot Password ?
          </Link>
        </div>
      </div>
    </div>
  );
}
