import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFF",
  },
  content: {
    minHeight: "80vh",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>Profile</div>
      <Footer />
    </div>
  );
};

export default Profile;
