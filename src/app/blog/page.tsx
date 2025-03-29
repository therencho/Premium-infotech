"use client";

import { PageHeader } from "@/components/ui/page-header";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";

// Sample blog data - normally this would come from a CMS or API
const blogPosts = [
  {
    id: "cloud-migration-strategies",
    title: "5 Cloud Migration Strategies for Business Growth",
    excerpt: "Learn about the different migration strategies that can help your business scale efficiently and reduce infrastructure costs.",
    date: "March 12, 2023",
    readTime: "8 min read",
    imageUrl: "/images/blog/cloud-migration.svg",
    category: "Cloud Computing"
  },
  {
    id: "cybersecurity-threats-2023",
    title: "Top Cybersecurity Threats to Watch in 2023",
    excerpt: "Stay ahead of evolving digital threats with our expert analysis of the most significant cybersecurity challenges businesses face today.",
    date: "April 5, 2023",
    readTime: "6 min read",
    imageUrl: "/images/blog/cybersecurity.svg",
    category: "Security"
  },
  {
    id: "it-outsourcing-benefits",
    title: "The Strategic Benefits of IT Outsourcing",
    excerpt: "Discover how outsourcing your IT operations can lead to cost savings, access to specialized talent, and improved business focus.",
    date: "May 18, 2023",
    readTime: "5 min read",
    imageUrl: "/images/blog/it-outsourcing.svg",
    category: "Managed Services"
  },
  {
    id: "digital-transformation-guide",
    title: "A Comprehensive Guide to Digital Transformation",
    excerpt: "Navigate the complexities of digital transformation with our step-by-step approach to modernizing your business technology.",
    date: "June 22, 2023",
    readTime: "10 min read",
    imageUrl: "/images/blog/digital-transformation.svg",
    category: "Digital Transformation"
  },
  {
    id: "data-backup-solutions",
    title: "Modern Data Backup and Recovery Solutions",
    excerpt: "Protect your business from data loss with these cutting-edge backup strategies and disaster recovery best practices.",
    date: "July 7, 2023",
    readTime: "7 min read",
    imageUrl: "/images/blog/data-analytics.svg",
    category: "Data Management"
  },
  {
    id: "ai-business-applications",
    title: "Practical AI Applications for Small to Medium Businesses",
    excerpt: "Explore how artificial intelligence can be leveraged by companies of all sizes to streamline operations and drive innovation.",
    date: "August 15, 2023",
    readTime: "9 min read",
    imageUrl: "/images/blog/ai-business.svg",
    category: "Innovation"
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHeader 
        title="Our Blog" 
        subtitle="Insights, tips, and updates from our IT experts"
        pageName="Blog"
      />
      
      <main className="container mx-auto py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[#1B3C68] mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-[rgb(97,224,0)]/20 flex items-center justify-center mr-3">
                <span className="w-4 h-4 rounded-full bg-[rgb(97,224,0)]"></span>
              </span>
              Latest Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`} className="block h-full">
                    <article className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[rgb(97,224,0)]/20 hover:translate-y-[-4px]">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-3 left-3 bg-[rgb(97,224,0)] text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                          {post.category}
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar size={14} className="mr-1.5" />
                          <span className="mr-4">{post.date}</span>
                          <Clock size={14} className="mr-1.5" />
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#1B3C68] mb-4 group-hover:text-[rgb(97,224,0)] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-[#1B3C68]/70 text-sm mb-6 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center text-[rgb(97,224,0)] font-semibold text-sm">
                          <span>Read More</span>
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
} 