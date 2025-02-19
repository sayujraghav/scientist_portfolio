import { Box, Typography, Container, Card, CardContent } from '@mui/material'
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
            <Card key={index}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Projects