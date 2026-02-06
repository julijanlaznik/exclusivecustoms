
import React, { useEffect, useState, useRef } from 'react';

interface PhotoItemProps {
  photo: {
    url: string;
    alt: string;
    span: string;
  };
  index: number;
}

const PhotoCard: React.FC<PhotoItemProps> = ({ photo, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15,
        // Spustíme animaci o něco dříve, než je fotka plně vidět, pro plynulejší pocit
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gray-50 group transition-all duration-[1200ms] ease-out shadow-sm hover:shadow-xl hover:-translate-y-1 ${photo.span} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ 
        // Jemné fázové zpoždění pro fotky, které jsou vedle sebe, aby nelezly ven úplně naráz
        transitionDelay: `${(index % 3) * 100}ms` 
      }}
    >
      <img 
        src={photo.url} 
        alt={photo.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const ProjectsGrid: React.FC = () => {
  const photos = [
    { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200', alt: 'Porsche 911 GT3', span: 'md:col-span-2 md:row-span-2' },
    { url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800', alt: 'Lamborghini Huracán', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800', alt: 'Luxury Showroom', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200', alt: 'BMW M4 Competition', span: 'md:col-span-2 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800', alt: 'Mercedes AMG G63', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&q=80&w=800', alt: 'Ferrari F8 Tributo', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800', alt: 'Porsche Taycan', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&q=80&w=800', alt: 'Detail laku', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1603584173870-7f3ca974611d?auto=format&fit=crop&q=80&w=800', alt: 'Aston Martin DB11', span: 'md:col-span-2 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1621259182978-f09e5e2ca091?auto=format&fit=crop&q=80&w=800', alt: 'Tesla Model S Plaid', span: 'md:col-span-2 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800', alt: 'McLaren 720S', span: 'md:col-span-2 md:row-span-1' },
    // Fix: Added missing opening quote for 'alt' value
    { url: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&q=80&w=800', alt: 'Audi R8 V10', span: 'md:col-span-1 md:row-span-2' },
    { url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=1200', alt: 'Rolls-Royce Ghost', span: 'md:col-span-2 md:row-span-2' },
    { url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800', alt: 'Bentley Continental', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=800', alt: 'Corvette C8', span: 'md:col-span-2 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800', alt: 'Shelby Cobra', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800', alt: 'BMW M8', span: 'md:col-span-1 md:row-span-1' },
    { url: 'https://images.unsplash.com/photo-1606148624536-e6962f3a8f4c?auto=format&fit=crop&q=80&w=800', alt: 'Jaguar F-Type', span: 'md:col-span-1 md:row-span-1' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-full px-[10px]">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight font-sans">
            Podívejte se na naši práci
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-5">
          {photos.map((photo, index) => (
            <PhotoCard key={index} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
