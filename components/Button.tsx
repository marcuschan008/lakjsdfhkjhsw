import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold rounded-full transition-all duration-300 transform active:scale-95 px-6 py-3 shadow-md hover:shadow-lg text-lg tracking-wide";
  
  const variants = {
    primary: "bg-peach-500 hover:bg-peach-600 text-white border-2 border-transparent",
    secondary: "bg-navy-800 hover:bg-navy-900 text-white border-2 border-transparent",
    outline: "bg-transparent border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    if (external) {
        return (
            <a href={to} className={combinedClasses} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        )
    }
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;