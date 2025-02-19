import { Box, Typography, Container, Avatar } from '@mui/material'

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          About Me
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Avatar
            src="/src/assets/images/avatar.png"
            sx={{ width: 150, height: 150 }}
          />
          <Typography variant="body1">
            I'm a [Your Profession] with a passion for [Your Interests]. I have
            experience in [Your Skills] and love building [Your Projects].
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default About