import React from 'react';

const projects = [
  {
    title: 'Present Collector',
    image: '/Present Collector.png',
    link: 'https://steezyneo.itch.io/present-collector',
    linkLabel: 'itch.io',
  },
  {
    title: 'Angry Birds Clone',
    image: '/angry-birds.jpg',
    link: 'https://github.com/steezyneo/Angry-Birds-Clone',
    linkLabel: 'GitHub',
  },
  {
    title: 'Fruit Ninja Clone',
    image: '/fruit-ninja.jpg',
    link: 'https://github.com/steezyneo',
    linkLabel: 'GitHub',
  },
  {
    title: 'Color Switch Clone',
    image: '/color-swich.png',
    link: 'https://github.com/steezyneo',
    linkLabel: 'GitHub',
  },
];

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              flex: '1 1 220px',
              background: 'var(--color-card-alt)',
              borderRadius: 8,
              padding: '1rem',
              minWidth: 220,
              maxWidth: 260,
              color: 'var(--color-text)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              border: '1.5px solid var(--color-border)',
              boxShadow: '0 4px 16px rgba(29, 78, 216, 0.10)',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', borderRadius: 8, marginBottom: 12, objectFit: 'cover', height: 120, border: '1px solid var(--color-border)' }}
            />
            <h3 style={{ margin: '0.5rem 0', color: 'var(--color-primary)' }}>{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: 8,
                padding: '0.4rem 1rem',
                background: 'var(--color-primary)',
                color: '#fff',
                borderRadius: 6,
                textDecoration: 'none',
                fontWeight: 500,
                textAlign: 'center',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {project.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
} 