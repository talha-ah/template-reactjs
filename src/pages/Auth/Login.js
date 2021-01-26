import React from "react";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
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
  email: Yup.string()
    .email(GLOBALS.I18n.t("emailInvalid"))
    .required(GLOBALS.I18n.t("required")),
  password: Yup.string()
    .min(6, GLOBALS.I18n.t("passwordInvalid"))
    .required(GLOBALS.I18n.t("required")),
});

export default function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

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
        enqueueSnackbar(GLOBALS.I18n.t("loginSuccess"), { variant: "success" });
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
        <Heading primary={GLOBALS.I18n.t("loginHeaderPrimary")} />
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
                  startAdornment={<PersonIcon />}
                  placeholder={GLOBALS.I18n.t("emailPlaceholder")}
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
                  startAdornment={<LockIcon />}
                  placeholder={GLOBALS.I18n.t("passwordPlaceholder")}
                />
              </Form.Item>
              <Form.ButtonContainer>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  text={
                    isSubmitting ? <Loader.Progress /> : GLOBALS.I18n.t("login")
                  }
                />
              </Form.ButtonContainer>
              <Form.Row>
                <SmallText
                  primary={GLOBALS.I18n.t("forgotPassword")}
                  to="/password-forgot"
                />
                <SmallText
                  primary={GLOBALS.I18n.t("dontHaveAccount")}
                  to="/register"
                />
              </Form.Row>
            </Form.Form>
          )}
        </Formik>
      </div>
    </Header>
  );
}
