import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/context/ThemeContext';

const Layout = () => (
  <ThemeProvider>
    <Navbar />
    <main className="container mx-auto px-4">
      <Outlet />
    </main>
    <Footer />
  </ThemeProvider>
);

export default Layout;