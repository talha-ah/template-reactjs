import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Header>
      <div className={classes.root}></div>
    </Header>
  );
}
