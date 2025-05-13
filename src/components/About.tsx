import { Shield, Smartphone, QrCode, User, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-16">
      <div className="hero-section bg-[#0EA5E9] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t.about.hero.title}</h2>
            <p className="text-xl text-white/90">{t.about.hero.subtitle}</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.about.mission.title}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">{t.about.mission.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-[#0EA5E9] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{t.about.features.kyc.title}</h3>
              </div>
              <p className="text-gray-600">{t.about.features.kyc.description}</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Smartphone className="w-8 h-8 text-[#0EA5E9] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{t.about.features.mobile.title}</h3>
              </div>
              <p className="text-gray-600">{t.about.features.mobile.description}</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <QrCode className="w-8 h-8 text-[#0EA5E9] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{t.about.features.qr.title}</h3>
              </div>
              <p className="text-gray-600">{t.about.features.qr.description}</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <User className="w-8 h-8 text-[#0EA5E9] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{t.about.features.support.title}</h3>
              </div>
              <p className="text-gray-600">{t.about.features.support.description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0EA5E9] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{t.about.stats.verification.percentage}</div>
              <div className="text-sm text-white/80">{t.about.stats.verification.label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{t.about.stats.support.time}</div>
              <div className="text-sm text-white/80">{t.about.stats.support.label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{t.about.stats.users.count}</div>
              <div className="text-sm text-white/80">{t.about.stats.users.label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{t.about.stats.security.count}</div>
              <div className="text-sm text-white/80">{t.about.stats.security.label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 