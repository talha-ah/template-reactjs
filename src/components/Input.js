import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

export default function Input(props) {
  const theme = useTheme();

  const primary = theme.palette.primary.main;
  const primaryText = theme.palette.primary.contrastText;
  const error = theme.palette.error.main;

  const backgroundColor = props.color || primary;
  const color = props.error ? error : primaryText;
  const borderColor = props.error ? error : primary;

  const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
    },
    container: {
      height: 45,
      color: color,
      width: "100%",
      borderWidth: 1,
      borderRadius: 4,
      display: "flex",
      overflow: "hidden",
      borderStyle: "solid",
      flexDirection: "row",
      alignItems: "center",
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
    startAdornment: {
      width: "12%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    endAdornment: {
      width: "12%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      border: 0,
      outline: 0,
      width: "100%",
      height: "100%",
      padding: "14px 12px",
      backgroundColor: "transparent",
      color: color,
      "&::placeholder": {
        color: color,
      },
    },
    error: {
      fontSize: 12,
      fontWeight: 400,
      position: "absolute",
      color: error,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {props.startAdornment && (
          <div className={classes.startAdornment}>{props.startAdornment}</div>
        )}
        <input
          name={props.name}
          type={props.type}
          value={props.value}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          className={classes.input}
          onChange={props.onChange}
          disabled={props.disabled}
          placeholder={props.placeholder}
        />
        {props.endAdornment && (
          <div className={classes.endAdornment}>{props.endAdornment}</div>
        )}
      </div>
      {props.error !== "" && (
        <span className={classes.error}>{props.error}</span>
      )}
    </div>
  );
}
