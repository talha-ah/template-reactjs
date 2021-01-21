import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export default function SubHeading(props) {
  const useStyles = makeStyles((theme) => ({
    subHeading: {
      marginBottom: 10,
      textAlign: "center",
    },
    primary: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.palette.common.black,
    },
    secondary: {
      fontSize: 13,
      fontWeight: "normal",
      color: theme.palette.common.black,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.subHeading}>
      <Typography className={classes.primary}>{props.primary}</Typography>
      <Typography className={classes.secondary}>{props.secondary}</Typography>
    </div>
  );
}
