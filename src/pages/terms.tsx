import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Terms from '@/components/Terms';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Terms />
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage; 