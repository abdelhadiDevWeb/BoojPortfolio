'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Rocket, 
  Mail, 
  Phone, 
  MessageCircle, 
  Github,
  User,
  Calendar,
  Settings,
  Code,
  Palette,
  Zap,
  Briefcase,
  DollarSign,
  Wrench,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const skills = {
    frontend: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Redux", level: 85 },
      { name: "TailwindCSS", level: 92 },
      { name: "React Native", level: 87 }
    ],
    backend: [
      { name: "Node.js", level: 89 },
      { name: "Express.js", level: 86 },
      { name: "MongoDB", level: 84 },
      { name: "SQL", level: 82 },
      { name: "Supabase", level: 88 }
    ],
    others: [
      { name: "API Integration", level: 93 },
      { name: "Deployment", level: 90 },
      { name: "Vercel", level: 91 },
      { name: "cPanel", level: 85 }
    ]
  };

  const projects = [
    {
      title: "MazadClick",
      description: "Revolutionary online auction platform with advanced bidding algorithms and real-time notifications",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "React Native"],
      links: {
        website: "https://mazad.click/",
        seller: "https://mazad.click/seller/",
        admin: "https://mazad.click/admin"
      },
      image: "/ma.png",
      featured: true
    },
    {
      title: "VetoDiag Pro",
      description: "AI-powered veterinary clinic management with smart diagnosis and automated workflows",
      tech: ["Next.js", "Supabase", "TailwindCSS", "AI Integration"],
      links: {
        website: "https://www.vetodiag.pro/"
      },
      image: "/vetoI.png",
      featured: true
    },
    {
      title: "AutoParts Intelligence",
      description: "Smart automotive parts catalog with ML-powered search and inventory optimization",
      tech: ["React.js", "Node.js", "MongoDB", "Machine Learning"],
      links: {
        website: "https://autoparts-pi.vercel.app/"
      },
      image: "/autoI.png"
    }
  ];

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle WhatsApp send
  const handleWhatsAppSend = () => {
    const { name, email, message } = formData;
    
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all required fields (Name, Email, and Message)');
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hello, my name is ${name}, my email is ${email}. Message: ${message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/213562232628?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappURL, '_blank');
  };

  // Remove the email send function since we're only using WhatsApp now

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Abdelhadi delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
      avatar: "/booj.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, StartupHub",
      content: "Working with Abdelhadi was a game-changer for our project. He brought innovative solutions and delivered ahead of schedule.",
      avatar: "/booj.jpg",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateLab",
      content: "His full-stack expertise and problem-solving skills made our complex project seem effortless. Highly recommended!",
      avatar: "/booj.jpg",
      rating: 5
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    // Create particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();

    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (entry.target.id === 'skills-section') {
              setSkillsVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    // Testimonial carousel
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
      observer.disconnect();
    };
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Particles Background */}
      <div id="particles" className="particles"></div>

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-black opacity-90 z-0"></div>
                    <div className="fixed inset-0 bg-gradient-to-tr from-transparent via-teal-900/10 to-aqua-900/20 animate-gradient z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-dark z-50 border-b border-aqua-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500 animate-text-glow">
              &lt;Abdelhadi_boudjemline/&gt;
            </h1>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Testimonials", "Contact"].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/80 hover:text-aqua-400 transition-all duration-300 hover:scale-110 relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-aqua-400 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative z-10 flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-48 lg:gap-80 items-center">
          <div className={`space-y-12 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="overflow-hidden">
                <p className="text-aqua-400 text-xl animate-text-reveal-up inline-block" style={{ animationDelay: '0.2s' }}>
                  Hello, I&apos;m
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-500 to-cyan-400 animate-text-glow char-stagger inline-block">
                      <span className="animate-char-appear inline-block">A</span>
                      <span className="animate-char-appear inline-block">b</span>
                      <span className="animate-char-appear inline-block">d</span>
                      <span className="animate-char-appear inline-block">e</span>
                      <span className="animate-char-appear inline-block">l</span>
                      <span className="animate-char-appear inline-block">h</span>
                      <span className="animate-char-appear inline-block">a</span>
                      <span className="animate-char-appear inline-block">d</span>
                      <span className="animate-char-appear inline-block">i</span>
                    </span>
                  </h1>
                </div>
                
                <div className="overflow-hidden">
                  <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                    <span className="text-white animate-write-erase inline-block" style={{ animationDelay: '1.5s' }}>
                      boudjemline
                    </span>
                  </h1>
                </div>
              </div>
              
              <div className="text-2xl lg:text-3xl text-white/90 space-y-4">
                <div className="overflow-hidden">
                  <p className="animate-word-slide" style={{ animationDelay: '2.5s' }}>
                    Full-Stack 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500 animate-letter-bounce inline-block ml-2" style={{ animationDelay: '3s' }}>
                      Developer
                    </span>
                  </p>
                </div>
                
                <div className="overflow-hidden">
                  <p className="text-lg text-white/70 animate-text-reveal-up" style={{ animationDelay: '3.2s' }}>
                    Building the future, one line of code at a time
                  </p>
                </div>
                
                {/* Animated subtitle with typewriter effect */}
                <div className="overflow-hidden">
                  <p className="text-base text-aqua-300 animate-typewriter" style={{ animationDelay: '4s' }}>
                    Crafting exceptional digital experiences with passion & precision
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '4.5s' }}>
                            <a 
                href="#projects" 
                className="group relative bg-gradient-to-r from-aqua-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover-glow overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-aqua-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
                href="#contact" 
                className="group border-2 border-aqua-500 text-aqua-400 hover:bg-aqua-500 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-float"
              >
                Let&apos;s Connect
          </a>
        </div>

            <div className="flex items-center space-x-8 animate-fade-in-up" style={{ animationDelay: '5s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500">1.5+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500">50+</div>
                <div className="text-white/60 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500">15+</div>
                <div className="text-white/60 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="relative w-96 h-96 mx-auto">
              {/* Geometric background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-aqua-400/30 rounded-2xl rotate-12 animate-float"></div>
                <div className="absolute bottom-12 right-4 w-16 h-16 bg-gradient-to-br from-aqua-400/20 to-teal-500/20 rounded-full floating"></div>
                <div className="absolute top-16 right-12 w-8 h-8 bg-aqua-500 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute bottom-20 left-6 w-12 h-12 border border-teal-400/40 rounded-lg rotate-45 floating"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-aqua-400/30 to-teal-500/30 rounded-2xl floating"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-3xl floating"></div>
              <div className="absolute top-12 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-400/25 to-aqua-500/25 rounded-xl floating"></div>
              
              {/* Modern image container with hexagonal mask */}
              <div className="relative w-full h-full">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-aqua-400 via-teal-500 to-cyan-500 rounded-3xl animate-pulse-glow opacity-40"></div>
                
                {/* Main container */}
                <div className="relative w-full h-full bg-gradient-to-br from-aqua-400 via-teal-500 to-cyan-500 rounded-3xl p-1">
                  {/* Glass effect overlay */}
                  <div className="absolute inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
                  
                  {/* Image container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image
                      src="/booj.jpg"
                      alt="Abdelhadi boudjemline"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full hover-3d transition-transform duration-500"
                      priority
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-aqua-400 rounded-tl-lg"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-aqua-400 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-aqua-400 rounded-bl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-aqua-400 rounded-br-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Modern status indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="glass border border-aqua-500/30 px-6 py-3 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-aqua-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-aqua-400 rounded-full animate-ping opacity-30"></div>
                    </div>
                    <span className="text-white font-medium text-sm">Available for Projects</span>
                  </div>
                </div>
              </div>
              
              {/* Floating code elements */}
              <div className="absolute top-0 left-20 opacity-60">
                <div className="glass p-2 rounded-lg border border-aqua-500/20 floating">
                  <Code size={16} className="text-aqua-400" />
                </div>
              </div>
              <div className="absolute bottom-8 right-0 opacity-60">
                <div className="glass p-2 rounded-lg border border-teal-500/20 floating">
                  <Database size={16} className="text-teal-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-aqua-500/20 to-teal-500/20 backdrop-blur-sm border border-aqua-500/30 rounded-full px-6 py-2 mb-6">
              <User size={20} className="text-aqua-400" />
              <span className="text-aqua-300 font-medium">About Me</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-400 to-cyan-400 mb-8 animate-text-glow leading-tight">
              Crafting Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">Excellence</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Passionate developer transforming ideas into exceptional digital experiences with cutting-edge technologies and innovative solutions
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 scroll-reveal">
            {[
              { number: "1.5+", label: "Years Experience", color: "from-aqua-500 to-teal-500" },
              { number: "50+", label: "Projects Completed", color: "from-cyan-500 to-aqua-500" },
              { number: "15+", label: "Happy Clients", color: "from-teal-500 to-cyan-500" },
              { number: "24/7", label: "Support Available", color: "from-aqua-500 to-cyan-500" }
            ].map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center hover-float group">
                <div className={`text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Journey Card */}
            <div className="lg:col-span-2 scroll-reveal">
              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-aqua-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500">My Journey</h3>
                </div>
                
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  I&apos;m a passionate Full-Stack Developer with over 1.5 years of experience building modern applications. 
                  I specialize in both Frontend & Backend development, handling everything from UI/UX design to deployment.
                </p>
                
                {/* Experience Timeline */}
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-gradient-to-b from-aqua-500 to-teal-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-aqua-500 to-teal-600 rounded-full"></div>
                    <div className="glass p-4 rounded-xl">
                      <h4 className="font-bold text-white text-lg mb-1">Web & App Developer</h4>
                      <p className="text-aqua-400 font-medium mb-2">NoteEasy (Talabe Store)</p>
                      <p className="text-white/70 text-sm mb-2">October 2024 - Present</p>
                      <p className="text-white/60 text-sm">Developing and maintaining internal tools and customer-facing applications with Next.js and modern tech stack.</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-gradient-to-b from-teal-500 to-cyan-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full"></div>
                    <div className="glass p-4 rounded-xl">
                      <h4 className="font-bold text-white text-lg mb-1">Freelance Developer</h4>
                      <p className="text-teal-400 font-medium mb-2">Independent</p>
                      <p className="text-white/70 text-sm mb-2">2023 - Present</p>
                      <p className="text-white/60 text-sm">Building custom web & mobile applications for international clients with diverse project requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div className="scroll-reveal">
              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-teal-500/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Settings size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">What I Do</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Globe, title: "Web Development", desc: "Modern, responsive websites", color: "text-aqua-400", bg: "bg-aqua-500/20" },
                    { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform applications", color: "text-teal-400", bg: "bg-teal-500/20" },
                    { icon: Database, title: "Backend Systems", desc: "Scalable APIs & databases", color: "text-cyan-400", bg: "bg-cyan-500/20" },
                    { icon: Rocket, title: "Deployment", desc: "Cloud hosting optimization", color: "text-aqua-400", bg: "bg-aqua-500/20" }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className={`${item.color} ${item.bg} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white group-hover:text-aqua-400 transition-colors">{item.title}</h4>
                            <p className="text-white/60 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-aqua-500/20 to-teal-500/20 backdrop-blur-sm border border-aqua-500/30 rounded-full px-6 py-2 mb-6">
              <Code size={20} className="text-aqua-400" />
              <span className="text-aqua-300 font-medium">Skills & Expertise</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-500 to-cyan-600 mb-8 animate-text-glow leading-tight">
              Technical
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-aqua-500">Mastery</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Mastering cutting-edge technologies and frameworks to build exceptional digital solutions that drive business growth
            </p>
          </div>
          
          {/* Skills Overview */}
          <div className="grid lg:grid-cols-4 gap-6 mb-16 scroll-reveal">
            {[
              { title: "Frontend", count: "6+", desc: "Modern Frameworks", color: "from-aqua-500 to-teal-500" },
              { title: "Backend", count: "5+", desc: "Server Technologies", color: "from-teal-500 to-cyan-500" },
              { title: "Tools", count: "4+", desc: "Development Tools", color: "from-cyan-500 to-aqua-500" },
              { title: "Years", count: "1.5+", desc: "Professional Experience", color: "from-aqua-500 to-cyan-500" }
            ].map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center hover-3d group border border-white/10">
                <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2`}>
                  {item.count}
                </div>
                <div className="text-white font-semibold mb-1">{item.title}</div>
                <div className="text-white/60 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
          
          <div id="skills-section" className="grid lg:grid-cols-3 gap-8 scroll-reveal">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => {
              const categoryConfig = {
                frontend: { 
                  title: "Frontend Development", 
                  icon: Palette, 
                  gradient: "from-aqua-400 to-teal-500",
                  borderColor: "border-aqua-500/30",
                  iconBg: "bg-aqua-500/20"
                },
                backend: { 
                  title: "Backend Development", 
                  icon: Database, 
                  gradient: "from-teal-400 to-cyan-500",
                  borderColor: "border-teal-500/30",
                  iconBg: "bg-teal-500/20"
                },
                others: { 
                  title: "Tools & Deployment", 
                  icon: Zap, 
                  gradient: "from-cyan-400 to-aqua-500",
                  borderColor: "border-cyan-500/30",
                  iconBg: "bg-cyan-500/20"
                }
              };
              
              const config = categoryConfig[category as keyof typeof categoryConfig];
              const IconComponent = config.icon;
              
              return (
                <div key={category} className={`glass p-8 rounded-3xl border ${config.borderColor} hover:border-opacity-50 transition-all duration-500 group`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 ${config.iconBg} rounded-xl flex items-center justify-center`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${config.gradient}`}>
                      {config.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {skillList.map((skill, index) => (
                      <div key={index} className="group/skill">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-white font-medium group-hover/skill:text-aqua-400 transition-colors">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-1 bg-white/20 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${config.gradient} transition-all duration-1000`}
                                style={{
                                  width: skillsVisible ? `${(skill.level / 100) * 100}%` : '0%',
                                  transitionDelay: `${categoryIndex * 0.2 + index * 0.1}s`
                                }}
                              ></div>
                            </div>
                            <span className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${config.gradient}`}>
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        
                        {/* Modern Progress Bar */}
                        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${config.gradient} rounded-full transition-all duration-1500 ease-out`}
                            style={{
                              width: skillsVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${categoryIndex * 0.2 + index * 0.1}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Category Summary */}
                  <div className="mt-8 p-4 bg-white/5 rounded-xl">
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${config.gradient}`}>
                        {Math.round(skillList.reduce((sum, skill) => sum + skill.level, 0) / skillList.length)}%
                      </div>
                      <div className="text-white/60 text-sm">Average Proficiency</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-500 to-cyan-500 mb-6 animate-text-glow">Featured Projects</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Showcasing innovative solutions that make a real impact
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`scroll-reveal glass rounded-2xl overflow-hidden hover-3d group ${project.featured ? 'lg:col-span-1' : ''}`}>
                <div className="relative h-64 overflow-hidden">
          <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-glow">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-aqua-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm border border-white/20 hover:border-cyan-400/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.links.website && (
                      <Link 
                        href={project.links.website} 
                        target="_blank"
                        className="bg-gradient-to-r from-aqua-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover-glow"
                      >
                        Live Demo
                      </Link>
                    )}
                    {project.links.seller && (
                      <Link 
                        href={project.links.seller} 
                        target="_blank"
                        className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover-glow"
                      >
                        Seller Panel
                      </Link>
                    )}
                    {project.links.admin && (
                      <Link 
                        href={project.links.admin} 
                        target="_blank"
                        className="bg-gradient-to-r from-cyan-500 to-aqua-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover-glow"
                      >
                        Admin Panel
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* More Projects Card */}
            <div className="scroll-reveal glass rounded-2xl p-8 flex flex-col items-center justify-center text-center hover-3d group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-aqua-500 to-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse-glow">
                  <Github size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-aqua-400 transition-colors">
                  More Projects
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Want to see more of my work? Check out my GitHub profile for additional projects, experiments, and open-source contributions.
                </p>
              </div>
              <Link 
                href="https://github.com/abdelhadiDevWeb" 
          target="_blank"
                className="bg-gradient-to-r from-aqua-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-glow flex items-center gap-2"
              >
                <Github size={20} />
                Visit GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-500 to-cyan-500 mb-6 animate-text-glow">Client Testimonials</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              What my clients say about working with me
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass p-12 rounded-3xl text-center scroll-reveal">
              <div className="mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-2xl text-white/90 mb-8 leading-relaxed italic">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aqua-500 to-teal-600 flex items-center justify-center border-2 border-aqua-400">
                  <User size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-aqua-400">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-aqua-500 to-teal-600 w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-aqua-500/20 to-teal-500/20 backdrop-blur-sm border border-aqua-500/30 rounded-full px-6 py-2 mb-6">
              <Mail size={20} className="text-aqua-400" />
              <span className="text-aqua-300 font-medium">Get In Touch</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-500 to-cyan-600 mb-8 animate-text-glow leading-tight">
              Let&apos;s Create
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-aqua-500">Something Amazing</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? I&apos;m here to help you build exceptional digital experiences that drive results
            </p>
          </div>
          
          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 scroll-reveal">
            {[
              { 
                icon: Mail, 
                label: "Email", 
                value: "abdouhadi2002@gmail.com", 
                href: "mailto:abdouhadi2002@gmail.com", 
                color: "text-aqua-400",
                gradient: "from-aqua-500 to-teal-500",
                bg: "bg-aqua-500/20"
              },
              { 
                icon: Phone, 
                label: "Phone", 
                value: "0799436171", 
                href: "tel:0799436171", 
                color: "text-teal-400",
                gradient: "from-teal-500 to-cyan-500",
                bg: "bg-teal-500/20"
              },
              { 
                icon: MessageCircle, 
                label: "WhatsApp", 
                value: "0562232628", 
                href: "https://wa.me/213562232628", 
                color: "text-cyan-400",
                gradient: "from-cyan-500 to-aqua-500",
                bg: "bg-cyan-500/20"
              },
              { 
                icon: Github, 
                label: "GitHub", 
                value: "abdelhadiDevWeb", 
                href: "https://github.com/abdelhadiDevWeb", 
                color: "text-aqua-400",
                gradient: "from-aqua-500 to-cyan-500",
                bg: "bg-aqua-500/20"
              }
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  className="glass p-6 rounded-3xl border border-white/10 hover:border-white/30 group hover-3d transition-all duration-500"
                >
                  <div className={`w-14 h-14 ${contact.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} className={contact.color} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-white font-semibold mb-2 group-hover:text-aqua-400 transition-colors">{contact.label}</h3>
                    <p className="text-white/60 text-sm">{contact.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 scroll-reveal">
              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-aqua-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Send WhatsApp Message</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-medium">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20 focus:bg-white/10 transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20 focus:bg-white/10 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm font-medium">Project Type</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20 focus:bg-white/10 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="fullstack">Full-Stack Solution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm font-medium">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20 focus:bg-white/10 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  {/* WhatsApp Send Button */}
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white font-semibold py-5 px-6 rounded-xl transition-all duration-300 group hover:from-green-600 hover:via-green-700 hover:to-green-800 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <MessageCircle size={24} />
                      Send via WhatsApp
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>
                  
                  {/* Helper Text */}
                  <p className="text-white/50 text-sm text-center">
                    * Required fields. Message will be sent directly to WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="lg:col-span-2 scroll-reveal space-y-8">
              {/* Availability Card */}
              <div className="glass p-6 rounded-3xl border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-aqua-600 rounded-xl flex items-center justify-center">
                    <Calendar size={20} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-aqua-500">Availability</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-white/80">Available for new projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-aqua-500 rounded-full"></div>
                    <span className="text-white/80">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-white/80">Free consultation available</span>
                  </div>
                </div>
              </div>

              {/* FAQ Card */}
              <div className="glass p-6 rounded-3xl border border-white/10">
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500 mb-4">Quick FAQ</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-aqua-500/20 rounded-lg flex items-center justify-center mt-0.5">
                      <Clock size={14} className="text-aqua-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Project Timeline?</h5>
                      <p className="text-white/70">Typically 2-8 weeks depending on complexity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-aqua-500/20 rounded-lg flex items-center justify-center mt-0.5">
                      <DollarSign size={14} className="text-aqua-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Pricing?</h5>
                      <p className="text-white/70">Competitive rates, custom quotes for each project</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-aqua-500/20 rounded-lg flex items-center justify-center mt-0.5">
                      <Wrench size={14} className="text-aqua-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Support?</h5>
                      <p className="text-white/70">Post-launch support and maintenance included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-white/60 mb-4">
              © 2024 Abdelhadi boudjemline. Crafted with ❤️ using Next.js & TailwindCSS.
            </p>
            <div className="flex justify-center space-x-6">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social, index) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/40 hover:text-aqua-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
