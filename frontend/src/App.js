import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ChevronDown, 
  Play, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Shield, 
  Zap, 
  Database, 
  Settings, 
  Award,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import './App.css';

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
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
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

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Bhrigu.tech
            </motion.div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Solutions', 'Industries', 'Technology', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'Solutions', 'Industries', 'Technology', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 102, 255, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%), url('https://images.pexels.com/photos/6075001/pexels-photo-6075001.jpeg')`,
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
            Engineering Intelligence.
            <br />
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Empowering Compliance.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Redefining how regulated industries embrace Industry 4.0/5.0 through intelligent, 
            compliant, and future-ready platforms.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 102, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Play size={20} />
              Watch Demo
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
            >
              Learn More
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerChildren}>
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              About Bhrigu.tech
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-700 mb-6 leading-relaxed"
            >
              We identified a critical gap in digital transformation for regulated industries. 
              While manufacturing embraces Industry 4.0, compliance-driven sectors struggle 
              with outdated systems that can't adapt to modern requirements.
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              Our mission is to bridge this gap by developing next-generation software platforms 
              that combine AI, IoT, data analytics, and smart automation while maintaining 
              the highest compliance standards.
            </motion.p>
            
            <motion.div 
              variants={staggerChildren}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Shield, title: "GxP Compliant", desc: "Built for regulated environments" },
                { icon: Zap, title: "AI-Powered", desc: "Smart automation and analytics" },
                { icon: Database, title: "Scalable", desc: "Cloud and hybrid deployment" },
                { icon: Award, title: "Industry Leader", desc: "Trusted by leading companies" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={scaleIn}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                alt="Innovative Technology"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            </div>
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const VisionSection = () => {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Our Vision in Action
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          Building smart, future-ready platforms that enable safe, efficient, and 
          fully compliant operations across regulated industries.
        </motion.p>
        
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "AI-Driven Analytics",
              desc: "Predictive maintenance and quality control through machine learning algorithms",
              icon: "🧠",
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "IoT Integration",
              desc: "Real-time monitoring and control of manufacturing processes and equipment",
              icon: "🔗",
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Compliance Automation",
              desc: "Automated regulatory reporting and audit trail management",
              icon: "⚖️",
              color: "from-purple-500 to-pink-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

const BhriguOneSection = () => {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            BhriguOne
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            An Omni Connected Software Platform Trusted By Industry Leaders
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerChildren}>
            <motion.h3 
              variants={fadeInUp}
              className="text-3xl font-bold mb-6 text-white"
            >
              Key Features
            </motion.h3>
            
            <motion.div variants={staggerChildren} className="space-y-4">
              {[
                "GxP Friendly - Built for regulated environments",
                "Customizable - Tailored to specific industry needs",
                "Cloud/Hybrid Hosted - Flexible deployment options",
                "All-in-One Solution - Seamless module integration"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 127, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Request Demo
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={scaleIn}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
                alt="BhriguOne Platform"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-cyan-600/20"></div>
            </div>
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const IndustriesSection = () => {
  const industries = [
    {
      name: "Pharmaceuticals",
      desc: "Drug discovery, clinical trials, and API manufacturing with FDA compliance",
      image: "https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Medical Devices",
      desc: "Device manufacturing, testing, and post-market surveillance with ISO 13485",
      image: "https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Food & Beverage",
      desc: "Production control, quality assurance, and supply chain with HACCP",
      image: "https://images.pexels.com/photos/3889053/pexels-photo-3889053.jpeg",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Biotech",
      desc: "Bioreactor monitoring, cell culture, and GMP compliance",
      image: "https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Nutraceuticals",
      desc: "Supplement formulation, potency testing, and cGMP compliance",
      image: "https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg",
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <AnimatedSection id="industries" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Industries We Serve
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Specialized solutions for regulated industries that demand the highest standards 
            of compliance and operational excellence.
          </motion.p>
        </div>
        
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-80`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

const AdvantagesSection = () => {
  const advantages = [
    { traditional: "High Capital Expenditure", bhrigu: "Low Capital Expenditure", icon: "💰" },
    { traditional: "Separate implementation costs", bhrigu: "All-in-one pricing includes implementation", icon: "📦" },
    { traditional: "Manual compliance processes", bhrigu: "Built-in Qualification & Compliance", icon: "⚖️" },
    { traditional: "Single site limitations", bhrigu: "Multiple site compatibility included", icon: "🌐" },
    { traditional: "Expensive hardware", bhrigu: "Competitive hardware pricing with advanced designs", icon: "🔧" }
  ];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            BhriguOne Advantages
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            See how BhriguOne compares to traditional solutions and delivers superior value.
          </motion.p>
        </div>
        
        <motion.div 
          variants={staggerChildren}
          className="space-y-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="text-3xl mb-4">{advantage.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Traditional Approach</h3>
                  <p className="text-red-600 bg-red-50 px-4 py-2 rounded-lg">❌ {advantage.traditional}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    VS
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-4">{advantage.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">BhriguOne</h3>
                  <p className="text-green-600 bg-green-50 px-4 py-2 rounded-lg">✅ {advantage.bhrigu}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

const TechnologySection = () => {
  return (
    <AnimatedSection id="technology" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Technology Stack
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Cutting-edge technologies powering the future of regulated manufacturing.
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerChildren}>
            <motion.div 
              variants={staggerChildren}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: "🤖", title: "AI & Machine Learning", desc: "Predictive analytics and automated decision making" },
                { icon: "🔗", title: "IoT Integration", desc: "Real-time sensor monitoring and control" },
                { icon: "📊", title: "Data Analytics", desc: "Advanced reporting and trend analysis" },
                { icon: "☁️", title: "Cloud Infrastructure", desc: "Scalable and secure deployment options" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{tech.icon}</div>
                  <h3 className="font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-sm text-gray-300">{tech.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={scaleIn}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"
                alt="Technology Stack"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            </div>
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ComplianceSection = () => {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Compliance-First Approach
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Built from the ground up with regulatory compliance as the foundation, 
            not an afterthought.
          </motion.p>
        </div>
        
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { title: "GxP Compliance", desc: "FDA, EMA, and global regulatory standards", icon: Shield },
            { title: "Audit Trails", desc: "Complete traceability and documentation", icon: Users },
            { title: "Quality Assurance", desc: "Built-in QA processes and workflows", icon: Award },
            { title: "Regulatory Reporting", desc: "Automated compliance reporting", icon: Settings }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

const SuccessSection = () => {
  const stats = [
    { number: "50+", label: "Successful Implementations", icon: "🎯" },
    { number: "99.9%", label: "System Uptime", icon: "⚡" },
    { number: "40%", label: "Average Cost Reduction", icon: "💰" },
    { number: "100%", label: "Compliance Success Rate", icon: "✅" }
  ];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Customer Success Stories
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Trusted by industry leaders who demand excellence in compliance and performance.
          </motion.p>
        </div>
        
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg"
                  alt="Success Story"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">Dr. Sarah Johnson</h3>
                  <p className="text-gray-600">Chief Quality Officer, PharmaLeader Inc.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "BhriguOne transformed our compliance processes, reducing audit preparation time by 70% 
                while maintaining perfect regulatory standards. The platform's intelligence has been game-changing."
              </p>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51"
                  alt="Success Story"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">Michael Chen</h3>
                  <p className="text-gray-600">VP of Operations, MedTech Solutions</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "The ROI was immediate. BhriguOne's predictive analytics helped us prevent costly 
                equipment failures and streamline our entire manufacturing process."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Ready to Digitize Your Operations?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Let's discuss how BhriguOne can transform your regulated manufacturing processes.
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerChildren}>
            <motion.div 
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-semibold">info@bhrigu.tech</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Address</p>
                    <p className="text-white font-semibold">Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Schedule a Demo</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Industry</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select your industry</option>
                  <option value="pharmaceutical">Pharmaceutical</option>
                  <option value="medical">Medical Devices</option>
                  <option value="food">Food & Beverage</option>
                  <option value="biotech">Biotech</option>
                  <option value="nutraceutical">Nutraceuticals</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your compliance needs..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 127, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Bhrigu.tech
            </div>
            <p className="text-gray-400 mb-4">
              Engineering Intelligence. Empowering Compliance.
            </p>
            <p className="text-gray-400">
              Redefining regulated manufacturing through Industry 4.0/5.0 innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">BhriguOne Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IoT Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Pharmaceuticals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medical Devices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Food & Beverage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biotech</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Bhrigu.tech. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <BhriguOneSection />
      <IndustriesSection />
      <AdvantagesSection />
      <TechnologySection />
      <ComplianceSection />
      <SuccessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;