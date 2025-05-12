
import { Button } from '@/components/ui/button';
import { CreditCard, Shield, Smartphone, QrCode, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bank-navy leading-tight">
              La banque qui <span className="text-bank-blue">s'adapte</span> à votre vie
            </h1>
            <p className="mt-6 text-lg text-bank-gray max-w-2xl">
              Wenank vous offre des solutions bancaires modernes, sécurisées et accessibles. Gérez vos finances en toute simplicité où que vous soyez.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-bank-blue hover:bg-blue-600 text-white">Ouvrir un compte</Button>
              <Button variant="outline" className="border-bank-blue text-bank-blue hover:bg-blue-50">
                En savoir plus
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Smartphone className="text-bank-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-bank-navy">100% Mobile</h3>
                <p className="text-bank-gray text-sm mt-2">Gérez votre argent depuis votre smartphone</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="text-bank-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-bank-navy">Sécurité Maximale</h3>
                <p className="text-bank-gray text-sm mt-2">Vos données et transactions toujours protégées</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <CreditCard className="text-bank-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-bank-navy">Zéro Frais Cachés</h3>
                <p className="text-bank-gray text-sm mt-2">Transparence totale sur tous nos tarifs</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col lg:flex-row items-center gap-8">
            {/* Bank Card Preview */}
            <div className="w-full lg:w-2/3 h-[500px] bg-gradient-to-br from-bank-blue to-blue-400 rounded-3xl shadow-xl flex items-center justify-center">
              <div className="bg-white w-3/4 h-3/4 rounded-2xl shadow-lg flex flex-col p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-2 bg-bank-blue"></div>
                <h3 className="text-xl font-bold text-bank-navy">Carte Wenank</h3>
                <div className="mt-auto h-48 w-full bg-gradient-to-r from-bank-blue to-blue-600 rounded-xl p-4 flex flex-col justify-between shadow-md">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-8 bg-yellow-300 rounded-md"></div>
                    <div className="text-white">
                      <p className="text-xs opacity-80">Balance</p>
                      <p className="font-bold">€1,250.00</p>
                    </div>
                  </div>
                  <div className="text-white">
                    <p className="opacity-80 text-xs">**** **** **** 3456</p>
                    <p className="mt-2 font-medium">JEAN DUPONT</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-bank-gray">Dernières transactions</p>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span>Supermarché</span>
                      <span className="font-medium">-€42.50</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Salaire</span>
                      <span className="font-medium text-green-600">+€2,450.00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Restaurant</span>
                      <span className="font-medium">-€28.75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent QR Code */}
            <div className="lg:w-1/3 flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg border-2 border-bank-blue/20">
              <h3 className="text-xl font-bold text-bank-navy mb-4">Téléchargez l'application</h3>
              <div className="bg-white p-4 rounded-2xl shadow-md border-4 border-bank-blue">
                <QrCode className="w-48 h-48 text-bank-navy" strokeWidth={1.5} />
              </div>
              <p className="text-bank-gray text-center mt-4 font-medium">Scannez pour installer Wenank</p>
              <Button className="mt-4 bg-bank-blue hover:bg-blue-600 text-white flex items-center gap-2">
                <Download size={18} />
                Télécharger
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
