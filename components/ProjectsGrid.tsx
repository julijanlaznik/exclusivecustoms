
import React, { useEffect, useState, useRef } from 'react';

const ProjectsGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 18 photos specifically spanned to fill a 6-column grid perfectly
  const photos = [
    { url: '/foto1.webp', alt: 'Porsche 911 GT3', span: 'md:col-span-2 md:row-span-2' },
    { url: '/foto2.webp', alt: 'Lamborghini Huracán', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto3.webp', alt: 'Luxury Showroom', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto4.webp', alt: 'BMW M4 Competition', span: 'md:col-span-2 md:row-span-1' },
    { url: '/foto1.webp', alt: 'Mercedes AMG G63', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto2.webp', alt: 'Ferrari F8 Tributo', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto3.webp', alt: 'Porsche Taycan', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto4.webp', alt: 'Detail laku', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto1.webp', alt: 'Aston Martin DB11', span: 'md:col-span-2 md:row-span-1' },
    { url: '/foto2.webp', alt: 'Tesla Model S Plaid', span: 'md:col-span-2 md:row-span-1' },
    { url: '/foto3.webp', alt: 'McLaren 720S', span: 'md:col-span-2 md:row-span-1' },
    { url: '/foto4.webp', alt: 'Audi R8 V10', span: 'md:col-span-1 md:row-span-2' },
    { url: '/foto1.webp', alt: 'Rolls-Royce Ghost', span: 'md:col-span-2 md:row-span-2' },
    { url: '/foto2.webp', alt: 'Bentley Continental', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto3.webp', alt: 'Corvette C8', span: 'md:col-span-2 md:row-span-1' },
    { url: '/foto4.webp', alt: 'Shelby Cobra', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto1.webp', alt: 'BMW M8', span: 'md:col-span-1 md:row-span-1' },
    { url: '/foto2.webp', alt: 'Jaguar F-Type', span: 'md:col-span-1 md:row-span-1' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="w-full px-[10px]">
        
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight font-sans">
            Podívejte se na naši práci
          </h2>
        </div>

        {/* Updated Bento Grid - Calculated to end evenly on lg:6-col layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-5">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 group transition-all duration-1000 ease-out shadow-sm hover:shadow-xl hover:-translate-y-1 ${photo.span}`}
              style={{ 
                transitionDelay: `${index * 30}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <img 
                src={photo.url} 
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
