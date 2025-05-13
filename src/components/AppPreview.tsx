import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { Smartphone, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const AppPreview = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: <Smartphone className="w-10 h-10 text-bank-blue" />,
      title: t.appPreview.features.interface.title,
      description: t.appPreview.features.interface.description
    },
    {
      icon: <Shield className="w-10 h-10 text-bank-blue" />,
      title: t.appPreview.features.security.title,
      description: t.appPreview.features.security.description
    },
    {
      icon: <Zap className="w-10 h-10 text-bank-blue" />,
      title: t.appPreview.features.transactions.title,
      description: t.appPreview.features.transactions.description
    }
  ];

  const appScreenshots = [
    'Principal.png',
    'My_code.png',
    'Setting.png',
    'Identity.png',
    'Phone_Number.png',
    'Contacts.png',
    'Agent.png',
    'Dashbord1.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % appScreenshots.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? appScreenshots.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => 
      (current + 1) % appScreenshots.length
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {t.appPreview.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.appPreview.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="relative w-full aspect-[3/4] max-w-lg mx-auto">
              <div className="relative w-full h-full">
                <img
                  src={`/images/${appScreenshots[activeIndex]}`}
                  alt={`App Screenshot ${activeIndex + 1}`}
                  className="w-full h-full object-contain rounded-lg shadow-xl"
                />
                
                {/* Navigation Buttons */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-white/80 hover:bg-white shadow-lg"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="h-6 w-6 text-bank-blue" />
                  </Button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-full bg-white/80 hover:bg-white shadow-lg"
                    onClick={handleNext}
                  >
                    <ChevronRight className="h-6 w-6 text-bank-blue" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview; 