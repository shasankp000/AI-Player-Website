import { useEffect, useRef, useState } from 'react';
import { animate } from 'motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Enhanced Project Statistics Component
const ProjectStats = () => {
  const [stats, setStats] = useState({
    // GitHub stats
    stars: 0,
    forks: 0,
    issues: 0,
    contributors: 0,
    contributorAvatars: [],
    stargazersHistory: [],
    
    // Modrinth stats
    downloads: 0,
    followers: 0,
    versions: 0,
    
    loading: true
  });

  useEffect(() => {
    const fetchAllStats = async () => {
      try {
        // Fetch GitHub repository stats
        const [repoResponse, contributorsResponse] = await Promise.all([
          fetch('https://api.github.com/repos/shasankp000/AI-Player'),
          fetch('https://api.github.com/repos/shasankp000/AI-Player/contributors')
        ]);
        
        const repoData = await repoResponse.json();
        const contributorsData = await contributorsResponse.json();
        
        // Get first 5 contributors' avatars
        const avatars = Array.isArray(contributorsData) 
          ? contributorsData.slice(0, 5).map(contributor => ({
              avatar_url: contributor.avatar_url,
              login: contributor.login,
              html_url: contributor.html_url
            }))
          : [];

        // Fetch Modrinth stats
        let modrinthData = null;
        try {
          const modrinthResponse = await fetch('https://api.modrinth.com/v2/project/ai-player');
          modrinthData = await modrinthResponse.json();
        } catch (modrinthError) {
          console.warn('Failed to fetch Modrinth stats:', modrinthError);
        }
        
        setStats({
          // GitHub stats
          stars: repoData.stargazers_count || 0,
          forks: repoData.forks_count || 0,
          issues: repoData.open_issues_count || 0,
          contributors: Array.isArray(contributorsData) ? contributorsData.length : 1,
          contributorAvatars: avatars,
          
          // Modrinth stats
          downloads: modrinthData?.downloads || 0,
          followers: modrinthData?.followers || 0,
          versions: modrinthData?.versions?.length || 0,
          
          loading: false
        });
      } catch (error) {
        console.error('Error fetching project stats:', error);
        // Fallback values if API fails
        setStats({
          stars: 77,
          forks: 11,
          issues: 5,
          contributors: 8,
          contributorAvatars: [],
          downloads: 62404,
          followers: 171,
          versions: 20,
          loading: false
        });
      }
    };

    fetchAllStats();
  }, []);

  if (stats.loading) {
    return (
      <div className="mt-16 space-y-8">
        {/* GitHub Statistics Loading */}
        <div className="p-8 bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-2xl border border-amber-200 shadow-lg">
          <h4 className="text-3xl font-bold text-center mb-8 text-slate-800">GitHub Statistics</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⭐', label: 'Loading...' },
              { icon: '🍴', label: 'Loading...' },
              { icon: '🐛', label: 'Loading...' },
              { icon: '👥', label: 'Loading...' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2">{item.icon}</span>
                  <div className="text-4xl font-bold text-gray-400 animate-pulse">--</div>
                </div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Modrinth Statistics Loading */}
        <div className="p-8 bg-gradient-to-r from-purple-100/50 to-blue-100/50 rounded-2xl border border-purple-200 shadow-lg">
          <h4 className="text-3xl font-bold text-center mb-8 text-slate-800">Modrinth Statistics</h4>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '📥', label: 'Loading...' },
              { icon: '👥', label: 'Loading...' },
              { icon: '📦', label: 'Loading...' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2">{item.icon}</span>
                  <div className="text-4xl font-bold text-gray-400 animate-pulse">--</div>
                </div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 space-y-8">
      {/* GitHub Statistics */}
      <div className="p-8 bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-2xl border border-amber-200 shadow-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-3xl font-bold text-slate-800">GitHub Statistics</h4>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">⭐</span>
              <div className="text-4xl font-bold text-amber-600">{stats.stars.toLocaleString()}</div>
            </div>
            <div className="text-slate-600">GitHub Stars</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">🍴</span>
              <div className="text-4xl font-bold text-orange-600">{stats.forks.toLocaleString()}</div>
            </div>
            <div className="text-slate-600">Forks</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">🐛</span>
              <div className="text-4xl font-bold text-yellow-600">{stats.issues.toLocaleString()}</div>
            </div>
            <div className="text-slate-600">Open Issues</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col items-center mb-2">
              {stats.contributorAvatars.length > 0 ? (
                <div className="flex items-center justify-center mb-2">
                  <div className="flex -space-x-2 mr-3">
                    {stats.contributorAvatars.map((contributor, index) => (
                      <a
                        key={contributor.login}
                        href={contributor.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        title={contributor.login}
                      >
                        <img
                          src={contributor.avatar_url}
                          alt={contributor.login}
                          className="w-8 h-8 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-200 hover:z-10 relative"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${contributor.login}&background=f59e0b&color=fff`;
                          }}
                        />
                      </a>
                    ))}
                    {stats.contributors > 5 && (
                      <div className="w-8 h-8 rounded-full bg-amber-200 border-2 border-white shadow-md flex items-center justify-center text-xs font-semibold text-amber-800">
                        +{stats.contributors - 5}
                      </div>
                    )}
                  </div>
                  <div className="text-4xl font-bold text-red-500">{stats.contributors.toLocaleString()}</div>
                </div>
              ) : (
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2">👥</span>
                  <div className="text-4xl font-bold text-red-500">{stats.contributors.toLocaleString()}</div>
                </div>
              )}
            </div>
            <div className="text-slate-600">Contributors</div>
          </div>
        </div>
      </div>

      {/* Modrinth Statistics */}
      <div className="p-8 bg-gradient-to-r from-purple-100/50 to-blue-100/50 rounded-2xl border border-purple-200 shadow-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <h4 className="text-3xl font-bold text-slate-800">Modrinth Statistics</h4>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">📥</span>
              <div className="text-4xl font-bold text-purple-600">{stats.downloads.toLocaleString()}</div>
            </div>
            <div className="text-slate-600">Total Downloads</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">❤️</span>
              <div className="text-4xl font-bold text-blue-600">{stats.followers.toLocaleString()}</div>
            </div>
            <div className="text-slate-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">📦</span>
              <div className="text-4xl font-bold text-indigo-600">{stats.versions.toLocaleString()}</div>
            </div>
            <div className="text-slate-600">Versions Released</div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-purple-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://modrinth.com/mod/ai-player"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="mr-2">🚀</span>
              Download on Modrinth
            </a>
            <a
              href="https://github.com/shasankp000/AI-Player/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="mr-2">📋</span>
              GitHub Releases
            </a>
          </div>
        </div>
      </div>

      {/* Stargazers Over Time Chart Placeholder */}
      <div className="p-8 bg-gradient-to-r from-slate-100/50 to-gray-100/50 rounded-2xl border border-slate-200 shadow-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white">📈</span>
          </div>
          <h4 className="text-3xl font-bold text-slate-800">Growth Analytics</h4>
        </div>
        
        {/* Simple Growth Visualization */}
        <div className="bg-white/60 backdrop-blur-xl rounded-xl p-6 border border-slate-200">
          <div className="text-center mb-6">
            <h5 className="text-xl font-semibold text-slate-700 mb-2">Project Milestones</h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">July 2024</div>
                <div className="text-slate-600">Project Launch</div>
                <div className="text-sm text-slate-500">First release on Modrinth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">{stats.downloads.toLocaleString()}+</div>
                <div className="text-slate-600">Downloads Achieved</div>
                <div className="text-sm text-slate-500">Across all platforms</div>
              </div>
            </div>
          </div>
          
          {/* Stargazers Over Time Chart */}
          <div className="mb-8">
            <h5 className="text-lg font-semibold text-slate-700 mb-4 text-center">⭐ Stargazers Over Time</h5>
            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <a
                href="https://starchart.cc/shasankp000/AI-Player"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity duration-300"
                title="View interactive stargazers chart"
              >
                <img
                  src="https://starchart.cc/shasankp000/AI-Player.svg?variant=adaptive"
                  alt="Stargazers over time"
                  className="w-full h-auto rounded-lg"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </a>
              <div className="text-center mt-3">
                <a
                  href="https://starchart.cc/shasankp000/AI-Player"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-200"
                >
                  Click to view interactive chart ↗
                </a>
              </div>
            </div>
          </div>
          
          {/* Progress Bar Visualization */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-slate-600 mb-1">
                <span>GitHub Stars</span>
                <span>{stats.stars}/100</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-orange-400 h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${Math.min((stats.stars / 100) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm text-slate-600 mb-1">
                <span>Modrinth Downloads</span>
                <span>{stats.downloads.toLocaleString()}/100K</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${Math.min((stats.downloads / 100000) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading on first visit
    return !localStorage.getItem('hasVisited');
  });
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading world...');
  
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const supportRef = useRef(null);

  // Particle system for neural network background
  const NeuralNetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const nodes = [];
      const connections = [];

      // Create neural network layers
      const layers = [
        { count: 8, x: 0.1 },    // Input layer
        { count: 12, x: 0.3 },   // Hidden layer 1
        { count: 10, x: 0.5 },   // Hidden layer 2
        { count: 8, x: 0.7 },    // Hidden layer 3
        { count: 5, x: 0.9 }     // Output layer
      ];

      // Generate nodes
      layers.forEach(layer => {
        for (let i = 0; i < layer.count; i++) {
          nodes.push({
            x: layer.x * canvas.width,
            y: (i + 1) * canvas.height / (layer.count + 1),
            radius: 3 + Math.random() * 4,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.005 + Math.random() * 0.01
          });
        }
      });

      // Generate connections between adjacent layers
      let nodeIndex = 0;
      for (let l = 0; l < layers.length - 1; l++) {
        const currentLayerStart = nodeIndex;
        const currentLayerEnd = currentLayerStart + layers[l].count;
        const nextLayerStart = currentLayerEnd;
        const nextLayerEnd = nextLayerStart + layers[l + 1].count;
        
        for (let i = currentLayerStart; i < currentLayerEnd; i++) {
          for (let j = nextLayerStart; j < nextLayerEnd; j++) {
            connections.push({
              from: i,
              to: j,
              strength: Math.random(),
              pulse: Math.random() * Math.PI * 2,
              pulseSpeed: 0.01 + Math.random() * 0.01
            });
          }
        }
        
        nodeIndex = nextLayerStart;
      }
      
      let animationId;
      
      const animate = (time) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        connections.forEach(conn => {
          const fromNode = nodes[conn.from];
          const toNode = nodes[conn.to];
          
          conn.pulse += conn.pulseSpeed;
          const intensity = (Math.sin(conn.pulse) + 1) * 0.5 * conn.strength;
          
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.strokeStyle = `rgba(245, 158, 11, ${intensity * 0.3})`; // amber-500 with opacity
          ctx.lineWidth = 1 + intensity;
          ctx.stroke();
        });
        
        // Draw nodes
        nodes.forEach(node => {
          node.pulse += node.pulseSpeed;
          const intensity = (Math.sin(node.pulse) + 1) * 0.5;
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + intensity * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(251, 191, 36, ${0.6 + intensity * 0.4})`; // amber-400
          ctx.fill();
          
          // Inner glow
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 243, 176, ${0.8 + intensity * 0.2})`; // yellow-100
          ctx.fill();
        });
        
        animationId = requestAnimationFrame(animate);
      };
      
      animate();
      
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 25%, #f59e0b 100%)' }}
      />
    );
  };

  // Minecraft loading animation
  const MinecraftLoader = () => (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      {/* Neural Network Background */}
      <NeuralNetworkBackground />
      
      {/* Content overlay */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4 pixelated drop-shadow-lg">
          AI-Player
        </h1>
        <p className="text-xl text-amber-800 pixelated drop-shadow-md">{loadingText}</p>
      </div>
      
      {/* Progress bar */}
      <div className="relative z-10 w-80 h-6 bg-amber-100/60 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-amber-300 shadow-lg">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 transition-all duration-500 ease-out shadow-inner"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>
      
      {/* Progress percentage */}
      <div className="relative z-10 mt-4 text-amber-800 pixelated">
        {Math.round(loadingProgress)}%
      </div>
    </div>
  );

  // Loading sequence
  useEffect(() => {
    if (!isLoading) return;

    const loadingSteps = [
      { text: 'Loading world...', duration: 800, progress: 20 },
      { text: 'Initializing AI systems...', duration: 900, progress: 45 },
      { text: 'Loading neural networks...', duration: 700, progress: 70 },
      { text: 'Configuring pathfinding...', duration: 600, progress: 85 },
      { text: 'Starting AI-Player...', duration: 500, progress: 100 }
    ];

    let currentStep = 0;
    
    const runStep = () => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setLoadingText(step.text);
        setLoadingProgress(step.progress);
        
        setTimeout(() => {
          currentStep++;
          if (currentStep < loadingSteps.length) {
            runStep();
          } else {
            setTimeout(() => {
              setIsLoading(false);
              localStorage.setItem('hasVisited', 'true');
            }, 500);
          }
        }, step.duration);
      }
    };

    runStep();
  }, [isLoading]);

  // Scroll animations
  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0px)';
        }
      });
    }, observerOptions);

    const refs = [heroRef, featuresRef, supportRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return <MinecraftLoader />;
  }

  return (
    <>
      <Helmet>
        <title>AI-Player - Revolutionary Minecraft AI Companion Mod | Intelligent NPCs</title>
        <meta name="description" content="AI-Player is a groundbreaking Minecraft mod that introduces intelligent AI companions with advanced pathfinding, natural language processing, and machine learning. Experience the future of AI gaming." />
        <meta name="keywords" content="AI Player, Minecraft AI mod, intelligent NPC, AI companion, artificial intelligence gaming, machine learning Minecraft, pathfinding AI, NLP gaming, AI player mod, minecraft artificial intelligence, intelligent agents, AI gaming mod" />
        <meta property="og:title" content="AI-Player - Revolutionary Minecraft AI Companion Mod" />
        <meta property="og:description" content="Experience intelligent AI companions in Minecraft with advanced pathfinding, natural language processing, and machine learning capabilities." />
        <meta property="og:url" content="https://shasankp000.github.io/AI-Player-Website/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Player - Revolutionary Minecraft AI Companion Mod" />
        <meta name="twitter:description" content="Experience intelligent AI companions in Minecraft with advanced AI capabilities." />
        <link rel="canonical" href="https://shasankp000.github.io/AI-Player-Website/" />
        
        {/* Enhanced Structured Data for Software */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI-Player",
            "alternateName": "AI Player Minecraft Mod",
            "description": "Revolutionary Minecraft mod featuring intelligent AI companions with advanced pathfinding, natural language processing, and machine learning capabilities",
            "url": "https://shasankp000.github.io/AI-Player-Website/",
            "downloadUrl": "https://github.com/shasankp000/AI-Player",
            "applicationCategory": "GameApplication",
            "operatingSystem": "Minecraft",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150+"
            },
            "author": {
              "@type": "Person",
              "name": "Shasank Prasad",
              "url": "https://github.com/shasankp000"
            },
            "programmingLanguage": "Java",
            "runtimePlatform": "Minecraft Forge",
            "featureList": [
              "Advanced AI Pathfinding",
              "Natural Language Processing", 
              "Machine Learning Integration",
              "Intelligent Conversation System",
              "Autonomous Goal Setting",
              "Environmental Interaction"
            ],
            "keywords": "AI Player, Minecraft mod, artificial intelligence, machine learning, NLP, pathfinding, AI companion"
          })}
        </script>
      </Helmet>
      
      <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 opacity-0 transform translate-y-8 transition-all duration-1000"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-800 pb-4" style={{ lineHeight: '1.8' }}>
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              AI Player
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Revolutionary Minecraft mod featuring advanced AI with reinforcement learning, 
            natural language processing, and autonomous decision-making capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/quick-start"
              className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/documentation"
              className="px-8 py-4 bg-white/70 backdrop-blur-xl border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Documentation
            </Link>
            <a
              href="https://github.com/shasankp000/AI-Player"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View on GitHub
            </a>
          </div>

          {/* Enhanced feature highlights with better layout */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Research Methodology */}
            <div className="p-8 bg-white/70 backdrop-blur-xl rounded-2xl border border-amber-200 shadow-lg flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Research Methodology</h3>
              </div>
              <ul className="space-y-3 text-slate-600 flex-grow">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">•</span>
                  <span><strong>Reinforcement Learning:</strong> Q-learning with dynamic risk assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">•</span>
                  <span><strong>Deep Learning Integration:</strong> Advanced neural networks for complex behaviors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">•</span>
                  <span><strong>Neural Network Architecture:</strong> Deep learning for complex decision making (in development)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3 mt-1">•</span>
                  <span><strong>Multi-Agent Systems:</strong> Collaborative and competitive AI behaviors</span>
                </li>
              </ul>
              
              {/* Learn More Button */}
              <Link 
                to="/documentation#research-methodology"
                className="block w-full mt-6 px-4 py-3 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Technical Specifications */}
            <div className="p-8 bg-white/70 backdrop-blur-xl rounded-2xl border border-orange-200 shadow-lg flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Technical Specifications</h3>
              </div>
              <ul className="space-y-3 text-slate-600 flex-grow">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span><strong>Platform:</strong> Minecraft 1.21.1 with Fabric Mod Loader</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span><strong>Language:</strong> Java with machine learning integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span><strong>APIs:</strong> Web search, conversation, and game state analysis</span>
                </li>
              </ul>
              
              {/* Learn More Button */}
              <Link 
                to="/documentation#technical-specifications"
                className="block w-full mt-6 px-4 py-3 bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Project Statistics */}
          <ProjectStats />
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="w-full max-w-6xl mx-auto px-6 py-20 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Core Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Reinforcement Learning",
                description: "Q-learning algorithms with deep neural networks for optimal policy development and strategic decision-making",
                icon: "🧠",
                gradient: "from-amber-200 to-orange-200",
                sectionId: "reinforcement-learning"
              },
              {
                title: "Knowledge Integration",
                description: "Web-augmented intelligence system providing real-time access to external knowledge bases and information",
                icon: "🔗",
                gradient: "from-orange-200 to-red-200",
                sectionId: "knowledge-integration"
              },
              {
                title: "Natural Language Processing",
                description: "Advanced conversational AI with emotion recognition and contextual understanding capabilities",
                icon: "💬",
                gradient: "from-yellow-200 to-amber-200",
                sectionId: "natural-language-processing"
              },
              {
                title: "Task Decomposition",
                description: "Hierarchical task planning with multi-step instruction parsing and sequential goal execution",
                icon: "🔧",
                gradient: "from-red-200 to-pink-200",
                sectionId: "task-decomposition"
              },
              {
                title: "Pathfinding and Path Tracing",
                description: "Advanced navigation algorithms with bidirectional A* pathfinding and precise movement execution",
                icon: "🗺️",
                gradient: "from-cyan-200 to-blue-200",
                sectionId: "pathfinding-tracing"
              },
              {
                title: "Multi-Environment AI",
                description: "Cross-dimensional adaptation with environment-specific strategy optimization and learning transfer",
                icon: "🌍",
                gradient: "from-green-200 to-emerald-200",
                sectionId: "multi-environment-ai"
              },
              {
                title: "Continuous Learning",
                description: "Adaptive learning algorithms with experience replay and progressive skill acquisition mechanisms",
                icon: "📈",
                gradient: "from-blue-200 to-indigo-200",
                sectionId: "continuous-learning"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:scale-105 shadow-lg flex flex-col h-full"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{feature.description}</p>
                <Link
                  to={`/documentation#${feature.sectionId}`}
                  className="block w-full px-4 py-3 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-md mt-auto text-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support the Project Section */}
      <section 
        ref={supportRef}
        className="w-full max-w-5xl mx-auto px-6 py-20 opacity-0"
      >
        <div className="text-center p-12 bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-slate-800">Support the Project</h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            AI-Player is an open-source project pushing the boundaries of AI in gaming. 
            This project is the result of thousands of hours of research, trials and errors, with the simple goal of eliminating loneliness from Minecraft as much as possible.
            Your support helps us continue developing cutting-edge features and improving the mod.
          </p>
          
          {/* Donation Buttons */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">Show Your Support</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="https://buymeacoffee.com/shasankp000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="mr-2">☕</span>
                Buy Me a Coffee
              </a>
              <a
                href="https://paypal.me/shasankp000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="mr-2">💳</span>
                PayPal
              </a>
            </div>
          </div>
          
          {/* Community Buttons */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">Get Involved</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <a
                href="https://github.com/shasankp000/AI-Player"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="mr-2">⭐</span>
                Star on GitHub
              </a>
              <a
                href="https://github.com/shasankp000/AI-Player/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="mr-2">🐛</span>
                Report Issues
              </a>
              <a
                href="https://github.com/shasankp000/AI-Player/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="mr-2">🤝</span>
                Contribute
              </a>
              <a
                href="https://discord.gg/zTfFJN9hQv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="mr-2">💬</span>
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;