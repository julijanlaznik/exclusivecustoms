
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/videoplayback.mp4"
          className="w-full h-full object-cover"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
          {/* Záložní obrázek pokud video nejde načíst */}
          <img 
            src="/videoplayback.mp4" 
            alt="PPF Application" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30"></div>
      </div>

      {/* Main Content - Force justify-end for mobile and desktop to keep content low */}
      <div className="relative z-10 flex-grow flex flex-col justify-end">
        <div className="w-full px-4 md:px-10 lg:px-12 text-left pt-32 pb-8 md:pb-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-oxanium uppercase drop-shadow-2xl animate-fade-up">
              99,9 % ochrana<br />proti škrábancům
            </h1>
            
            <p className="mt-4 md:mt-6 text-sm md:text-xl text-white/90 max-w-lg leading-relaxed font-extralight drop-shadow-md animate-fade-up delay-1">
              Neviditelná PPF fólie, která chrání lak<br className="hidden md:block" />vašeho auta před každodenním poškozením.
            </p>
            
            <div className="mt-8 md:mt-10 flex flex-col items-start animate-fade-up delay-2">
              <button
                onClick={onCtaClick}
                onMouseEnter={handleMouseEnter}
                className="w-full md:w-auto cta-button px-10 py-4 md:px-12 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl"
              >
                Bezplatně se poradit →
              </button>
              
              <div className="mt-6 md:mt-8 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <div className="flex text-yellow-400 space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[10px] md:text-sm font-black text-white">
                  4,9 / 5 <span className="font-extralight opacity-80 ml-1">| 456 recenzí</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar - Optimized grid for mobile */}
      <div className="relative z-20 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="w-full px-4 md:px-10 lg:px-12 py-6 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-8">
            <div className="flex flex-col items-start border-l-2 border-[#5ccdc5] pl-3 md:pl-4 animate-pop-up delay-3">
              <span className="text-xl md:text-4xl font-black text-black font-oxanium leading-none">99 %</span>
              <span className="text-[8px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">spokojenost</span>
            </div>
            <div className="flex flex-col items-start border-l-2 border-[#5ccdc5] pl-3 md:pl-4 animate-pop-up delay-4">
              <span className="text-xl md:text-4xl font-black text-black font-oxanium leading-none">8</span>
              <span className="text-[8px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">specialistů</span>
            </div>
            <div className="flex flex-col items-start border-l-2 border-[#5ccdc5] pl-3 md:pl-4 animate-pop-up delay-5">
              <span className="text-xl md:text-4xl font-black text-black font-oxanium leading-none">20 let</span>
              <span className="text-[8px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">zkušeností</span>
            </div>
            <div className="flex flex-col items-start border-l-2 border-[#5ccdc5] pl-3 md:pl-4 animate-pop-up delay-6">
              <span className="text-xl md:text-4xl font-black text-black font-oxanium leading-none">1 000+</span>
              <span className="text-[8px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">vozů</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
