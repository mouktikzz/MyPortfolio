import React from 'react';

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h3>Experience</h3>
          <p>1+ years<br />Development</p>
          <h3>Education</h3>
          <p>B.Tech, ECE</p>
        </div>
        <div style={{ flex: 3, minWidth: 250 }}>
          <p>
            As a versatile tech enthusiast, I blend creativity with technical prowess to bring ideas to life. From coding in Python, C, C++, JAVA, SQL, C# and MATLAB to crafting engaging websites with HTML, CSS, JS, and WordPress, I am passionate about all things tech.<br /><br />
            With game development, I've recreated classics like Angry Birds and Flappy Bird etc., using Unity 2D, focusing on the meticulous replication of gameplay mechanics and visual style. Beyond recreation, I’ve ventured into original game designs, developing titles like Present Collector and Mad Doctor etc., where I've implemented dynamic game mechanics and engaging user interfaces.<br /><br />
            My penetration testing, using tools like Burp Suite, NMAP, Metasploit reflect my keen interest in cybersecurity. Completing internships with top-tier companies like Palo Alto has further honed these skills.<br /><br />
            On the creative front, I leverage design tools including Photoshop, Premiere Pro, and Blender to bring a visual flair to my projects. My expertise also extends to generative AI, utilizing platforms like DALL-E and Midjourney to explore new frontiers in AI-driven creativity.<br /><br />
            Whether it's through problem-solving, collaboration, or the detailed execution of a project, my focus remains on delivering quality and innovative solutions. Feel free to connect or delve into my diverse projects to understand how I can add value to your team or project.
          </p>
        </div>
      </div>
    </section>
  );
} 