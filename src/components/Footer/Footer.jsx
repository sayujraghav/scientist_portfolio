import { Box, Typography, Container } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} [Your Name]. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer