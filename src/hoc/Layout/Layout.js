import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import MiniDrawer from '../../components/Navigation/MiniDrawer/MiniDrawer';
import Dashboard from '../../components/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
// import Products from '../../components/Products/Products';
// import Categories from '../../components/Categories/Categories';
import Users from '../../components/Users/Users';
import Orders from '../../components/Orders/Orders';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

const Layout = () => {
    const classes = useStyles();
    return (
        <div style={{display: 'flex'}}>
            <CssBaseline />
            <MiniDrawer />

            <main className={classes.content}>
                <div className={classes.toolbar} />

                <Switch>
                    <Route path="/orders" component={Orders} />
                    <Route path="/users" component={Users} />
                    <Route path="/" exact component={Dashboard} />
                </Switch>
            </main>
        </div>
    );
};

export default Layout;