import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-custom-heading">GoFirst Tech</h3>
            <p className="text-sm text-custom">
              IT Consultancy and Tech Support services tailored for your business needs.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-custom-heading">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#strategic-it" className="text-custom hover:text-primary transition-colors">
                  Strategic IT Planning
                </Link>
              </li>
              <li>
                <Link href="/services#infrastructure" className="text-custom hover:text-primary transition-colors">
                  Infrastructure Assessment
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="text-custom hover:text-primary transition-colors">
                  Cloud Computing Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#cybersecurity" className="text-custom hover:text-primary transition-colors">
                  Cybersecurity Consulting
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-custom-heading">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#remote-support" className="text-custom hover:text-primary transition-colors">
                  Remote Troubleshooting
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="text-custom hover:text-primary transition-colors">
                  Software Installation
                </Link>
              </li>
              <li>
                <Link href="/services#network" className="text-custom hover:text-primary transition-colors">
                  Network Setup
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="text-custom hover:text-primary transition-colors">
                  Virus & Malware Removal
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-custom-heading">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-custom hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-custom hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-custom hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-custom hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-custom">
          <p>© {currentYear} GoFirst Tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 