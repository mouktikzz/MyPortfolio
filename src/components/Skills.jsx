import React from 'react';

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'Java', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Libraries & Frameworks',
    items: ['Numpy', 'Pandas', 'Scikit-learn', 'Streamlit'],
  },
  {
    category: 'Tools',
    items: ['GitHub', 'Android Studio'],
  },
  {
    category: 'Soft Skills',
    items: ['Team Work', 'Adaptability', 'Time Management'],
  },
  {
    category: 'Game Development',
    items: ['UNITY 2D', 'C#'],
  },
  {
    category: 'Penetration Testing',
    items: ['Kali Linux', 'NMAP', 'BurpSuite', 'Metasploit', 'Nessus'],
  },
  {
    category: 'Graphic Designing',
    items: ['Photoshop', 'Premiere Pro', 'Blender'],
  },
];

export default function Skills() {
  return (
    <section>
      <h2>Skillset</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {skills.map((group) => (
          <div
            key={group.category}
            style={{
              flex: 1,
              minWidth: 220,
              background: 'var(--color-card-alt)',
              borderRadius: 8,
              padding: '1.2rem',
              border: '1.5px solid var(--color-border)',
              boxShadow: '0 4px 16px rgba(29, 78, 216, 0.10)',
              color: 'var(--color-text)',
            }}
          >
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{group.category}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {group.items.map((item) => (
                <li key={item} style={{ marginBottom: 8, fontWeight: 500, fontSize: '1.08rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: 8, fontSize: '1.1rem' }}>•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 