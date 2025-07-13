import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const navStyle = {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  borderBottom: '1px solid #eee',
  flexWrap: 'wrap',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--color-text)',
  fontWeight: 500,
  fontSize: '1rem',
};

const toggleStyle = {
  marginLeft: 'auto',
  padding: '0.4rem 1rem',
  borderRadius: 6,
  border: 'none',
  background: 'var(--color-nav-hover)',
  color: 'var(--color-primary)',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background 0.2s, color 0.2s',
};

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif', margin: 0, padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header>
          <nav style={navStyle}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginRight: '2rem' }}>My Portfolio</span>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/projects" style={linkStyle}>Projects</Link>
            <Link to="/skills" style={linkStyle}>Skills</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
            <button
              style={toggleStyle}
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
            >
              {dark ? '🌙 Dark' : '☀️ Light'}
            </button>
          </nav>
        </header>
        <main style={{ flex: 1, padding: '2rem', width: '100%', maxWidth: 900, margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer style={{ padding: '1rem', borderTop: '1px solid #eee', textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>
          &copy; {new Date().getFullYear()} My Portfolio
        </footer>
      </div>
    </Router>
  );
}

export default App; 