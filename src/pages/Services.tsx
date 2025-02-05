
import { Code, ShoppingCart, Smartphone, Globe, Zap, LineChart, Layout, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
  const mainServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Tailored web solutions built with cutting-edge technologies to meet your specific business needs.",
      features: [
        "Custom web applications",
        "Progressive Web Apps (PWA)",
        "API development and integration",
        "Cloud deployment and hosting",
      ],
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Powerful online stores that drive sales and growth with seamless user experience.",
      features: [
        "Custom e-commerce platforms",
        "Shopping cart integration",
        "Payment gateway setup",
        "Inventory management systems",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "App maintenance and updates",
        "App Store optimization",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to boost your online presence and reach your target audience.",
      features: [
        "Search Engine Optimization (SEO)",
        "Social media marketing",
        "Content marketing",
        "Email marketing campaigns",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Enhance your website's speed and performance.",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights to improve your digital presence.",
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Create engaging and intuitive user experiences.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Services",
      description: "Protect your digital assets with robust security measures.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>
          </div>
        </div>

        {/* Main Services */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Additional Services</h2>
              <p className="mt-4 text-lg text-gray-600">
                Complementary solutions to enhance your digital presence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss your project requirements
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
