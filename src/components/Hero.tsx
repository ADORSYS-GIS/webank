
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
            {/* Smartphone avec QR Code */}
            <div className="w-full lg:w-2/3 flex justify-center items-center">
              <div className="relative max-w-[300px] mx-auto">
                <img 
                  src="/lovable-uploads/7229b857-4cfa-4089-8f2c-7f2b36072774.png" 
                  alt="Smartphone Wenank" 
                  className="w-full h-auto"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <QrCode className="w-32 h-32 text-bank-navy" strokeWidth={1} />
                    <p className="text-xs font-medium text-center mt-2 text-bank-navy bg-white/80 px-2 py-1 rounded-md">
                      Scanner pour télécharger
                    </p>
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
