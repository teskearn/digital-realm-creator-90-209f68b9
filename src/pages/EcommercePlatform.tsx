import { ShoppingCart, Package, CreditCard, BarChart3 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EcommercePlatform = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Easy Shopping",
      description: "Intuitive shopping experience with advanced search and filtering capabilities.",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory Tracking",
      description: "Real-time inventory management with automated stock alerts.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Multiple payment options with enterprise-grade security.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics",
      description: "Comprehensive analytics dashboard for business insights.",
    },
  ];

  const sampleProducts = [
    {
      name: "Premium Wireless Headphones",
      price: 199.99,
      image: "/lovable-uploads/2d51ee4e-6ed5-4089-a3a6-ce4b37dbcffc.png",
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      name: "Smart Fitness Watch",
      price: 149.99,
      image: "/lovable-uploads/e629cedd-f1aa-4b12-a0f5-1edb88101805.png",
      description: "Track your fitness goals with this advanced smartwatch.",
    },
    {
      name: "4K Ultra HD Camera",
      price: 699.99,
      image: "/lovable-uploads/4ccfa46b-6db3-4d6d-92b6-01d52a9bbb44.png",
      description: "Professional-grade camera for stunning photography.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                E-commerce Platform Demo
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Experience our fully-featured online store solution with advanced inventory management and secure payment processing.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Platform Features</h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to run a successful online store
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sample Products Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Sample Products</h2>
              <p className="mt-4 text-lg text-gray-600">
                Example of product listings and management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price}
                      </span>
                      <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Online Store?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get started with our comprehensive e-commerce solution and transform your business today.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EcommercePlatform;