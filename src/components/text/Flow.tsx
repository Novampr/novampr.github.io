import React from 'react';
import './Flow.css';

interface Props {
  text: string;
  types: string[];
}

const Flow: React.FC<Props> = ({ text, types }) => {
  var index = -1;
  return (
    <span>
      {text.split(' ').map<React.ReactNode>((word, _) => (
        <span style={{ whiteSpace: `nowrap` }}>
          {word.split('').map((char, _) => {
            index++;
            return (
              <span className={types.join(" ")} key={index} style={{ animationDelay: `${index * -0.1}s` }}>{char}</span>
            )
          })}
        </span>
      )).reduce((prev, curr) => [prev, ' ', curr])}
    </span>
  );
};

export default Flow;
