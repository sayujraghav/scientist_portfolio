import { Box, Typography, Container, TextField, Button } from '@mui/material'

const Contact = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Me
        </Typography>
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
      </Container>
    </Box>
  )
}

export default Contact