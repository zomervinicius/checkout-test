import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e53935',
    },
    secondary: {
      main: '#212121',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
