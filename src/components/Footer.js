import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 50,
    backgroundColor: "#f5f7fb",
  },
  nav: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "#000",
    fontSize: 12,
    fontWeight: "light",
    margin: "0 12px",
    textDecoration: "none",
  },
}));

export default function Login(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <nav className={classes.nav}>
          <Link className={classes.link} to="/product">
            Product
          </Link>
          <Link className={classes.link} to="/pricing">
            Pricing
          </Link>
          <Link className={classes.link} to="/contacts">
            Contacts
          </Link>
          <Link className={classes.link} to="/team">
            Team
          </Link>
        </nav>
      </Container>
    </div>
  );
}
