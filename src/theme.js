import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const Colors = {
  primary: '#EE6C4D',
  secondary: '#2C363F',
  white: '#F2F5EA',
  green: '#BBC7A4',
  darkWhite: '#D6DBD2',
};

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#EE6C4D',
    },
    secondary: {
      main: '#2C363F',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
