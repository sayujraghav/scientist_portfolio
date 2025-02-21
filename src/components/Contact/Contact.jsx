import { Box, Typography, Container, TextField, Button } from '@mui/material'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Me
        </Typography>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box component="form" sx={{ maxWidth: 600, mx: 'auto' }}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              Send Message
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Contact