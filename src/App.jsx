import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader'
import { lightTheme, darkTheme } from '@/styles/theme'
import { useTheme } from '@/hooks/useTheme'

// Lazy-loaded pages
const Home = lazy(() => import('@/pages/Home'))
const Research = lazy(() => import('@/pages/Research'))
const Publications = lazy(() => import('@/pages/Publications'))
const Contact = lazy(() => import('@/pages/Contact'))

const App = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="research" element={<Research />} />
              <Route path="publications" element={<Publications />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App