import { Container, Typography, Grid, Button } from '@mui/material'
import Hero from '@/sections/Hero/Hero'
import ResearchIntro from '@/sections/Research/ResearchIntro'
import PublicationsList from '@/sections/Publications/PublicationsList'

const Home = () => {
  return (
    <Container maxWidth="xl">
      {/* Hero Section */}
      <Hero />

      {/* Research Intro */}
      <ResearchIntro />

      {/* Featured Publications */}
      <section>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Publications
        </Typography>
        <PublicationsList limit={5} />
        <Button
          variant="contained"
          color="primary"
          href="/publications"
          sx={{ mt: 3 }}
        >
          View All Publications
        </Button>
      </section>
    </Container>
  )
}

export default Home