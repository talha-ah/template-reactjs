import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";

import GLOBALS from "../../globals";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import Heading from "../../components/Heading";
import SmallText from "../../components/SmallText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const loginYup = Yup.object().shape({
  email: Yup.string().email("Email is invalid!").required("Required"),
  password: Yup.string().min(6, "Password is invalid!").required("Required"),
});

export default function Login(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onSubmit = (values, { setSubmitting }) => {
    try {
      // const data = await GLOBALS.API({
      //   method: "POST",
      //   uri: GLOBALS.Constants.LOGIN,
      //   body: JSON.stringify({
      //     email: values.email,
      //     password: values.password,
      //   }),
      // });

      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
        dispatch({
          type: GLOBALS.ActionTypes.LOGIN,
          user: "data.user",
          token: "data.token",
        });
      }, 2000);
    } catch (err) {
      setSubmitting(false);
    }
  };

  return (
    <Header>
      <div className={classes.root}>
        <Heading primary="Login to your account" />
        <Formik
          initialValues={{ email: "test@user.com", password: "password12" }}
          validationSchema={loginYup}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form.Form onSubmit={handleSubmit}>
              <Form.Item>
                <Input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  onChange={handleChange}
                  placeholder="E-mail address"
                  startAdornment={<PersonIcon />}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                  startAdornment={<LockIcon />}
                />
              </Form.Item>
              <Form.ButtonContainer>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  text={isSubmitting ? <Loader.Progress /> : "LOGIN"}
                />
              </Form.ButtonContainer>
              <Form.Row>
                <SmallText primary="Forgot Password ?" to="/password-forgot" />
                <SmallText primary="Don't have an account?" to="/register" />
              </Form.Row>
            </Form.Form>
          )}
        </Formik>
      </div>
    </Header>
  );
}
