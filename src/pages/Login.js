import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";

import * as actionTypes from "../store/actions/actionTypes";
import Input from "../components/Input";
import Button from "../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 40,
  },
  form: {
    width: 280,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formItem: {
    width: "100%",
    margin: "10px 0",
  },
  icon: {
    height: 20,
    marginLeft: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  submitButton: {
    width: "100%",
    margin: "30px 0 20px 0",
  },
  forgotText: {
    color: "#7D76BA",
    fontSize: 10,
    margin: "5px 0",
    textDecoration: "none",
  },
  forgotTextWhite: {
    color: "#FFF",
    fontSize: 10,
    margin: "5px 0",
    textDecoration: "none",
  },
  forgotRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default function Login(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
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
        dispatch({ type: actionTypes.LOGIN, user: "user", token: "" });
      }
    } catch (err) {
      console.log("Error Login", err);
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Connexion à Chancee</Typography>
      <div className={classes.form}>
        <div className={classes.formItem}>
          <Input
            type="email"
            name="email"
            color="#4C4686"
            placeholder="E-mail address"
            value={values.email}
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
            <SvgIcon className={classes.icon}>
              <path
                d="M17,17.147a.833.833,0,1,1-1.665,0A6.444,6.444,0,0,0,9,10.617a6.444,6.444,0,0,0-6.341,6.53A.846.846,0,0,1,1.825,18a.845.845,0,0,1-.832-.858A8.222,8.222,0,0,1,6.815,9.221,4.441,4.441,0,0,1,4.7,5.426,4.373,4.373,0,0,1,9,1a4.372,4.372,0,0,1,4.3,4.43,4.443,4.443,0,0,1-2.117,3.795A8.222,8.222,0,0,1,17,17.147ZM9,2.712A2.678,2.678,0,0,0,6.363,5.426a2.637,2.637,0,1,0,5.271,0A2.678,2.678,0,0,0,9,2.712Z"
                fill="currentColor"
              />
            </SvgIcon>
          </Input>
        </div>
        <div className={classes.formItem}>
          <Input
            type="password"
            name="password"
            color="#4C4686"
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
            <SvgIcon className={classes.icon}>
              <path
                d="M16.173,20H1.819a.809.809,0,0,1-.825-.793V8.224a.809.809,0,0,1,.825-.793H4.741V4.1A4.18,4.18,0,0,1,9,.007,4.179,4.179,0,0,1,13.25,4.1V7.431h2.923A.81.81,0,0,1,17,8.224V19.21a.81.81,0,0,1-.825.793ZM11.6,4.1A2.558,2.558,0,0,0,9,1.593,2.558,2.558,0,0,0,6.391,4.1V7.431H11.6V4.1Zm3.748,4.921H2.644v9.4h12.7v-9.4Zm-6.471,2.43a.809.809,0,0,1,.825.793v3.032a.826.826,0,0,1-1.65,0V12.24a.809.809,0,0,1,.825-.793Z"
                fill="currentColor"
              />
            </SvgIcon>
          </Input>
        </div>
        <div className={classes.submitButton}>
          <Button
            type="submit"
            text={loading ? "Loading..." : "Connexion"}
            onClick={onSubmit}
            disabled={loading}
          />
        </div>
      </div>
      <Link to="/password-forgot" className={classes.forgotText}>
        Mot de passe oublié ?
      </Link>
      <div className={classes.forgotRow}>
        <div className={classes.forgotText}>Pas encore de compte ?</div>
        &nbsp;&nbsp;&nbsp;
        <Link to="/register" className={classes.forgotTextWhite}>
          Je m’inscris !
        </Link>
      </div>
      <div className={classes.forgotRow}>
        <Link to="/register-company" className={classes.forgotTextWhite}>
          Register as a company
        </Link>
      </div>
    </div>
  );
}
