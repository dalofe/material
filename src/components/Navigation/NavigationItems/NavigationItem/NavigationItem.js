import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
//import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    colorLight: {
      color: '#FFF'
    }
  });

const NavigationItem = ( props ) => {
    const classes = useStyles();

    return (
        <ListItem button>
            <ListItemIcon className={classes.colorLight}>{props.children}</ListItemIcon>
            <NavLink
                to={props.link}
                exact={props.exact}>{props.text}</NavLink>
        </ListItem>
    );
};

export default NavigationItem;