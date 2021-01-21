import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

export default function Profile(props) {
  const classes = useStyles();

  return (
    <Header>
      <div className={classes.root}>
        <Heading primary="Profile" />
        <Footer />
      </div>
    </Header>
  );
}
