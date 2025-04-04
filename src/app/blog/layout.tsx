"use client";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-[rgb(97,224,0)]/5 -translate-x-1/2 z-0"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[rgb(0,218,222)]/5 translate-x-1/3 z-0"></div>
      <div className="absolute bottom-40 left-1/4 w-72 h-72 rounded-full bg-[rgb(97,224,0)]/5 -translate-x-1/2 z-0"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #1B3C68 1px, transparent 1px),
            linear-gradient(to bottom, #1B3C68 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  );
} 