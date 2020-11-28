import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Input(props) {
  const useStyles = makeStyles((theme) => ({
    row: {
      width: "100%",
      maxHeight: 45,
      backgroundColor: props.color ? props.color : "#fff",
      borderRadius: 4,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      color: props.error ? "red" : props.color ? "#fff" : "#6a6b6d",
      transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      // boxShadow:
      //   "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: props.error ? "red" : props.color ? props.color : "#fff",
    },
    input: {
      width: "100%",
      height: "100%",
      padding: "14px 12px",
      color: props.error ? "red" : props.color ? "#fff" : "#6a6b6d",
      backgroundColor: "transparent",
      border: 0,
      outline: 0,
      "&::placeholder": {
        color: props.error ? "red" : props.color ? "#fff" : "#6a6b6d",
      },
    },
    error: {
      color: "red",
      fontSize: 12,
      fontWeight: 400,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        {props.children}
        <input
          className={classes.input}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          disabled={props.disabled}
        />
      </div>
      {/* {props.error !== "" && (
        <span className={classes.error}>{props.error}</span>
      )} */}
    </div>
  );
}
