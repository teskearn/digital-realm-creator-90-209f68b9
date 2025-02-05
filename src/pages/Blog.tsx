import { useState } from "react";
import { Calendar, User, Tag, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to WebAssembly.",
      image: "https://placehold.co/800x400",
      date: "March 15, 2024",
      author: "John Smith",
      category: "Web Development",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Maximizing E-commerce Conversion Rates",
      excerpt: "Learn proven strategies to optimize your e-commerce platform and increase conversion rates.",
      image: "https://placehold.co/800x400",
      date: "March 12, 2024",
      author: "Sarah Johnson",
      category: "E-commerce",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "A comprehensive comparison of native and cross-platform mobile app development approaches.",
      image: "https://placehold.co/800x400",
      date: "March 10, 2024",
      author: "Michael Chen",
      category: "Mobile Development",
      readTime: "6 min read",
    },
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="mr-2" size={16} />
                  <span>{post.date}</span>
                  <User className="ml-4 mr-2" size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center mt-2 text-gray-500 text-sm">
                  <Tag className="mr-2" size={16} />
                  <span>{post.category}</span>
                  <span className="ml-auto">{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
