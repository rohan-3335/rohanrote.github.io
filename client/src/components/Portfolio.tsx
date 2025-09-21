import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { 
  Moon, 
  Sun, 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  Send,
  Code,
  Layers,
  Wrench,
  Book,
  Heart,
  HelpCircle,
  Award,
  Github,
  Linkedin,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle smooth scrolling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:rohankrote2003@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setFormData({ name: "", email: "", message: "" });
    toast({
      title: "Thank you for your message!",
      description: "Your email client should open with the pre-filled message.",
    });
  };

  const handleDownloadResume = () => {
    toast({
      title: "Resume Download",
      description: "Resume download functionality would be implemented here. Please contact directly for resume.",
    });
  };

  const skills = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "Java", level: 90 },
        { name: "SQL", level: 85 },
        { name: "C++", level: 80 },
        { name: "Python", level: 65 }
      ]
    },
    {
      title: "Frameworks & Tech",
      icon: <Layers className="w-6 h-6" />,
      items: [
        { name: "Spring Boot", level: 85 },
        { name: "Microservices", level: 80 },
        { name: "Servlets", level: 75 },
        { name: "Maven", level: 80 }
      ]
    },
    {
      title: "Tools & Databases",
      icon: <Wrench className="w-6 h-6" />,
      items: [
        { name: "MySQL", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "MongoDB", level: 70 }
      ]
    }
  ];

  const projects = [
    {
      title: "JournalApp",
      icon: <Book className="w-12 h-12" />,
      technologies: ["Spring Boot", "Spring Security", "JWT", "MongoDB"],
      description: "A secure personal journal application with JWT authentication and MongoDB integration for efficient data management.",
      githubUrl: "https://github.com/rohan-3335",
      color: "primary"
    },
    {
      title: "Healthcare Premium Prediction",
      icon: <Heart className="w-12 h-12" />,
      technologies: ["Python", "ML", "XGBoost", "Streamlit"],
      description: "Machine learning model to predict healthcare premiums using XGBoost algorithm with an interactive Streamlit interface.",
      githubUrl: "https://github.com/rohan-3335",
      color: "green-500"
    },
    {
      title: "Distributed Quiz Management System",
      icon: <HelpCircle className="w-12 h-12" />,
      technologies: ["Spring Boot", "Microservices", "MySQL"],
      description: "A scalable quiz platform built with microservices architecture for handling distributed quiz sessions and user management.",
      githubUrl: "https://github.com/rohan-3335",
      color: "purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 nav-blur bg-card/80 border border-border rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-6">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium transition-colors capitalize ${
                activeSection === section ? "text-primary" : "hover:text-primary"
              }`}
              data-testid={`nav-${section}`}
            >
              {section}
            </button>
          ))}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full"
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-slide-up">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center animate-float">
              <User className="w-16 h-16 text-primary-foreground" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" data-testid="text-name">
              Rohan Rote
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto" data-testid="text-tagline">
              Java Backend Developer | Spring Boot | Microservices | Data-Driven Solutions
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span data-testid="text-location">Pune, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+917057058631" className="hover:text-primary transition-colors" data-testid="link-phone">
                  +91-7057058631
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:rohankrote2003@gmail.com" className="hover:text-primary transition-colors" data-testid="link-email">
                  rohankrote2003@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://linkedin.com/in/rohanrote" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/rohan-3335" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://leetcode.com/u/Rohan_Rote" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                data-testid="link-leetcode"
              >
                <Code className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={handleDownloadResume}
                className="px-8 py-3 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-300"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-center" data-testid="text-about-title">About Me</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-about-content-1">
                  I'm a passionate Java Backend Developer currently pursuing B.Tech in Computer Engineering at JSPM's Rajarshi Shahu College of Engineering, Pune, with a CGPA of 8.17. With expertise in Spring Boot, Microservices, and modern backend technologies, I focus on building scalable, efficient, and robust applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-content-2">
                  My journey in software development is driven by a deep interest in data structures, algorithms, and creating innovative solutions that solve real-world problems. I'm currently working as a Trainee Associate at Perennial Systems, where I'm honing my skills in Core Java, Servlets, and web development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" data-testid="text-education-title">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2" data-testid="text-college-name">
                      JSPM's Rajarshi Shahu College of Engineering
                    </h3>
                    <p className="text-muted-foreground mb-1" data-testid="text-degree">B.Tech in Computer Engineering</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-college-duration">2021 – 2025</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold" data-testid="text-cgpa">
                      CGPA: 8.17
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2" data-testid="text-junior-college-name">
                      Swami Vivekanand Jr. College
                    </h3>
                    <p className="text-muted-foreground mb-1" data-testid="text-hsc">HSC Science</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold" data-testid="text-hsc-percentage">
                      86.2%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" data-testid="text-skills-title">Skills & Technologies</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <Card 
                key={category.title} 
                className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-testid={`card-skill-category-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold" data-testid={`text-skill-category-${index}`}>{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skill.name} className="skill-item" data-testid={`skill-${index}-${skillIndex}`}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium" data-testid={`text-skill-name-${index}-${skillIndex}`}>
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground" data-testid={`text-skill-level-${index}-${skillIndex}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="skill-bar bg-primary h-2 rounded-full transition-all duration-1000" 
                            style={{ width: `${skill.level}%` }}
                            data-testid={`progress-skill-${index}-${skillIndex}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" data-testid="text-projects-title">Featured Projects</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                data-testid={`card-project-${index}`}
              >
                <div className={`h-48 bg-gradient-to-br ${
                  project.color === 'primary' ? 'from-primary/20 to-primary/5' :
                  project.color === 'green-500' ? 'from-green-500/20 to-green-500/5' :
                  'from-purple-500/20 to-purple-500/5'
                } flex items-center justify-center`}>
                  <div className={`${
                    project.color === 'primary' ? 'text-primary' :
                    project.color === 'green-500' ? 'text-green-500' :
                    'text-purple-500'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className={`px-2 py-1 rounded text-xs ${
                          project.color === 'primary' ? 'bg-primary/10 text-primary' :
                          project.color === 'green-500' ? 'bg-green-500/10 text-green-500' :
                          'bg-purple-500/10 text-purple-500'
                        }`}
                        data-testid={`text-project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center font-medium transition-colors ${
                      project.color === 'primary' ? 'text-primary hover:text-primary/80' :
                      project.color === 'green-500' ? 'text-green-500 hover:text-green-500/80' :
                      'text-purple-500 hover:text-purple-500/80'
                    }`}
                    data-testid={`link-project-github-${index}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" data-testid="text-experience-title">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2" data-testid="text-job-title">
                      Trainee Associate
                    </h3>
                    <p className="text-xl text-muted-foreground mb-1" data-testid="text-company-name">
                      Perennial Systems
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="text-job-duration">
                      Aug 2025 – Present
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold" data-testid="text-job-status">
                      Current
                    </span>
                  </div>
                </div>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-job-description">
                    Working on comprehensive backend development including Core Java, Java 8 features, Servlets, and web development. 
                    Focusing on Data Structures & Algorithms implementation and debugging complex applications. 
                    Collaborating with senior developers to build scalable enterprise solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" data-testid="text-achievements-title">Achievements & Research</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="text-primary w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2" data-testid="text-research-title">
                      Research Work: Physio at Home
                    </h3>
                    <p className="text-muted-foreground mb-3" data-testid="text-research-duration">2022 – 2025</p>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-research-description">
                      Developed an innovative AI-based motion tracking system for home-based physical therapy. 
                      The system utilizes computer vision and machine learning algorithms to provide real-time feedback 
                      to patients performing rehabilitation exercises, making physiotherapy more accessible and effective 
                      from the comfort of their homes.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["AI/ML", "Computer Vision", "Healthcare Tech", "Research"].map((tag, index) => (
                        <span 
                          key={tag} 
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                          data-testid={`text-research-tag-${index}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" data-testid="text-contact-title">Get In Touch</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6" data-testid="text-connect-title">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8" data-testid="text-connect-description">
                  I'm always open to discussing new opportunities, interesting projects, or just having a great conversation about technology and software development.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-contact-phone-label">Phone</p>
                    <a 
                      href="tel:+917057058631" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-contact-phone"
                    >
                      +91-7057058631
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-contact-email-label">Email</p>
                    <a 
                      href="mailto:rohankrote2003@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-contact-email"
                    >
                      rohankrote2003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-contact-location-label">Location</p>
                    <p className="text-muted-foreground" data-testid="text-contact-location">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/rohanrote" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  data-testid="link-contact-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com/rohan-3335" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  data-testid="link-contact-github"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://leetcode.com/u/Rohan_Rote" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  data-testid="link-contact-leetcode"
                >
                  <Code className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6" data-testid="form-contact">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" data-testid="label-name">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="transition-all duration-300"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" data-testid="label-email">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="transition-all duration-300"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2" data-testid="label-message">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="transition-all duration-300 resize-none"
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full font-semibold transform hover:scale-105 transition-all duration-300"
                    data-testid="button-send-message"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground" data-testid="text-footer">
            © 2024 Rohan Rote. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
