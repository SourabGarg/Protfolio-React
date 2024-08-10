import React from 'react';

function ProjectCard({ src, link, h3, p, h4 }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <p style={{fontSize:'medium', color: h4 === 'Live' ? 'red' : '' }}>{h4}!</p>
    </a>
  );
}

export default ProjectCard;
