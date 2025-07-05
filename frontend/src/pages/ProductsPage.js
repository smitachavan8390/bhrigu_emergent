import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Settings, 
  TestTube, 
  Shield, 
  BarChart3, 
  Network, 
  Database,
  FileText,
  CheckCircle,
  Zap,
  Eye,
  Target,
  Calendar,
  Users,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Workflow,
  Code,
  Server,
  Monitor,
  Smartphone,
  Cloud,
  Brain,
  Layers,
  Filter,
  Search,
  Download,
  Upload,
  Gauge,
  Bell,
  MessageSquare,
  Clipboard
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

const ProductsPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 102, 255, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%), url('https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg')`,
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
              BhriguOne Platform
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Modules
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive suite of integrated modules for complete 
              manufacturing and compliance management.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Modules Overview */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Core Modules
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              Six essential modules that work together to provide complete 
              manufacturing and compliance management.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { 
                title: "Manufacturing Execution System (MES)", 
                icon: Settings, 
                desc: "Complete production control and monitoring",
                color: "from-blue-500 to-cyan-500",
                link: "#mes"
              },
              { 
                title: "Laboratory Information Management (LIMS)", 
                icon: TestTube, 
                desc: "Comprehensive lab data management",
                color: "from-green-500 to-emerald-500",
                link: "#lims"
              },
              { 
                title: "Quality Management System (QMS)", 
                icon: Shield, 
                desc: "Quality assurance and control",
                color: "from-purple-500 to-pink-500",
                link: "#qms"
              },
              { 
                title: "Regulatory Compliance Module", 
                icon: FileText, 
                desc: "Automated compliance management",
                color: "from-orange-500 to-red-500",
                link: "#compliance"
              },
              { 
                title: "Analytics & Reporting", 
                icon: BarChart3, 
                desc: "Advanced data analytics and insights",
                color: "from-indigo-500 to-blue-500",
                link: "#analytics"
              },
              { 
                title: "Integration Hub", 
                icon: Network, 
                desc: "Seamless system integration",
                color: "from-teal-500 to-green-500",
                link: "#integration"
              }
            ].map((module, index) => (
              <motion.a
                key={index}
                href={module.link}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 block"
              >
                <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center`}>
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{module.title}</h3>
                <p className="text-gray-600 leading-relaxed">{module.desc}</p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* MES Module */}
      <AnimatedSection id="mes" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerChildren}>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Manufacturing Execution System
                </h2>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Real-time production control with automated scheduling, monitoring, 
                and quality integration for optimal manufacturing performance.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  { title: "Production Scheduling", icon: Calendar, desc: "Automated scheduling with resource optimization" },
                  { title: "Real-time Monitoring", icon: Eye, desc: "Live production dashboards and alerts" },
                  { title: "Quality Integration", icon: CheckCircle, desc: "Seamless quality control integration" },
                  { title: "Equipment Management", icon: Gauge, desc: "Complete equipment lifecycle tracking" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
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
                  src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
                  alt="MES Dashboard"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* LIMS Module */}
      <AnimatedSection id="lims" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={scaleIn}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg"
                  alt="LIMS System"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerChildren} className="order-1 lg:order-2">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <TestTube className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Laboratory Information Management
                </h2>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Comprehensive laboratory data management with automated testing procedures, 
                sample tracking, and results management.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  { title: "Sample Tracking", icon: Target, desc: "Complete sample lifecycle management" },
                  { title: "Automated Testing", icon: Zap, desc: "Streamlined testing procedures and protocols" },
                  { title: "Results Management", icon: BarChart3, desc: "Advanced results analysis and reporting" },
                  { title: "Instrument Integration", icon: Monitor, desc: "Direct integration with lab instruments" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* QMS Module */}
      <AnimatedSection id="qms" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerChildren}>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Quality Management System
                </h2>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Comprehensive quality management with document control, audit trails, 
                and corrective action workflows for complete quality assurance.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { title: "Document Control", icon: FileText, desc: "Version control and approval workflows" },
                  { title: "Audit Trails", icon: Eye, desc: "Complete change history tracking" },
                  { title: "CAPA Management", icon: TrendingUp, desc: "Corrective and preventive actions" },
                  { title: "Risk Assessment", icon: Shield, desc: "Automated risk evaluation tools" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-purple-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
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
                  src="https://images.unsplash.com/photo-1626148750586-df6e1b0bebf2"
                  alt="Quality Management"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Compliance Module */}
      <AnimatedSection id="compliance" className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={scaleIn}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7818237/pexels-photo-7818237.jpeg"
                  alt="Compliance Management"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerChildren} className="order-1 lg:order-2">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Regulatory Compliance
                </h2>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Automated regulatory compliance with GxP frameworks, reporting systems, 
                and audit preparation tools for seamless regulatory management.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  { title: "GxP Compliance", icon: Shield, desc: "Automated GMP, GLP, GCP compliance" },
                  { title: "Automated Reporting", icon: Upload, desc: "Regulatory submission automation" },
                  { title: "Audit Preparation", icon: Clipboard, desc: "Comprehensive audit readiness tools" },
                  { title: "Change Control", icon: Lock, desc: "Controlled change management processes" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Analytics Module */}
      <AnimatedSection id="analytics" className="py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Analytics & Reporting
              </h2>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              Interactive dashboard builder, real-time KPI monitoring, and predictive 
              analytics models for data-driven decision making.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Interactive Dashboards",
                icon: Monitor,
                desc: "Customizable dashboards with real-time data visualization",
                features: ["Drag-and-drop builder", "Real-time updates", "Mobile responsive", "Custom widgets"]
              },
              {
                title: "KPI Monitoring",
                icon: Target,
                desc: "Comprehensive KPI tracking and alerting system",
                features: ["Performance metrics", "Threshold alerts", "Trend analysis", "Benchmarking"]
              },
              {
                title: "Predictive Analytics",
                icon: Brain,
                desc: "Machine learning models for predictive insights",
                features: ["Forecasting models", "Anomaly detection", "Pattern recognition", "Risk prediction"]
              }
            ].map((analytics, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <analytics.icon className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{analytics.title}</h3>
                <p className="text-gray-600 mb-6">{analytics.desc}</p>
                <ul className="space-y-2">
                  {analytics.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Integration Hub */}
      <AnimatedSection id="integration" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Integration Hub
              </h2>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Seamless system integration with API management, data synchronization, 
              and extensive third-party connector library.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "API Management", icon: Code, desc: "RESTful APIs and GraphQL endpoints" },
              { title: "Data Sync", icon: Workflow, desc: "Real-time data synchronization" },
              { title: "Connectors", icon: Globe, desc: "Pre-built third-party integrations" },
              { title: "Legacy Systems", icon: Server, desc: "Legacy system modernization" },
              { title: "Cloud Integration", icon: Cloud, desc: "Multi-cloud platform support" },
              { title: "Mobile Apps", icon: Smartphone, desc: "Native mobile application APIs" },
              { title: "IoT Devices", icon: Activity, desc: "Industrial IoT device connectivity" },
              { title: "Security", icon: Lock, desc: "Enterprise-grade security protocols" }
            ].map((integration, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
              >
                <integration.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{integration.title}</h3>
                <p className="text-gray-300 text-sm">{integration.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Experience BhriguOne Modules
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Discover how our integrated platform modules can transform your 
            manufacturing and compliance operations.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 102, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Request Product Demo
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/solutions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              View Solutions
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProductsPage;