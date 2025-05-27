import React from 'react';

const HeroSection = ({ title, subtitle }) => {
  return (
    <div className="text-center py-5 bg-primary text-white mb-4">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default HeroSection;
