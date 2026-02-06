
import React, { forwardRef, useState } from 'react';

const FormSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section ref={ref} className="py-16 md:py-24 bg-white">
        <div className="px-[10px]">
          <div className="w-full bg-[#5ccdc5] p-10 md:p-24 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl text-center text-white">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">Děkujeme!</h2>
            <p className="text-lg md:text-xl text-white/90 font-sans font-light">
              Ozveme se vám co nejdříve pro naplánování vaší bezplatné konzultace.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="px-[10px]">
        <div className="w-full bg-[#5ccdc5] p-6 md:p-20 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-10 md:mb-12 font-sans tracking-tight max-w-2xl mx-auto leading-tight">
              Chcete ochránit své auto? Začněte tady
            </h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="md:col-span-1">
                <label htmlFor="car" className="block text-[10px] md:text-sm font-bold text-white mb-2 md:mb-3 font-sans uppercase tracking-wider opacity-90">
                  Jaké auto máte?
                </label>
                <input
                  required
                  type="text"
                  id="car"
                  placeholder="Např. BMW M5, Tesla..."
                  className="w-full px-5 py-4 md:px-6 md:py-5 bg-[#49a9a3] border border-white/10 rounded-xl md:rounded-2xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/30 outline-none transition-all font-sans text-base md:text-lg"
                />
              </div>
              
              <div className="md:col-span-1">
                <label htmlFor="contact" className="block text-[10px] md:text-sm font-bold text-white mb-2 md:mb-3 font-sans uppercase tracking-wider opacity-90">
                  Telefon nebo WhatsApp
                </label>
                <input
                  required
                  type="tel"
                  id="contact"
                  placeholder="+420 777 000 000"
                  className="w-full px-5 py-4 md:px-6 md:py-5 bg-[#49a9a3] border border-white/10 rounded-xl md:rounded-2xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/30 outline-none transition-all font-sans text-base md:text-lg"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="note" className="block text-[10px] md:text-sm font-bold text-white mb-2 md:mb-3 font-sans uppercase tracking-wider opacity-90">
                  Poznámka <span className="font-normal opacity-60 text-[9px]">(volitelné)</span>
                </label>
                <textarea
                  id="note"
                  rows={3}
                  placeholder="Mám zájem o polep celé přední části..."
                  className="w-full px-5 py-4 md:px-6 md:py-5 bg-[#49a9a3] border border-white/10 rounded-xl md:rounded-2xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/30 outline-none transition-all resize-none font-sans text-base md:text-lg"
                ></textarea>
              </div>
              
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full py-5 md:py-6 bg-white text-[#5ccdc5] rounded-xl md:rounded-2xl text-lg md:text-xl font-bold shadow-xl hover:bg-gray-50 active:scale-[0.98] transition-all duration-300 font-oxanium uppercase tracking-wider"
                >
                  Chci bezplatnou konzultaci →
                </button>
              </div>
              
              <div className="md:col-span-2">
                <p className="text-center text-[10px] md:text-sm text-white/60 font-sans italic uppercase tracking-wider">
                  ozveme se do 24 hodin.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

FormSection.displayName = 'FormSection';

export default FormSection;
