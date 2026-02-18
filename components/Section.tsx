import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'cream' | 'mint';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, bg = 'white' }) => {
  const bgClasses = {
    white: 'bg-white',
    cream: 'bg-cream-50',
    mint: 'bg-mint-100/50',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[bg]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;