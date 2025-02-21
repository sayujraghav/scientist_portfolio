import { Box, Typography, Container } from '@mui/material'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.default' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} [Your Name]. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Footer