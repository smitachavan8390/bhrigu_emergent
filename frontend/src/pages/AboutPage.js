import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Target, 
  Award, 
  Globe,
  Lightbulb,
  Shield,
  TrendingUp,
  Heart,
  Star,
  Building,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Zap,
  Eye,
  CheckCircle,
  Code,
  Brain,
  Settings,
  BarChart3,
  Network,
  Lock,
  Activity,
  Clock,
  Handshake
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

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 102, 255, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%), url('https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg')`,
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
              The Bhrigu
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Story
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Engineering Intelligence. Empowering Compliance. 
              Transforming the future of regulated manufacturing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerChildren}>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Our Story
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                Bhrigu.tech was founded on the vision of bridging the critical gap between 
                digital transformation and regulatory compliance. We recognized that while 
                manufacturing industries were rapidly adopting Industry 4.0 technologies, 
                regulated sectors were being left behind.
              </motion.p>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Our mission evolved from this observation: to create intelligent, compliant, 
                and future-ready platforms that enable regulated industries to embrace 
                the full potential of modern technology without compromising on safety 
                or compliance standards.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { number: "2020", label: "Founded", icon: Calendar },
                  { number: "50+", label: "Implementations", icon: Target },
                  { number: "5", label: "Industries Served", icon: Building },
                  { number: "99.9%", label: "Uptime Achieved", icon: TrendingUp }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
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
                  src="https://images.unsplash.com/photo-1716703742196-9986679eb03f"
                  alt="Company Story"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Founding Vision */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Founding Vision
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Bridging the critical gap in digital transformation for regulated industries 
              through expertise in AI, IoT, and compliance-driven systems.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "The Problem",
                icon: Target,
                desc: "Regulated industries struggling with outdated systems that can't adapt to modern requirements",
                color: "from-red-500 to-pink-500"
              },
              {
                title: "Our Expertise", 
                icon: Brain,
                desc: "Deep knowledge in AI, IoT, compliance frameworks, and regulatory requirements",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "The Solution",
                icon: Lightbulb,
                desc: "Next-generation platforms combining cutting-edge technology with compliance automation",
                color: "from-green-500 to-emerald-500"
              }
            ].map((vision, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${vision.color} flex items-center justify-center`}>
                  <vision.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{vision.title}</h3>
                <p className="text-gray-600 leading-relaxed">{vision.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Leadership Team */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Leadership Team
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Visionary leaders with decades of experience in technology, compliance, and regulated industries.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Dr. Raj Patel",
                position: "Chief Executive Officer",
                experience: "20+ years in pharmaceutical technology",
                expertise: ["Regulatory Compliance", "Digital Transformation", "Strategic Leadership"],
                image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51"
              },
              {
                name: "Sarah Chen",
                position: "Chief Technology Officer", 
                experience: "15+ years in AI and IoT systems",
                expertise: ["Artificial Intelligence", "IoT Architecture", "Cloud Computing"],
                image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg"
              },
              {
                name: "Dr. Michael Rodriguez",
                position: "Chief Compliance Officer",
                experience: "18+ years in regulatory affairs",
                expertise: ["FDA Regulations", "GMP Standards", "Quality Assurance"],
                image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                <p className="text-cyan-400 mb-3">{leader.position}</p>
                <p className="text-gray-300 mb-4 text-sm">{leader.experience}</p>
                <div className="space-y-1">
                  {leader.expertise.map((skill, idx) => (
                    <div key={idx} className="text-xs bg-white/20 rounded-full px-3 py-1 inline-block mr-2">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Company Values */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Company Values
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Our core values guide everything we do, from product development to customer relationships.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Engineering Excellence",
                icon: Settings,
                desc: "Building intelligent compliance solutions from the ground up",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Future-Ready Innovation",
                icon: Zap,
                desc: "Creating smart platforms for tomorrow's manufacturing",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Compliance First",
                icon: Shield,
                desc: "Enabling safe, efficient, and fully compliant operations",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Partnership",
                icon: Handshake,
                desc: "Helping partners lead tomorrow's innovation",
                color: "from-orange-500 to-red-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Partnerships & Collaborations */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={scaleIn}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052"
                  alt="Partnerships"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerChildren} className="order-1 lg:order-2">
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Partnerships & Collaborations
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                Strategic partnerships with industry leaders, technology providers, and 
                regulatory bodies to deliver comprehensive solutions for our clients.
              </motion.p>
              
              <motion.div 
                variants={staggerChildren}
                className="space-y-6"
              >
                {[
                  { title: "Industry Alliance Networks", icon: Network, desc: "Collaborations with leading manufacturers" },
                  { title: "Technology Partnerships", icon: Code, desc: "Integration with best-in-class platforms" },
                  { title: "Regulatory Body Relationships", icon: Award, desc: "Direct engagement with compliance authorities" },
                  { title: "Academic Collaborations", icon: GraduationCap, desc: "Research partnerships with universities" }
                ].map((partnership, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <partnership.icon className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{partnership.title}</h4>
                      <p className="text-gray-600">{partnership.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Office & Culture */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Office & Culture
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              A collaborative environment fostering innovation, learning, and excellence 
              in everything we do.
            </motion.p>
          </div>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Innovation Labs",
                icon: Lightbulb,
                desc: "State-of-the-art facilities for research and development",
                features: ["3D Prototyping", "AI Research", "IoT Testing", "Compliance Simulation"]
              },
              {
                title: "Collaborative Spaces",
                icon: Users,
                desc: "Open environments promoting teamwork and knowledge sharing",
                features: ["Cross-functional Teams", "Daily Standups", "Knowledge Sessions", "Mentorship Programs"]
              },
              {
                title: "Global Presence",
                icon: Globe,
                desc: "Offices and teams across multiple time zones and regions",
                features: ["Silicon Valley HQ", "European Office", "Asia-Pacific Hub", "Remote Teams"]
              }
            ].map((culture, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <culture.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{culture.title}</h3>
                <p className="text-gray-300 mb-6">{culture.desc}</p>
                <ul className="space-y-2">
                  {culture.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
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

      {/* Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Join Our Mission
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Be part of the transformation revolutionizing regulated manufacturing through 
            intelligent technology and unwavering compliance standards.
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
              Get in Touch
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/resources"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;