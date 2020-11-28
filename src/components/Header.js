import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";

import * as actionTypes from "../store/actions/actionTypes";

import Logo from "../assets/images/Logo.svg";
import ProfileImage from "../assets/images/Profile.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  toolBar: {
    minHeight: 64,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    margin: 0,
  },
  logo: {
    height: 35,
  },
  link: {
    color: "#000",
    fontSize: 12,
    fontWeight: "light",
    margin: "0 12px",
    textDecoration: "none",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    color: "#000",
    fontSize: 10,
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
      <Container maxWidth="xl">
        <Toolbar className={classes.toolBar}>
          <Hidden smDown>
            <Link to="/">
              <img src={Logo} className={classes.logo} alt="Logo" />
            </Link>
            <nav>
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
          <div>
            <div className={classes.profile} onClick={handleClick}>
              <img
                src={ProfileImage}
                alt="profileImage"
                className={classes.profileImage}
              />
              <span className={classes.profileName}>Anne-Gabrielle</span>
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
              <MenuItem onClick={() => dispatch({ type: actionTypes.LOGOUT })}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </Container>
    </div>
  );
}
