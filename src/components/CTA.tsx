
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-bank-blue to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à rejoindre la banque du futur ?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              Téléchargez notre application et découvrez une nouvelle façon de gérer votre argent. Ouvrez un compte en moins de 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-bank-blue hover:bg-blue-50 flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5486 12.5471C17.5486 10.5163 19.0487 9.40511 19.0962 9.3764C18.0061 7.79508 16.3199 7.58891 15.7424 7.56725C14.2898 7.41357 12.9072 8.42642 12.1698 8.42642C11.4324 8.42642 10.2823 7.58891 8.99968 7.61057C7.37844 7.63223 5.85837 8.55808 5.02086 10.0073C3.28965 12.9058 4.55226 17.1573 6.21851 19.1448C7.05602 20.1143 8.00353 21.2038 9.2445 21.1605C10.4638 21.1172 10.9547 20.4014 12.3914 20.4014C13.8064 20.4014 14.2756 21.1605 15.5383 21.1388C16.8225 21.1172 17.6384 20.1577 18.4542 19.1882C19.3801 18.0554 19.7627 16.9442 19.7843 16.8793C19.7627 16.8576 17.5702 15.9318 17.5486 12.5471Z" fill="currentColor"/>
                  <path d="M15.0909 5.46589C15.7617 4.62839 16.2092 3.48554 16.0772 2.32104C15.0909 2.36435 13.8501 2.9919 13.1576 3.80773C12.5301 4.53678 11.9893 5.72294 12.1213 6.84413C13.2208 6.93074 14.4199 6.30336 15.0909 5.46589Z" fill="currentColor"/>
                </svg>
                App Store
              </Button>
              <Button className="bg-white text-bank-blue hover:bg-blue-50 flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.53605 2.2654C3.258 2.55335 3 3.03817 3 3.71692V20.2831C3 20.9618 3.258 21.4466 3.53605 21.7346L3.62405 21.8153L13.6478 11.9999V11.8807L3.62405 2.18469L3.53605 2.2654Z" fill="currentColor"/>
                  <path d="M17.999 16.2471L13.648 12.0001V11.8809L17.9992 7.63379L18.0985 7.69232L23.1951 10.5531C24.6116 11.3689 24.6116 12.6491 23.1951 13.4648L18.0985 16.1886L17.999 16.2471Z" fill="currentColor"/>
                  <path d="M18.0984 16.1886L13.6478 12L3.53601 21.7346C4.04414 22.2686 4.86747 22.3272 5.78338 21.7933L18.0984 16.1886Z" fill="currentColor"/>
                  <path d="M3.53603 2.26527C4.03437 1.75691 4.86748 1.81543 5.7834 2.32379L18.0984 7.9284L13.6478 11.9998L3.53603 2.26527Z" fill="currentColor"/>
                </svg>
                Google Play
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-60 h-[450px]">
              <div className="absolute inset-0 bg-black rounded-3xl shadow-xl overflow-hidden border-8 border-gray-800">
                <div className="absolute inset-0 p-2 bg-gradient-to-br from-gray-900 to-black overflow-hidden rounded-2xl flex flex-col">
                  <div className="h-6 flex items-center justify-center">
                    <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="flex-1 p-2 flex flex-col space-y-4">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-bank-blue flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-white" />
                        </div>
                        <div className="ml-3">
                          <div className="h-2 w-24 bg-gray-600 rounded-full"></div>
                          <div className="h-2 w-16 bg-gray-700 rounded-full mt-1"></div>
                        </div>
                      </div>
                      <div className="h-24 bg-gradient-to-r from-bank-blue to-blue-600 rounded-lg"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-800 rounded-lg p-3 h-28">
                        <div className="h-2 w-12 bg-gray-600 rounded-full mb-2"></div>
                        <div className="h-16 bg-gray-700 rounded-lg"></div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 h-28">
                        <div className="h-2 w-12 bg-gray-600 rounded-full mb-2"></div>
                        <div className="h-16 bg-gray-700 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="h-2 w-full bg-gray-600 rounded-full mb-2"></div>
                      <div className="h-2 w-3/4 bg-gray-600 rounded-full mb-2"></div>
                      <div className="h-2 w-1/2 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="mt-auto flex justify-around bg-gray-800 rounded-lg p-2">
                      <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                      <div className="h-6 w-6 rounded-full bg-bank-blue"></div>
                      <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
