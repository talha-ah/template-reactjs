import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Input(props) {
  const useStyles = makeStyles((theme) => ({
    row: {
      height: 45,
      width: "100%",
      borderWidth: 1,
      borderRadius: 4,
      display: "flex",
      overflow: "hidden",
      borderStyle: "solid",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      color: props.error
        ? theme.palette.error.main
        : theme.palette.primary.contrastText,
      borderColor: props.error
        ? theme.palette.error.main
        : theme.palette.primary.main,
      backgroundColor: props.color ? props.color : theme.palette.primary.main,
      transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
    children: {
      width: "15%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    input: {
      border: 0,
      outline: 0,
      width: "100%",
      height: "100%",
      padding: "14px 12px",
      backgroundColor: "transparent",
      color: props.error
        ? theme.palette.error.main
        : theme.palette.primary.contrastText,
      "&::placeholder": {
        color: props.error
          ? theme.palette.error.main
          : theme.palette.primary.contrastText,
      },
    },
    error: {
      color: theme.palette.error.main,
      fontSize: 12,
      fontWeight: 400,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        {props.children && (
          <div className={classes.children}>{props.children}</div>
        )}
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
