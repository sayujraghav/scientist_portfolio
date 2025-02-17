import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${isDark ? 'dark' : 'light'}`}>
      <Link to="/">Home</Link>
      <Link to="/research">Research</Link>
      <button onClick={toggleTheme}>
        {isDark ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
};