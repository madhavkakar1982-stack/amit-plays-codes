import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart, Coffee, Gamepad2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/amitkumargupta' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/amitkumargupta' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/amitkumargupta' },
    { name: 'Email', icon: Mail, url: 'mailto:amit@example.com' },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">AG</span>
              </div>
              <span className="font-bold text-xl text-gradient">Amit Gupta</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building games and apps that people love. Passionate about creating interactive experiences with Unity, Flutter, and cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover-scale"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Gamepad2 size={16} className="text-primary" />
            <span>+</span>
            <Coffee size={16} className="text-secondary" />
            <span>by Amit Kumar Gupta</span>
          </div>
          
          <div className="text-muted-foreground">
            © {currentYear} Amit Kumar Gupta. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;