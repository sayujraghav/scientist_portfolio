import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useTheme } from '@/hooks/useTheme'

const Layout = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100">
        <Navbar>
          <button onClick={toggleTheme}>
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </Navbar>

        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Layout