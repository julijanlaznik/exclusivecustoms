
import React, { forwardRef, useState } from 'react';

// Komponenta pro fotky definovaná mimo, aby se zabránilo zbytečnému odpojování a připojování (unmount/remount)
// při každém re-renderu FormSection (např. při psaní do inputu), což způsobovalo problikávání animací.
const ShowroomPhotos = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-56 md:h-64 w-full max-w-[340px] md:max-w-sm mx-auto lg:mx-0 animate-fade-up ${className}`}>
    {/* Back photo: Office/Consultation */}
    <div className="absolute left-0 top-0 w-[85%] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 transform -rotate-2">
      <img 
        src="/foto1.webp" 
        alt="Exclusive Customs Office" 
        className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
      />
    </div>
    {/* Front photo: Workshop with cars */}
    <div className="absolute right-0 bottom-4 w-[75%] aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 transform rotate-2 translate-y-4">
      <img 
        src="/interier.webp" 
        alt="Workshop detailing" 
        className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
      />
    </div>
  </div>
);

const FormSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('+420 ');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    
    // Zamezení smazání předvolby +420 a mezery za ní
    if (!input.startsWith('+420 ')) {
      input = '+420 ';
    }

    // Extrahujeme pouze číslice, které uživatel napsal ZA předvolbu
    const rawDigits = input.substring(5).replace(/\D/g, '').substring(0, 9);
    
    // Formátování: +420 123 456 789
    let formatted = '+420 ';
    for (let i = 0; i < rawDigits.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formatted += ' ';
      }
      formatted += rawDigits[i];
    }

    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0a1111] relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] bg-brand/10 rounded-full blur-[180px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[130px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Conversion Heading & Social Proof */}
          <div className="lg:w-[45%] w-full text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-sans leading-[1.1] tracking-tight animate-fade-up">
              Chcete chránit <br />
              svůj vůz? <br />
              <span className="text-brand">Začněte zde.</span>
            </h2>
            <p className="mt-6 text-white/40 text-lg font-light leading-relaxed max-w-sm font-sans animate-fade-up delay-1">
              Prémiová PPF ochrana pro vozy, na kterých skutečně záleží. Stačí vyplnit kontakt a my se postaráme o zbytek.
            </p>

            {/* Social Proof Element */}
            <div className="mt-10 flex items-center gap-4 animate-fade-up delay-2">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0a1111] bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?u=${i + 10}`} 
                      alt="User" 
                      className="w-full h-full object-cover grayscale opacity-80"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0a1111] bg-brand flex items-center justify-center text-black text-[10px] md:text-xs font-bold font-sans">
                  +500
                </div>
              </div>
              <p className="text-white/60 text-xs md:text-sm font-light font-sans max-w-[200px] leading-relaxed text-left">
                Přidejte se k <span className="text-white font-bold">500+ majitelům</span>,<br />
                kteří své vozy již chrání.
              </p>
            </div>

            {/* Desktop Photos: Below social proof */}
            <ShowroomPhotos className="hidden lg:block mt-16 delay-3" />
          </div>

          {/* Right Side: Optimized Wide Form / Success Message */}
          <div className="lg:w-[55%] w-full flex flex-col items-center">
            <div className="relative w-full">
              {/* Subtle background glow */}
              <div className="absolute -inset-1 bg-brand/10 rounded-[3rem] blur-2xl pointer-events-none"></div>
              
              <div className="relative bg-[#111c1c]/80 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl transition-all duration-500 min-h-[450px] flex flex-col justify-center">
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          required
                          type="text"
                          id="car"
                          placeholder="Model vašeho vozu"
                          className="w-full bg-white/5 border border-white/10 py-5 px-8 text-white placeholder:text-white/20 rounded-full outline-none focus:border-brand focus:bg-white/10 transition-all font-sans text-lg md:text-xl"
                        />
                      </div>

                      <div className="relative">
                        <input
                          required
                          type="tel"
                          id="contact"
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="+420 000 000 000"
                          className="w-full bg-white/5 border border-white/10 py-5 px-8 text-white placeholder:text-white/20 rounded-full outline-none focus:border-brand focus:bg-white/10 transition-all font-sans text-lg md:text-xl"
                        />
                      </div>

                      <div className="relative">
                        <textarea
                          id="note"
                          rows={3}
                          placeholder="Chcete se zeptat na termín nebo konkrétní balíček? (Zcela volitelné)"
                          className="w-full bg-white/5 border border-white/10 py-6 px-8 text-white placeholder:text-white/20 rounded-[2rem] outline-none focus:border-brand focus:bg-white/10 transition-all font-sans text-lg md:text-xl resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="group relative w-full py-5 bg-brand text-black font-bold text-lg md:text-xl rounded-full transition-all duration-500 shadow-[0_15px_50px_-10px_rgba(92,205,197,0.4)] overflow-hidden active:scale-[0.98]"
                      >
                        <span className="relative z-10 font-oxanium uppercase tracking-[0.15em]">
                          Chci se poradit →
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      </button>
                      
                      <p className="text-center mt-6 text-[10px] md:text-xs text-white/30 uppercase tracking-[0.2em] font-sans">
                        Odpovídáme průměrně do 2 hodin
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center animate-fade-up py-10">
                    <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(92,205,197,0.4)]">
                      <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white font-sans uppercase tracking-tight">Skvělá volba!</h3>
                    <p className="text-lg text-brand-light font-sans font-light max-w-xs mx-auto leading-relaxed">
                      Vaše zpráva je u nás. Ozveme se vám co nejdříve, abychom společně navrhli nejlepší ochranu pro váš vůz.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Photos: Definitely visible here below the form card */}
            <ShowroomPhotos className="lg:hidden mt-20 mb-8" />
          </div>

        </div>
      </div>
    </section>
  );
});

FormSection.displayName = 'FormSection';

export default FormSection;
