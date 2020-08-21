import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  spacing: 5,
  typography: {
    subtitle1: {
      fontSize: 12,
      fontWeight: 400
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400
    },
    body1: {
      fontSize: 12,
      fontWeight: 500
    },
    body2: {
      fontSize: 14,
      fontWeight: 500
    },
    h6: {
      fontSize: 14,
      letterSpacing: 0.1,
      fontWeight: 700
    },
    h5: {
      fontSize: 16,
      fontWeight: 700
    },
    caption: {
      fontFamily: 'Montserrat',
      fontSize: 32,
      letterSpacing: -1.5
    }
  },
  palette: {
    primary: {
      main: '#e53935'
    },
    secondary: {
      main: '#212121'
    },
    background: {
      default: '#fff'
    }
  }
})

export default theme
