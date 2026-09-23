import React from 'react';
import './Flow.css';

interface Props {
  text: string;
}

const Flow: React.FC<Props> = ({ text }) => {
  return (
    <span>
      {text.split('').map((char, index) => (
        <span className='flow-text' key={index} style={{ animationDelay: `${index * -0.1}s` }}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default Flow;
