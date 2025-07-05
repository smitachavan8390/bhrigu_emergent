import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  MessageCircle,
  Calendar,
  Users,
  Building,
  Target,
  CheckCircle,
  Send,
  Headphones,
  Shield,
  Award,
  Zap,
  Heart,
  Star,
  Briefcase,
  Settings,
  BarChart3,
  Database,
  Network,
  Code,
  Activity,
  TrendingUp,
  Eye,
  Lock,
  FileText,
  Lightbulb
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });
  
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
    consultationType: 'general'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 102, 255, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%), url('https://images.unsplash.com/flagged/photo-1578665086925-1fee1360d8cc')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Let's Shape the
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Future Together
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to digitize your operations? Get in touch with our experts 
              for personalized consultation and solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Multiple ways to connect with our team of experts who understand 
              your industry's unique challenges and requirements.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Sales Inquiry",
                icon: Briefcase,
                desc: "Discuss product features and pricing",
                contact: "sales@bhrigu.tech",
                action: "Get Quote",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Technical Support",
                icon: Headphones,
                desc: "Get help with implementation",
                contact: "+1 (555) 123-4567",
                action: "Call Support",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Partnership",
                icon: Users,
                desc: "Explore collaboration opportunities",
                contact: "partners@bhrigu.tech",
                action: "Partner With Us",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Media & Press",
                icon: MessageCircle,
                desc: "Press inquiries and media relations",
                contact: "media@bhrigu.tech",
                action: "Media Kit",
                color: "from-orange-500 to-red-500"
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.desc}</p>
                <p className="text-sm text-gray-500 mb-4">{option.contact}</p>
                <button className={`w-full bg-gradient-to-r ${option.color} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300`}>
                  {option.action}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Main Contact Form */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={staggerChildren}>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Ready to Digitize Your Operations?
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Schedule a personalized consultation with our industry experts. 
                We'll discuss your specific needs and show you how BhriguOne 
                can transform your manufacturing operations.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-6"
              >
                {[
                  {
                    icon: Phone,
                    title: "Phone Support",
                    content: "+1 (555) 123-4567",
                    subtitle: "Mon-Fri, 9 AM - 6 PM EST"
                  },
                  {
                    icon: Mail,
                    title: "Email Contact",
                    content: "info@bhrigu.tech",
                    subtitle: "24/7 response within 4 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Headquarters",
                    content: "Silicon Valley, CA",
                    subtitle: "Global offices available"
                  },
                  {
                    icon: Clock,
                    title: "Response Time",
                    content: "< 2 hours",
                    subtitle: "Average first response time"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                      <p className="text-gray-800 font-medium">{contact.content}</p>
                      <p className="text-sm text-gray-500">{contact.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Industry *</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    >
                      <option value="">Select your industry</option>
                      <option value="pharmaceutical">Pharmaceutical</option>
                      <option value="medical-devices">Medical Devices</option>
                      <option value="food-beverage">Food & Beverage</option>
                      <option value="biotech">Biotech</option>
                      <option value="nutraceuticals">Nutraceuticals</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Consultation Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'general', label: 'General Inquiry' },
                      { value: 'demo', label: 'Product Demo' },
                      { value: 'technical', label: 'Technical Discussion' },
                      { value: 'compliance', label: 'Compliance Consultation' }
                    ].map((type) => (
                      <label key={type.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="consultationType"
                          value={type.value}
                          checked={formData.consultationType === type.value}
                          onChange={handleInputChange}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Tell us about your compliance needs and challenges..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Schedule Consultation
                </motion.button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Industry Consultations */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Industry Consultations
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Specialized consultation services tailored to the unique requirements 
              of your regulated industry.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                industry: "Pharmaceutical",
                icon: Shield,
                expertise: "FDA 21 CFR Part 11 compliance",
                consultation: "GMP implementation strategies",
                features: ["Validation protocols", "Electronic signatures", "Audit trail management", "Regulatory submissions"]
              },
              {
                industry: "Medical Devices",
                icon: Activity,
                expertise: "ISO 13485 quality systems",
                consultation: "Device lifecycle management",
                features: ["Design controls", "Risk management", "Post-market surveillance", "MDR compliance"]
              },
              {
                industry: "Food & Beverage",
                icon: Eye,
                expertise: "HACCP and food safety",
                consultation: "Traceability implementation",
                features: ["Allergen management", "Supply chain tracking", "Quality assurance", "Recall procedures"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.industry}</h3>
                <p className="text-gray-300 mb-3">{service.expertise}</p>
                <p className="text-cyan-400 mb-6 font-medium">{service.consultation}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Global Offices */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Global Presence
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Local expertise with global reach. Our teams are strategically located 
              to serve clients across different time zones and regulatory environments.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                region: "North America",
                office: "Silicon Valley, CA",
                timezone: "PST (UTC-8)",
                specialties: ["FDA Compliance", "Pharmaceutical", "Biotech"],
                contact: "+1 (555) 123-4567"
              },
              {
                region: "Europe",
                office: "Frankfurt, Germany", 
                timezone: "CET (UTC+1)",
                specialties: ["EMA Regulations", "Medical Devices", "GDPR"],
                contact: "+49 69 1234 5678"
              },
              {
                region: "Asia Pacific",
                office: "Singapore",
                timezone: "SGT (UTC+8)",
                specialties: ["ASEAN Markets", "Manufacturing", "Supply Chain"],
                contact: "+65 6789 0123"
              }
            ].map((office, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Globe className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.region}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{office.office}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{office.timezone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700">{office.contact}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {office.specialties.map((specialty, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="space-y-6"
          >
            {[
              {
                question: "How long does it take to implement BhriguOne?",
                answer: "Implementation timeline varies based on your specific requirements, but typically ranges from 3-6 months for a complete rollout. We provide detailed project timelines during our initial consultation."
              },
              {
                question: "Is BhriguOne compliant with FDA regulations?",
                answer: "Yes, BhriguOne is designed with FDA 21 CFR Part 11 compliance at its core. Our platform includes built-in validation protocols, electronic signatures, and comprehensive audit trails."
              },
              {
                question: "Do you provide training and support?",
                answer: "Absolutely. We offer comprehensive training programs, documentation, and ongoing support. Our team provides 24/7 technical support and regular system updates."
              },
              {
                question: "Can BhriguOne integrate with existing systems?",
                answer: "Yes, BhriguOne features extensive integration capabilities including REST APIs, pre-built connectors for popular systems, and custom integration services for legacy systems."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;