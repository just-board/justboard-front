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
      typography: {
        body1: {
          fontFamily: 'Yeon Sung',
        },
        fontFamily: 'Yeon Sung',
        caption: {
          fontFamily: 'Yeon Sung',
        },
        overline: {
          fontFamily: 'Yeon Sung',
        },
        body2: {
          fontFamily: 'Yeon Sung',
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
      typography: {
        body1: {
          fontFamily: 'Yeon Sung',
        },
        fontFamily: 'Yeon Sung',
        caption: {
          fontFamily: 'Yeon Sung',
        },
        overline: {
          fontFamily: 'Yeon Sung',
        },
        body2: {
          fontFamily: 'Yeon Sung',
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
        fontFamily: 'Yeon Sung',
      },
      fontFamily: 'Yeon Sung',
      caption: {
        fontFamily: 'Yeon Sung',
      },
      overline: {
        fontFamily: 'Yeon Sung',
      },
      body2: {
        fontFamily: 'Yeon Sung',
      },
    },
}),
}
export default customTheme