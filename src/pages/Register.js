import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";

import Input from "../components/Input";
import Button from "../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#634294",
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
    width: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
  formItem: {
    width: "100%",
    margin: "6px 0",
  },
  icon: {
    color: "#ffd012",
    height: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  submitButton: {
    width: "100%",
    marginTop: 10,
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
      console.log("Error Login", err);
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>
        Créer un compte Chancee
      </Typography>
      <div className={classes.form}>
        <div className={classes.formRow}>
          <div className={classes.formRowItem}>
            <Input
              type="text"
              name="firstName"
              placeholder="Prénom"
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
              placeholder="Nom"
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
            placeholder="Email"
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
            placeholder="Date de naissance"
            value={values.date}
            onChange={(event) => {
              console.log("value", event.target.value);
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
            placeholder="Mot de passe"
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
            placeholder="Confirmation du mot de pass"
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
        <div className={classes.submitButton}>
          <Button
            type="submit"
            text={loading ? "Loading..." : "ENREGISTREMENT"}
            disabled={loading}
            onClick={onSubmit}
            style={{ width: "70%" }}
          >
            <SvgIcon className={classes.icon}>
              <path
                id="Path_750"
                data-name="Path 750"
                d="M76.072,294.676a.615.615,0,0,0,.114.71l.15.15c.434-.514.939-1.072,1.552-1.685.043-.043.088-.064.131-.1l-.966-.966C76.493,293.8,76.165,294.49,76.072,294.676Zm0,0"
                transform="translate(-73.013 -281.248)"
                fill="currentColor"
              />
              <path
                id="Path_751"
                data-name="Path 751"
                d="M170.936,404.912c-.615.615-1.171,1.121-1.682,1.555l.2.2a.614.614,0,0,0,.715.112c.318-.164.818-.4,1.88-.99l-1.011-1.011C171,404.824,170.979,404.868,170.936,404.912Zm0,0"
                transform="translate(-162.587 -388.836)"
                fill="currentColor"
              />
              <path
                id="Path_752"
                data-name="Path 752"
                d="M67.5,323.652c-.444-.444-1.691-.046-2.277.54a16.327,16.327,0,0,0-3.244,4.172.614.614,0,0,0,.821.82,16.447,16.447,0,0,0,4.16-3.255c.644-.645.962-1.855.541-2.276Zm0,0"
                transform="translate(-59.477 -310.721)"
                fill="currentColor"
              />
              <path
                id="Path_753"
                data-name="Path 753"
                d="M1.917,171.652.181,173.388a.614.614,0,0,0,.593,1.027,5.045,5.045,0,0,1,2.32-.215,32.944,32.944,0,0,1,2.541-3.877C5.115,169.989,3.394,170.175,1.917,171.652Zm0,0"
                transform="translate(-0.001 -163.478)"
                fill="currentColor"
              />
              <path
                id="Path_754"
                data-name="Path 754"
                d="M255.573,396.68a.613.613,0,0,0,.71-.114l1.737-1.736c1.344-1.345,1.581-3.08,1.276-3.63a35.037,35.037,0,0,1-3.88,2.522,7.523,7.523,0,0,1-.174,2.32A.613.613,0,0,0,255.573,396.68Zm0,0"
                transform="translate(-245.182 -375.79)"
                fill="currentColor"
              />
              <path
                id="Path_755"
                data-name="Path 755"
                d="M296.3,143.211a1.842,1.842,0,1,0,2.6,0A1.844,1.844,0,0,0,296.3,143.211Zm0,0"
                transform="translate(-284.113 -137.053)"
                fill="currentColor"
              />
              <path
                id="Path_756"
                data-name="Path 756"
                d="M407.97.6A.613.613,0,0,0,407.4.034a12.137,12.137,0,0,0-4.482.522,5.154,5.154,0,0,0,1.527,3,5.138,5.138,0,0,0,3.057,1.524A12.7,12.7,0,0,0,407.97.6Zm0,0"
                transform="translate(-387.05 -0.001)"
                fill="currentColor"
              />
              <path
                id="Path_757"
                data-name="Path 757"
                d="M130.656,28.373a6.45,6.45,0,0,1-1.846-3.44c-3.687,1.512-7.216,4.814-10,9.452l1.385,1.385a2.585,2.585,0,0,1,2.825.243,2.583,2.583,0,0,1,.242,2.824l1.431,1.431c3.569-2.151,7.724-5.539,9.49-10.048A6.419,6.419,0,0,1,130.656,28.373Zm-.868,5.209a3.07,3.07,0,1,1,0-4.341A3.073,3.073,0,0,1,129.788,33.583Zm0,0"
                transform="translate(-114.127 -23.951)"
                fill="currentColor"
              />
            </SvgIcon>
          </Button>
        </div>
      </div>
      <div className={classes.forgotRow}>
        <div className={classes.forgotText}>Vous avez déjà un compte ?</div>
        &nbsp;&nbsp;&nbsp;
        <Link to="/" className={classes.forgotTextWhite}>
          Connexion
        </Link>
      </div>
    </div>
  );
}
