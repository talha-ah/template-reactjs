import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>Forgot Password ?</Typography>
      <Typography className={classes.smallText}>
        Enter your email to reset password
      </Typography>
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
          />
        </div>
        <div className={classes.formItem}>
          <Button
            type="submit"
            onClick={onSubmit}
            disabled={loading}
            text={loading ? "Loading..." : "Submit"}
          />
        </div>
        <div className={classes.formItem}>
          <Link to="/" className={classes.smallText}>
            Or Login
          </Link>
        </div>
      </div>
    </div>
  );
}
