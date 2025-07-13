import React from 'react';

export default function ContactSection() {
  return (
    <section>
      <h2>Contact Me</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/email.png" alt="email" style={{ width: 28, height: 28 }} />
          <a href="mailto:mouktik.d@gmail.com" style={{ fontSize: '1.1rem', color: '#1d4ed8', textDecoration: 'none', fontWeight: 500 }}>
            mouktik.d@gmail.com
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/linkedin.png" alt="LinkedIn" style={{ width: 28, height: 28 }} />
          <a href="https://www.linkedin.com/in/mouktikdasari/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: '#1d4ed8', textDecoration: 'none', fontWeight: 500 }}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
} 