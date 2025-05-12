
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-bank-navy">Bank<span className="text-bank-blue">Haven</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-bank-navy hover:text-bank-blue font-medium transition-colors">Accueil</a>
            <a href="#services" className="text-bank-navy hover:text-bank-blue font-medium transition-colors">Services</a>
            <a href="#tarifs" className="text-bank-navy hover:text-bank-blue font-medium transition-colors">Tarifs</a>
            <a href="#temoignages" className="text-bank-navy hover:text-bank-blue font-medium transition-colors">Témoignages</a>
            <Button className="bg-bank-blue hover:bg-blue-600 text-white">Ouvrir un compte</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-bank-navy hover:text-bank-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1 bg-white px-4">
            <a href="#accueil" className="block py-2 text-bank-navy hover:text-bank-blue font-medium">Accueil</a>
            <a href="#services" className="block py-2 text-bank-navy hover:text-bank-blue font-medium">Services</a>
            <a href="#tarifs" className="block py-2 text-bank-navy hover:text-bank-blue font-medium">Tarifs</a>
            <a href="#temoignages" className="block py-2 text-bank-navy hover:text-bank-blue font-medium">Témoignages</a>
            <Button className="w-full bg-bank-blue hover:bg-blue-600 text-white mt-4">Ouvrir un compte</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
