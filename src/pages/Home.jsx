import Hero from '@/sections/Hero/Hero';
import ResearchIntro from '@/sections/Research/ResearchIntro';
import PublicationsList from '@/sections/Publications/PublicationsList';

const Home = () => (
  <>
    <Hero />
    <ResearchIntro />
    <PublicationsList limit={5} />
  </>
);

export default Home;