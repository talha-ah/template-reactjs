import React from "react";
import { Formik } from "formik";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
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

const forgotYup = Yup.object().shape({
  email: Yup.string().email("Email is invalid!").required("Required"),
});

export default function ResetPassword(props) {
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
        props.history.replace("/login");
      }, 2000);
    } catch (err) {
      setSubmitting(false);
    }
  };

  return (
    <Header>
      <div className={classes.root}>
        <Heading
          primary="Forgot Password?"
          secondary="Enter your email to reset password"
        />
        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgotYup}
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
              <Form.ButtonContainer>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  text={isSubmitting ? <Loader.Progress /> : "SUBMIT"}
                />
              </Form.ButtonContainer>
              <Form.Row>
                <SmallText primary="Or Login Now" to="/login" />
              </Form.Row>
            </Form.Form>
          )}
        </Formik>
      </div>
    </Header>
  );
}
