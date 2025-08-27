import { useState } from 'react';
import { Github, ExternalLink, Play, Download, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Import project images
import mysticQuestImg from '@/assets/mystic-quest.jpg';
import taskflowImg from '@/assets/taskflow.jpg';
import pixelAdventuresImg from '@/assets/pixel-adventures.jpg';
import weatherProImg from '@/assets/weather-pro.jpg';
import spaceDefenderImg from '@/assets/space-defender.jpg';
import fitnessTrackerImg from '@/assets/fitness-tracker.jpg';
import codeQuestImg from '@/assets/code-quest.jpg';
import smartNotesImg from '@/assets/smart-notes.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Mystic Quest RPG',
      description: 'An immersive fantasy RPG featuring a rich storyline, character customization, and strategic combat system. Built with Unity and optimized for mobile devices.',
      image: mysticQuestImg,
      tech: ['Unity', 'C#', 'Blender', 'Firebase'],
      type: 'Game',
      category: 'Game',
      platform: 'Android/iOS',
      downloads: '10K+',
      status: 'Live',
      githubUrl: 'https://github.com/amitkumargupta/mystic-quest',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.amit.mysticquest',
      featured: true
    },
    {
      id: 2,
      title: 'TaskFlow Mobile',
      description: 'A beautiful and intuitive task management application with real-time synchronization, team collaboration, and smart notifications.',
      image: taskflowImg,
      tech: ['Flutter', 'Dart', 'Firebase', 'Provider'],
      type: 'App',
      category: 'App',
      platform: 'Android/iOS/Web',
      downloads: '25K+',
      status: 'Live',
      githubUrl: 'https://github.com/amitkumargupta/taskflow',
      liveUrl: 'https://taskflow.amitgupta.dev',
      featured: true
    },
    {
      id: 3,
      title: 'Pixel Adventures',
      description: 'A nostalgic 2D platformer game with modern mechanics, beautiful pixel art, and challenging levels that test your skills.',
      image: pixelAdventuresImg,
      tech: ['Unity', 'C#', 'Photoshop', 'Aseprite'],
      type: 'Game',
      category: 'Game',
      platform: 'PC/Mobile',
      downloads: '15K+',
      status: 'Live',
      githubUrl: 'https://github.com/amitkumargupta/pixel-adventures',
      liveUrl: 'https://amitkumargupta.itch.io/pixel-adventures',
      featured: true
    },
    {
      id: 4,
      title: 'Weather Pro',
      description: 'A comprehensive weather application with hourly forecasts, weather maps, and severe weather alerts.',
      image: weatherProImg,
      tech: ['Flutter', 'Dart', 'OpenWeather API', 'Provider'],
      type: 'App',
      category: 'App',
      platform: 'Android/iOS',
      downloads: '8K+',
      status: 'Live',
      githubUrl: 'https://github.com/amitkumargupta/weather-pro',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.amit.weatherpro',
      featured: false
    },
    {
      id: 5,
      title: 'Space Defender',
      description: 'An action-packed space shooter with procedurally generated levels and epic boss battles.',
      image: spaceDefenderImg,
      tech: ['Unity', 'C#', 'Unity Analytics'],
      type: 'Game',
      category: 'Game',
      platform: 'Android',
      downloads: '12K+',
      status: 'Live',
      githubUrl: 'https://github.com/amitkumargupta/space-defender',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.amit.spacedefender',
      featured: false
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking app with workout plans, progress tracking, and social features.',
      image: fitnessTrackerImg,
      tech: ['Flutter', 'Dart', 'Firebase', 'HealthKit'],
      type: 'App',
      category: 'App',
      platform: 'Android/iOS',
      downloads: '5K+',
      status: 'Live',
      githubUrl: 'https://github.com/amitkumargupta/fitness-tracker',
      liveUrl: 'https://fitnesstracker.amitgupta.dev',
      featured: false
    },
    {
      id: 7,
      title: 'Code Quest',
      description: 'An educational game that teaches programming concepts through interactive puzzles and challenges.',
      image: codeQuestImg,
      tech: ['Unity', 'C#', 'Unity UI', 'Firebase'],
      type: 'Game',
      category: 'Game',
      platform: 'PC/Web',
      downloads: '7K+',
      status: 'Live',
      githubUrl: 'https://github.com/amitkumargupta/code-quest',
      liveUrl: 'https://codequest.amitgupta.dev',
      featured: false
    },
    {
      id: 8,
      title: 'Smart Notes',
      description: 'An intelligent note-taking app with AI-powered organization and cross-platform synchronization.',
      image: smartNotesImg,
      tech: ['React Native', 'TypeScript', 'Firebase', 'OpenAI'],
      type: 'App',
      category: 'Cross-Platform',
      platform: 'Android/iOS/Web',
      downloads: '3K+',
      status: 'Beta',
      githubUrl: 'https://github.com/amitkumargupta/smart-notes',
      liveUrl: 'https://smartnotes.amitgupta.dev',
      featured: false
    }
  ];

  const categories = ['All', 'Game', 'App', 'Cross-Platform'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">My Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of games, mobile apps, and cross-platform solutions I've built with passion and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-muted-foreground" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setFilter(category)}
                    variant={filter === category ? 'default' : 'outline'}
                    size="sm"
                    className={filter === category ? 'btn-hero' : ''}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card-project group">
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.type === 'Game' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {project.type}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Live' 
                        ? 'bg-success text-success-foreground' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        className="bg-white text-primary hover:bg-white/90"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white text-primary hover:bg-white/90"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-lg text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">{project.platform}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">{project.downloads}</span> downloads
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">
              <span className="text-gradient">Have a Project in Mind?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm always excited to work on new projects and bring creative ideas to life. 
              Let's discuss how we can collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" asChild>
                <a href="/contact">
                  Start a Project
                </a>
              </Button>
              <Button className="btn-outline" asChild>
                <a href="https://github.com/amitkumargupta" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;