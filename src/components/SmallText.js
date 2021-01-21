import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export default function Login(props) {
  const useStyles = makeStyles((theme) => ({
    text: {
      fontSize: 13,
      margin: "5px 0",
      textDecoration: "none",
      color: theme.palette.common.black,
      fontWeight: props.bold ? "bold" : "normal",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      {props.to ? (
        <Link
          to={props.to}
          className={classes.text + " " + props.className}
          style={props.style}
        >
          {props.primary}
        </Link>
      ) : (
        <Typography
          className={classes.text + " " + props.className}
          style={props.style}
        >
          {props.primary}
        </Typography>
      )}
    </div>
  );
}
