
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="tarifs" className="py-20 bg-bank-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bank-navy">
            Tarifs <span className="text-bank-blue">Transparents</span>
          </h2>
          <p className="mt-4 text-lg text-bank-gray max-w-3xl mx-auto">
            Choisissez l'offre qui correspond à vos besoins, sans frais cachés et avec la liberté de changer à tout moment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-bank-navy">Essentiel</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-bank-navy">€0</span>
                <span className="text-bank-gray">/mois</span>
              </div>
              <p className="mt-2 text-bank-gray text-sm">Pour démarrer</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Compte courant gratuit</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Carte de débit standard</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">3 retraits gratuits/mois</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Application mobile</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray text-sm opacity-50">Virements SEPA classiques</span>
              </li>
            </ul>
            
            <Button className="w-full bg-bank-blue hover:bg-blue-600 text-white">Choisir ce forfait</Button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-bank-blue relative transform hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 right-0 bg-bank-blue text-white text-xs font-bold px-3 py-1 transform translate-y-[-50%] rounded">POPULAIRE</div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-bank-navy">Premium</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-bank-navy">€4.90</span>
                <span className="text-bank-gray">/mois</span>
              </div>
              <p className="mt-2 text-bank-gray text-sm">Pour usage quotidien</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Tout de l'offre Essentiel</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Carte Visa Premier</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Retraits illimités</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Assurance voyage</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Support prioritaire</span>
              </li>
            </ul>
            
            <Button className="w-full bg-bank-blue hover:bg-blue-600 text-white">Choisir ce forfait</Button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-bank-navy">Business</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-bank-navy">€9.90</span>
                <span className="text-bank-gray">/mois</span>
              </div>
              <p className="mt-2 text-bank-gray text-sm">Pour les entrepreneurs</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Tout de l'offre Premium</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Compte professionnel</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Outils comptables</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Sous-comptes multiples</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-bank-gray">Conseiller personnel</span>
              </li>
            </ul>
            
            <Button className="w-full bg-bank-blue hover:bg-blue-600 text-white">Choisir ce forfait</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
