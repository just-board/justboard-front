import { createTheme  } from '@mui/material/styles';
// https://bareynol.github.io/mui-theme-creator/
const customTheme = {
pinkTheme : createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#ff66c4',
          contrastText: '#004aad',
        },
        secondary: {
          main: '#f50057',
        },
      },
}),
blueTheme : createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#004aad',
        },
        secondary: {
          main: '#f50057',
        },
      },
}),
lightTheme : createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
      contrastText: '#004aad',
    },
    secondary: {
      main: 'rgb(220, 0, 78)',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      secondary: '#004aad',
      primary: '#004aad',
      disabled: '#004aad',
      hint: '#004aad',
    },
  },
    typography: {
      body1: {
        fontFamily: 'Song Myung',
      },
      fontFamily: 'Song Myung',
      caption: {
        fontFamily: 'Song Myung',
      },
      overline: {
        fontFamily: 'Song Myung',
      },
      body2: {
        fontFamily: 'Song Myung',
      },
    },
}),
}
export default customTheme