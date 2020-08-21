import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    subtitle1: {
      lineHeight: 12,
      fontSize: 12,
      fontWeight: 400,
    },
    subtitle2: {
      lineHeight: 12,
      fontSize: 14,
      fontWeight: 400,
    },
    body1: {
      lineHeight: 20,
      fontSize: 12,
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 500,
    },
    h6: {
      lineHeight: 25,
      fontSize: 14,
      letterSpacing: 0.1,
      fontWeight: 700,
    },
    h5: {
      lineHeight: 30,
      fontSize: 16,
      fontWeight: 700,
    },
    caption: {
      fontFamily: 'Montserrat',
      fontSize: 32,
      lineHeight: 40,
      letterSpacing: -1.5,
    },
  },
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
