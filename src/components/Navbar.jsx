import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import dccLogo from '../assets/dcc-logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-glass ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-brand">
        <img src={dccLogo} alt="Davao Central College Logo" />
        DCC School
      </Link>
      <div className="nav-links">
        <NavLink to="/" className="nav-link" end>Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/programs" className="nav-link">Programs</NavLink>
        <NavLink to="/admission" className="nav-link">Admission</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>
    </nav>
  );
}
