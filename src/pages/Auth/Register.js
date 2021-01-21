import React from "react";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";

import GLOBALS from "../../globals";
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
  firstName: Yup.string().required(GLOBALS.Texts.required),
  lastName: Yup.string().required(GLOBALS.Texts.required),
  email: Yup.string()
    .email(GLOBALS.Texts.emailInvalid)
    .required(GLOBALS.Texts.required),
  password: Yup.string()
    .min(6, GLOBALS.Texts.passwordInvalid)
    .required(GLOBALS.Texts.required),
  date: Yup.date().required(GLOBALS.Texts.required),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    GLOBALS.Texts.passwordNotMatched,
  ),
});

export default function Register(props) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

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
        console.log(values);
        setSubmitting(false);
        enqueueSnackbar(GLOBALS.Texts.registerSuccess, { variant: "success" });
        // props.history.replace("/");
      }, 2000);
    } catch (err) {
      setSubmitting(false);
    }
  };

  return (
    <Header>
      <div className={classes.root}>
        <Heading primary={GLOBALS.Texts.registerHeaderPrimary} />
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
                    value={values.firstName}
                    error={errors.firstName}
                    placeholder={GLOBALS.Texts.firstNamePlaceholder}
                  />
                </Form.RowItem>
                <Form.RowItem>
                  <Input
                    type="text"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    error={errors.lastName}
                    placeholder={GLOBALS.Texts.lastNamePlaceholder}
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
                  placeholder={GLOBALS.Texts.emailPlaceholder}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="text"
                  name="date"
                  value={values.date}
                  error={errors.date}
                  onChange={handleChange}
                  onFocus={(e) => (e.target.type = "date")}
                  placeholder={GLOBALS.Texts.dateOfBirthPlaceholder}
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
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                  placeholder={GLOBALS.Texts.passwordPlaceholder}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="password"
                  onBlur={handleBlur}
                  name="confirmPassword"
                  onChange={handleChange}
                  value={values.confirmPassword}
                  error={errors.confirmPassword}
                  placeholder={GLOBALS.Texts.confirmPasswordPlaceholder}
                />
              </Form.Item>
              <Form.ButtonContainer>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  text={
                    isSubmitting ? <Loader.Progress /> : GLOBALS.Texts.register
                  }
                />
              </Form.ButtonContainer>
              <Form.Row>
                <SmallText primary={GLOBALS.Texts.orLogin} to="/login" />
              </Form.Row>
            </Form.Form>
          )}
        </Formik>
      </div>
    </Header>
  );
}
