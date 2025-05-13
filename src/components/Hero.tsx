import { Button } from '@/components/ui/button';
import { CreditCard, Shield, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="accueil" className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bank-navy leading-tight">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg text-bank-gray max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="https://dev.webank.gis.ssegning.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-bank-blue hover:bg-blue-600 text-white">{t.nav.openAccount}</Button>
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Smartphone className="text-bank-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-bank-navy">{t.hero.mobile}</h3>
                <p className="text-bank-gray text-sm mt-2">{t.hero.mobileDesc}</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="text-bank-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-bank-navy">{t.hero.security}</h3>
                <p className="text-bank-gray text-sm mt-2">{t.hero.securityDesc}</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <CreditCard className="text-bank-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-bank-navy">{t.hero.noFees}</h3>
                <p className="text-bank-gray text-sm mt-2">{t.hero.noFeesDesc}</p>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Globe className="text-bank-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-bank-navy">{t.hero.browsers}</h3>
                <p className="text-bank-gray text-sm mt-2">{t.hero.browsersDesc}</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <span className="px-3 py-1 bg-blue-100 text-bank-blue rounded-full text-sm">Google Chrome</span>
                  <span className="px-3 py-1 bg-blue-100 text-bank-blue rounded-full text-sm">Firefox</span>
                  <span className="px-3 py-1 bg-blue-100 text-bank-blue rounded-full text-sm">Edge</span>
                  <span className="px-3 py-1 bg-blue-100 text-bank-blue rounded-full text-sm">Brave</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col lg:flex-row items-center gap-8">
            {/* Bank Card Preview */}
            <div className="w-full h-[500px] bg-gradient-to-br from-bank-blue to-blue-400 rounded-3xl shadow-xl flex items-center justify-center">
              <img src="/images/qrcode_dev.webank.gis.ssegning.com.webp" alt="QR Code Webank" className="w-full h-full object-contain p-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
