import { Globe, Code, ShoppingCart, Smartphone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Web Development",
      description: "Tailored web solutions built with cutting-edge technologies.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Solutions",
      description: "Powerful online stores that drive sales and growth.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform apps for iOS and Android.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to boost your online presence.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-shift">
                Transforming Ideas into
                <br />
                Digital Reality
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We build beautiful, functional websites and applications that help businesses grow and succeed in the digital world.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/portfolio"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
              <p className="mt-4 text-lg text-gray-600">
                Comprehensive solutions for your digital needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;