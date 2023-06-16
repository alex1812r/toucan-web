import { createTheme } from "@mui/material";

export const PRIMARY_MAIN_COLOR = '#EA7226';
export const SECONDARY_MAIN_COLOR = 'rgb(50,65,146)';
export const SECONDARY_LIGHT_COLOR = '#8691C5';
export const SECONDARY_DARK_COLOR = 'rgb(33,43,97)';

const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN_COLOR
    },
    secondary: {
      main: SECONDARY_MAIN_COLOR,
      light: SECONDARY_LIGHT_COLOR,
      dark: SECONDARY_DARK_COLOR
    }
  },
  typography: {
    fontFamily: 'relaway, sans-serif'
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'large'
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0,
        },
        contained: {
          border: `1px solid ${PRIMARY_MAIN_COLOR}`,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }
        },
        containedPrimary: {
          '&:hover': {
            color: PRIMARY_MAIN_COLOR
          }
        }
      }
    }
  }
})

export default theme;