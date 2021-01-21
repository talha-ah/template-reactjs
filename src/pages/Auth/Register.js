import React from "react";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";

// import GLOBALS from "../../globals";
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

const registerYup = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Email is invalid!").required("Required"),
  password: Yup.string().min(6, "Password is invalid!").required("Required"),
  date: Yup.date().required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match",
  ),
});

export default function Register(props) {
  const classes = useStyles();

  const onSubmit = (values, { setSubmitting }) => {
    try {
      // await GLOBALS.API({
      //   method: "POST",
      //   uri: GLOBALS.Constants.REGISTER,
      //   body: JSON.stringify({
      //     firstName: values.firstName,
      //     lastName: values.lastName,
      //     email: values.email,
      //     dob: values.date,
      //     password: values.password,
      //   }),
      // });
      setTimeout(() => {
        setSubmitting(false);
        alert("Registration was successful!");
        // props.history.replace("/");
      }, 2000);
    } catch (err) {
      setSubmitting(false);
    }
  };

  return (
    <Header>
      <div className={classes.root}>
        <Heading primary="Register your account" />
        <Formik
          initialValues={{
            firstName: "Talha",
            lastName: "Ahmed",
            email: "test@user.com",
            date: "1998-08-28",
            password: "password12",
            confirmPassword: "password12",
          }}
          validationSchema={registerYup}
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
              <Form.Row>
                <Form.RowItem>
                  <Input
                    type="text"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="First Name"
                    value={values.firstName}
                    error={errors.firstName}
                  />
                </Form.RowItem>
                <Form.RowItem>
                  <Input
                    type="text"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Last Name"
                    value={values.lastName}
                    error={errors.lastName}
                  />
                </Form.RowItem>
              </Form.Row>
              <Form.Item>
                <Input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  onChange={handleChange}
                  placeholder="E-Mail Address"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="text"
                  name="date"
                  value={values.date}
                  error={errors.date}
                  onChange={handleChange}
                  placeholder="Data of Birth"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (e.target.value === "") {
                      e.target.type = "text";
                    }
                  }}
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
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="password"
                  onBlur={handleBlur}
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  error={errors.confirmPassword}
                />
              </Form.Item>
              <Form.ButtonContainer>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  text={isSubmitting ? <Loader.Progress /> : "REGISTER"}
                />
              </Form.ButtonContainer>
              <Form.Row>
                <SmallText
                  primary="Already have an account? Login Now"
                  to="/login"
                />
              </Form.Row>
            </Form.Form>
          )}
        </Formik>
      </div>
    </Header>
  );
}
