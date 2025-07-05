import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  Calendar,
  Users,
  Search,
  Filter,
  Clock,
  Star,
  Eye,
  MessageCircle,
  Globe,
  Bookmark,
  TrendingUp,
  Award,
  Bell,
  Target,
  Lightbulb,
  Settings,
  BarChart3,
  Shield,
  Code,
  Database,
  Network,
  Zap,
  Brain,
  Activity,
  CheckCircle,
  ExternalLink,
  Play,
  Headphones,
  Monitor,
  Smartphone
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

const ResourcesPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 102, 255, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%), url('https://images.unsplash.com/photo-1641927420960-8059f26993d9')`,
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
              Knowledge &
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Innovation Hub
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive resources, insights, and documentation to help you succeed 
              with Industry 4.0/5.0 transformation in regulated industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Resource Categories
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Explore our comprehensive library of resources designed to accelerate 
              your digital transformation journey.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { 
                title: "Blog & Insights", 
                icon: BookOpen, 
                desc: "Industry trends and best practices",
                count: "50+ articles",
                color: "from-blue-500 to-cyan-500",
                link: "#blog"
              },
              { 
                title: "White Papers", 
                icon: FileText, 
                desc: "In-depth technical documentation",
                count: "15+ papers",
                color: "from-green-500 to-emerald-500",
                link: "#whitepapers"
              },
              { 
                title: "Case Studies", 
                icon: Target, 
                desc: "Real-world implementation stories",
                count: "25+ studies",
                color: "from-purple-500 to-pink-500",
                link: "#casestudies"
              },
              { 
                title: "Webinars & Events", 
                icon: Video, 
                desc: "Live and recorded presentations",
                count: "30+ sessions",
                color: "from-orange-500 to-red-500",
                link: "#webinars"
              },
              { 
                title: "Documentation", 
                icon: Code, 
                desc: "Technical guides and API docs",
                count: "100+ guides",
                color: "from-indigo-500 to-blue-500",
                link: "#documentation"
              },
              { 
                title: "Regulatory Updates", 
                icon: Bell, 
                desc: "Latest compliance information",
                count: "Weekly updates",
                color: "from-teal-500 to-green-500",
                link: "#regulatory"
              }
            ].map((category, index) => (
              <motion.a
                key={index}
                href={category.link}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 block"
              >
                <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-3">{category.desc}</p>
                <div className="text-sm text-blue-600 font-medium">{category.count}</div>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Blog & Insights */}
      <AnimatedSection id="blog" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
            >
              Blog & Insights
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Stay ahead with the latest trends in Industry 4.0/5.0, compliance best practices, 
              and technology innovations.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "The Future of Pharmaceutical Manufacturing",
                excerpt: "Exploring how AI and IoT are revolutionizing drug production processes...",
                category: "Industry 4.0",
                readTime: "8 min read",
                date: "Dec 15, 2024",
                image: "https://images.pexels.com/photos/6075001/pexels-photo-6075001.jpeg"
              },
              {
                title: "FDA's Digital Transformation Guidelines",
                excerpt: "Understanding the latest regulatory requirements for digital systems...",
                category: "Compliance",
                readTime: "12 min read",
                date: "Dec 10, 2024",
                image: "https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg"
              },
              {
                title: "IoT Implementation in Food Safety",
                excerpt: "How smart sensors are enhancing HACCP compliance and food quality...",
                category: "Technology",
                readTime: "6 min read",
                date: "Dec 5, 2024",
                image: "https://images.pexels.com/photos/3889053/pexels-photo-3889053.jpeg"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* White Papers */}
      <AnimatedSection id="whitepapers" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            >
              White Papers
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Comprehensive technical documentation and research papers on digital 
              transformation in regulated industries.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Digital Transformation in Regulated Industries",
                description: "A comprehensive guide to implementing Industry 4.0 technologies while maintaining regulatory compliance across pharmaceutical, medical device, and food manufacturing sectors.",
                pages: "45 pages",
                downloads: "2.3K downloads",
                type: "Technical Guide",
                featured: true
              },
              {
                title: "AI in Pharmaceutical Manufacturing",
                description: "Exploring the applications of artificial intelligence in drug discovery, manufacturing optimization, and quality control processes.",
                pages: "32 pages",
                downloads: "1.8K downloads",
                type: "Research Paper",
                featured: false
              },
              {
                title: "IoT Implementation in Food Safety",
                description: "Best practices for deploying IoT sensors and monitoring systems to enhance HACCP compliance and ensure food safety standards.",
                pages: "28 pages",
                downloads: "1.5K downloads",
                type: "Implementation Guide",
                featured: false
              }
            ].map((paper, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  paper.featured ? 'border-2 border-green-500' : ''
                }`}
              >
                {paper.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-green-600">Featured Paper</span>
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                  </div>
                  <FileText className="w-12 h-12 text-green-600 ml-4" />
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{paper.pages}</span>
                    <span>•</span>
                    <span>{paper.downloads}</span>
                    <span>•</span>
                    <span>{paper.type}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Webinars & Events */}
      <AnimatedSection id="webinars" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Webinars & Events
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Join our industry experts for live discussions, product demonstrations, 
              and thought leadership sessions.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Upcoming Events */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-purple-600" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Industry 4.0 in Pharmaceutical Manufacturing",
                    date: "Jan 15, 2025",
                    time: "2:00 PM EST",
                    type: "Live Webinar",
                    attendees: "450+ registered"
                  },
                  {
                    title: "BhriguOne Platform Deep Dive",
                    date: "Jan 25, 2025",
                    time: "11:00 AM EST",
                    type: "Product Demo",
                    attendees: "320+ registered"
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{event.date}</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{event.attendees}</span>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                        Register
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Past Recordings */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Video className="w-6 h-6 text-purple-600" />
                Past Recordings
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "FDA Compliance in Digital Manufacturing",
                    duration: "45 minutes",
                    views: "1.2K views",
                    rating: "4.8/5"
                  },
                  {
                    title: "IoT Implementation Best Practices",
                    duration: "38 minutes",
                    views: "980 views",
                    rating: "4.9/5"
                  },
                  {
                    title: "Quality Management in Industry 4.0",
                    duration: "52 minutes",
                    views: "1.5K views",
                    rating: "4.7/5"
                  }
                ].map((recording, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{recording.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{recording.duration}</span>
                          <span>{recording.views}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{recording.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Play className="w-8 h-8 text-purple-600" />
                    </div>
                    <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Watch Recording
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Documentation */}
      <AnimatedSection id="documentation" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Documentation
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive technical guides, API documentation, and implementation 
              resources for developers and system administrators.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "API Documentation",
                icon: Code,
                desc: "Complete API reference with interactive examples",
                items: ["REST API Reference", "GraphQL Endpoints", "Authentication", "Rate Limiting"]
              },
              {
                title: "Implementation Guides",
                icon: Settings,
                desc: "Step-by-step implementation and configuration guides",
                items: ["Quick Start Guide", "Advanced Configuration", "Best Practices", "Troubleshooting"]
              },
              {
                title: "Integration Tutorials",
                icon: Network,
                desc: "Detailed tutorials for third-party integrations",
                items: ["ERP Integration", "LIMS Connectivity", "IoT Device Setup", "Cloud Deployment"]
              }
            ].map((doc, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <doc.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{doc.title}</h3>
                <p className="text-gray-300 mb-6">{doc.desc}</p>
                <ul className="space-y-2">
                  {doc.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
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

      {/* Newsletter Signup */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Subscribe to our newsletter for the latest insights, product updates, 
            and regulatory news in regulated manufacturing.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="max-w-md mx-auto"
          >
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ResourcesPage;