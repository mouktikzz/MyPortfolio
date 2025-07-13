import React from 'react';

const featuredProjects = [
  {
    title: 'AI-Powered Database Migration Tool',
    image: '/Sybase-Oracle.png',
    link: 'https://sybase-oracle.netlify.app/',
    linkLabel: 'Live Demo',
  },
  {
    title: 'YouTube Video Summarizer',
    image: '/YTvidSummarizer.png',
    link: 'https://quickvidsummary.streamlit.app/',
    linkLabel: 'Live Demo',
  },
  {
    title: 'Personal Portfolio',
    image: '/portfolio.png',
    link: 'https://mouktikfolio.netlify.app/',
    linkLabel: 'Visit Site',
  },
];

const otherProjects = [
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

const buttonStyle = {
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
  minWidth: 120,
  maxWidth: 140,
  width: '100%',
  boxSizing: 'border-box',
};

function ProjectGrid({ projects }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
      {projects.map((project) => (
        <div
          key={project.title}
          style={{
            flex: '1 1 220px',
            background: 'var(--color-card-alt)',
            borderRadius: 8,
            padding: '1.2rem',
            minWidth: 220,
            maxWidth: 320,
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
            onError={e => { e.target.style.display = 'none'; }}
          />
          <h3 style={{ margin: '0.5rem 0', color: 'var(--color-primary)' }}>{project.title}</h3>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle}
            >
              {project.linkLabel}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <h3 style={{ color: 'var(--color-primary)', margin: '2rem 0 1rem 0' }}>Featured Projects</h3>
      <ProjectGrid projects={featuredProjects} />
      <h3 style={{ color: 'var(--color-primary)', margin: '2.5rem 0 1rem 0' }}>Other Projects</h3>
      <ProjectGrid projects={otherProjects} />
    </section>
  );
} 