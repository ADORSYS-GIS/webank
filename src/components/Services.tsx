import { Smartphone, Shield, PiggyBank, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bank-navy">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-bank-gray max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Smartphone className="text-bank-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-bank-navy mb-2">
              {t.services.mobileAccount}
            </h3>
            <p className="text-bank-gray">
              {t.services.mobileAccountDesc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Shield className="text-bank-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-bank-navy mb-2">
              {t.services.security}
            </h3>
            <p className="text-bank-gray">
              {t.services.securityDesc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <PiggyBank className="text-bank-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-bank-navy mb-2">
              {t.services.savings}
            </h3>
            <p className="text-bank-gray">
              {t.services.savingsDesc}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Send className="text-bank-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-bank-navy mb-2">
              {t.services.transfers}
            </h3>
            <p className="text-bank-gray">
              {t.services.transfersDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
