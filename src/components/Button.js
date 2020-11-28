import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Button(props) {
  const useStyles = makeStyles((theme) => ({
    button: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "#4DA1FF",
      borderRadius: 4,
      transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      padding: 14,
      color: "#fff",
      fontSize: 10,
      fontWeight: "bold",
      border: 0,
      outline: 0,
      cursor: "pointer",
      // boxShadow:
      //   "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
      "&:hover": {
        opacity: 0.8,
      },
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
