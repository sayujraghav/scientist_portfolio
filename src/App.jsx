import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import YearSpanTimeline from './components/YearSpanTimeline'

const App = () => {
  return (
        <div>
          <Navbar />
          <Hero />
          <About />
          <YearSpanTimeline />
          <Contact />
          <Footer />
        </div>
  )
}

export default App