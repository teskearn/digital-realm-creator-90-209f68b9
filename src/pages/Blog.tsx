
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
      readTime: "6