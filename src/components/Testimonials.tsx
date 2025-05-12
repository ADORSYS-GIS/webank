
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bank-navy">
            Ce que <span className="text-bank-blue">disent</span> nos clients
          </h2>
          <p className="mt-4 text-lg text-bank-gray max-w-3xl mx-auto">
            Des milliers de personnes et d'entreprises font déjà confiance à BankHaven pour leurs besoins financiers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-none">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="https://source.unsplash.com/random/100x100/?woman,portrait,1" alt="Sophie Martin" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-bank-navy">Sophie Martin</h4>
                  <p className="text-sm text-bank-gray">Freelance Designer</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-bank-gray mb-4">
                "BankHaven a révolutionné ma gestion financière. L'application est intuitive, les transferts instantanés et le service client toujours disponible. Je recommande vivement !"
              </p>
              <p className="italic text-sm text-bank-gray opacity-70">Cliente depuis 2 ans</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-none">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="https://source.unsplash.com/random/100x100/?man,portrait,1" alt="Thomas Dubois" />
                  <AvatarFallback>TD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-bank-navy">Thomas Dubois</h4>
                  <p className="text-sm text-bank-gray">Entrepreneur</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-bank-gray mb-4">
                "Les outils de comptabilité pour entreprise ont changé notre manière de gérer nos finances. Nous économisons temps et argent, et pouvons nous concentrer sur notre cœur de métier."
              </p>
              <p className="italic text-sm text-bank-gray opacity-70">Client depuis 3 ans</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-none">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="https://source.unsplash.com/random/100x100/?woman,portrait,2" alt="Marie Lefèvre" />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-bank-navy">Marie Lefèvre</h4>
                  <p className="text-sm text-bank-gray">Étudiante</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-bank-gray mb-4">
                "En tant qu'étudiante, j'adore l'offre gratuite de BankHaven. Je peux gérer mon budget facilement, et les catégories de dépenses m'aident à économiser pour mes projets futurs."
              </p>
              <p className="italic text-sm text-bank-gray opacity-70">Cliente depuis 1 an</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
