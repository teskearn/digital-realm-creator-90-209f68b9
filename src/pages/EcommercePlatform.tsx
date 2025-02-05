import { ShoppingCart, Package, CreditCard, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EcommercePlatform = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      image: "/lovable-uploads/2d51ee4e-6ed5-4089-a3a6-ce4b37dbcffc.png",
      description: "High-quality wireless headphones with noise cancellation",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 149.99,
      image: "/lovable-uploads/45ff1a44-fb43-46e9-9501-a597d82a2891.png",
      description: "Track your fitness goals with this advanced smartwatch",
    },
    {
      id: 3,
      name: "Professional Camera Kit",
      price: 899.99,
      image: "/lovable-uploads/4ccfa46b-6db3-4d6d-92b6-01d52a9bbb44.png",
      description: "Complete professional photography kit with accessories",
    },
  ];

  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-primary" />,
      title: "Easy Shopping",
      description: "Intuitive shopping experience with smart cart management",
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: "Inventory Tracking",
      description: "Real-time inventory management and stock alerts",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: "Secure Payments",
      description: "Multiple payment options with advanced security",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Analytics",
      description: "Detailed sales and customer behavior analytics",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">E-commerce Platform Demo</h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Experience our fully-featured online store platform with inventory management
                and secure payment processing
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
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Sample Products</h2>
              <p className="mt-4 text-lg text-gray-600">
                Browse our collection of premium products
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price}
                      </span>
                      <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Selling Online?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Launch your online store today with our comprehensive e-commerce solution
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EcommercePlatform;