import React, { forwardRef, useState, useEffect, useRef } from 'react';

// Komponenta pro fotky definovaná mimo
const ShowroomPhotos = ({ className = "" }: { className?: string }) => (
  <div className={`relative h-56 md:h-64 w-full max-w-[340px] md:max-w-sm mx-auto lg:mx-0 animate-fade-up ${className}`}>
    <div className="absolute left-0 top-0 w-[85%] aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 transform -rotate-2">
      <img src="/foto1.webp" alt="Exclusive Customs Office" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
    </div>
    <div className="absolute right-0 bottom-4 w-[75%] aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 transform rotate-2 translate-y-4">
      <img src="/interier.webp" alt="Workshop detailing" className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700" />
    </div>
  </div>
);

const FormSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('+420 ');
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const [note, setNote] = useState('');

  const [isHeadlineVisible, setIsHeadlineVisible] = useState(false);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsHeadlineVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    if (headlineRef.current) observer.observe(headlineRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    if (!input.startsWith('+420 ')) input = '+420 ';
    const rawDigits = input.substring(5).replace(/\D/g, '').substring(0, 9);
    let formatted = '+420 ';
    for (let i = 0; i < rawDigits.length; i++) {
      if (i > 0 && i % 3 === 0) formatted += ' ';
      formatted += rawDigits[i];
    }
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('car', car);
    formData.append('phone', phone);
    formData.append('note', note);

    try {
      await fetch('https://hooks.zapier.com/hooks/catch/25611644/ue3y3ao/', {
        method: 'POST',
        body: formData,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Zapier error:', err);
    }
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0a1111] relative overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEVÁ STRANA */}
          <div className="lg:w-[45%] w-full text-left">
            <h2 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight animate-fade-up">
              Chcete chránit <br />svůj vůz? <br />
              <span className="inline-block overflow-hidden h-[1.2em] -mb-[0.2em]">
                <span className={`inline-block text-brand opacity-0 ${isHeadlineVisible ? 'animate-reveal' : ''}`} style={{ animationDelay: '1s' }}>
                  Začněte zde.
                </span>
              </span>
            </h2>

            <p className="mt-6 text-white/40 text-lg max-w-sm animate-fade-up delay-1">
              Prémiová PPF ochrana pro vozy, na kterých záleží. Nechte nám kontakt, ozveme se vám a vše spolu nezávazně probereme.
            </p>

            <div className="mt-10 flex items-center gap-4 animate-fade-up delay-2">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0a1111] bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i + 10}`} className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                ))}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand flex items-center justify-center text-black text-xs font-bold">
                  +500
                </div>
              </div>
              <p className="text-white/60 text-sm max-w-[200px]">
                Přidejte se k <span className="text-white font-bold">500+ majitelům</span>,<br />
                kteří své vozy již chrání.
              </p>
            </div>

            <ShowroomPhotos className="hidden lg:block mt-16 delay-3" />
          </div>

          {/* PRAVÁ STRANA */}
          <div className="lg:w-[55%] w-full">
            <div className="relative bg-[#111c1c]/80 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl min-h-[450px] flex items-center justify-center">

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                  <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jméno a Příjmení" className="w-full bg-white/5 py-5 px-8 text-white rounded-full" />
                  <input required value={car} onChange={(e) => setCar(e.target.value)} placeholder="Značka a model auta" className="w-full bg-white/5 py-5 px-8 text-white rounded-full" />
                  <input required value={phone} onChange={handlePhoneChange} placeholder="+420 000 000 000" className="w-full bg-white/5 py-5 px-8 text-white rounded-full" />
                  <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="Chcete se zeptat na termín nebo konkrétní balíček?" className="w-full bg-white/5 py-6 px-8 text-white rounded-[2rem]" />
                  <button type="submit" className="w-full py-5 bg-brand text-black font-bold rounded-full">Chci se poradit →</button>
                </form>
              ) : (
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Hotovo 😁</h3>
                  <p>Ozveme se vám do 30 minut.</p>
                </div>
              )}

            </div>
            <ShowroomPhotos className="lg:hidden mt-20 mb-8" />
          </div>

        </div>
      </div>
    </section>
  );
});

FormSection.displayName = 'FormSection';
export default FormSection;