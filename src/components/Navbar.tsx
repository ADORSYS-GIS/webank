import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-bank-navy">Web<span className="text-bank-blue">ank</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-bank-navy hover:text-bank-blue transition-colors">
              {t.nav.home}
            </a>
            <a href="#about" className="text-bank-navy hover:text-bank-blue transition-colors">
              {t.nav.about}
            </a>
            <a href="#services" className="text-bank-navy hover:text-bank-blue transition-colors">
              {t.nav.services}
            </a>
            <a href="#fonctionnalites" className="text-bank-navy hover:text-bank-blue font-medium transition-colors">
              {t.nav.features}
            </a>
            <a href="#tarifs" className="text-bank-navy hover:text-bank-blue transition-colors">
              {t.nav.pricing}
            </a>
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-bank-navy hover:text-bank-blue">
                  <Globe size={20} />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <button
                    onClick={() => setLanguage('fr')}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === 'fr' ? 'text-bank-blue' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'text-bank-blue' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    English
                  </button>
                </div>
              </div>
              <a href="https://dev.webank.gis.ssegning.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-bank-blue hover:bg-blue-600 text-white">{t.nav.openAccount}</Button>
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-bank-navy hover:text-bank-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1 bg-white px-4">
            <div className="flex flex-col space-y-4">
              <a href="#accueil" className="text-bank-navy hover:text-bank-blue transition-colors">
                {t.nav.home}
              </a>
              <a href="#about" className="text-bank-navy hover:text-bank-blue transition-colors">
                {t.nav.about}
              </a>
              <a href="#services" className="text-bank-navy hover:text-bank-blue transition-colors">
                {t.nav.services}
              </a>
              <a href="#fonctionnalites" className="text-bank-navy hover:text-bank-blue transition-colors">
                {t.nav.features}
              </a>
              <a href="#tarifs" className="text-bank-navy hover:text-bank-blue transition-colors">
                {t.nav.pricing}
              </a>
            </div>
            <div className="py-2">
              <div className="flex items-center space-x-2">
                <Globe size={20} className="text-bank-navy" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'fr' | 'en')}
                  className="text-bank-navy bg-transparent border-none focus:ring-0"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
            <a href="https://dev.webank.gis.ssegning.com/" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-bank-blue hover:bg-blue-600 text-white mt-4">
                {t.nav.openAccount}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
