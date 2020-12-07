import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SmallText from "../components/SmallText";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 64,
    backgroundColor: "#f5f7fb",
  },
  nav: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: "0 15px",
    },
  },
}));

export default function Login(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <SmallText to="/product" text="Product" />
        <SmallText to="/pricing" text="Pricing" />
        <SmallText to="/contacts" text="Contacts" />
        <SmallText to="/team" text=" Team" />
      </nav>
    </div>
  );
}
