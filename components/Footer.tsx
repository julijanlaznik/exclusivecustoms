
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm text-gray-400 mb-2">
          &copy; {new Date().getFullYear()} Exclusive Customs Praha. Všechna práva vyhrazena.
        </p>
        <p className="text-xs text-gray-300">
          Praha + Středočeský kraj | Specialista na PPF ochranné fólie
        </p>
      </div>
    </footer>
  );
};

export default Footer;
