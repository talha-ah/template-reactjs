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
    width: 350,
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
  formRow: {
    width: "100%",
    margin: "6px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  formRowItem: {
    width: "48%",
  },
}));

export default function Register(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = React.useState({
    firstName: false,
    lastName: false,
    email: false,
    date: false,
    password: false,
    confirmPassword: false,
  });

  const onSubmit = async () => {
    try {
      if (values.firstName === "") {
        setErrors({ ...errors, firstName: true });
      } else if (values.lastName === "") {
        setErrors({ ...errors, lastName: true });
      } else if (values.email === "") {
        setErrors({ ...errors, email: true });
      } else if (values.date === "") {
        setErrors({ ...errors, date: true });
      } else if (values.password === "") {
        setErrors({ ...errors, password: true });
      } else if (values.confirmPassword === "") {
        setErrors({ ...errors, confirmPassword: true });
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
      <Typography className={classes.header}>Register your account</Typography>
      <div className={classes.form}>
        <div className={classes.formRow}>
          <div className={classes.formRowItem}>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={(event) => {
                if (
                  event.target.value.length <= 0 ||
                  event.target.value.length > 30
                ) {
                  setErrors({ ...errors, firstName: true });
                } else {
                  setErrors({ ...errors, firstName: false });
                }
                setValues({ ...values, firstName: event.target.value });
              }}
              error={errors.firstName && "Something"}
            />
          </div>
          <div className={classes.formRowItem}>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={(event) => {
                if (
                  event.target.value.length <= 0 ||
                  event.target.value.length > 30
                ) {
                  setErrors({ ...errors, lastName: true });
                } else {
                  setErrors({ ...errors, lastName: false });
                }
                setValues({ ...values, lastName: event.target.value });
              }}
              error={errors.lastName && "Something"}
            />
          </div>
        </div>
        <div className={classes.formItem}>
          <Input
            type="email"
            name="email"
            placeholder="E-Mail Address"
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
        <div className={classes.formItem}>
          <Input
            type="text"
            name="date"
            placeholder="Data of Birth"
            value={values.date}
            onChange={(event) => {
              setValues({ ...values, date: event.target.value });
            }}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (e.target.value === "") {
                e.target.type = "text";
              }
            }}
          />
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
          />
        </div>
        <div className={classes.formItem}>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={(event) => {
              if (event.target.value !== values.password) {
                setErrors({ ...errors, confirmPassword: true });
              } else {
                setErrors({ ...errors, confirmPassword: false });
              }
              setValues({ ...values, confirmPassword: event.target.value });
            }}
            error={errors.confirmPassword && "Something"}
          />
        </div>
        <div className={classes.formItem}>
          <Button
            type="submit"
            text={loading ? "Loading..." : "REGISTER"}
            disabled={loading}
            onClick={onSubmit}
          />
        </div>
        <div className={classes.formItem}>
          <Link to="/" className={classes.smallText}>
            Already have an account? Login Now
          </Link>
        </div>
      </div>
    </div>
  );
}
