
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-graphite/50 backdrop-blur-sm border border-off-white/10 rounded-2xl shadow-lg transition-all duration-300 hover:border-accent/50 hover:shadow-accent/10 hover:-translate-y-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
