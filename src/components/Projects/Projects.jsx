import { Box, Typography, Container, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import projects from '@/assets/data/projects.json'

const Projects = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Projects