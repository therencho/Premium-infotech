"use client";

import Image from 'next/image';
import Link from 'next/link';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  // Format the date using native JavaScript instead of date-fns
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      return 'yesterday';
    } else if (diffDays < 30) {
      return `${diffDays} days ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  };

  const formattedDate = formatDate(post.date);

  return (
    <div className="card-custom rounded-xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-[1.02]">
      {/* Post Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
          <div className="absolute top-4 left-4 bg-secondary text-foreground text-xs py-1 px-3 rounded-full font-medium">
            {post.category}
          </div>
        </Link>
      </div>
      
      {/* Post Content */}
      <div className="p-6 flex-grow flex flex-col">
        <Link href={`/blog/${post.slug}`} className="group">
          <h3 className="text-xl font-bold mb-3 text-custom-heading group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-custom/80 mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        {/* Author and Date */}
        <div className="flex items-center mt-4 border-t border-foreground/10 pt-4">
          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
            <Image 
              src={post.author.avatar} 
              alt={post.author.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <p className="text-custom-heading text-sm font-medium">{post.author.name}</p>
            <p className="text-custom/60 text-xs">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard; 