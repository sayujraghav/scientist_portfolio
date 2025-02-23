import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Contact />
          <Footer />
        </div>
  )
}

export default App