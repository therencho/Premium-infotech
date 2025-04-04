"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface BreadcrumbItem {
  label: string;
  path: string;
  isLast: boolean;
}

const Breadcrumb = () => {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Split the pathname by '/' and remove empty items
    const pathElements = pathname.split('/').filter(Boolean);
    
    if (pathElements.length === 0) {
      return [{ label: 'Home', path: '/', isLast: true }];
    }

    // Create breadcrumb items
    const items: BreadcrumbItem[] = [
      { label: 'Home', path: '/', isLast: false }
    ];

    let currentPath = '';
    pathElements.forEach((element, index) => {
      currentPath += `/${element}`;
      const isLast = index === pathElements.length - 1;
      items.push({
        label: element.charAt(0).toUpperCase() + element.slice(1), // Capitalize first letter
        path: currentPath,
        isLast
      });
    });

    return items;
  }, [pathname]);

  if (breadcrumbs.length <= 1) {
    return null; // Don't display breadcrumbs on the homepage
  }

  return (
    <nav aria-label="Breadcrumb" className="text-sm mb-4 opacity-90">
      <ol className="flex flex-wrap items-center">
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mx-2 text-custom-heading" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.isLast ? (
              <span className="font-semibold text-custom-heading">{item.label}</span>
            ) : (
              <Link 
                href={item.path} 
                className="text-custom hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 