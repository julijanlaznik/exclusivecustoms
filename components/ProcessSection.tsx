
import React, { useEffect, useState, useRef } from 'react';

const ProcessSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'První setkání a konzultace',
      desc: 'Probereme společně vaše potřeby, styl ježdění a rozsah ochrany, který dává smysl pro váš vůz. Odpovíme na všechny vaše otázky a navrhneme řešení přesně na míru.'
    },
    {
      number: '02',
      title: 'Příprava vozu na aplikaci',
      desc: 'Důkladně vyčistíme a odmastíme povrch laku. Odstraníme všechny nečistoty, prach a stopy předchozích ošetření. Tento krok je základ kvalitního výsledku.'
    },
    {
      number: '03',
      title: 'Precizní aplikace fólie',
      desc: 'Nanášíme PPF fólii s milimetrovou přesností na každý detail. Pracujeme v kontrolovaném prostředí, aby nedošlo k žádným nečistotám nebo bublinám.'
    },
    {
      number: '04',
      title: 'Kontrola kvality',
      desc: 'Po aplikaci zkontrolujeme každý centimetr fólie z každého úhlu. Hledáme jakékoli nedokonalosti – náš standard je 100% perfektní výsledek.'
    },
    {
      number: '05',
      title: 'Předání vašeho vozu',
      desc: 'Auto vám předáme kompletně chráněné se zárukou na práci i materiál. Zároveň vám poskytneme tipy na údržbu, aby vám fólie vydržela co nejdéle.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Heading Hierarchy */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-black text-sm md:text-base font-normal mb-4 font-sans tracking-tight">
            Váš vůz u nás není měsíc
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight font-sans tracking-tight">
            Spolupráce s námi je<br />rychlá a bez stresu
          </h2>
        </div>

        {/* Compact Vertical Process - Article Style */}
        <div className="relative space-y-10">
          <div className={`absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-100 origin-top transition-transform duration-[1500ms] ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative flex gap-6 md:gap-10 transition-all duration-700 ease-out`}
              style={{ 
                transitionDelay: `${index * 120}ms`, 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(15px)' 
              }}
            >
              <div className="relative z-10 flex-shrink-0 mt-1">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xs md:text-sm font-bold text-black font-oxanium">
                    {step.number}
                  </span>
                </div>
              </div>
              
              <div className="flex-grow border-b border-gray-50 pb-8 last:border-0">
                <h3 className="text-lg md:text-xl font-bold text-black mb-2 font-sans tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light font-sans max-w-xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
