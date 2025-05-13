import { Card } from "@/components/ui/card";

const Features = () => {
  const screenshots = [
    {
      image: "/images/Principal.png",
      title: "Interface Principale",
      description: "Une interface moderne et intuitive pour gérer vos finances"
    },
    {
      image: "/images/Setting.png",
      title: "Paramètres",
      description: "Personnalisez votre expérience bancaire selon vos besoins"
    },
    {
      image: "/images/Identity.png",
      title: "Vérification d'Identité",
      description: "Processus sécurisé et simple pour la vérification de votre identité"
    },
    {
      image: "/images/Phone_Number.png",
      title: "Gestion du Numéro",
      description: "Gérez facilement votre numéro de téléphone associé"
    },
    {
      image: "/images/Agent.png",
      title: "Transactions Agent-Client",
      description: "Effectuez des transactions sécurisées entre clients et agents bancaires"
    },
    {
      image: "/images/Contacts.png",
      title: "Gestion des Contacts",
      description: "Organisez vos contacts pour des transferts rapides"
    },
    {
      image: "/images/Dashbord1.png",
      title: "Tableau de Bord",
      description: "Visualisez l'ensemble de vos activités bancaires"
    }
  ];

  return (
    <section id="fonctionnalites" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-bank-navy mb-2">
            Fonctionnalités <span className="text-bank-blue">Innovantes</span>
          </h2>
          <p className="text-base text-bank-gray max-w-2xl mx-auto">
            Une application bancaire moderne qui simplifie la gestion de vos finances
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {screenshots.map((screenshot, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xs font-semibold text-bank-navy mb-0.5">
                  {screenshot.title}
                </h3>
                <p className="text-[10px] text-bank-gray line-clamp-2">
                  {screenshot.description}
                </p>
              </div>
          </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
