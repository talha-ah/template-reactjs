import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Heading from "../components/Heading";
import SmallText from "../components/SmallText";

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
}));

export default function PasswordForgot(props) {
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
      <Heading text="Forgot Password ?" />
      <SmallText text="Enter your email to reset password" />
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
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="submit"
            onClick={onSubmit}
            disabled={loading}
            text={loading ? <Loader.Progress /> : "SUBMIT"}
          />
        </Form.Item>
        <Form.Item>
          <SmallText text="Or Login Now" to="/" />
        </Form.Item>
      </Form.Root>
    </div>
  );
}
