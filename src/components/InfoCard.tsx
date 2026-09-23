import React from 'react';
import './InfoCard.css';

interface Props {
  imageIcon: string;
  title: string;
  description: string;
  link: string;
}

const JobCard: React.FC<Props> = ({ imageIcon, title, description, link }) => {
  return (
    <a className="info-card" href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageIcon} alt="" className="info-card-icon" />

      <div className="info-card-text">
        <h3 className="info-card-title">{title}</h3>
        <p className="info-card-description">{description}</p>
      </div>
    </a>
  );
};

export default JobCard;
