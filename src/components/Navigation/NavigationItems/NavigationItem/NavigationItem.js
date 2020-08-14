import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
//import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from 'react-router-dom';

const navigationItem = ( props ) => {

    return (
        <ListItem button>
            {/* <ListItemIcon className={props.class}>{props.children}</ListItemIcon> */}
            <ListItemIcon>{props.children}</ListItemIcon>
            <NavLink
                to={props.link}
                exact={props.exact}>{props.text}</NavLink>
        </ListItem>
    );
};

export default navigationItem;