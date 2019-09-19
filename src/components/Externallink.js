import React from 'react';

export default ({ text, link }) => (
  <a target="_blank" rel="noopener noreferrer" href={link}>
    {text}
  </a>
);
