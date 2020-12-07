import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";

import API from "../globals/API";
import Constants from "../globals/Constants";
import * as actionTypes from "../store/actions/actionTypes";

import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Heading from "../components/Heading";
import SmallText from "../components/SmallText";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
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
  };
});

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
        const data = await API({
          method: "POST",
          uri: Constants.LOGIN,
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });
        dispatch({
          type: actionTypes.LOGIN,
          user: data.user,
          token: data.token,
        });
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <Heading text="Login to your account" />
      <Form.Root>
        <Form.Item>
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
        </Form.Item>
        <Form.Item>
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
        </Form.Item>
        <Form.ButtonContainer>
          <Button
            type="submit"
            onClick={onSubmit}
            disabled={loading}
            text={loading ? <Loader.Progress /> : "LOGIN"}
          />
        </Form.ButtonContainer>
        <Form.Item>
          <SmallText to="/register" text="Don't have an account ? Register !" />
          <SmallText to="/password-forgot" text="Forgot Password ?" />
        </Form.Item>
      </Form.Root>
    </div>
  );
}
