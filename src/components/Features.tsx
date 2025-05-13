import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { Smartphone, Shield, Zap, PiggyBank } from 'lucide-react';

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <Smartphone className="w-12 h-12 text-bank-blue" />,
      title: t.features.items.mobile.title,
      description: t.features.items.mobile.description
    },
    {
      icon: <Shield className="w-12 h-12 text-bank-blue" />,
      title: t.features.items.security.title,
      description: t.features.items.security.description
    },
    {
      icon: <Zap className="w-12 h-12 text-bank-blue" />,
      title: t.features.items.transfers.title,
      description: t.features.items.transfers.description
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-bank-blue" />,
      title: t.features.items.savings.title,
      description: t.features.items.savings.description
    }
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 