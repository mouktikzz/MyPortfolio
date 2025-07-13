import React from 'react';

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h3>Education</h3>
          <p>
            B.Tech, Electronics & Communication Engineering<br />
            Sreenidhi Institute of Science and Technology<br />
          </p>
        </div>
        <div style={{ flex: 3, minWidth: 250 }}>
          <p>
            I am a final-year Electronics and Communication Engineering student with a strong interest in building practical, real-world solutions using modern technologies. I have experience developing AI-powered applications and have participated in competitive hackathons, earning recognition for innovative problem-solving.<br /><br />
            My passion lies in learning, adapting to new challenges, and contributing to impactful projects across domains like database systems, mobile applications, and cloud platforms.<br /><br />
            <b>Recent Experience:</b><br />
            <b>Virtusa (Intern-Technology, Jun 2025 - Present):</b> Engineered a Generative AI solution to automate the migration of Sybase databases to Oracle using a finetuned LLM, achieving 100% conversion accuracy. Developed and deployed a full-stack web application with Gemini AI for instant, on-demand SQL conversion, enhancing database modernization projects.<br /><br />
            <b>Highlighted Projects:</b><br />
            <b>AI-Powered Database Migration Tool:</b> Built and deployed a full-stack web app powered by a finetuned Gemini API Model to automate Sybase T-SQL to Oracle PL/SQL conversion, streamlining legacy database modernization.<br />
            <b>YouTube Video Summarizer:</b> Created a web app to extract YouTube transcripts and generate structured notes using Google Gemini AI.<br />
            <b>Sonar Rock vs Mine Prediction:</b> Developed a logistic regression model to classify sonar signals as rocks or mines, improving maritime safety.<br /><br />
            <b>Certifications:</b> Google Android Developer, Palo Alto Networks Cybersecurity, AWS Academy Cloud Foundations.<br /><br />
            <b>Achievements:</b> Winner of Virtusa Jatayu Season 4 for developing a Generative AI-based SQL conversion tool; 3rd place in Centle Project 360 Hackathon for a YouTube video notes generator.
          </p>
        </div>
      </div>
    </section>
  );
} 