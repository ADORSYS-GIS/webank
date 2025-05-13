import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  return (
    <section id="tarifs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bank-navy">
            Transparent <span className="text-bank-blue">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-bank-gray max-w-3xl mx-auto">
            Rates adapted to your needs, with no hidden fees. All our transactions are in FCFA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <Card className="border-2 border-gray-100">
            <CardHeader>
              <CardTitle className="text-xl">Basic</CardTitle>
              <CardDescription>Ideal for individuals</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">Free</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="text-bank-blue mr-2" size={16} />
                  <span>Free account opening</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-bank-blue mr-2" size={16} />
                  <span>Free transfers up to 10,000 FCFA*</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-bank-blue mr-2" size={16} />
                  <span>Free balance checking</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-bank-blue mr-2" size={16} />
                  <span>Basic customer support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-2 border-bank-blue relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-bank-blue text-white px-4 py-1 rounded-full text-sm">Popular</span>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription>For regular users</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">Free</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="text-bank-blue mr-2" size={16} />
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-bank-blue mr-2" size={16} />
                  <span>Unlimited transfers**</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-bank-blue mr-2" size={16} />
                  <span>Transaction fee (0.5%)</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-bank-blue mr-2" size={16} />
                  <span>Priority customer support</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-bank-blue mr-2" size={16} />
                  <span>Detailed transaction history</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-bank-gray">
            * Free transfers up to 10,000 FCFA for users who have not completed their KYC. This limit applies at all times until KYC is fully validated.
            <br />
            ** Unlimited transfers available only after complete KYC validation.
            <br />
            Transaction fees may vary depending on the amount and type of operation.
            <br />
            All amounts are in FCFA (CFA Franc).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
