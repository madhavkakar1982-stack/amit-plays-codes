import { Calendar, MapPin, Coffee, Heart, BookOpen, Award } from 'lucide-react';
import amitPhoto from '@/assets/amit-photo.jpg';

const About = () => {
  const journey = [
    {
      year: '2019',
      title: 'Started Programming Journey',
      description: 'Began learning programming with C++ and Java during college.',
      icon: BookOpen
    },
    {
      year: '2020',
      title: 'First Mobile App',
      description: 'Published my first Android app using Java and XML.',
      icon: Award
    },
    {
      year: '2021',
      title: 'Unity Game Development',
      description: 'Discovered Unity and created my first 2D platformer game.',
      icon: Award
    },
    {
      year: '2022',
      title: 'Flutter Expert',
      description: 'Mastered Flutter and started building cross-platform apps.',
      icon: Award
    },
    {
      year: '2023',
      title: 'Indie Game Success',
      description: 'Released "Mystic Quest RPG" which gained 10K+ downloads.',
      icon: Award
    },
    {
      year: '2024',
      title: 'Full-Stack Portfolio',
      description: 'Expanded skills to include backend development and cloud services.',
      icon: Award
    }
  ];

  const funFacts = [
    {
      icon: Coffee,
      title: 'Coffee vs Chai',
      description: 'Definitely a chai person! Nothing beats a good cup of masala chai while coding.'
    },
    {
      icon: Heart,
      title: 'Favorite Game',
      description: 'The Legend of Zelda series - perfect blend of storytelling and game mechanics.'
    },
    {
      icon: MapPin,
      title: 'Based in',
      description: 'Currently based in Bangalore, India - the Silicon Valley of India.'
    },
    {
      icon: BookOpen,
      title: 'Always Learning',
      description: 'Currently exploring AR/VR development and machine learning integration.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Hi there! I'm{' '}
                  <span className="text-gradient">Amit</span> 👋
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A passionate game and mobile app developer who loves creating digital experiences 
                  that bring joy to people's lives.
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey into development started during college when I was fascinated by 
                  how games and apps could create immersive experiences. What began as curiosity 
                  quickly evolved into a deep passion for building interactive digital products.
                </p>
                
                <p>
                  I specialize in Unity game development and Flutter mobile applications, but 
                  I'm always excited to explore new technologies and push the boundaries of 
                  what's possible in digital experiences.
                </p>
                
                <p>
                  When I'm not coding, you'll find me playing indie games, sketching game concepts, 
                  or contributing to open-source projects. I believe in the power of technology 
                  to solve real-world problems and create meaningful connections.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={amitPhoto}
                  alt="Amit Kumar Gupta"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-accent hover-scale"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-secondary rounded-xl opacity-30 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">My Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From curious student to passionate developer - here's how my story unfolded
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

              <div className="space-y-8">
                {journey.map((item, index) => {
                  const Icon = item.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={item.year} className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center z-10">
                        <Icon size={16} className="text-white" />
                      </div>

                      {/* Content */}
                      <div className={`ml-16 md:ml-0 md:w-1/2 ${
                        isEven ? 'md:pr-12' : 'md:pl-12'
                      }`}>
                        <div className="card-creative">
                          <div className="space-y-2">
                            <div className="text-primary font-bold text-lg">{item.year}</div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Fun Facts About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A few things that make me who I am
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {funFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.title} className="card-creative group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{fact.title}</h3>
                      <p className="text-muted-foreground">{fact.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills & Interests */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gradient">What I Love Building</h3>
                <div className="space-y-4">
                  {[
                    'Interactive mobile applications with smooth UX',
                    'Immersive 2D and 3D games with engaging mechanics',
                    'Cross-platform solutions that work everywhere',
                    'Beautiful, functional user interfaces',
                    'Real-time multiplayer experiences',
                    'Educational apps that make learning fun'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gradient">Current Interests</h3>
                <div className="space-y-4">
                  {[
                    'AR/VR development and immersive experiences',
                    'Machine learning integration in games',
                    'Blockchain gaming and NFT marketplaces',
                    'Progressive Web Apps (PWAs)',
                    'Cloud gaming and streaming technologies',
                    'Sustainable and ethical game development'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;