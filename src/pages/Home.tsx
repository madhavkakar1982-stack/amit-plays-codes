import { Link } from 'react-router-dom';
import { ArrowRight, Download, Play, Github, ExternalLink, Gamepad2, Smartphone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TechStack from '@/components/TechStack';
import heroIllustration from '@/assets/hero-illustration.jpg';

const Home = () => {
  const featuredProjects = [
    {
      title: 'Mystic Quest RPG',
      description: 'An immersive fantasy RPG with stunning 3D graphics and engaging storyline.',
      image: '/api/placeholder/400/250',
      tech: ['Unity', 'C#', 'Blender'],
      type: 'Game',
      downloads: '10K+',
      status: 'Live'
    },
    {
      title: 'TaskFlow Mobile',
      description: 'A beautiful task management app with seamless cross-platform experience.',
      image: '/api/placeholder/400/250',
      tech: ['Flutter', 'Dart', 'Firebase'],
      type: 'App',
      downloads: '25K+',
      status: 'Live'
    },
    {
      title: 'Pixel Adventures',
      description: 'A nostalgic 2D platformer with modern mechanics and pixel art aesthetics.',
      image: '/api/placeholder/400/250',
      tech: ['Unity', 'C#', 'Photoshop'],
      type: 'Game',
      downloads: '15K+',
      status: 'Live'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-primary font-medium">
                  <Sparkles size={20} />
                  <span>Welcome to my digital playground</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hey, I'm{' '}
                  <span className="text-gradient">Amit Kumar Gupta</span>{' '}
                  <span className="inline-block">👾</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  I build <span className="text-primary font-semibold">games</span> and{' '}
                  <span className="text-accent font-semibold">apps</span> that people love.
                </p>
                
                <p className="text-lg text-muted-foreground max-w-lg">
                  Passionate developer crafting interactive experiences with Unity, Flutter, and cutting-edge technologies. 
                  From mobile apps to immersive games, I bring ideas to life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button className="btn-hero w-full sm:w-auto">
                    <Play size={20} className="mr-2" />
                    See My Work
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button className="btn-outline w-full sm:w-auto">
                    <ArrowRight size={20} className="mr-2" />
                    Get in Touch
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Gamepad2 size={20} className="text-primary" />
                  <span className="text-sm font-medium">Game Developer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone size={20} className="text-accent" />
                  <span className="text-sm font-medium">App Developer</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 hover-scale">
                <img
                  src={heroIllustration}
                  alt="Game and App Development Illustration"
                  className="w-full h-auto rounded-3xl shadow-accent"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-2xl opacity-20 animate-bounce delay-100"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-secondary rounded-xl opacity-30 animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest games and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.title} className="card-project group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.type === 'Game' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                    }`}>
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-success text-success-foreground rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {project.downloads} downloads
                    </span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="hover-scale">
                        <Github size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="hover-scale">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="btn-secondary">
                View All Projects
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to bring your idea to life?
            </h2>
            <p className="text-xl text-white/90">
              Let's collaborate and create something amazing together. Whether it's a game, mobile app, or web application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover-scale">
                  Start a Project
                </Button>
              </Link>
              <Link to="/about">
                <Button className="bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-2xl">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;