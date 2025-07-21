import React from 'react';

export default function Profile() {
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
      <div style={{ flex: '0 0 180px', textAlign: 'center' }}>
        <img
          src="/Chico.png"
          alt="Profile"
          style={{ width: 180, height: 180, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
        />
      </div>
      <div style={{ flex: 1, minWidth: 250 }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>Hello, I'm</p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0.5rem 0', color: 'var(--color-primary)' }}>Mouktik</h1>
        <p style={{ fontSize: '1.3rem', color: 'var(--color-text-secondary)', marginBottom: '0.7rem' }}>AI Enthusiast</p>
        <div style={{ display: 'flex', gap: '2.2rem', alignItems: 'center', margin: '0 0 1.5rem 0' }}>
          <a href="https://github.com/mouktikzz" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" style={{ width: 36, height: 36 }} />
          </a>
          <a href="https://www.linkedin.com/in/mouktikdasari/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" style={{ width: 36, height: 36 }} />
          </a>
        </div>
      </div>
    </section>
  );
} 