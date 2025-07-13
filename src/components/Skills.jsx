import React from 'react';

const skills = [
  {
    category: 'Full Stack Web Development',
    items: [
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'WordPress', level: 'Basic' },
    ],
  },
  {
    category: 'Game Development',
    items: [
      { name: 'UNITY 2D', level: 'Intermediate' },
      { name: 'C#', level: 'Intermediate' },
    ],
  },
  {
    category: 'Penetration Testing',
    items: [
      { name: 'Kali Linux', level: 'Intermediate' },
      { name: 'NMAP', level: 'Intermediate' },
      { name: 'BurpSuite', level: 'Intermediate' },
      { name: 'Metasploit', level: 'Basic' },
      { name: 'Nessus', level: 'Basic' },
    ],
  },
  {
    category: 'Graphic Designing',
    items: [
      { name: 'Photoshop', level: 'Experienced' },
      { name: 'Premiere Pro', level: 'Intermediate' },
      { name: 'Blender', level: 'Beginner' },
    ],
  },
];

export default function Skills() {
  return (
    <section>
      <h2>Skillset</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {skills.map((group) => (
          <div key={group.category} style={{ flex: 1, minWidth: 220, background: 'var(--color-card-alt)', borderRadius: 8, padding: '1rem' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{group.category}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {group.items.map((item) => (
                <li key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  <img src="/checkmark.png" alt="check" style={{ width: 20, height: 20, marginRight: 8 }} />
                  <span style={{ fontWeight: 500 }}>{item.name}</span>
                  <span style={{ marginLeft: 'auto', color: '#555', fontSize: '0.95rem' }}>{item.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 