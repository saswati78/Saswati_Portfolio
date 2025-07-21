import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import profileImage from "@/assets/saswati-profile-2.jpg";

export function Portfolio() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('jiVVbSgsxnolUNF2s');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_qhevwme',
        'template_zqzjdy4',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Saswati',
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const skills = {
    languages: ["Python", "Java", "C++", "JavaScript", "HTML", "CSS"],
    frameworks: ["Node.js", "Express.js", "EJS", "React"],
    tools: ["Arduino", "Raspberry Pi", "ESP32", "OpenCV", "Git", "MQTT"]
  };

  const projects = [
    {
      title: "SheSync - PCOS/PCOD Tracker",
      description: "A comprehensive health tracking application for women with PCOS/PCOD, featuring symptom logging, ML-powered predictions, and personalized lifestyle recommendations.",
      features: ["Symptom Logging", "ML Predictions", "Responsive UI", "Lifestyle Tips"],
      technologies: ["HTML", "CSS", "JavaScript", "EJS", "Node.js", "Python", "Express"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart ICU Monitoring System",
      description: "Real-time web-based dashboard for monitoring critical ICU patient vitals with ESP32 sensors. Features live visualization of heart rate, SPO2, temperature, and ECG with ML-powered early risk prediction.",
      features: ["Real-time Monitoring", "ML Risk Prediction", "Live Data Visualization", "WebSocket Communication"],
      technologies: ["ESP32", "Flask", "React", "WebSockets", "Python", "Machine Learning", "IoT"],
      github: "https://github.com/saswati78/smart_icu_monitoringSystem",
      demo: "#"
    },
    {
      title: "Object Detection & Lane Tracking",
      description: "Advanced computer vision system using ESP32 and OpenCV for real-time object detection and lane tracking, designed for autonomous vehicle applications.",
      features: ["Real-time Processing", "ESP32 Integration", "Computer Vision", "IoT Communication"],
      technologies: ["ESP32", "OpenCV", "Python", "Computer Vision", "IoT"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img
                src={profileImage}
                alt="Saswati Mohanty"
                className="w-40 h-40 rounded-full mx-auto shadow-large animate-glow border-4 border-primary/20"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Saswati Mohanty
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
              Full-Stack Developer | AI & ML Enthusiast | IoT Explorer
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up">
              Passionate about building scalable web applications, exploring cutting-edge AI & ML technologies, 
              and creating innovative IoT solutions that make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="button-glow shadow-medium hover:shadow-large transition-spring"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="shadow-soft hover:shadow-medium transition-spring"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-surface/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Currently pursuing B.Tech in Computer Science Engineering at Siksha 'O' Anusandhan University. 
                I'm passionate about building scalable web applications, exploring AI & ML, and creating smart IoT 
                solutions that positively impact lives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology started with curiosity and has evolved into a deep passion for creating 
                innovative solutions that bridge the gap between complex technology and everyday problems.
              </p>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6">Education Timeline</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2"></div>
                  <h4 className="font-semibold">B.Tech in Computer Science Engineering</h4>
                  <p className="text-sm text-muted-foreground">Siksha 'O' Anusandhan University</p>
                  <p className="text-sm text-primary font-medium">2022 – 2026</p>
                </div>
                <div className="border-l-2 border-secondary-accent pl-6 relative">
                  <div className="absolute w-3 h-3 bg-secondary-accent rounded-full -left-2 top-2"></div>
                  <h4 className="font-semibold">12th Grade</h4>
                  <p className="text-sm text-muted-foreground">Jupiter Higher Secondary School</p>
                  <p className="text-sm text-secondary-accent font-medium">2020 – 2022</p>
                </div>
                <div className="border-l-2 border-accent-bright pl-6 relative">
                  <div className="absolute w-3 h-3 bg-accent-bright rounded-full -left-2 top-2"></div>
                  <h4 className="font-semibold">School Education</h4>
                  <p className="text-sm text-muted-foreground">Saraswati Shishu Vidya Mandir</p>
                  <p className="text-sm text-accent-bright font-medium">2008 – 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover shadow-soft gradient-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="shadow-soft">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} className="gradient-accent text-white shadow-soft">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" size="sm" className="transition-spring">
                        GitHub
                      </Button>
                      <Button size="sm" className="button-glow transition-spring">
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-surface/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="shadow-soft gradient-card border-0 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl capitalize text-center">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillList.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="transition-smooth hover:bg-primary hover:text-primary-foreground shadow-soft"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply connect with fellow tech enthusiasts. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:swayampravam760@gmail.com" 
                      className="text-primary hover:text-primary-glow transition-smooth"
                    >
                      swayampravam760@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    💼
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary-glow transition-smooth"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    🖥️
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary-glow transition-smooth"
                    >
                      View My Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-medium gradient-card border-0 animate-slide-up">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Drop me a line and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="shadow-soft"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="shadow-soft"
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="shadow-soft min-h-[120px]"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full button-glow shadow-medium hover:shadow-large transition-spring"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-surface/30 border-t border-border/50">
        <div className="container mx-auto max-w-4xl text-center">
          <Separator className="mb-8" />
          <p className="text-muted-foreground">
            © 2024 Saswati Mohanty. Built with passion using React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}