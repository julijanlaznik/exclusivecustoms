
import React, { useState } from 'react';

interface PackagesSectionProps {
  onCtaClick: () => void;
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ onCtaClick }) => {
  const [activePackage, setActivePackage] = useState(0);

  const packages = [
    {
      id: 0,
      name: 'Bikini Front',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200',
      description: 'Základní ochrana nejvíce exponovaných částí: přední hrana kapoty, zrcátka a náběžné hrany blatníků.'
    },
    {
      id: 1,
      name: 'Full Front',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200',
      description: 'Kompletní ochrana celého předku vozu. Chrání celou kapotu, nárazník, světla i oba blatníky.'
    },
    {
      id: 2,
      name: 'Full Car',
      image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&q=80&w=1200',
      description: 'Maximální bezpečí. Celý vůz je v neprůstřelném krunýři. Žádné kompromisy, žádné obavy o lak.'
    },
    {
      id: 3,
      name: 'Individuální',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1200',
      description: 'Potřebujete chránit jen prahy, nakládací hranu kufru nebo interiér? Navrhneme řešení na míru.'
    }
  ];

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Light theme aligned */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#5ccdc5] text-xs md:text-sm font-bold uppercase tracking-widest mb-3">Flexibilita</p>
          <h2 className="text-3xl md:text-5xl font-black text-black font-sans tracking-tight">
            Rozsah ochrany laku
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Left: Image Container - Fixed Aspect Ratio on mobile */}
          <div className="w-full lg:flex-1 order-1 lg:order-2">
            <div className="relative aspect-[16/10] md:aspect-video lg:aspect-square overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-gray-100">
              {packages.map((pkg, idx) => (
                <img
                  key={pkg.id}
                  src={pkg.image}
                  alt={pkg.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    activePackage === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Subtle Overlay to make text pop if we added it, but keeping it clean */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right: Content & Controls */}
          <div className="w-full lg:w-[450px] order-2 lg:order-1 flex flex-col justify-center">
            <div className="bg-gray-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-gray-100">
              
              {/* Package Selector - 2x2 Grid on Mobile, vertical on Desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 mb-8">
                {packages.map((pkg, idx) => (
                  <button
                    key={pkg.id}
                    onClick={() => setActivePackage(idx)}
                    className={`px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl text-[10px] md:text-sm font-bold transition-all duration-300 border text-center font-oxanium uppercase tracking-wider ${
                      activePackage === idx
                        ? 'bg-[#5ccdc5] border-[#5ccdc5] text-white shadow-lg scale-[1.02]'
                        : 'bg-white border-gray-200 text-gray-400 hover:border-[#5ccdc5]/30'
                    }`}
                  >
                    {pkg.name}
                  </button>
                ))}
              </div>

              {/* Description Area */}
              <div className="min-h-[100px] mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3 font-sans">
                  {packages[activePackage].name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light font-sans">
                  {packages[activePackage].description}
                </p>
              </div>

              {/* Internal CTA to make it super conversion-friendly */}
              <button
                onClick={onCtaClick}
                onMouseEnter={handleMouseEnter}
                className="w-full cta-button py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold"
              >
                Chci tento balíček →
              </button>
            </div>
            
            <p className="mt-6 text-center lg:text-left text-[10px] md:text-xs text-gray-400 font-sans italic">
              * Všechny instalace provádíme v bezprašném prostředí s certifikací.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
