import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: 30,
    textAlign: "center",
  },
  primary: {
    fontSize: 26,
    fontWeight: "bold",
    color: theme.palette.common.black,
  },
  secondary: {
    fontSize: 13,
    fontWeight: "normal",
    color: theme.palette.common.black,
  },
}));

export default function Heading(props) {
  const classes = useStyles();

  return (
    <div className={classes.heading}>
      <Typography className={classes.primary}>{props.primary}</Typography>
      <Typography className={classes.secondary}>{props.secondary}</Typography>
    </div>
  );
}
