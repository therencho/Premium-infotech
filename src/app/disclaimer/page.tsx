"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { RevealText } from "@/components/ui/reveal-text";

const Disclaimer = () => {
  return (
    <div className="relative overflow-x-hidden">
      <PageHeader 
        title="Disclaimer" 
        subtitle="Important information about our website and services"
        pageName="Disclaimer"
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
              <h2 className="text-2xl font-bold text-[#1B3C68] mb-6">Disclaimer Notice</h2>
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">1. Website Information</h3>
                  <p className="text-gray-600">
                    The information provided on this website is for general informational purposes only. 
                    While we strive to keep the information up to date and accurate, we make no representations 
                    or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                    suitability, or availability of the information, products, services, or related graphics 
                    contained on this website for any purpose.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">2. Professional Advice</h3>
                  <p className="text-gray-600">
                    The content on this website is not intended to be a substitute for professional advice. 
                    Always seek the advice of qualified IT professionals with any questions you may have 
                    regarding your IT infrastructure, cybersecurity, or other technical matters. Never disregard 
                    professional advice or delay in seeking it because of something you have read on this website.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">3. External Links</h3>
                  <p className="text-gray-600">
                    This website may contain links to external websites that are not provided or maintained by us. 
                    We do not guarantee the accuracy, relevance, timeliness, or completeness of any information 
                    on these external websites. The inclusion of any links does not necessarily imply a recommendation 
                    or endorsement of the views expressed within them.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">4. Limitation of Liability</h3>
                  <p className="text-gray-600">
                    In no event will Premium Infotech, its suppliers, or its licensors be liable for any loss or 
                    damage including without limitation, indirect or consequential loss or damage, or any loss or 
                    damage whatsoever arising from loss of data or profits arising out of, or in connection with, 
                    the use of this website.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">5. Accuracy of Materials</h3>
                  <p className="text-gray-600">
                    The materials appearing on Premium Infotech's website could include technical, typographical, 
                    or photographic errors. Premium Infotech does not warrant that any of the materials on its 
                    website are accurate, complete, or current. Premium Infotech may make changes to the materials 
                    contained on its website at any time without notice.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">6. Modifications</h3>
                  <p className="text-gray-600">
                    Premium Infotech may revise this disclaimer at any time without notice. By using this website, 
                    you are agreeing to be bound by the current version of this disclaimer.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">7. Governing Law</h3>
                  <p className="text-gray-600">
                    These terms and conditions are governed by and construed in accordance with the laws, and any 
                    disputes relating to these terms and conditions will be subject to the exclusive jurisdiction 
                    of the courts in our jurisdiction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1B3C68] mb-3">8. Contact Us</h3>
                  <p className="text-gray-600">
                    If you have any questions about this disclaimer, please contact us at:
                    <span className="text-[#65D80D] font-medium block mt-2">legal@premiuminfotech.com</span>
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

export default Disclaimer; 