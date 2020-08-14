import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Layout from "./hoc/Layout/Layout";
// import { Route, Switch } from 'react-router-dom';
import theme from "./theme";
//import Dashboard from './components/Dashboard';

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <Layout>
            {/*<Dashboard />*/}
        </Layout>
      </ThemeProvider>
  );
}
