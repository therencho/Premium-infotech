"use client";

import { useEffect, useRef, useState } from 'react';
import AnimatedCard from '@/components/AnimatedCard';
import PageHero from '@/components/PageHero';

export default function PricingPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [annualBilling, setAnnualBilling] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: '',
  });

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  const openContactModal = (planName: string) => {
    setSelectedPlan(planName);
    setFormData(prev => ({ ...prev, plan: planName }));
    setShowContactModal(true);
    setFormSubmitted(false);
  };

  const consultingPlans = [
    {
      name: 'Assessment',
      description: 'Comprehensive evaluation of your current IT infrastructure and recommendations.',
      price: annualBilling ? '2,999' : '3,499',
      features: [
        'IT Infrastructure Assessment',
        'Security Vulnerability Scan',
        'Detailed Recommendations Report',
        'One-time Executive Presentation',
        '30-day Action Plan'
      ],
      highlighted: false,
      cta: 'Get Started'
    },
    {
      name: 'Strategic',
      description: 'Ongoing IT consulting and strategic planning for business growth.',
      price: annualBilling ? '4,499' : '4,999',
      features: [
        'Quarterly IT Strategy Sessions',
        'Technology Roadmap Development',
        'Vendor Management',
        'Monthly Executive Reporting',
        'Dedicated Consultant',
        'Priority Support Channel'
      ],
      highlighted: true,
      cta: 'Choose Plan'
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive IT management and strategic partnership.',
      price: annualBilling ? 'Custom' : 'Custom',
      features: [
        'Monthly On-site Strategic Sessions',
        'Complete IT Strategy & Implementation',
        'Digital Transformation Planning',
        'CIO-as-a-Service',
        'Custom SLA',
        '24/7 Priority Support',
        'Technology Budget Planning'
      ],
      highlighted: false,
      cta: 'Contact Us'
    }
  ];

  const supportPlans = [
    {
      name: 'Basic',
      description: 'Essential support for small businesses.',
      price: annualBilling ? '299' : '349',
      perText: '/month',
      features: [
        'Remote Support (9am-5pm)',
        'Email & Chat Support',
        'Up to 10 Devices',
        '4-Hour Response Time',
        'Monthly System Health Checks'
      ],
      highlighted: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      description: 'Comprehensive support for growing businesses.',
      price: annualBilling ? '699' : '799',
      perText: '/month',
      features: [
        '24/7 Remote Support',
        'Phone, Email & Chat Support',
        'Up to 25 Devices',
        '1-Hour Response Time',
        'Weekly System Health Checks',
        'Network Monitoring',
        'Quarterly Security Updates'
      ],
      highlighted: true,
      cta: 'Choose Plan'
    },
    {
      name: 'Premium',
      description: 'Complete IT support solution for established businesses.',
      price: annualBilling ? '1,299' : '1,499',
      perText: '/month',
      features: [
        '24/7 Remote & On-site Support',
        'Dedicated Support Team',
        'Unlimited Devices',
        '30-Minute Response Time',
        'Daily System Health Checks',
        'Advanced Security Monitoring',
        'Monthly Strategy Sessions',
        'Employee Training Sessions'
      ],
      highlighted: false,
      cta: 'Choose Plan'
    }
  ];

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "We provide IT services across multiple industries including healthcare, finance, retail, manufacturing, and professional services. Our team has specialized experience in regulatory compliance for highly regulated sectors."
    },
    {
      question: "Do you offer remote support options?",
      answer: "Yes, our technical support team provides 24/7 remote assistance for all clients. We can resolve most issues without requiring an on-site visit, reducing downtime and costs."
    },
    {
      question: "How do you handle data security and privacy?",
      answer: "We implement multi-layered security protocols including encryption, access controls, regular security audits, and employee training. All our practices comply with industry standards and regulations like GDPR, HIPAA, and others as applicable."
    },
    {
      question: "What is your typical response time for support requests?",
      answer: "Critical issues are addressed within 15-30 minutes. Standard support requests are typically handled within 1-2 hours during business hours. We prioritize based on severity and impact on your operations."
    },
    {
      question: "Do you offer flexible service plans?",
      answer: "Yes, we provide customizable service plans from basic monitoring to comprehensive managed IT services. We'll work with you to create a solution that fits your specific needs and budget constraints."
    },
    {
      question: 'Can I switch between plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated for the remainder of your billing cycle.'
    },
    {
      question: 'Do you provide support for both Mac and PC?',
      answer: 'Yes, our support covers all major operating systems including Windows, macOS, and Linux environments.'
    },
    {
      question: 'How quickly can you start providing services?',
      answer: 'For most support plans, we can begin service within 24-48 hours. Strategic consulting services typically start with an initial assessment phase lasting 1-2 weeks.'
    }
  ];

  const pricingIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <PageHero
        title="Simple, Transparent Pricing"
        description="Choose the plan that fits your business needs with no hidden fees or surprises."
        icon={pricingIcon}
      />

      {/* Billing Toggle */}
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center space-x-4 animate-on-scroll opacity-0">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`text-lg transition-colors ${!annualBilling ? 'font-semibold text-foreground' : 'text-text-secondary'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setAnnualBilling(!annualBilling)} 
              className="relative inline-flex h-8 w-16 items-center rounded-full cursor-pointer"
              aria-pressed={annualBilling}
            >
              <span className="sr-only">Toggle annual billing</span>
              <span 
                className={`
                  absolute h-6 w-6 transform rounded-full transition-transform 
                  ${annualBilling ? 'translate-x-9 bg-primary' : 'translate-x-1 bg-secondary'}
                `}
              />
              <span 
                className={`
                  inline-block h-8 w-16 rounded-full 
                  ${annualBilling ? 'bg-primary/20' : 'bg-secondary/30'}
                `}
              />
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`text-lg transition-colors ${annualBilling ? 'font-semibold text-foreground' : 'text-text-secondary'}`}
            >
              Annual <span className="text-sm text-primary font-normal">Save 15%</span>
            </button>
          </div>
        </div>
      </section>

      {/* IT Support Plans */}
      <section className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center animate-on-scroll opacity-0 text-heading-color">
            IT Support Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <AnimatedCard 
                key={index} 
                className={`
                  h-full relative p-8 rounded-2xl
                  ${plan.highlighted ? 
                    'bg-primary border-2 border-primary' : 
                    'bg-background border border-primary/20'}
                `}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 text-center">
                    <span className="bg-secondary text-foreground text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <h3 className={`text-2xl font-bold mb-2 parallax-content ${plan.highlighted ? 'text-foreground' : 'text-heading-color'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 parallax-content ${plan.highlighted ? 'text-foreground/80' : 'text-text-secondary'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-6 parallax-content">
                    <span className={`text-3xl font-bold ${plan.highlighted ? 'text-foreground' : 'text-heading-color'}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlighted ? 'text-foreground/80' : 'text-text-secondary'}`}>
                      {plan.perText}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start parallax-content">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${plan.highlighted ? 'text-foreground' : 'text-primary'}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.highlighted ? 'text-foreground/90' : 'text-text-secondary'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <button 
                      onClick={() => openContactModal(plan.name)}
                      className={`
                        w-full py-3 px-6 rounded-lg text-center font-medium transition-colors
                        ${plan.highlighted 
                          ? 'bg-primary text-foreground hover:bg-primary-hover' 
                          : 'bg-secondary text-foreground hover:bg-primary/80'}
                      `}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* IT Consulting Plans */}
      <section className="w-full py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center animate-on-scroll opacity-0 text-heading-color">
            IT Consulting Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultingPlans.map((plan, index) => (
              <AnimatedCard 
                key={index} 
                className={`
                  h-full relative p-8 rounded-2xl
                  ${plan.highlighted ? 
                    'bg-primary border-2 border-primary' : 
                    'bg-background border border-primary/20'}
                `}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 text-center">
                    <span className="bg-secondary text-foreground text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <h3 className={`text-2xl font-bold mb-2 parallax-content ${plan.highlighted ? 'text-foreground' : 'text-heading-color'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 parallax-content ${plan.highlighted ? 'text-foreground/80' : 'text-text-secondary'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-6 parallax-content">
                    <span className={`text-3xl font-bold ${plan.highlighted ? 'text-foreground' : 'text-heading-color'}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlighted ? 'text-foreground/80' : 'text-text-secondary'}`}>
                      {plan.price === 'Custom' ? '' : ' one-time'}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start parallax-content">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 mr-2 flex-shrink-0 ${plan.highlighted ? 'text-foreground' : 'text-primary'}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.highlighted ? 'text-foreground/90' : 'text-text-secondary'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <button 
                      onClick={() => openContactModal(plan.name)}
                      className={`
                        w-full py-3 px-6 rounded-lg text-center font-medium transition-colors
                        ${plan.highlighted 
                          ? 'bg-primary text-foreground hover:bg-primary-hover' 
                          : 'bg-secondary text-foreground hover:bg-primary/80'}
                      `}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading-color animate-on-scroll opacity-0">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto animate-on-scroll opacity-0">
              Common questions about our IT services and solutions
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-secondary rounded-2xl p-6 animate-on-scroll opacity-0">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Pricing CTA */}
      <section className="w-full py-16 px-4 bg-background border-t border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-heading-color">
              Need a Custom Solution?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Our team can create tailored IT solutions that perfectly fit your business requirements and budget.
            </p>
            <button
              onClick={() => openContactModal('Custom Solution')}
              className="py-4 px-8 bg-primary text-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Request Custom Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-primary/20 rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {formSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-heading-color">Thank You!</h3>
                  <p className="text-text-secondary mb-6">
                    We've received your request for the <strong>{selectedPlan}</strong> plan. Our team will contact you shortly to discuss the next steps.
                  </p>
                  <button 
                    onClick={() => setShowContactModal(false)}
                    className="px-6 py-2 bg-primary text-foreground rounded-full font-medium"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="mr-3 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {pricingIcon}
                      </div>
                      <h3 className="text-xl font-bold text-heading-color">Contact Us</h3>
                    </div>
                    <button 
                      onClick={() => setShowContactModal(false)}
                      className="text-text-secondary hover:text-foreground"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-text-secondary mb-6">
                    Complete the form below to get in touch about the <strong>{selectedPlan}</strong> plan.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="plan" value={formData.plan} />
                    
                    <div>
                      <label htmlFor="name" className="block mb-1 text-sm font-medium text-heading-color">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                        required
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-1 text-sm font-medium text-heading-color">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-1 text-sm font-medium text-heading-color">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-1 text-sm font-medium text-heading-color">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                        rows={3}
                        placeholder="Any specific requirements or questions?"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 px-6 bg-primary text-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 