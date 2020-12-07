import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { ReactComponent as EmptySVG } from "../assets/images/empty.svg";
import { ReactComponent as EmptySVG2 } from "../assets/images/empty2.svg";

const useStyles = makeStyles((theme) => ({
  empty: {
    height: "100%",
    width: "100%",
    display: "grid",
    placeItems: "center",
  },
  center: {
    display: "grid",
    placeItems: "center",
  },
  p: {
    fontSize: 14,
    fontWeight: 500,
    color: theme.palette.custom.icon,
  },
}));

const Empty = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.empty}>
      <div className={classes.center}>
        <EmptySVG color={props.color || "inherit"} />
        <p
          className={classes.p}
          style={props.light ? { color: theme.palette.common.white } : {}}
        >
          {props.title || "No Data"}
        </p>
      </div>
    </div>
  );
};
const Empty2 = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.empty}>
      <div className={classes.center}>
        <EmptySVG2 color={props.color || "inherit"} />
        <p
          className={classes.p}
          style={props.light ? { color: theme.palette.common.white } : {}}
        >
          {props.title || "No Data"}
        </p>
      </div>
    </div>
  );
};

const obj = {
  Empty,
  Empty2,
};

export default obj;
