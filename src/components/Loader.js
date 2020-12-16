import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  center: {
    height: "100vh",
    width: "100wh",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#fff",
  },
  progress: {
    height: "100%",
    width: "100%",
    display: "grid",
    placeItems: "center",
  },
  absoluteLinear: {
    position: "absolute",
    top: 0,
    width: "100vw",
  },
}));

const Progress = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <CircularProgress
        color={props.color || "inherit"}
        size={props.size || 25}
      />
    </div>
  );
};

const CenterProgress = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <CircularProgress
        color={props.color || "inherit"}
        size={props.size || 40}
      />
    </div>
  );
};

const AbsoluteLinear = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.absoluteLinear}>
      <LinearProgress color={props.color || "secondary"} />
    </div>
  );
};

let obj = {
  Progress,
  CenterProgress,
  AbsoluteLinear,
};

export default obj;
