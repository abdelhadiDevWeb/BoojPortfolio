export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    testimonials: string;
    education: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    description: string;
    cta1: string;
    cta2: string;
    stats: {
      experience: string;
      projects: string;
      clients: string;
    };
    availability: string;
  };
  
  // About Section
  about: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    stats: {
      experience: string;
      projects: string;
      clients: string;
      support: string;
    };
    journey: {
      title: string;
      description: string;
      currentJob: {
        title: string;
        company: string;
        period: string;
        description: string;
      };
      freelance: {
        title: string;
        company: string;
        period: string;
        description: string;
      };
    };
    services: {
      title: string;
      web: {
        title: string;
        description: string;
      };
      mobile: {
        title: string;
        description: string;
      };
      backend: {
        title: string;
        description: string;
      };
      deployment: {
        title: string;
        description: string;
      };
    };
  };
  
  // Skills Section
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    overview: {
      frontend: string;
      backend: string;
      tools: string;
      years: string;
    };
    categories: {
      frontend: string;
      backend: string;
      tools: string;
    };
    average: string;
    skillNames: {
      // Frontend
      javascript: string;
      react: string;
      nextjs: string;
      redux: string;
      tailwind: string;
      reactnative: string;
      // Backend
      nodejs: string;
      express: string;
      mongodb: string;
      sql: string;
      supabase: string;
      // Tools
      api: string;
      deployment: string;
      vercel: string;
      cpanel: string;
    };
  };
  
  // Projects Section
  projects: {
    title: string;
    description: string;
    featured: string;
    buttons: {
      demo: string;
      seller: string;
      admin: string;
      github: string;
    };
    more: {
      title: string;
      description: string;
      button: string;
    };
    titles: {
      mazadclick: string;
      vetodiag: string;
      autoparts: string;
    };
    descriptions: {
      mazadclick: string;
      vetodiag: string;
      autoparts: string;
    };
    technologies: {
      reactjs: string;
      nodejs: string;
      mongodb: string;
      socketio: string;
      reactnative: string;
      nextjs: string;
      supabase: string;
      tailwindcss: string;
      ai: string;
      ml: string;
    };
  };
  
  // Testimonials Section
  testimonials: {
    title: string;
    description: string;
    clients: {
      sarah: {
        name: string;
        role: string;
        company: string;
        content: string;
      };
      michael: {
        name: string;
        role: string;
        company: string;
        content: string;
      };
      emily: {
        name: string;
        role: string;
        company: string;
        content: string;
      };
    };
  };
  
  // Education Section
  education: {
    badge: string;
    title: string;
    description: string;
    diploma: {
      title: string;
      institution: string;
      field: string;
      period: string;
    };
    internships: {
      seall: {
        title: string;
        company: string;
        duration: string;
        description: string;
      };
      talabe: {
        title: string;
        company: string;
        duration: string;
        description: string;
      };
    };
    training: {
      title: string;
      duration: string;
      description: string;
    };
    current: {
      title: string;
      company: string;
      period: string;
      description: string;
    };
  };
  
  // Contact Section
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    methods: {
      email: string;
      phone: string;
      whatsapp: string;
      github: string;
    };
    form: {
      title: string;
      name: string;
      email: string;
      projectType: string;
      projectDetails: string;
      projectTypeOptions: {
        select: string;
        web: string;
        mobile: string;
        fullstack: string;
        other: string;
      };
      placeholders: {
        name: string;
        email: string;
        details: string;
      };
      button: string;
    };
    availability: {
      title: string;
      available: string;
      response: string;
      consultation: string;
    };
    faq: {
      title: string;
      timeline: {
        question: string;
        answer: string;
      };
      pricing: {
        question: string;
        answer: string;
      };
      support: {
        question: string;
        answer: string;
      };
    };
  };
  
  // Footer
  footer: {
    copyright: string;
    tech: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
      instagram: string;
    };
  };
  
  // Personal Info
  personal: {
    name: string;
    surname: string;
    fullName: string;
    codeName: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      testimonials: "Testimonials",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Abdelhadi",
      title: "Full-Stack Developer",
      subtitle: "Building the future, one line of code at a time",
      description: "Crafting exceptional digital experiences with passion & precision",
      cta1: "View My Work",
      cta2: "Let's Connect",
      stats: {
        experience: "Years Experience",
        projects: "Projects Completed", 
        clients: "Happy Clients"
      },
      availability: "Available for Projects"
    },
    about: {
      badge: "About Me",
      title: "Crafting Digital Excellence",
      subtitle: "",
      description: "Passionate developer transforming ideas into exceptional digital experiences with cutting-edge technologies and innovative solutions",
      stats: {
        experience: "Years Experience",
        projects: "Projects Completed",
        clients: "Happy Clients",
        support: "Support Available"
      },
      journey: {
        title: "My Journey",
        description: "I'm a passionate Full-Stack Developer with over 2 years of experience building modern applications. I specialize in both Frontend & Backend development, handling everything from UI/UX design to deployment.",
        currentJob: {
          title: "Web & App Developer",
          company: "NoteEasy (Talabe Store)",
          period: "October 2024 - Present",
          description: "Developing and maintaining internal tools and customer-facing applications with Next.js and modern tech stack."
        },
        freelance: {
          title: "Freelance Developer",
          company: "Independent",
          period: "2023 - Present",
          description: "Building custom web & mobile applications for international clients with diverse project requirements."
        }
      },
      services: {
        title: "What I Do",
        web: {
          title: "Web Development",
          description: "Modern, responsive websites"
        },
        mobile: {
          title: "Mobile Apps",
          description: "Cross-platform applications"
        },
        backend: {
          title: "Backend Systems",
          description: "Scalable APIs & databases"
        },
        deployment: {
          title: "Deployment",
          description: "Cloud hosting optimization"
        }
      }
    },
    skills: {
      badge: "Skills & Expertise",
      title: "Technical Mastery",
      subtitle: "",
      description: "Mastering cutting-edge technologies and frameworks to build exceptional digital solutions that drive business growth",
      overview: {
        frontend: "Modern Frameworks",
        backend: "Server Technologies", 
        tools: "Development Tools",
        years: "Professional Experience"
      },
      categories: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        tools: "Tools & Deployment"
      },
      average: "Average Proficiency",
      skillNames: {
        javascript: "JavaScript (ES6+)",
        react: "React.js",
        nextjs: "Next.js",
        redux: "Redux",
        tailwind: "TailwindCSS",
        reactnative: "React Native",
        nodejs: "Node.js",
        express: "Express.js",
        mongodb: "MongoDB",
        sql: "SQL",
        supabase: "Supabase",
        api: "API Integration",
        deployment: "Deployment",
        vercel: "Vercel",
        cpanel: "cPanel"
      }
    },
    projects: {
      title: "Featured Projects",
      description: "Showcasing innovative solutions that make a real impact",
      featured: "Featured",
      buttons: {
        demo: "Live Demo",
        seller: "Seller Panel",
        admin: "Admin Panel",
        github: "Visit GitHub"
      },
      more: {
        title: "More Projects",
        description: "Want to see more of my work? Check out my GitHub profile for additional projects, experiments, and open-source contributions.",
        button: "Visit GitHub"
      },
      titles: {
        mazadclick: "MazadClick",
        vetodiag: "VetoDiag Pro",
        autoparts: "AutoParts Intelligence"
      },
      descriptions: {
        mazadclick: "Revolutionary online auction platform with advanced bidding algorithms and real-time notifications",
        vetodiag: "AI-powered veterinary clinic management with smart diagnosis and automated workflows",
        autoparts: "Smart automotive parts catalog with ML-powered search and inventory optimization"
      },
      technologies: {
        reactjs: "React.js",
        nodejs: "Node.js",
        mongodb: "MongoDB",
        socketio: "Socket.io",
        reactnative: "React Native",
        nextjs: "Next.js",
        supabase: "Supabase",
        tailwindcss: "TailwindCSS",
        ai: "AI Integration",
        ml: "Machine Learning"
      }
    },
    testimonials: {
      title: "Client Testimonials",
      description: "What my clients say about working with me",
      clients: {
        sarah: {
          name: "Sarah Johnson",
          role: "CEO",
          company: "TechCorp",
          content: "Abdelhadi delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations."
        },
        michael: {
          name: "Michael Chen",
          role: "CTO",
          company: "StartupHub",
          content: "Working with Abdelhadi was a game-changer for our project. He brought innovative solutions and delivered ahead of schedule."
        },
        emily: {
          name: "Emily Rodriguez",
          role: "Product Manager",
          company: "InnovateLab",
          content: "His full-stack expertise and problem-solving skills made our complex project seem effortless. Highly recommended!"
        }
      }
    },
    education: {
      badge: "Education & Training",
      title: "My Educational Journey",
      description: "Academic achievements, internships, and continuous learning that shaped my career",
      diploma: {
        title: "Technical Diploma",
        institution: "Technical Institute",
        field: "App & Web Development",
        period: "Completed"
      },
      internships: {
        seall: {
          title: "End of Study Internship",
          company: "Nationals of SEALL",
          duration: "6 Months",
          description: "Completed end-of-study project and gained hands-on experience in real-world software development"
        },
        talabe: {
          title: "Internship",
          company: "Talabe Store",
          duration: "5 Months",
          description: "Developed and maintained store management systems, gained practical experience in e-commerce solutions"
        }
      },
      training: {
        title: "Professional Training",
        duration: "4 Months",
        description: "Intensive training program covering modern web and mobile development technologies"
      },
      current: {
        title: "Web & App Developer",
        company: "Talabe Store (NoteEasy)",
        period: "June 2024 - Present",
        description: "Developing and maintaining internal tools and customer-facing applications. Also working as a freelance developer."
      }
    },
    contact: {
      badge: "Get In Touch",
      title: "Let's Create Something Amazing",
      subtitle: "",
      description: "Ready to transform your ideas into reality? I'm here to help you build exceptional digital experiences that drive results",
      methods: {
        email: "Email",
        phone: "Phone",
        whatsapp: "WhatsApp",
        github: "GitHub"
      },
      form: {
        title: "Send Message",
        name: "Your Name",
        email: "Email Address",
        projectType: "Project Type",
        projectDetails: "Project Details",
        projectTypeOptions: {
          select: "Select project type",
          web: "Web Development",
          mobile: "Mobile App",
          fullstack: "Full-Stack Solution",
          other: "Other"
        },
        placeholders: {
          name: "John Doe",
          email: "john@example.com",
          details: "Tell me about your project, goals, timeline, and any specific requirements..."
        },
        button: "Send Message"
      },
      availability: {
        title: "Availability",
        available: "Available for new projects",
        response: "Response within 24 hours",
        consultation: "Free consultation available"
      },
      faq: {
        title: "Quick FAQ",
        timeline: {
          question: "Project Timeline?",
          answer: "Typically 2-8 weeks depending on complexity"
        },
        pricing: {
          question: "Pricing?",
          answer: "Competitive rates, custom quotes for each project"
        },
        support: {
          question: "Support?",
          answer: "Post-launch support and maintenance included"
        }
      }
    },
    footer: {
      copyright: "© {year} Abdelhadi boudjemline. Crafted with ❤️",
      tech: "Next.js & TailwindCSS",
      social: {
        github: "GitHub",
        linkedin: "LinkedIn",
        twitter: "Twitter",
        instagram: "Instagram"
      }
    },
    personal: {
      name: "Abdelhadi",
      surname: "boudjemline",
      fullName: "Abdelhadi boudjemline",
      codeName: "<Abdelhadi_boudjemline/>"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      testimonials: "Témoignages",
      education: "Éducation",
      contact: "Contact"
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Abdelhadi",
      title: "Développeur Full-Stack",
      subtitle: "Construire l'avenir, une ligne de code à la fois",
      description: "Créer des expériences numériques exceptionnelles avec passion et précision",
      cta1: "Voir Mon Travail",
      cta2: "Connectons-nous",
      stats: {
        experience: "Années d'Expérience",
        projects: "Projets Complétés",
        clients: "Clients Satisfaits"
      },
      availability: "Disponible pour Projets"
    },
    about: {
      badge: "À Propos de Moi",
      title: "Créer l'Excellence Numérique",
      subtitle: "",
      description: "Développeur passionné transformant les idées en expériences numériques exceptionnelles avec des technologies de pointe et des solutions innovantes",
      stats: {
        experience: "Années d'Expérience",
        projects: "Projets Complétés",
        clients: "Clients Satisfaits",
        support: "Support Disponible"
      },
      journey: {
        title: "Mon Parcours",
        description: "Je suis un développeur Full-Stack passionné avec plus de 2 ans d'expérience dans la création d'applications modernes. Je me spécialise dans le développement Frontend et Backend, gérant tout de la conception UI/UX au déploiement.",
        currentJob: {
          title: "Développeur Web & App",
          company: "NoteEasy (Talabe Store)",
          period: "Octobre 2024 - Présent",
          description: "Développement et maintenance d'outils internes et d'applications client avec Next.js et une pile technologique moderne."
        },
        freelance: {
          title: "Développeur Indépendant",
          company: "Indépendant",
          period: "2023 - Présent",
          description: "Construction d'applications web et mobiles personnalisées pour clients internationaux avec des exigences de projet diverses."
        }
      },
      services: {
        title: "Ce que Je Fais",
        web: {
          title: "Développement Web",
          description: "Sites web modernes et réactifs"
        },
        mobile: {
          title: "Applications Mobiles",
          description: "Applications multiplateformes"
        },
        backend: {
          title: "Systèmes Backend",
          description: "APIs et bases de données évolutives"
        },
        deployment: {
          title: "Déploiement",
          description: "Optimisation d'hébergement cloud"
        }
      }
    },
    skills: {
      badge: "Compétences & Expertise",
      title: "Maîtrise Technique",
      subtitle: "",
      description: "Maîtriser les technologies et frameworks de pointe pour créer des solutions numériques exceptionnelles qui stimulent la croissance des entreprises",
      overview: {
        frontend: "Frameworks Modernes",
        backend: "Technologies Serveur",
        tools: "Outils de Développement",
        years: "Expérience Professionnelle"
      },
      categories: {
        frontend: "Développement Frontend",
        backend: "Développement Backend",
        tools: "Outils & Déploiement"
      },
      average: "Maîtrise Moyenne",
      skillNames: {
        javascript: "JavaScript (ES6+)",
        react: "React.js",
        nextjs: "Next.js",
        redux: "Redux",
        tailwind: "TailwindCSS",
        reactnative: "React Native",
        nodejs: "Node.js",
        express: "Express.js",
        mongodb: "MongoDB",
        sql: "SQL",
        supabase: "Supabase",
        api: "Intégration API",
        deployment: "Déploiement",
        vercel: "Vercel",
        cpanel: "cPanel"
      }
    },
    projects: {
      title: "Projets en Vedette",
      description: "Présentation de solutions innovantes qui ont un impact réel",
      featured: "En Vedette",
      buttons: {
        demo: "Démo Live",
        seller: "Panneau Vendeur",
        admin: "Panneau Admin",
        github: "Visiter GitHub"
      },
      more: {
        title: "Plus de Projets",
        description: "Vous voulez voir plus de mon travail ? Consultez mon profil GitHub pour des projets supplémentaires, des expérimentations et des contributions open-source.",
        button: "Visiter GitHub"
      },
      titles: {
        mazadclick: "MazadClick",
        vetodiag: "VetoDiag Pro",
        autoparts: "AutoParts Intelligence"
      },
      descriptions: {
        mazadclick: "Plateforme d'enchères en ligne révolutionnaire avec algorithmes d'enchères avancés et notifications temps réel",
        vetodiag: "Gestion de clinique vétérinaire alimentée par IA avec diagnostic intelligent et flux de travail automatisés",
        autoparts: "Catalogue de pièces automobiles intelligent avec recherche ML et optimisation d'inventaire"
      },
      technologies: {
        reactjs: "React.js",
        nodejs: "Node.js",
        mongodb: "MongoDB",
        socketio: "Socket.io",
        reactnative: "React Native",
        nextjs: "Next.js",
        supabase: "Supabase",
        tailwindcss: "TailwindCSS",
        ai: "Intégration IA",
        ml: "Apprentissage Automatique"
      }
    },
    testimonials: {
      title: "Témoignages Clients",
      description: "Ce que mes clients disent de travailler avec moi",
      clients: {
        sarah: {
          name: "Sarah Johnson",
          role: "PDG",
          company: "TechCorp",
          content: "Abdelhadi a livré un travail exceptionnel sur notre plateforme e-commerce. Son attention aux détails et son expertise technique ont dépassé nos attentes."
        },
        michael: {
          name: "Michael Chen",
          role: "CTO",
          company: "StartupHub",
          content: "Travailler avec Abdelhadi a été un changement de donne pour notre projet. Il a apporté des solutions innovantes et livré avant les délais."
        },
        emily: {
          name: "Emily Rodriguez",
          role: "Chef de Produit",
          company: "InnovateLab",
          content: "Son expertise full-stack et ses compétences en résolution de problèmes ont rendu notre projet complexe sans effort. Hautement recommandé !"
        }
      }
    },
    education: {
      badge: "Éducation & Formation",
      title: "Mon Parcours Éducatif",
      description: "Réalisations académiques, stages et apprentissage continu qui ont façonné ma carrière",
      diploma: {
        title: "Diplôme Technique",
        institution: "Institut Technique",
        field: "Développement d'Applications & Web",
        period: "Terminé"
      },
      internships: {
        seall: {
          title: "Stage de Fin d'Études",
          company: "Nationals of SEALL",
          duration: "6 Mois",
          description: "Projet de fin d'études complété et expérience pratique acquise en développement logiciel réel"
        },
        talabe: {
          title: "Stage",
          company: "Talabe Store",
          duration: "5 Mois",
          description: "Développement et maintenance de systèmes de gestion de magasin, expérience pratique dans les solutions e-commerce"
        }
      },
      training: {
        title: "Formation Professionnelle",
        duration: "4 Mois",
        description: "Programme de formation intensif couvrant les technologies modernes de développement web et mobile"
      },
      current: {
        title: "Développeur Web & App",
        company: "Talabe Store (NoteEasy)",
        period: "Juin 2024 - Présent",
        description: "Développement et maintenance d'outils internes et d'applications client. Travaille également en tant que développeur indépendant."
      }
    },
    contact: {
      badge: "Prendre Contact",
      title: "Créons Quelque Chose d'Incroyable",
      subtitle: "",
      description: "Prêt à transformer vos idées en réalité ? Je suis là pour vous aider à construire des expériences numériques exceptionnelles qui génèrent des résultats",
      methods: {
        email: "Email",
        phone: "Téléphone",
        whatsapp: "WhatsApp",
        github: "GitHub"
      },
      form: {
        title: "Envoyer Message",
        name: "Votre Nom",
        email: "Adresse Email",
        projectType: "Type de Projet",
        projectDetails: "Détails du Projet",
        projectTypeOptions: {
          select: "Sélectionner le type de projet",
          web: "Développement Web",
          mobile: "Application Mobile",
          fullstack: "Solution Full-Stack",
          other: "Autre"
        },
        placeholders: {
          name: "Jean Dupont",
          email: "jean@exemple.com",
          details: "Parlez-moi de votre projet, objectifs, délais et exigences spécifiques..."
        },
        button: "Envoyer Message"
      },
      availability: {
        title: "Disponibilité",
        available: "Disponible pour nouveaux projets",
        response: "Réponse sous 24 heures",
        consultation: "Consultation gratuite disponible"
      },
      faq: {
        title: "FAQ Rapide",
        timeline: {
          question: "Délai du Projet ?",
          answer: "Typiquement 2-8 semaines selon la complexité"
        },
        pricing: {
          question: "Tarification ?",
          answer: "Tarifs compétitifs, devis personnalisés pour chaque projet"
        },
        support: {
          question: "Support ?",
          answer: "Support post-lancement et maintenance inclus"
        }
      }
    },
    footer: {
      copyright: "© {year} Abdelhadi boudjemline. Créé avec ❤️",
      tech: "Next.js et TailwindCSS",
      social: {
        github: "GitHub",
        linkedin: "LinkedIn",
        twitter: "Twitter",
        instagram: "Instagram"
      }
    },
    personal: {
      name: "Abdelhadi",
      surname: "boudjemline",
      fullName: "Abdelhadi boudjemline",
      codeName: "<Abdelhadi_boudjemline/>"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "حولي",
      skills: "المهارات",
      projects: "المشاريع",
      testimonials: "الشهادات",
      education: "التعليم",
      contact: "التواصل"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "عبد الهادي",
      title: "مطور ويب متكامل",
      subtitle: "بناء المستقبل، سطر واحد من الكود في كل مرة",
      description: "صناعة تجارب رقمية استثنائية بشغف ودقة",
      cta1: "مشاهدة أعمالي",
      cta2: "دعونا نتواصل",
      stats: {
        experience: "سنوات الخبرة",
        projects: "المشاريع المكتملة",
        clients: "العملاء السعداء"
      },
      availability: "متاح للمشاريع"
    },
    about: {
      badge: "حولي",
      title: "صناعة التميز الرقمي",
      subtitle: "",
      description: "مطور شغوف يحول الأفكار إلى تجارب رقمية استثنائية بتقنيات متطورة وحلول مبتكرة",
      stats: {
        experience: "سنوات الخبرة",
        projects: "المشاريع المكتملة",
        clients: "العملاء السعداء",
        support: "الدعم المتاح"
      },
      journey: {
        title: "رحلتي",
        description: "أنا مطور ويب متكامل شغوف بأكثر من سنتين من الخبرة في بناء التطبيقات الحديثة. أتخصص في تطوير الواجهة الأمامية والخلفية، أتعامل مع كل شيء من تصميم UI/UX إلى النشر.",
        currentJob: {
          title: "مطور ويب وتطبيقات",
          company: "NoteEasy (متجر طلابة)",
          period: "أكتوبر 2024 - الحاضر",
          description: "تطوير وصيانة الأدوات الداخلية وتطبيقات العملاء باستخدام Next.js ومجموعة تقنية حديثة."
        },
        freelance: {
          title: "مطور مستقل",
          company: "مستقل",
          period: "2023 - الحاضر",
          description: "بناء تطبيقات ويب وموبايل مخصصة للعملاء الدوليين بمتطلبات مشاريع متنوعة."
        }
      },
      services: {
        title: "ما أقوم به",
        web: {
          title: "تطوير الويب",
          description: "مواقع ويب حديثة ومتجاوبة"
        },
        mobile: {
          title: "تطبيقات الجوال",
          description: "تطبيقات متعددة المنصات"
        },
        backend: {
          title: "أنظمة الخادم",
          description: "APIs وقواعد بيانات قابلة للتوسع"
        },
        deployment: {
          title: "النشر",
          description: "تحسين استضافة السحابة"
        }
      }
    },
    skills: {
      badge: "المهارات والخبرة",
      title: "الإتقان التقني",
      subtitle: "",
      description: "إتقان التقنيات والأطر المتطورة لبناء حلول رقمية استثنائية تدفع نمو الأعمال",
      overview: {
        frontend: "أطر عمل حديثة",
        backend: "تقنيات الخادم",
        tools: "أدوات التطوير",
        years: "الخبرة المهنية"
      },
      categories: {
        frontend: "تطوير الواجهة الأمامية",
        backend: "تطوير الواجهة الخلفية",
        tools: "الأدوات والنشر"
      },
      average: "متوسط الإتقان",
      skillNames: {
        javascript: "JavaScript (ES6+)",
        react: "React.js",
        nextjs: "Next.js",
        redux: "Redux",
        tailwind: "TailwindCSS",
        reactnative: "React Native",
        nodejs: "Node.js",
        express: "Express.js",
        mongodb: "MongoDB",
        sql: "SQL",
        supabase: "Supabase",
        api: "تكامل API",
        deployment: "النشر",
        vercel: "Vercel",
        cpanel: "cPanel"
      }
    },
    projects: {
      title: "المشاريع المميزة",
      description: "عرض حلول مبتكرة تحقق تأثيراً حقيقياً",
      featured: "مميز",
      buttons: {
        demo: "عرض مباشر",
        seller: "لوحة البائع",
        admin: "لوحة الإدارة",
        github: "زيارة GitHub"
      },
      more: {
        title: "المزيد من المشاريع",
        description: "تريد رؤية المزيد من أعمالي؟ تفقد ملفي الشخصي على GitHub للمزيد من المشاريع والتجارب والمساهمات مفتوحة المصدر.",
        button: "زيارة GitHub"
      },
      titles: {
        mazadclick: "مزاد كليك",
        vetodiag: "فيتو دياج برو",
        autoparts: "ذكاء قطع السيارات"
      },
      descriptions: {
        mazadclick: "منصة مزادات إنترنت ثورية مع خوارزميات مزايدة متقدمة وإشعارات فورية",
        vetodiag: "إدارة عيادة بيطرية مدعومة بالذكاء الاصطناعي مع تشخيص ذكي وسير عمل آلي",
        autoparts: "كتالوج قطع غيار السيارات الذكي مع بحث مدعوم بالتعلم الآلي وتحسين المخزون"
      },
      technologies: {
        reactjs: "React.js",
        nodejs: "Node.js",
        mongodb: "MongoDB",
        socketio: "Socket.io",
        reactnative: "React Native",
        nextjs: "Next.js",
        supabase: "Supabase",
        tailwindcss: "TailwindCSS",
        ai: "تكامل الذكاء الاصطناعي",
        ml: "التعلم الآلي"
      }
    },
    testimonials: {
      title: "شهادات العملاء",
      description: "ما يقوله عملائي عن العمل معي",
      clients: {
        sarah: {
          name: "سارة جونسن",
          role: "الرئيس التنفيذي",
          company: "تك كورب",
          content: "قدم عبد الهادي عملاً استثنائياً على منصة التجارة الإلكترونية الخاصة بنا. اهتمامه بالتفاصيل وخبرته التقنية فاقت توقعاتنا."
        },
        michael: {
          name: "مايكل تشين",
          role: "مدير التكنولوجيا",
          company: "ستارت اب هاب",
          content: "العمل مع عبد الهادي كان نقطة تحول لمشروعنا. جلب حلولاً مبتكرة وسلم قبل الموعد المحدد."
        },
        emily: {
          name: "إيميلي رودريجيز",
          role: "مدير المنتج",
          company: "إنوفيت لاب",
          content: "خبرته الشاملة ومهاراته في حل المشاكل جعلت مشروعنا المعقد يبدو سهلاً. موصى به بشدة!"
        }
      }
    },
    education: {
      badge: "التعليم والتدريب",
      title: "رحلتي التعليمية",
      description: "الإنجازات الأكاديمية والتدريبات والتعلم المستمر الذي شكل مسيرتي المهنية",
      diploma: {
        title: "دبلوم تقني",
        institution: "معهد تقني",
        field: "تطوير التطبيقات والويب",
        period: "مكتمل"
      },
      internships: {
        seall: {
          title: "تدريب نهاية الدراسة",
          company: "Nationals of SEALL",
          duration: "6 أشهر",
          description: "إكمال مشروع نهاية الدراسة واكتساب خبرة عملية في تطوير البرمجيات في العالم الحقيقي"
        },
        talabe: {
          title: "تدريب",
          company: "Talabe Store",
          duration: "5 أشهر",
          description: "تطوير وصيانة أنظمة إدارة المتاجر، اكتساب خبرة عملية في حلول التجارة الإلكترونية"
        }
      },
      training: {
        title: "تدريب مهني",
        duration: "4 أشهر",
        description: "برنامج تدريبي مكثف يغطي تقنيات تطوير الويب والجوال الحديثة"
      },
      current: {
        title: "مطور ويب وتطبيقات",
        company: "Talabe Store (NoteEasy)",
        period: "يونيو 2024 - الحاضر",
        description: "تطوير وصيانة الأدوات الداخلية وتطبيقات العملاء. يعمل أيضاً كمطور مستقل."
      }
    },
    contact: {
      badge: "تواصل معي",
      title: "دعونا ننشئ شيئاً مذهلاً",
      subtitle: "",
      description: "مستعد لتحويل أفكارك إلى واقع؟ أنا هنا لمساعدتك في بناء تجارب رقمية استثنائية تحقق النتائج",
      methods: {
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        whatsapp: "واتساب",
        github: "GitHub"
      },
      form: {
        title: "إرسال رسالة",
        name: "اسمك",
        email: "عنوان البريد الإلكتروني",
        projectType: "نوع المشروع",
        projectDetails: "تفاصيل المشروع",
        projectTypeOptions: {
          select: "اختر نوع المشروع",
          web: "تطوير الويب",
          mobile: "تطبيق جوال",
          fullstack: "حل متكامل",
          other: "أخرى"
        },
        placeholders: {
          name: "أحمد محمد",
          email: "ahmed@example.com",
          details: "أخبرني عن مشروعك، الأهداف، الجدول الزمني، وأي متطلبات خاصة..."
        },
        button: "إرسال رسالة"
      },
      availability: {
        title: "التوفر",
        available: "متاح لمشاريع جديدة",
        response: "رد خلال 24 ساعة",
        consultation: "استشارة مجانية متاحة"
      },
      faq: {
        title: "أسئلة سريعة",
        timeline: {
          question: "الجدول الزمني للمشروع؟",
          answer: "عادة 2-8 أسابيع حسب التعقيد"
        },
        pricing: {
          question: "التسعير؟",
          answer: "أسعار تنافسية، عروض أسعار مخصصة لكل مشروع"
        },
        support: {
          question: "الدعم؟",
          answer: "دعم ما بعد الإطلاق والصيانة مشمولة"
        }
      }
    },
    footer: {
      copyright: "© {year} عبد الهادي بوجملين. صنع بـ ❤️",
      tech: "Next.js وTailwindCSS",
      social: {
        github: "GitHub",
        linkedin: "LinkedIn",
        twitter: "Twitter",
        instagram: "Instagram"
      }
    },
    personal: {
      name: "عبد الهادي",
      surname: "بوجملين",
      fullName: "عبد الهادي بوجملين",
      codeName: "<Abdelhadi_boudjemline/>"
    }
  }
};
