
import { Globe, Code, ShoppingCart, Smartphone, Award, Clock, Users, Wrench } from "lucide-react";
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

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Team",
      description: "Highly skilled developers and designers with years of experience.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "We deliver projects on time, every time.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Focused",
      description: "Your success is our priority. We listen and deliver results.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Latest Technology",
      description: "We use cutting-edge tools and frameworks for optimal results.",
    },
  ];

  const testimonials = [
    {
      quote: "WebDev Ltd transformed our online presence completely. Their team's expertise and dedication were impressive.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc",
    },
    {
      quote: "The e-commerce solution they built helped us increase our online sales by 200%. Highly recommended!",
      author: "Michael Chen",
      position: "Marketing Director",
      company: "GlobalStore",
    },
    {
      quote: "Professional, responsive, and incredibly talented team. They delivered beyond our expectations.",
      author: "Emma Davis",
      position: "Product Manager",
      company: "InnovateCo",
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

        {/* Why Choose Us Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                What sets us apart from the competition
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-gray-600">
                Hear from businesses we've helped succeed
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.position}</p>
                    <p className="text-primary">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Request a Free Consultation
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
