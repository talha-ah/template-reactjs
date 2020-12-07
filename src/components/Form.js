import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: 350,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  formItem: {
    width: "100%",
    margin: "10px 0",
  },
  formRow: {
    width: "100%",
    margin: "6px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  formRowItem: {
    width: "48%",
  },
  formButtonContainer: {
    width: "100%",
    marginTop: "20px",
  },
}));

const Root = (props) => {
  const classes = useStyles();

  return <div className={classes.form}>{props.children}</div>;
};

const Item = (props) => {
  const classes = useStyles();

  return <div className={classes.formItem}>{props.children}</div>;
};
const Row = (props) => {
  const classes = useStyles();

  return <div className={classes.formRow}>{props.children}</div>;
};
const RowItem = (props) => {
  const classes = useStyles();

  return <div className={classes.formRowItem}>{props.children}</div>;
};
const ButtonContainer = (props) => {
  const classes = useStyles();

  return <div className={classes.formButtonContainer}>{props.children}</div>;
};

const items = {
  Root,
  Item,
  Row,
  RowItem,
  ButtonContainer,
};

export default items;
