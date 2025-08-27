import { useState } from 'react';
import { Gamepad2, Smartphone, Code, Database, Cloud, Palette } from 'lucide-react';

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techCategories = [
    {
      title: 'Game Development',
      icon: Gamepad2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      technologies: ['Unity', 'C#', 'Unreal Engine', 'Blender']
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      technologies: ['Flutter', 'Dart', 'React Native', 'Kotlin']
    },
    {
      title: 'Programming',
      icon: Code,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      technologies: ['JavaScript', 'TypeScript', 'Python', 'Java']
    },
    {
      title: 'Backend & Cloud',
      icon: Cloud,
      color: 'text-success',
      bgColor: 'bg-success/10',
      technologies: ['Firebase', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      technologies: ['Figma', 'Adobe XD', 'Git', 'VS Code']
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Tech Stack & Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="card-creative group cursor-pointer"
                onMouseEnter={() => setHoveredTech(category.title)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className={category.color} />
                  </div>
                  
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  
                  <div className={`space-y-2 transition-all duration-300 ${
                    hoveredTech === category.title ? 'opacity-100 max-h-40' : 'opacity-70 max-h-20'
                  }`}>
                    {category.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-1 bg-background rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Games Published', value: '12+' },
            { label: 'Apps Downloaded', value: '50K+' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Happy Clients', value: '25+' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;