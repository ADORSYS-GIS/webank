import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-bank-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">Web<span className="text-bank-blue">ank</span></div>
            <p className="text-gray-300 mb-6">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.products.title}</h3>
            <ul className="space-y-4">
              {t.footer.products.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.company.title}</h3>
            <ul className="space-y-4">
              {t.footer.company.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.help.title}</h3>
            <ul className="space-y-4">
              {t.footer.help.items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t.footer.copyright}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="/terms" className="hover:text-white transition-colors">
                {t.footer.terms}
              </a>
              <span>·</span>
              <a href="/privacy" className="hover:text-white transition-colors">
                {t.footer.privacy}
              </a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Legal Notice</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-left mt-4">
            {t.footer.regulation}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
