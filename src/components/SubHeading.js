import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.palette.primary.contrastText,
  },
}));

export default function Login(props) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography className={classes.text}>{props.text}</Typography>
    </div>
  );
}
