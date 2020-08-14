import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  colorLight: {
    color: "red"
  }
});

//export default function Hook() {
const Hook = () => {
  const classes = useStyles();

  return (
    <Button className={classes.colorLight}>Hook</Button>
  );
};

export default Hook;
