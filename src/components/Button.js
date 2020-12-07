import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Button(props) {
  const useStyles = makeStyles((theme) => ({
    button: {
      border: 0,
      outline: 0,
      height: 44,
      fontSize: 16,
      width: "100%",
      display: "flex",
      borderRadius: 4,
      cursor: "pointer",
      fontWeight: "bold",
      overflow: "hidden",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.main,
      transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
  }));
  const classes = useStyles();

  return (
    <button
      className={classes.button + " " + props.className}
      type={props.type}
      style={props.style}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
      {props.text}
    </button>
  );
}
