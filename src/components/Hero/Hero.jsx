import { Box, Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/src/assets/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Hi, I'm [Your Name]
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            A Passionate [Your Profession]
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3 }}
          >
            Download Resume
          </Button>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Hero