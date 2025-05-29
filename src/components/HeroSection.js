import React from "react";
import { useLocation } from "react-router-dom";
import { heroContent } from "../pageData";

const HeroSection = ({ title: overrideTitle, subtitle: overrideSubtitle }) => {
  
  const { pathname } = useLocation();                      
  const { title, subtitle } = heroContent[pathname] || heroContent["/"];

  return (
    <div className="text-center py-5 bg-primary text-white mb-4">
      <h1>{overrideTitle  ?? title}</h1>
      <p>{overrideSubtitle ?? subtitle}</p>
    </div>
  );
};

export default HeroSection;
