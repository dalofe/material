import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import NavigationItems from '../NavigationItems/NavigationItems';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  /*
  root: {
    display: "flex"
  },
   */
  appBar: {
    padding: "0 5rem",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    padding: 0,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    //marginRight: 11,
    color: '#00FFFF'
  },
  menuButtonClosed: {
    marginRight: -4
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    zIndex: 1300,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  colorLight: {
    color: '#FFF'
  },
  drawerBackground: {
    background: "linear-gradient(#6781EA, #7E43AA)"
  }
}));

//export default function MiniDrawer() {
const MiniDrawer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        elevation={3}
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx(classes.drawerBackground, {
             [classes.drawerOpen]: open,
             [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
              className={classes.menuButton}
              onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, classes.menuButtonClosed, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
        </div>

        <NavigationItems class={classes}/>
        {/*<List>*/}

        {/*  {["All mail", "Trash", "Spam"].map((text, index) => (*/}
        {/*    <ListItem button key={text}>*/}
        {/*      <ListItemIcon className={classes.colorLight}>*/}
        {/*        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
        {/*      </ListItemIcon>*/}
        {/*      <ListItemText*/}
        {/*        className={classes.colorLight}*/}
        {/*        primary={text} />*/}
        {/*    </ListItem>*/}
        {/*  ))}*/}

        {/*</List>*/}
        {/*<Divider />*/}
        {/*<List>*/}
        {/*  {["All mail", "Trash", "Spam"].map((text, index) => (*/}
        {/*    <ListItem button key={text}>*/}
        {/*      <ListItemIcon className={classes.colorLight}>*/}
        {/*        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
        {/*      </ListItemIcon>*/}
        {/*      <ListItemText*/}
        {/*        className={classes.colorLight}*/}
        {/*        primary={text} />*/}
        {/*    </ListItem>*/}
        {/*  ))}*/}
        {/*</List>*/}
      </Drawer>

    </>
  );
}

export default MiniDrawer;