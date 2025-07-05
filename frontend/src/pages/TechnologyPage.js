import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Cpu, 
  Cloud, 
  Brain, 
  Network, 
  Database, 
  Shield, 
  Code, 
  Server,
  Lock,
  Zap,
  BarChart3,
  Layers,
  Workflow,
  Settings,
  Activity,
  Eye,
  Globe,
  Smartphone,
  Monitor,
  HardDrive,
  Wifi,
  Gauge,
  Target,
  TrendingUp,
  CheckCircle
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

const TechnologyPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 102, 255, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%), url('https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg')`,
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
              Advanced Platform
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Architecture
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Cutting-edge technologies powering the future of regulated manufacturing 
              with AI, IoT, and cloud-native architecture.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Architecture */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Core Architecture
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              3D system diagrams with data flow visualization showing our 
              comprehensive platform architecture.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {[
              { 
                title: "Microservices Architecture", 
                icon: Layers, 
                desc: "Scalable, distributed system design",
                features: ["Independent services", "API-first approach", "Container orchestration", "Auto-scaling"]
              },
              { 
                title: "Event-Driven Processing", 
                icon: Workflow, 
                desc: "Real-time data processing and automation",
                features: ["Message queues", "Event sourcing", "Stream processing", "Reactive systems"]
              },
              { 
                title: "Security Framework", 
                icon: Shield, 
                desc: "Enterprise-grade security and compliance",
                features: ["Zero-trust architecture", "End-to-end encryption", "Role-based access", "Audit logging"]
              }
            ].map((component, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <component.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{component.title}</h3>
                <p className="text-gray-600 mb-6">{component.desc}</p>
                <ul className="space-y-2">
                  {component.features.map((feature, idx) => (
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

      {/* AI & Machine Learning */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerChildren}>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                AI & Machine Learning
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Advanced artificial intelligence and machine learning capabilities 
                for predictive analytics, quality optimization, and automated decision making.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { title: "Predictive Maintenance", icon: Gauge, desc: "AI-powered equipment monitoring" },
                  { title: "Quality Prediction", icon: Target, desc: "ML models for quality assurance" },
                  { title: "Anomaly Detection", icon: Eye, desc: "Real-time anomaly identification" },
                  { title: "Process Optimization", icon: TrendingUp, desc: "Continuous improvement algorithms" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
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
                  src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25"
                  alt="AI Technology"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* IoT Ecosystem */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              IoT Ecosystem
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive IoT integration with sensor networks, edge computing, 
              and real-time monitoring capabilities.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Sensor Integration",
                icon: Wifi,
                desc: "Connect thousands of industrial sensors",
                features: ["Wireless protocols", "Industrial standards", "Real-time data", "Self-healing networks"]
              },
              {
                title: "Edge Computing",
                icon: Server,
                desc: "Local processing and intelligent filtering",
                features: ["Low latency", "Offline capability", "Data preprocessing", "Local analytics"]
              },
              {
                title: "Real-time Monitoring",
                icon: Activity,
                desc: "Live dashboards and instant alerts",
                features: ["Live dashboards", "Instant alerts", "Trend analysis", "Historical data"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Data Analytics */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={scaleIn}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9"
                  alt="Data Analytics"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerChildren} className="order-1 lg:order-2">
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Data Analytics
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Interactive dashboard previews, trend analysis, and performance 
                metrics visualization for comprehensive business intelligence.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-6"
              >
                {[
                  { title: "Interactive Dashboards", icon: Monitor, progress: 95 },
                  { title: "Trend Analysis", icon: BarChart3, progress: 90 },
                  { title: "Performance Metrics", icon: Gauge, progress: 88 },
                  { title: "Predictive Insights", icon: Brain, progress: 92 }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <metric.icon className="w-6 h-6 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">{metric.title}</h4>
                      <span className="ml-auto text-sm text-gray-600">{metric.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Cloud Infrastructure */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Cloud Infrastructure
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Scalable deployment options, security architecture, and hybrid cloud 
              solutions for enterprise-grade performance.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "Auto-Scaling", icon: TrendingUp, desc: "Dynamic resource allocation" },
              { title: "High Availability", icon: Shield, desc: "99.99% uptime guarantee" },
              { title: "Global CDN", icon: Globe, desc: "Worldwide content delivery" },
              { title: "Disaster Recovery", icon: HardDrive, desc: "Automated backup and recovery" },
              { title: "Load Balancing", icon: Network, desc: "Intelligent traffic distribution" },
              { title: "Security Monitoring", icon: Eye, desc: "24/7 threat detection" },
              { title: "Compliance Ready", icon: CheckCircle, desc: "SOC 2, GDPR, HIPAA" },
              { title: "Multi-Region", icon: Smartphone, desc: "Global deployment options" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Integration Capabilities */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerChildren}>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Integration Capabilities
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-300 mb-8 leading-relaxed"
              >
                API documentation with interactive explorer, third-party system connections, 
                and seamless legacy system migration paths.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                {[
                  "RESTful API with OpenAPI 3.0 specification",
                  "GraphQL endpoint for flexible data queries",
                  "Webhook support for real-time notifications",
                  "SDK libraries for popular programming languages",
                  "Legacy system connectors and adapters",
                  "Enterprise service bus integration"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <Code className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-300">{feature}</span>
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
                  src="https://images.unsplash.com/photo-1598149852075-62ed16a6edb2"
                  alt="Integration Architecture"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-cyan-600/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Performance Metrics */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Performance Metrics
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
          >
            Industry-leading performance benchmarks and reliability metrics.
          </motion.p>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "99.99%", label: "System Uptime", icon: "⚡" },
              { number: "<100ms", label: "API Response Time", icon: "🚀" },
              { number: "10M+", label: "Data Points/Second", icon: "📊" },
              { number: "256-bit", label: "AES Encryption", icon: "🔒" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.number}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Experience the Technology
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            See our advanced platform architecture in action with a personalized demonstration.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 127, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Schedule Technical Demo
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/solutions"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300"
            >
              View Solutions
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default TechnologyPage;