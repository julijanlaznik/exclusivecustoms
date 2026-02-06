
import React from 'react';

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="w-full px-4 md:px-8 lg:px-12 h-16 md:h-24 flex items-center justify-between">
        <div className="flex items-center animate-fade-up">
          <button 
            onClick={onLogoClick}
            className="flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95 outline-none focus:outline-none"
          >
            {/* Logo bez boxu, ještě o něco menší rozměry */}
            <img 
              src="/logo.webp" 
              alt="Exclusive Customs Logo" 
              className="w-10 h-10 md:w-16 md:h-16 object-contain"
            />
            <span className="sr-only">Exclusive Customs - Home</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
