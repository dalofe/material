import React from 'react';
import Dashboard from '@material-ui/icons/Dashboard';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Person from '@material-ui/icons/Person';
import NavigationItem from './NavigationItem/NavigationItem';
import List from "@material-ui/core/List";
//import { makeStyles, useTheme } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   colorLight: {
//     color: '#FFF'
//   }
// });

const navigationItems = ( props ) => {
    //const classes = useStyles();
    //const theme = useTheme();

    return (
        <List>
            <NavigationItem link="/" exact text="Dashboard" class={props.class}>
                <Dashboard />
            </NavigationItem>
            <NavigationItem link="/orders" text="Orders">
                <ShoppingBasket />
            </NavigationItem>
            <NavigationItem link="/users" text="Users">
                <Person />
            </NavigationItem>
        </List>
    );
};

export default navigationItems;