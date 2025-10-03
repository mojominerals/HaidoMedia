
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, variant = 'primary', className = '' }) => {
  const baseClasses = "inline-block px-8 py-3 rounded-full font-bold text-center transition-transform duration-300 hover:scale-105";
  
  const variantClasses = {
    primary: "bg-accent text-charcoal shadow-lg shadow-accent/20",
    secondary: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-charcoal",
  };

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
};

export default Button;
