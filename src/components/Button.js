import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function ButtonComponent(props) {
  const useStyles = makeStyles((theme) => ({
    button: {
      height: 42,
    },
  }));

  const classes = useStyles();

  return (
    <Button
      onClick={props.onClick}
      endIcon={props.endIcon}
      disabled={props.disabled}
      startIcon={props.startIcon}
      size={props.size || "large"}
      type={props.type || "button"}
      color={props.color || "primary"}
      fullWidth={props.fullWidth || true}
      variant={props.variant || "contained"}
      component={props.component || "button"}
      className={classes.button + " " + props.className}
      style={props.style}
    >
      {props.children}
      {props.text}
    </Button>
  );
}
