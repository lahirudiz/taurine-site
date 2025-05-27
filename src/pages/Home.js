import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection title="Welcome to Taurine" subtitle="Explore our world of simplicity and style" />
      <p className="text-center">This is the home page content.</p>
    </div>
  );
};

export default Home;
