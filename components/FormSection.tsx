import React, { forwardRef, useState, useEffect, useRef } from 'react';

const ZAPIER_HOOK_URL = "https://hooks.zapier.com/hooks/catch/XXX/YYY/";

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

  // ⬇⬇⬇ PŘIDANÉ STATE (nic jiného)
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [note, setNote] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // ⬆⬆⬆

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
    const raw = input.substring(5).replace(/\D/g, '').substring(0, 9);
    let formatted = '+420 ';
    raw.split('').forEach((d, i) => {
      if (i > 0 && i % 3 === 0) formatted += ' ';
      formatted += d;
    });
    setPhone(formatted);
  };

  // ⬇⬇⬇ JEDINÁ LOGICKÁ ZMĚNA
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      await fetch(ZAPIER_HOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          car,
          phone,
          note,
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString()
        }),
      });

      setSubmitted(true);
    } catch {
      setError("Nepodařilo se odeslat formulář.");
    } finally {
      setIsSending(false);
    }
  };
  // ⬆⬆⬆

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0a1111] relative overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              required
              placeholder="Jméno a Příjmení"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 p-5 rounded-full text-white"
            />
            <input
              required
              placeholder="Značka a model auta"
              value={car}
              onChange={(e) => setCar(e.target.value)}
              className="w-full bg-white/5 p-5 rounded-full text-white"
            />
            <input
              required
              value={phone}
              onChange={handlePhoneChange}
              className="w-full bg-white/5 p-5 rounded-full text-white"
            />
            <textarea
              placeholder="Poznámka (volitelné)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full bg-white/5 p-5 rounded-2xl text-white"
            />
            <button type="submit" disabled={isSending} className="w-full bg-brand py-5 rounded-full font-bold">
              {isSending ? "Odesílám..." : "Chci se poradit →"}
            </button>
            {error && <p className="text-red-400 text-center">{error}</p>}
          </form>
        ) : (
          <div className="text-center text-white">Hotovo 😁</div>
        )}
      </div>
    </section>
  );
});

FormSection.displayName = 'FormSection';
export default FormSection;