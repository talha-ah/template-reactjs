import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
  },
  subHeading: {
    color: "#fff",
    fontSize: 16,
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
    color: "#fff",
    height: 20,
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
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
  });
  const [errors, setErrors] = React.useState({
    email: false,
  });

  const onSubmit = async () => {
    try {
      if (values.email === "") {
        setErrors({ ...errors, email: true });
      } else {
        setLoading(true);
        setLoading(false);
      }
    } catch (err) {
      console.log("Error Login", err);
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Forgot Password</Typography>
      <Typography className={classes.subHeading}>
        Enter your email to reset password
      </Typography>
      <div className={classes.form}>
        <div className={classes.formItem}>
          <Input
            type="email"
            name="email"
            placeholder="Nom d’utilisateur"
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
          />
        </div>
        <div className={classes.submitButton}>
          <Button
            type="submit"
            text={loading ? "Loading..." : "Submit"}
            onClick={onSubmit}
            disabled={loading}
          />
        </div>
      </div>
      <div className={classes.forgotRow}>
        <div className={classes.forgotText}>Vous ave d j un compte ?</div>
        &nbsp;&nbsp;&nbsp;
        <Link to="/" className={classes.forgotTextWhite}>
          Conne ion
        </Link>
      </div>
    </div>
  );
}
