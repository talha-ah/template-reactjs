import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import List from "@material-ui/core/List";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";

import Logo from "../assets/images/Logo.svg";
import SmallText from "../components/SmallText";
import ProfileImage from "../assets/images/Profile.jpg";
import * as actionTypes from "../store/actions/actionTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 64,
    backgroundColor: "#fff",
  },
  toolBar: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.common.white,
  },
  nav: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: "0 15px",
    },
  },
  logo: {
    height: 35,
  },
  profile: {
    display: "flex",
    cursor: "pointer",
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 10,
    color: "#000",
    fontWeight: "bold",
    textDecoration: "none",
  },
  drawer: {
    width: 250,
  },
  logoDrawerContainer: {
    height: 70,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Login(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const store = useSelector((state) => state);

  const [anchorEl, setAnchorEl] = useState(null);
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setDrawer((dr) => !dr);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolBar}>
          <Hidden smDown>
            <SmallText
              to="/"
              primary={<img src={Logo} className={classes.logo} alt="Logo" />}
            />
            <nav className={classes.nav}>
              <SmallText to="/product" primary="Product" />
              <SmallText to="/pricing" primary="Pricing" />
              <SmallText to="/contacts" primary="Contacts" />
              <SmallText to="/team" primary=" Team" />
            </nav>
          </Hidden>
          <Hidden mdUp>
            <MenuIcon onClick={toggleDrawer} style={{ cursor: "pointer" }} />
            <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer}>
              <div
                className={classes.drawer}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
              >
                <div className={classes.logoDrawerContainer}>
                  <Link to="/">
                    <img src={Logo} className={classes.logo} alt="Logo" />
                  </Link>
                </div>
                <List>
                  {["Product", "Pricing", "Contacts", "Team"].map((text) => (
                    <ListItem key={text}>
                      <Link
                        className={classes.link}
                        to={`/${text.toLowerCase()}`}
                      >
                        {text}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </Hidden>
          {store.auth ? (
            <div>
              <div className={classes.profile} onClick={handleClick}>
                <img
                  src={ProfileImage}
                  alt="profileImage"
                  className={classes.profileImage}
                />
                <SmallText
                  bold
                  primary={store.user.firstName + " " + store.user.lastName}
                />
              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/account">
                  My account
                </MenuItem>
                <MenuItem
                  onClick={() => dispatch({ type: actionTypes.LOGOUT })}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Button component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </Container>
    </div>
  );
}
