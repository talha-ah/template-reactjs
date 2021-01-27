import React, { useState } from "react";
import clsx from "clsx";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from "@material-ui/icons/List";
import EditIcon from "@material-ui/icons/Edit";
import HelpIcon from "@material-ui/icons/Help";
import HomeIcon from "@material-ui/icons/Home";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { fade } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import GLOBALS from "../../globals";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height: 64,
    flexGrow: 1,
    maxHeight: 64,
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  profile: {
    display: "flex",
    cursor: "pointer",
    flexDirection: "row",
    alignItems: "center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    width: "100vw",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    width: "100vw",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const userItems = [
  {
    name: "Home",
    path: ["/", "/help"],
    icon: <HomeIcon />,
  },
  {
    name: "Helping Records",
    path: "/records",
    icon: <ListIcon />,
  },
  {
    name: "Edit Subjects",
    path: "/edit-subject",
    icon: <EditIcon />,
  },
  {
    name: "Edit Profile",
    path: "/edit-profile",
    icon: <EditIcon />,
  },
  {
    name: "Google Meet",
    path: "/meet",
    icon: <MeetingRoomIcon />,
  },
  {
    name: "Contact Us",
    path: "/contact",
    icon: <HelpIcon />,
  },
];

export default function Header(props) {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(!props.disableSidebar ? true : false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawer = () => {
    setOpen((st) => !st);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {!props.disableSidebar && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography className={classes.title} variant="h6" noWrap>
            Helpers
          </Typography>
          <div className={classes.grow} />
          <div className={classes.profile}>
            <Typography
              component="span"
              variant="subtitle2"
              noWrap
              onClick={handleClick}
            >
              {store.user.firstName + " " + store.user.lastName}
            </Typography>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={NavLink} to="/edit-profile">
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => dispatch({ type: GLOBALS.ActionTypes.LOGOUT })}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {userItems.map((item) => (
              <ListItem
                button
                key={item.name}
                component={NavLink}
                to={Array.isArray(item.path) ? item.path[0] : item.path}
                selected={
                  Array.isArray(item.path)
                    ? item.path.some((it) => it === location.pathname)
                    : item.path === location.pathname
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Toolbar />
        {props.children}
      </main>
    </div>
  );
}
