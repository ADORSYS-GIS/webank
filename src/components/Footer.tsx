
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bank-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">Bank<span className="text-bank-blue">Haven</span></div>
            <p className="text-gray-300 mb-6">
              La banque qui s'adapte à votre vie, pas l'inverse. Services financiers innovants pour particuliers et entreprises.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Produits</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Compte courant</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Épargne</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investissements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Assurances</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Prêts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Entreprise</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Presse</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partenaires</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Aide</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nous contacter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sécurité</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Confidentialité</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 BankHaven. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-left mt-4">
            BankHaven est un établissement financier agréé et réglementé. Les services bancaires sont soumis à conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
