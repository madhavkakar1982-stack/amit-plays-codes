import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, MessageCircle, Send, Copy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('amit.kumar.gupta@example.com');
      setEmailCopied(true);
      toast({
        title: "Email copied!",
        description: "Email address has been copied to your clipboard.",
      });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the email manually.",
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/amitkumargupta',
      description: 'Check out my code repositories'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/amitkumargupta',
      description: 'Connect professionally'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/amitkumargupta',
      description: 'Follow my development journey'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/amitkumargupta',
      description: 'Join my development community'
    }
  ];

  const projectTypes = [
    {
      title: 'Mobile App Development',
      description: 'Cross-platform apps using Flutter, React Native, or native development',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'Backend integration', 'UI/UX design']
    },
    {
      title: 'Game Development',
      description: 'Unity games for mobile, PC, and web platforms',
      features: ['2D & 3D games', 'Mobile optimization', 'Multiplayer systems', 'Game monetization']
    },
    {
      title: 'Consulting & Code Review',
      description: 'Technical consultation and code optimization services',
      features: ['Architecture review', 'Performance optimization', 'Best practices', 'Mentoring']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Let's Create Something Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm here to help you build exceptional games and applications.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-gradient">Send Me a Message</span>
              </h2>
              <p className="text-muted-foreground">
                Tell me about your project and I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry, collaboration, etc."
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="card-creative">
              <h3 className="text-xl font-semibold mb-4">Get in Touch Directly</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-primary" />
                    <span className="font-medium">amit.kumar.gupta@example.com</span>
                  </div>
                  <Button
                    onClick={copyEmail}
                    size="sm"
                    variant="ghost"
                    className="hover-scale"
                  >
                    {emailCopied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Prefer email? Drop me a line directly and I'll respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-creative opacity-50">
              <h3 className="text-xl font-semibold mb-4">Connect on Social</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <div
                      key={social.name}
                      className="p-4 bg-muted rounded-xl cursor-not-allowed"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <Icon size={20} />
                        <span className="font-medium">{social.name}</span>
                      </div>
                      <p className="text-xs opacity-80">{social.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="card-creative">
              <h3 className="text-xl font-semibold mb-4">Response Time</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Project Inquiries</span>
                  <span className="text-success font-semibold">≤ 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>General Questions</span>
                  <span className="text-primary font-semibold">≤ 12 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Collaboration Requests</span>
                  <span className="text-accent font-semibold">≤ 6 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">What I Can Help You With</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, I offer comprehensive development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((type) => (
              <div key={type.title} className="card-creative">
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity. Simple mobile apps take 4-8 weeks, while complex games can take 3-6 months. I'll provide a detailed timeline after understanding your requirements."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am comfortable with remote collaboration across different time zones."
              },
              {
                question: "What platforms do you develop for?",
                answer: "I develop for iOS, Android, Windows, macOS, and web platforms using Unity, Flutter, and React Native depending on project requirements."
              },
              {
                question: "Do you provide post-launch support?",
                answer: "Yes, I offer maintenance and support packages to ensure your app or game continues to perform well after launch."
              }
            ].map((faq, index) => (
              <div key={index} className="card-creative">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;