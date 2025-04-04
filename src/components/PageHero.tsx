"use client";

import Breadcrumb from './Breadcrumb';

interface PageHeroProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const PageHero = ({ title, description, icon }: PageHeroProps) => {
  return (
    <section className="w-full bg-secondary relative overflow-hidden py-24 px-4 min-h-[40vh] flex items-center">
      {/* Animated Background Shapes */}
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Breadcrumb Navigation */}
        <div className="hero-breadcrumb mb-2">
          <Breadcrumb />
        </div>
        
        <div className="flex flex-col items-center text-center">
          {icon && (
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6 hero-badge">
              {icon}
            </div>
          )}
          
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-custom hero-title">{title}</h1>
          <div className="mx-auto hero-decorative-line mb-6"></div>
          <p className="text-xl md:text-2xl text-custom max-w-3xl mx-auto hero-description">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero; 