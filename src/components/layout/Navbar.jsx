import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import { useTheme } from '@/context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Research Portfolio
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {theme === 'dark' ? '🌞' : '🌙'}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar