'use client';

import React from "react";
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
import { Menu, X } from "lucide-react";
import { LanguageProvider, useLanguage } from '../lib/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

function HomeContent() {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = {
    frontend: [
      { name: t.skills.skillNames.javascript, level: 95 },
      { name: t.skills.skillNames.react, level: 90 },
      { name: t.skills.skillNames.nextjs, level: 88 },
      { name: t.skills.skillNames.redux, level: 85 },
      { name: t.skills.skillNames.tailwind, level: 92 },
      { name: t.skills.skillNames.reactnative, level: 87 }
    ],
    backend: [
      { name: t.skills.skillNames.nodejs, level: 89 },
      { name: t.skills.skillNames.express, level: 86 },
      { name: t.skills.skillNames.mongodb, level: 84 },
      { name: t.skills.skillNames.sql, level: 82 },
      { name: t.skills.skillNames.supabase, level: 88 }
    ],
    others: [
      { name: t.skills.skillNames.api, level: 93 },
      { name: t.skills.skillNames.deployment, level: 90 },
      { name: t.skills.skillNames.vercel, level: 91 },
      { name: t.skills.skillNames.cpanel, level: 85 }
    ]
  };

  const projects = [
    {
      title: t.projects.titles.mazadclick,
      description: t.projects.descriptions.mazadclick,
      tech: [t.projects.technologies.reactjs, t.projects.technologies.nodejs, t.projects.technologies.mongodb, t.projects.technologies.socketio, t.projects.technologies.reactnative],
      links: {
        website: "https://mazad.click/",
        seller: "https://mazad.click/seller/",
        admin: "https://mazad.click/admin"
      },
      image: "/ma.png",
      featured: true
    },
    {
      title: t.projects.titles.vetodiag,
      description: t.projects.descriptions.vetodiag,
      tech: [t.projects.technologies.nextjs, t.projects.technologies.supabase, t.projects.technologies.tailwindcss, t.projects.technologies.ai],
      links: {
        website: "https://www.vetodiag.pro/"
      },
      image: "/vetoI.png",
      featured: true
    },
    {
      title: t.projects.titles.autoparts,
      description: t.projects.descriptions.autoparts,
      tech: [t.projects.technologies.reactjs, t.projects.technologies.nodejs, t.projects.technologies.mongodb, t.projects.technologies.ml],
      links: {
        website: "https://autoparts-pi.vercel.app/"
      },
      image: "/autoI.png"
    }
  ];

  const testimonials = [
    {
      name: t.testimonials.clients.sarah.name,
      role: `${t.testimonials.clients.sarah.role}, ${t.testimonials.clients.sarah.company}`,
      content: t.testimonials.clients.sarah.content,
      avatar: "/booj.jpg",
      rating: 5
    },
    {
      name: t.testimonials.clients.michael.name,
      role: `${t.testimonials.clients.michael.role}, ${t.testimonials.clients.michael.company}`,
      content: t.testimonials.clients.michael.content,
      avatar: "/booj.jpg",
      rating: 5
    },
    {
      name: t.testimonials.clients.emily.name,
      role: `${t.testimonials.clients.emily.role}, ${t.testimonials.clients.emily.company}`,
      content: t.testimonials.clients.emily.content,
      avatar: "/booj.jpg",
      rating: 5
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    // Advanced Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Magnetic effect for buttons and links
      const magneticElements = document.querySelectorAll('.magnetic');
      magneticElements.forEach(element => {
        const htmlElement = element as HTMLElement;
        const rect = htmlElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;
        
        if (e.clientX >= rect.left && e.clientX <= rect.right && 
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
          htmlElement.style.setProperty('--mouse-x', `${deltaX}px`);
          htmlElement.style.setProperty('--mouse-y', `${deltaY}px`);
        } else {
          htmlElement.style.setProperty('--mouse-x', '0px');
          htmlElement.style.setProperty('--mouse-y', '0px');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

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
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [testimonials.length]);

  // Set mounted state after component mounts to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden cursor-none">
      {mounted && (
        <>
          {/* Modern Diamond Cursor */}
          <div 
        className="fixed w-6 h-6 pointer-events-none z-[9999] transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0, 0, 0) rotate(45deg)'
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 animate-diamond-spin border border-white/30 shadow-lg shadow-purple-500/50"></div>
        <div className="absolute inset-1 bg-gradient-to-tr from-white/20 to-transparent"></div>
      </div>
      
      {/* Crosshair Lines */}
      <div 
        className="fixed pointer-events-none z-[9998] transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 1,
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-crosshair-pulse"></div>
      </div>
      <div 
        className="fixed pointer-events-none z-[9998] transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 1,
          top: mousePosition.y - 15,
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="w-0.5 h-8 bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-crosshair-pulse"></div>
      </div>
      
      {/* Geometric Trail Effects */}
      <div 
        className="fixed w-4 h-4 pointer-events-none z-[9997] transition-all duration-400 ease-out opacity-50"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `translate3d(${Math.sin(Date.now() * 0.001) * 20}px, ${Math.cos(Date.now() * 0.001) * 20}px, 0) rotate(${Date.now() * 0.1}deg)`
        }}
      >
        <div className="w-full h-full border-2 border-pink-400/60 rotate-45 animate-pulse"></div>
      </div>
      
      <div 
        className="fixed w-3 h-3 pointer-events-none z-[9996] transition-all duration-600 ease-out opacity-40"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: `translate3d(${Math.sin(Date.now() * 0.002) * 30}px, ${Math.cos(Date.now() * 0.002) * 30}px, 0)`
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-ping opacity-60"></div>
      </div>
      
      <div 
        className="fixed w-2 h-2 pointer-events-none z-[9995] transition-all duration-800 ease-out opacity-30"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: `translate3d(${Math.sin(Date.now() * 0.003) * 40}px, ${Math.cos(Date.now() * 0.003) * 40}px, 0)`
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-400 rotate-45 animate-bounce"></div>
      </div>
      
      {/* Modern Floating Followers */}
      <div 
        className="fixed w-5 h-5 pointer-events-none z-[9994] transition-all duration-700 ease-out opacity-25"
        style={{
          left: mousePosition.x + 50,
          top: mousePosition.y - 30,
          transform: 'translate3d(0, 0, 0) rotate(60deg)'
        }}
      >
        <div className="w-full h-full border-2 border-gradient-to-r from-purple-400 to-pink-400 rotate-45 animate-spin" style={{ animationDuration: '3s' }}></div>
        <div className="absolute inset-1 bg-purple-400/20 rotate-45"></div>
      </div>
      
      <div 
        className="fixed w-3 h-3 pointer-events-none z-[9993] transition-all duration-900 ease-out opacity-20"
        style={{
          left: mousePosition.x - 70,
          top: mousePosition.y + 40,
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-pink-300 to-cyan-400 rounded-full animate-pulse"></div>
      </div>
      
      {/* Orbiting Hexagon */}
      <div 
        className="fixed w-3 h-3 pointer-events-none z-[9992] transition-all duration-1000 ease-out opacity-15"
        style={{
          left: mousePosition.x + Math.cos(Date.now() * 0.0015) * 80,
          top: mousePosition.y + Math.sin(Date.now() * 0.0015) * 80,
          transform: `translate3d(0, 0, 0) rotate(${Date.now() * 0.05}deg)`
        }}
      >
        <div className="w-full h-full border border-purple-300 rotate-45 animate-ping"></div>
      </div>
      
      {/* Counter-Orbiting Element */}
      <div 
        className="fixed w-2 h-2 pointer-events-none z-[9991] transition-all duration-1200 ease-out opacity-10"
        style={{
          left: mousePosition.x + Math.cos(-Date.now() * 0.002) * 120,
          top: mousePosition.y + Math.sin(-Date.now() * 0.002) * 120,
          transform: 'translate3d(0, 0, 0)'
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full animate-bounce"></div>
      </div>
        </>
      )}
      {/* Animated Particles Background */}
      <div id="particles" className="particles"></div>

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-black opacity-90 z-0"></div>
                    <div className="fixed inset-0 bg-gradient-to-tr from-transparent via-teal-900/10 to-aqua-900/20 animate-gradient z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-dark z-50 border-b border-aqua-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500" >
              <span className="hidden sm:inline">&lt;Abdelahdi Boudjemline /&gt;</span>
              <span className="sm:hidden">&lt;AB/&gt;</span>
            </h1>
            
            {/* Desktop Navigation */}
            <div className={`hidden lg:flex ${isRTL ? 'space-x-reverse' : ''} space-x-6 xl:space-x-8`}>
              {[
                { key: "home", label: t.nav.home },
                { key: "about", label: t.nav.about },
                { key: "skills", label: t.nav.skills },
                { key: "projects", label: t.nav.projects },
                { key: "testimonials", label: t.nav.testimonials },
                { key: "contact", label: t.nav.contact }
              ].map((item, index) => (
                <a 
                  key={item.key}
                  href={`#${item.key}`} 
                  className="text-white/80 hover:text-aqua-400 transition-all duration-300 hover:scale-110 relative group magnetic text-sm xl:text-base"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-aqua-400 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white/80 hover:text-aqua-400 transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-dark border-t border-aqua-500/20 px-4 py-4">
            <div className="flex flex-col space-y-4">
              {[
                { key: "home", label: t.nav.home },
                { key: "about", label: t.nav.about },
                { key: "skills", label: t.nav.skills },
                { key: "projects", label: t.nav.projects },
                { key: "testimonials", label: t.nav.testimonials },
                { key: "contact", label: t.nav.contact }
              ].map((item, index) => (
                <a 
                  key={item.key}
                  href={`#${item.key}`} 
                  className="text-white/80 hover:text-aqua-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/5 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative z-10 flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-32 xl:gap-48 items-center">
          <div className={`space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="overflow-hidden">
                <p className="text-aqua-400 text-xl animate-text-reveal-up inline-block" style={{ animationDelay: '0.2s' }}>
                  {t.hero.greeting}
                </p>
              </div>
              
              <div className="space-y-2 sm:space-y-4">
                <div className="overflow-hidden">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-500 to-cyan-400 inline-block">
                       {t.personal.name}
                    </span>
                  </h1>
                </div>
                
                <div className="overflow-hidden">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                    <span className="text-white animate-write-erase inline-block" style={{ animationDelay: '1.5s' }}>
                       {t.personal.surname}
                    </span>
                  </h1>
                </div>
              </div>
              
              <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/90 space-y-3 sm:space-y-4">
                <div className="overflow-hidden">
                  <p className="animate-word-slide" style={{ animationDelay: '2.5s' }}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500 inline-block" style={{ animationDelay: '3s' }}>
                      {t.hero.title}
                    </span>
                  </p>
                </div>
                
                <div className="overflow-hidden">
                  <p className="text-base sm:text-lg lg:text-lg animate-text-reveal-up" style={{ animationDelay: '3.2s' }}>
                    {t.hero.subtitle}
                  </p>
                </div>
                
                {/* Description text without animation */}
                <div className="overflow-hidden">
                  <p className="text-sm sm:text-base lg:text-base text-aqua-300" style={{ animationDelay: '4s' }}>
                    {t.hero.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up ${isRTL ? 'sm:flex-row-reverse' : ''} justify-center lg:justify-start`} style={{ animationDelay: '4.5s' }}>
              <a 
                href="#projects" 
                className="group relative bg-gradient-to-r from-aqua-500 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover-glow overflow-hidden magnetic text-center text-sm sm:text-base"
              >
                <span className="relative z-10">{t.hero.cta1}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-aqua-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact" 
                className="group border-2 border-aqua-500 text-aqua-400 hover:bg-aqua-500 hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover-float magnetic text-center text-sm sm:text-base"
              >
                {t.hero.cta2}
              </a>
            </div>

            <div className={`grid grid-cols-3 gap-4 sm:flex sm:items-center ${isRTL ? 'sm:space-x-reverse' : ''} sm:space-x-6 lg:space-x-8 animate-fade-in-up justify-center lg:justify-start`} style={{ animationDelay: '5s' }}>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500">1.5+</div>
                <div className="text-white/60 text-xs sm:text-sm">{t.hero.stats.experience}</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500">50+</div>
                <div className="text-white/60 text-xs sm:text-sm">{t.hero.stats.projects}</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500">15+</div>
                <div className="text-white/60 text-xs sm:text-sm">{t.hero.stats.clients}</div>
              </div>
            </div>
          </div>

          <div className={`relative order-first lg:order-last ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto group">
              {/* Enhanced geometric background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-aqua-400/30 rounded-2xl animate-floating-rotate hover:border-cyan-400/50 transition-all duration-500"></div>
                <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 right-2 sm:right-3 lg:right-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-aqua-400/20 to-teal-500/20 rounded-full animate-morphing-glow"></div>
                <div className="absolute top-8 sm:top-12 lg:top-16 right-6 sm:right-10 lg:right-12 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-aqua-500 rounded-full animate-corner-pulse opacity-60"></div>
                <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-3 sm:left-4 lg:left-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-teal-400/40 rounded-lg animate-floating-rotate" style={{ animationDelay: '2s' }}></div>
              </div>
              
              {/* Enhanced floating decorative elements */}
              <div className="absolute -top-3 sm:-top-4 lg:-top-6 -left-3 sm:-left-4 lg:-left-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-aqua-400/30 to-teal-500/30 rounded-2xl animate-morphing-glow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-3xl animate-morphing-glow" style={{ animationDelay: '3s' }}></div>
              <div className="absolute top-8 sm:top-10 lg:top-12 -right-2 sm:-right-3 lg:-right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400/25 to-aqua-500/25 rounded-xl animate-floating-rotate" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Modern image container with advanced animations */}
              <div className="relative w-full h-full transform transition-all duration-700 hover:scale-105 group-hover:rotate-1">
                {/* Multiple animated glow rings */}
                <div className="absolute inset-0 bg-gradient-to-br from-aqua-400 via-teal-500 to-cyan-500 rounded-3xl animate-pulse-glow opacity-40 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-purple-500 to-aqua-400 rounded-3xl opacity-20 blur-md animate-spin" style={{ animationDuration: '20s' }}></div>
                
                {/* Main container with hover effects */}
                <div className="relative w-full h-full bg-gradient-to-br from-aqua-400 via-teal-500 to-cyan-500 rounded-3xl p-1 hover:p-0.5 transition-all duration-500">
                  {/* Enhanced glass effect */}
                  <div className="absolute inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-3xl group-hover:from-white/20 transition-all duration-500"></div>
                  
                  {/* Image container with modern effects */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-500">
                    <Image
                      src="/booj.jpg"
                      alt="Abdelhadi boudjemline"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full animate-image-breath hover:scale-110 filter hover:brightness-110 hover:contrast-110 transition-all duration-700"
                      priority
                    />
                    
                    {/* Dynamic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent hover:from-black/10 transition-all duration-500"></div>
                    
                    {/* Animated corner accents */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-aqua-400 rounded-tl-lg hover:border-cyan-300 hover:w-8 hover:h-8 sm:hover:w-10 sm:hover:h-10 transition-all duration-300"></div>
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-aqua-400 rounded-tr-lg hover:border-cyan-300 hover:w-8 hover:h-8 sm:hover:w-10 sm:hover:h-10 transition-all duration-300"></div>
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-aqua-400 rounded-bl-lg hover:border-cyan-300 hover:w-8 hover:h-8 sm:hover:w-10 sm:hover:h-10 transition-all duration-300"></div>
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-aqua-400 rounded-br-lg hover:border-cyan-300 hover:w-8 hover:h-8 sm:hover:w-10 sm:hover:h-10 transition-all duration-300"></div>
                    
                    {/* Modern scan line effect */}
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modern status indicator */}
              <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="glass border border-aqua-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-aqua-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-aqua-400 rounded-full animate-ping opacity-30"></div>
                    </div>
                    <span className="text-white font-medium text-xs sm:text-sm">{t.hero.availability}</span>
                  </div>
                </div>
              </div>
              
              {/* Floating code elements */}
              <div className="absolute top-0 left-12 sm:left-16 lg:left-20 opacity-60 hidden sm:block">
                <div className="glass p-2 rounded-lg border border-aqua-500/20 floating">
                  <Code size={16} className="text-aqua-400" />
                </div>
              </div>
              <div className="absolute bottom-6 sm:bottom-8 right-0 opacity-60 hidden sm:block">
                <div className="glass p-2 rounded-lg border border-teal-500/20 floating">
                  <Database size={16} className="text-teal-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-aqua-500/20 to-teal-500/20 backdrop-blur-sm border border-aqua-500/30 rounded-full px-6 py-2 mb-6">
              <User size={20} className="text-aqua-400" />
              <span className="text-aqua-300 font-medium">{t.about.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-400 to-cyan-400 mb-6 sm:mb-8 animate-text-glow leading-tight">
              {t.about.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              {t.about.description}
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 scroll-reveal">
            {[
              { number: "1.5+", label: t.about.stats.experience, color: "from-aqua-500 to-teal-500" },
              { number: "50+", label: t.about.stats.projects, color: "from-cyan-500 to-aqua-500" },
              { number: "15+", label: t.about.stats.clients, color: "from-teal-500 to-cyan-500" },
              { number: "24/7", label: t.about.stats.support, color: "from-aqua-500 to-cyan-500" }
            ].map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center hover-float group">
                <div className={`text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Journey Card */}
            <div className="lg:col-span-2 scroll-reveal">
              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-aqua-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500">{t.about.journey.title}</h3>
                </div>
                
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  {t.about.journey.description}
                </p>
                
                {/* Experience Timeline */}
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-gradient-to-b from-aqua-500 to-teal-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-aqua-500 to-teal-600 rounded-full"></div>
                    <div className="glass p-4 rounded-xl">
                      <h4 className="font-bold text-white text-lg mb-1">{t.about.journey.currentJob.title}</h4>
                      <p className="text-aqua-400 font-medium mb-2">{t.about.journey.currentJob.company}</p>
                      <p className="text-white/70 text-sm mb-2">{t.about.journey.currentJob.period}</p>
                      <p className="text-white/60 text-sm">{t.about.journey.currentJob.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-gradient-to-b from-teal-500 to-cyan-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full"></div>
                    <div className="glass p-4 rounded-xl">
                      <h4 className="font-bold text-white text-lg mb-1">{t.about.journey.freelance.title}</h4>
                      <p className="text-teal-400 font-medium mb-2">{t.about.journey.freelance.company}</p>
                      <p className="text-white/70 text-sm mb-2">{t.about.journey.freelance.period}</p>
                      <p className="text-white/60 text-sm">{t.about.journey.freelance.description}</p>
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
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">{t.about.services.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Globe, title: t.about.services.web.title, desc: t.about.services.web.description, color: "text-aqua-400", bg: "bg-aqua-500/20" },
                    { icon: Smartphone, title: t.about.services.mobile.title, desc: t.about.services.mobile.description, color: "text-teal-400", bg: "bg-teal-500/20" },
                    { icon: Database, title: t.about.services.backend.title, desc: t.about.services.backend.description, color: "text-cyan-400", bg: "bg-cyan-500/20" },
                    { icon: Rocket, title: t.about.services.deployment.title, desc: t.about.services.deployment.description, color: "text-aqua-400", bg: "bg-aqua-500/20" }
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
      <section id="skills" className="py-16 sm:py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-aqua-500/20 to-teal-500/20 backdrop-blur-sm border border-aqua-500/30 rounded-full px-6 py-2 mb-6">
              <Code size={20} className="text-aqua-400" />
              <span className="text-aqua-300 font-medium">{t.skills.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-500 to-cyan-600 mb-6 sm:mb-8 animate-text-glow leading-tight">
              {t.skills.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              {t.skills.description}
            </p>
          </div>
          
          {/* Skills Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 scroll-reveal">
            {[
              { title: "Frontend", count: "6+", desc: t.skills.overview.frontend, color: "from-aqua-500 to-teal-500" },
              { title: "Backend", count: "5+", desc: t.skills.overview.backend, color: "from-teal-500 to-cyan-500" },
              { title: "Tools", count: "4+", desc: t.skills.overview.tools, color: "from-cyan-500 to-aqua-500" },
              { title: "Years", count: "1.5+", desc: t.skills.overview.years, color: "from-aqua-500 to-cyan-500" }
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
          
          <div id="skills-section" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 scroll-reveal">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => {
              const categoryConfig = {
                frontend: { 
                  title: t.skills.categories.frontend, 
                  icon: Palette, 
                  gradient: "from-aqua-400 to-teal-500",
                  borderColor: "border-aqua-500/30",
                  iconBg: "bg-aqua-500/20"
                },
                backend: { 
                  title: t.skills.categories.backend, 
                  icon: Database, 
                  gradient: "from-teal-400 to-cyan-500",
                  borderColor: "border-teal-500/30",
                  iconBg: "bg-teal-500/20"
                },
                others: { 
                  title: t.skills.categories.tools, 
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
                      <div className="text-white/60 text-sm">{t.skills.average}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-500 to-cyan-500 mb-6 animate-text-glow">{t.projects.title}</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
              {t.projects.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`scroll-reveal glass rounded-2xl overflow-hidden hover-3d group ${project.featured ? 'lg:col-span-1' : ''}`}>
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
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
                      {t.projects.featured}
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
                        {t.projects.buttons.demo}
                      </Link>
                    )}
                    {project.links.seller && (
                      <Link 
                        href={project.links.seller} 
                        target="_blank"
                        className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover-glow"
                      >
                        {t.projects.buttons.seller}
                      </Link>
                    )}
                    {project.links.admin && (
                      <Link 
                        href={project.links.admin} 
                        target="_blank"
                        className="bg-gradient-to-r from-cyan-500 to-aqua-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover-glow"
                      >
                        {t.projects.buttons.admin}
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
                  {t.projects.more.title}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {t.projects.more.description}
                </p>
              </div>
              <Link 
                href="https://github.com/abdelhadiDevWeb" 
          target="_blank"
                className="bg-gradient-to-r from-aqua-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-glow flex items-center gap-2"
              >
                <Github size={20} />
                {t.projects.buttons.github}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-500 to-cyan-500 mb-6 animate-text-glow">{t.testimonials.title}</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
              {t.testimonials.description}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass p-6 sm:p-8 lg:p-12 rounded-3xl text-center scroll-reveal">
              <div className="mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed italic">
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
      <section id="contact" className="py-16 sm:py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-aqua-500/20 to-teal-500/20 backdrop-blur-sm border border-aqua-500/30 rounded-full px-6 py-2 mb-6">
              <Mail size={20} className="text-aqua-400" />
              <span className="text-aqua-300 font-medium">{t.contact.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-teal-500 to-cyan-600 mb-6 sm:mb-8 animate-text-glow leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              {t.contact.description}
            </p>
          </div>
          
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 scroll-reveal">
            {[
              { 
                icon: Mail, 
                label: t.contact.methods.email, 
                value: "abdouhadi2002@gmail.com", 
                href: "mailto:abdouhadi2002@gmail.com", 
                color: "text-aqua-400",
                gradient: "from-aqua-500 to-teal-500",
                bg: "bg-aqua-500/20"
              },
              { 
                icon: Phone, 
                label: t.contact.methods.phone, 
                value: "0799436171", 
                href: "tel:0799436171", 
                color: "text-teal-400",
                gradient: "from-teal-500 to-cyan-500",
                bg: "bg-teal-500/20"
              },
              { 
                icon: MessageCircle, 
                label: t.contact.methods.whatsapp, 
                value: "0562232628", 
                href: "https://wa.me/213562232628", 
                color: "text-cyan-400",
                gradient: "from-cyan-500 to-aqua-500",
                bg: "bg-cyan-500/20"
              },
              { 
                icon: Github, 
                label: t.contact.methods.github, 
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
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 scroll-reveal">
              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-aqua-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-aqua-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500">{t.contact.form.title}</h3>
                </div>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-medium">{t.contact.form.name}</label>
                      <input
                        type="text"
                        placeholder={t.contact.form.placeholders.name}
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-medium">{t.contact.form.email}</label>
                      <input
                        type="email"
                        placeholder={t.contact.form.placeholders.email}
                        className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm font-medium">{t.contact.form.projectType}</label>
                    <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-aqua-500 focus:outline-none focus:ring-2 focus:ring-aqua-500/20 focus:bg-white/10 transition-all duration-300">
                      <option value="">{t.contact.form.projectTypeOptions.select}</option>
                      <option value="web">{t.contact.form.projectTypeOptions.web}</option>
                      <option value="mobile">{t.contact.form.projectTypeOptions.mobile}</option>
                      <option value="fullstack">{t.contact.form.projectTypeOptions.fullstack}</option>
                      <option value="other">{t.contact.form.projectTypeOptions.other}</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm font-medium">{t.contact.form.projectDetails}</label>
                    <textarea
                      rows={6}
                      placeholder={t.contact.form.placeholders.details}
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:bg-white/10 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-aqua-500 via-teal-500 to-aqua-600 text-white font-semibold py-4 px-6 rounded-xl hover-glow transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Mail size={20} />
                      {t.contact.form.button}
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>
                </form>
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
                  <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-aqua-500">{t.contact.availability.title}</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-white/80">{t.contact.availability.available}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-aqua-500 rounded-full"></div>
                    <span className="text-white/80">{t.contact.availability.response}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-white/80">{t.contact.availability.consultation}</span>
                  </div>
                </div>
              </div>

              {/* FAQ Card */}
              <div className="glass p-6 rounded-3xl border border-white/10">
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-teal-500 mb-4">{t.contact.faq.title}</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-aqua-500/20 rounded-lg flex items-center justify-center mt-0.5">
                      <Clock size={14} className="text-aqua-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">{t.contact.faq.timeline.question}</h5>
                      <p className="text-white/70">{t.contact.faq.timeline.answer}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-aqua-500/20 rounded-lg flex items-center justify-center mt-0.5">
                      <DollarSign size={14} className="text-aqua-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">{t.contact.faq.pricing.question}</h5>
                      <p className="text-white/70">{t.contact.faq.pricing.answer}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-aqua-500/20 rounded-lg flex items-center justify-center mt-0.5">
                      <Wrench size={14} className="text-aqua-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">{t.contact.faq.support.question}</h5>
                      <p className="text-white/70">{t.contact.faq.support.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="text-white/60 mb-4">
              {t.footer.copyright}
            </p>
            <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 ${isRTL ? 'space-x-reverse' : ''}`}>
              {[
                { name: t.footer.social.github, key: 'github' },
                { name: t.footer.social.linkedin, key: 'linkedin' },
                { name: t.footer.social.twitter, key: 'twitter' },
                { name: t.footer.social.instagram, key: 'instagram' }
              ].map((social, index) => (
                <a
                  key={social.key}
                  href="#"
                  className="text-white/40 hover:text-aqua-400 transition-colors duration-300 hover:scale-110 transform"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      
      {/* Language Switcher */}
      <LanguageSwitcher />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
