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
})
}
export default customTheme