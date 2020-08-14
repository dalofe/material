import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: purple
  },
  overrides: {
    MuiDrawer: {
      paper: {
        //background: "linear-gradient(#6781EA, #7E43AA)"
      }
    }
  }
});

export default theme;
