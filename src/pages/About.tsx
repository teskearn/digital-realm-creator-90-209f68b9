
import { Users, Award, Target, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=john",
      bio: "15+ years of experience in web development and digital transformation.",
    },
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=sarah",
      bio: "Full-stack developer with expertise in React and Node.js.",
    },
    {
      name: "Michael Chen",
      role: "Design Director",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=michael",
      bio: "Award-winning designer with a passion for user experience.",
    },
    {
      name: "Emma Davis",
      role: "Marketing Manager",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=emma",
      bio: "Digital marketing specialist with proven ROI strategies.",
    },
  ];

  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our top priority. We listen, understand, and deliver.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and approaches.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Reliability",
      description: "Delivering quality solutions on time, every time.",
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About WebDev Ltd</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're a team of passionate developers, designers, and digital strategists
                committed to transforming businesses through technology.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To empower businesses with innovative digital solutions that drive growth,
                  enhance efficiency, and create lasting value for our clients and their customers.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the leading digital transformation partner for businesses worldwide,
                  known for our excellence, innovation, and commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
              <p className="mt-4 text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
              <p className="mt-4 text-lg text-gray-600">
                The talented people behind our success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
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

export default About;
