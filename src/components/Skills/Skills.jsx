import { Box, Typography, Container } from '@mui/material'
import { motion } from 'framer-motion'
import skills from '@/assets/data/skills.json'

const Skills = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Skills
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <img src={skill.icon} alt={skill.name} width={50} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {skill.name}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Skills