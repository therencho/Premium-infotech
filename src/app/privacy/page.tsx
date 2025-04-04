"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { RevealText } from "@/components/ui/reveal-text";

const PrivacyPolicy = () => {
  return (
    <div className="relative overflow-x-hidden">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="We are committed to protecting your privacy and personal data"
        pageName="Privacy Policy"
      />

      <div className="container mx-auto px-4 py-8 mb-24">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 md:p-12">
            <RevealText>
              <h2 className="text-2xl font-bold text-[#1B3C68] mb-6">Your Privacy Matters to Us</h2>
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">1. Information We Collect</h3>
                  <p className="text-gray-600 mb-3">
                    We collect information you provide directly to us when you fill out forms on our website, 
                    subscribe to our newsletter, or contact us. This information may include your name, email address, 
                    phone number, and any other information you choose to provide.
                  </p>
                  <p className="text-gray-600">
                    We also automatically collect certain information when you visit our website, 
                    such as your IP address, browser type, operating system, referring URLs, and information 
                    about your usage of our website.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">2. How We Use Your Information</h3>
                  <p className="text-gray-600 mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process and complete transactions</li>
                    <li>Send you technical notices, updates, security alerts, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Communicate with you about products, services, offers, and events</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">3. Cookies and Similar Technologies</h3>
                  <p className="text-gray-600 mb-3">
                    We use cookies and similar technologies to collect information about your browsing activities 
                    and to distinguish you from other users of our website. This helps us provide you with a good 
                    experience when you browse our website and allows us to improve our site.
                  </p>
                  <p className="text-gray-600">
                    You can set your browser to refuse all or some browser cookies, or to alert you when websites 
                    set or access cookies. If you disable or refuse cookies, please note that some parts of our 
                    website may become inaccessible or not function properly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">4. Data Security</h3>
                  <p className="text-gray-600">
                    We take reasonable measures to help protect information about you from loss, theft, misuse, 
                    unauthorized access, disclosure, alteration, and destruction. However, no security system is 
                    impenetrable, and we cannot guarantee the security of our systems or your information.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">5. Your Rights</h3>
                  <p className="text-gray-600 mb-3">
                    Depending on your location, you may have certain rights regarding your personal information, 
                    such as the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Access, correct, or delete your personal information</li>
                    <li>Object to or restrict certain processing of your personal information</li>
                    <li>Receive a copy of your personal information in a structured, machine-readable format</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">6. Changes to This Privacy Policy</h3>
                  <p className="text-gray-600">
                    We may update this privacy policy from time to time. If we make material changes, we will 
                    notify you as required by applicable law. We encourage you to periodically review this page 
                    for the latest information on our privacy practices.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">7. Contact Us</h3>
                  <p className="text-gray-600">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                    <span className="text-[#65D80D] font-medium block mt-2">privacy@premiuminfotech.com</span>
                  </p>
                </div>
              </div>
            </RevealText>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 