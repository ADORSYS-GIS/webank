import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const Terms = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {t.terms.title}
          </h1>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.terms.kycTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t.terms.kyc}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.terms.unlimitedTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t.terms.unlimited}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.terms.feesTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t.terms.fees}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.terms.currencyTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {t.terms.currency}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms; 