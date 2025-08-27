import { useState } from 'react';
import { Calendar, Clock, User, Tag, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Game Dev', 'App Dev', 'Tips', 'Unity', 'Flutter', 'Career'];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Your First Unity 2D Game: A Complete Guide',
      excerpt: 'Learn how to create a simple 2D platformer from scratch using Unity. This comprehensive guide covers everything from setting up your project to publishing your game.',
      content: 'Full blog post content would go here...',
      author: 'Amit Kumar Gupta',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'Unity',
      tags: ['Unity', 'Game Dev', 'Tutorial', '2D'],
      image: '/api/placeholder/800/400',
      featured: true
    },
    {
      id: 2,
      title: 'Flutter State Management: Provider vs Bloc vs Riverpod',
      excerpt: 'A detailed comparison of the most popular state management solutions in Flutter. Which one should you choose for your next project?',
      content: 'Full blog post content would go here...',
      author: 'Amit Kumar Gupta',
      date: '2024-03-10',
      readTime: '12 min read',
      category: 'Flutter',
      tags: ['Flutter', 'State Management', 'Provider', 'Bloc', 'Riverpod'],
      image: '/api/placeholder/800/400',
      featured: true
    },
    {
      id: 3,
      title: '10 Game Development Mistakes I Made (So You Don\'t Have To)',
      excerpt: 'Learning from failures is crucial in game development. Here are the biggest mistakes I made during my indie game development journey.',
      content: 'Full blog post content would go here...',
      author: 'Amit Kumar Gupta',
      date: '2024-03-05',
      readTime: '6 min read',
      category: 'Game Dev',
      tags: ['Game Dev', 'Mistakes', 'Indie', 'Experience'],
      image: '/api/placeholder/800/400',
      featured: false
    },
    {
      id: 4,
      title: 'Optimizing Mobile Games for Better Performance',
      excerpt: 'Performance optimization techniques that can make your mobile games run smoothly on low-end devices without sacrificing visual quality.',
      content: 'Full blog post content would go here...',
      author: 'Amit Kumar Gupta',
      date: '2024-02-28',
      readTime: '10 min read',
      category: 'Game Dev',
      tags: ['Optimization', 'Mobile', 'Performance', 'Unity'],
      image: '/api/placeholder/800/400',
      featured: false
    },
    {
      id: 5,
      title: 'Building Cross-Platform Apps with Flutter: Lessons Learned',
      excerpt: 'My experience building apps that work seamlessly across iOS, Android, and web platforms using Flutter.',
      content: 'Full blog post content would go here...',
      author: 'Amit Kumar Gupta',
      date: '2024-02-20',
      readTime: '7 min read',
      category: 'App Dev',
      tags: ['Flutter', 'Cross-Platform', 'Mobile', 'Web'],
      image: '/api/placeholder/800/400',
      featured: false
    },
    {
      id: 6,
      title: 'From Idea to App Store: My First Mobile App Journey',
      excerpt: 'The complete story of how I built and published my first mobile app, including the challenges, lessons, and unexpected successes.',
      content: 'Full blog post content would go here...',
      author: 'Amit Kumar Gupta',
      date: '2024-02-15',
      readTime: '9 min read',
      category: 'Career',
      tags: ['Career', 'App Store', 'Mobile', 'Journey'],
      image: '/api/placeholder/800/400',
      featured: false
    },
    {
      id: 7,
      title: 'Unity Tips: Creating Smooth Character Movement',
      excerpt: 'Learn how to implement buttery-smooth character movement in Unity with physics-based controls and animation blending.',
      content: 'Full blog post content would go here...',
      author: 'Amit Kumar Gupta',
      date: '2024-02-10',
      readTime: '5 min read',
      category: 'Tips',
      tags: ['Unity', 'Character', 'Movement', 'Animation'],
      image: '/api/placeholder/800/400',
      featured: false
    },
    {
      id: 8,
      title: 'Firebase Integration in Flutter: Real-time Database Setup',
      excerpt: 'Step-by-step guide to integrate Firebase Firestore in your Flutter app for real-time data synchronization.',
      content: 'Full blog post content would go here...',
      author: 'Amit Kumar Gupta',
      date: '2024-02-05',
      readTime: '11 min read',
      category: 'Flutter',
      tags: ['Firebase', 'Flutter', 'Database', 'Real-time'],
      image: '/api/placeholder/800/400',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Development Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Behind-the-scenes stories, development insights, tutorials, and lessons learned from my journey as a game and app developer.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-gradient">Featured Posts</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="card-project group">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag size={14} />
                        <span>{post.category}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded-lg text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button variant="ghost" className="p-0 hover:bg-transparent group-hover:text-primary">
                      Read More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search */}
      <section className="py-8 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  className={selectedCategory === category ? 'btn-hero' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            All Posts ({filteredPosts.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="card-creative group cursor-pointer">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/50 text-white rounded-lg text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No posts found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90">
              Get the latest posts, tutorials, and development insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                className="bg-white"
              />
              <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/70">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;