import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  ChevronDown, 
  Play, 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart3,
  Globe,
  Cpu,
  Network,
  Database,
  Cloud,
  Brain,
  Settings,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Users,
  Award
} from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const heroSlides = [
    {
      title: "Engineering Intelligence.",
      subtitle: "Empowering Compliance.",
      description: "Redefining how regulated industries embrace Industry 4.0/5.0 through intelligent, compliant, and future-ready platforms.",
      background: "https://images.pexels.com/photos/6075001/pexels-photo-6075001.jpeg",
      primaryAction: "Explore Solutions",
      secondaryAction: "Schedule Demo",
      stats: [
        { number: "99.9%", label: "Uptime" },
        { number: "50+", label: "Implementations" },
        { number: "5", label: "Industries" }
      ]
    },
    {
      title: "AI-Powered Manufacturing",
      subtitle: "Predictive Excellence",
      description: "Harness the power of artificial intelligence for predictive maintenance, quality control, and operational optimization.",
      background: "https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg",
      primaryAction: "View AI Solutions",
      secondaryAction: "Watch Demo",
      stats: [
        { number: "70%", label: "Efficiency Gain" },
        { number: "85%", label: "Quality Improvement" },
        { number: "60%", label: "Cost Reduction" }
      ]
    },
    {
      title: "Regulatory Compliance",
      subtitle: "Automated Excellence",
      description: "Streamline compliance with automated GxP protocols, audit trails, and regulatory reporting systems.",
      background: "https://images.pexels.com/photos/7818237/pexels-photo-7818237.jpeg",
      primaryAction: "Compliance Solutions",
      secondaryAction: "Get Consultation",
      stats: [
        { number: "100%", label: "FDA Compliant" },
        { number: "24/7", label: "Monitoring" },
        { number: "Zero", label: "Audit Failures" }
      ]
    }
  ];

  const floatingElements = [
    { icon: Brain, position: { top: '20%', left: '10%' }, delay: 0 },
    { icon: Shield, position: { top: '30%', right: '15%' }, delay: 0.5 },
    { icon: BarChart3, position: { bottom: '30%', left: '20%' }, delay: 1 },
    { icon: Network, position: { bottom: '20%', right: '10%' }, delay: 1.5 },
    { icon: Database, position: { top: '50%', left: '5%' }, delay: 2 },
    { icon: Cloud, position: { top: '60%', right: '5%' }, delay: 2.5 }
  ];

  useEffect(() => {
    setIsVisible(true);
    controls.start("visible");
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [controls, heroSlides.length]);

  const currentHero = heroSlides[currentSlide];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 102, 255, 0.9) 0%, rgba(139, 92, 246, 0.8) 100%), url('${currentHero.background}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      </div>

      {/* Floating Tech Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute z-10 hidden lg:block"
          style={element.position}
          variants={floatingVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: element.delay }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay
            }}
            className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
          >
            <element.icon className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.div>
      ))}

      {/* Particle Effect */}
      <div className="absolute inset-0 z-5">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/30 mb-4">
                🚀 Industry 4.0/5.0 Platform
              </span>
            </motion.div>

            <motion.h1 
              key={`title-${currentSlide}`}
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {currentHero.title}
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                {currentHero.subtitle}
              </span>
            </motion.h1>
            
            <motion.p 
              key={`desc-${currentSlide}`}
              variants={itemVariants}
              className="text-xl mb-8 text-gray-100 leading-relaxed"
            >
              {currentHero.description}
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {currentHero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-green-400">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/solutions"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 102, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play size={20} />
                {currentHero.primaryAction}
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {currentHero.secondaryAction}
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>

            {/* Slide Indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-2 mt-8 justify-center sm:justify-start"
            >
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Content - Interactive Dashboard Preview */}
          <motion.div 
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">BhriguOne Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-end justify-around p-4">
                  {[40, 70, 45, 80, 60, 90, 75].map((height, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-t from-blue-400 to-purple-400 rounded-t"
                      style={{ height: `${height}%`, width: '8px' }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>

                {/* Mock Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Efficiency</span>
                    </div>
                    <div className="text-xl font-bold">94.2%</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">Compliance</span>
                    </div>
                    <div className="text-xl font-bold">100%</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green-500/20 backdrop-blur-sm rounded-lg p-3 border border-green-400/30"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mb-1" />
                <div className="text-xs">All Systems</div>
                <div className="text-xs font-bold">Operational</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-blue-500/20 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30"
              >
                <Users className="w-6 h-6 text-blue-400 mb-1" />
                <div className="text-xs">Active Users</div>
                <div className="text-xs font-bold">1,247</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm opacity-70">Scroll to explore</span>
          <ChevronDown size={32} />
        </div>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div 
        variants={itemVariants}
        className="absolute bottom-20 left-8 right-8 z-20 hidden lg:block"
      >
        <div className="flex justify-center items-center gap-8 text-white/70">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span className="text-sm">FDA Validated</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm">SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            <span className="text-sm">Industry Leader</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span className="text-sm">Global Presence</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;