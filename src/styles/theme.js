import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3B82F6', // Royal Blue
    },
    secondary: {
      main: '#10B981', // Emerald Green
    },
    background: {
      default: '#F8FAFC', // Snow White
    },
    text: {
      primary: '#1E293B', // Space Blue
    },
  },
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3B82F6', // Royal Blue
    },
    secondary: {
      main: '#10B981', // Emerald Green
    },
    background: {
      default: '#0F172A', // Space Blue
    },
    text: {
      primary: '#F8FAFC', // Snow White
    },
  },
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
  },
})