
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="w-full px-4 md:px-8 lg:px-12 h-20 md:h-32 flex items-center justify-between">
        <div className="flex items-center animate-fade-up">
          {/* Logo container se stejnou velikostí jako dříve, připravený na obrázek */}
          <div className="w-12 h-12 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/30 flex items-center justify-center overflow-hidden shadow-xl group cursor-pointer transition-transform hover:scale-105 active:scale-95">
            {/* 
              Placeholder pro image logo. 
              Stačí vyměnit src za reálnou URL loga Exclusive Customs.
              object-contain zajistí, že se logo nedeformuje.
            */}
            <img 
              src="/logo.webp" 
              alt="Exclusive Customs Logo" 
              className="w-full h-full object-contain p-2 md:p-3"
            />
            
            {/* Skrytý text pro SEO, který byl dříve vidět */}
            <span className="sr-only">Exclusive Customs</span>
          </div>
        </div>
        {/* CTA tlačítko bylo na žádost uživatele zcela odstraněno pro mobil i PC */}
      </div>
    </header>
  );
};

export default Header;
