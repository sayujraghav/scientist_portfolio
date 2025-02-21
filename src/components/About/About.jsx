import { Box, Typography, Container, Avatar } from '@mui/material'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          About Me
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Avatar
              src="/src/assets/images/prof-pic.jpg"
              sx={{ width: 150, height: 150 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="body1">
              I'm a [Your Profession] with a passion for [Your Interests]. I have
              experience in [Your Skills] and love building [Your Projects].
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}

export default About