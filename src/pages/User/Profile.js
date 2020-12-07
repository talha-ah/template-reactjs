import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.common.white,
  },
  content: {
    display: "flex",
    padding: "20px 10px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "calc(100vh - 64px - 64px)",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Heading text="Main Page" />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
