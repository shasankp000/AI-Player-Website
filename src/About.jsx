import { useEffect, useRef, useState } from 'react';

const About = () => {
  const aboutRef = useRef(null);
  
  // State for contributors
  const [contributors, setContributors] = useState({
    aiPlayer: [],
    loading: true
  });

  // Fetch AI-Player contributors
  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/shasankp000/AI-Player/contributors');
        const data = await response.json();
        
        setContributors({
          aiPlayer: Array.isArray(data) ? data : [],
          loading: false
        });
      } catch (error) {
        console.error('Error fetching contributors:', error);
        setContributors({
          aiPlayer: [],
          loading: false
        });
      }
    };

    fetchContributors();
  }, []);

  // Scroll animation
  useEffect(() => {
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>
      </div>

      <section 
        ref={aboutRef}
        className="relative w-full max-w-4xl mx-auto px-6 py-20 opacity-0 transform translate-y-8 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              About the Developer
            </span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-amber-200 shadow-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-amber-300 shadow-lg">
                <img
                  src="https://avatars.githubusercontent.com/u/46317225?v=4"
                  alt="Shasank Prasad"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Shasank Prasad</h2>
              <p className="text-amber-600 font-semibold mb-4">CS Student & AI Tinkerer</p>
              <p className="text-slate-600 mb-6">📍 India</p>
              
              {/* GitHub Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">141</div>
                  <div className="text-sm text-slate-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">30</div>
                  <div className="text-sm text-slate-600">Repositories</div>
                </div>
              </div>

              {/* GitHub Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">🏆 GitHub Achievements</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-amber-50 rounded-lg text-center">
                    <div className="text-lg">🤝</div>
                    <div className="text-xs text-slate-600">Pair Extraordinaire</div>
                  </div>
                  <div className="p-2 bg-orange-50 rounded-lg text-center">
                    <div className="text-lg">🎯</div>
                    <div className="text-xs text-slate-600">YOLO</div>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg text-center">
                    <div className="text-lg">🦈</div>
                    <div className="text-xs text-slate-600">Pull Shark</div>
                  </div>
                  <div className="p-2 bg-purple-50 rounded-lg text-center">
                    <div className="text-lg">⭐</div>
                    <div className="text-xs text-slate-600">Starstruck</div>
                  </div>
                </div>
              </div>

              {/* Profile Views */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <span className="text-lg mr-2">�️</span>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-blue-800">Profile Views</div>
                    <div className="text-xl font-bold text-blue-600">2,547+</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/shasankp000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
                >
                  <span className="mr-2">📱</span>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Dedicated GitHub Statistics Container */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                GitHub Statistics
              </h3>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <img 
                    src="https://github-readme-stats.vercel.app/api?username=shasankp000&theme=tokyonight&show_icons=true&hide_border=true&count_private=true" 
                    alt="GitHub Stats" 
                    className="w-full rounded-lg shadow-md"
                  />
                  <img 
                    src="https://github-readme-streak-stats.herokuapp.com/?user=shasankp000&theme=tokyonight&hide_border=true" 
                    alt="GitHub Streak" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-4">
                  <img 
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=shasankp000&theme=tokyonight&show_icons=true&hide_border=true&layout=compact" 
                    alt="Top Languages" 
                    className="w-full rounded-lg shadow-md"
                  />
                  <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border">
                    <h4 className="font-semibold text-slate-800 mb-3">📈 Activity Overview</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Total Commits (2024):</span>
                        <span className="font-semibold text-slate-800">1,604</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Active Repositories:</span>
                        <span className="font-semibold text-slate-800">30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">GitHub Followers:</span>
                        <span className="font-semibold text-slate-800">141</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bio Section */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-orange-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🧠</span>
                About Me
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                💡 Final-year Computer Science student | Assistant AI researcher (UoM) | Builder of experimental AI systems in games & beyond.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">🚀 Current Focus:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    <span>🤖 Exploring AI as companions — blending autonomy, emotion, and decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    <span>🎮 Using Minecraft as a testbed for agentic AI and interactive systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    <span>🔍 Bridging research ideas (NLP, RL, knowledge systems) with real, playful applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    <span>🌌 Designing projects that mix creativity, logic, and a bit of imagination about the future</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    <span>Working on a human-brain-inspired, private AGI project — less about size, more about structure</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-600 leading-relaxed">
                🌌 I explore AI not just as tools — but as companions. Building an AI that understands humans — not by mimicry, but by shared logic and emotion.
              </p>
            </div>

            {/* Pinned Projects */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-green-200 shadow-lg p-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                <span className="text-2xl mr-3">📌</span>
                Pinned Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* AI-Player */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="text-lg font-bold text-slate-800">AI-Player</h4>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Public</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-6">
                    A minecraft mod which aims to add a "second player" into the game which will actually be intelligent.
                  </p>
                  
                  {/* Contributors */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs font-semibold text-slate-700">
                        👥 Contributors ({contributors.loading ? '...' : contributors.aiPlayer.length}):
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {contributors.loading ? (
                        // Loading placeholder
                        <>
                          {[...Array(4)].map((_, index) => (
                            <div
                              key={index}
                              className="w-7 h-7 bg-gray-200 rounded-full border-2 border-blue-300 animate-pulse -ml-1 first:ml-0"
                            />
                          ))}
                        </>
                      ) : (
                        // Actual contributors
                        contributors.aiPlayer.map((contributor, index) => (
                          <a
                            key={contributor.id}
                            href={contributor.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group"
                            title={`${contributor.login}${contributor.contributions ? ` - ${contributor.contributions} contributions` : ''}`}
                          >
                            <img
                              src={contributor.avatar_url}
                              alt={contributor.login}
                              className={`w-7 h-7 rounded-full border-2 border-blue-300 hover:border-blue-500 transition-all duration-200 hover:scale-110 hover:z-10 relative ${index > 0 ? '-ml-1' : ''}`}
                              onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${contributor.login}&background=3b82f6&color=fff`;
                              }}
                            />
                          </a>
                        ))
                      )}
                      <span className="text-xs text-slate-500 ml-2">
                        {contributors.loading ? 'Loading...' : `${contributors.aiPlayer.length} Contributors`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4 text-xs text-slate-500">
                      <span className="flex items-center">
                        <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                        Java
                      </span>
                      <span className="flex items-center">
                        ⭐ 77
                      </span>
                      <span className="flex items-center">
                        🍴 11
                      </span>
                    </div>
                    <a href="https://github.com/shasankp000/AI-Player" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View →
                    </a>
                  </div>
                </div>

                {/* PyCraft */}
                <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl border border-green-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="text-lg font-bold text-slate-800">PyCraft</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Public</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-6">
                    A Minecraft launcher made in python.
                  </p>
                  
                  {/* Contributors */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-semibold text-slate-700">👥 Contributors:</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="relative group">
                        <img
                          src="https://avatars.githubusercontent.com/u/46317225?v=4"
                          alt="shasankp000"
                          className="w-8 h-8 rounded-full border-2 border-green-300 hover:border-green-500 transition-colors"
                          title="shasankp000 - Main Developer"
                        />
                      </div>
                      <span className="text-xs text-slate-500 ml-2">Solo Project</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-slate-500">
                      <span className="flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Python
                      </span>
                      <span className="flex items-center">
                        ⭐ 83
                      </span>
                      <span className="flex items-center">
                        🍴 7
                      </span>
                    </div>
                    <a href="https://github.com/shasankp000/PyCraft" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 text-sm font-medium">
                      View →
                    </a>
                  </div>
                </div>

                {/* PyMicMute */}
                <div className="p-8 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="text-lg font-bold text-slate-800">PyMicMute</h4>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Public</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-6">
                    A simple master microphone muting/unmuting app which supports custom keybinds and also has in-built notification support for mute/unmute events.
                  </p>
                  
                  {/* Contributors */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs font-semibold text-slate-700">👥 Contributors:</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="relative group">
                        <img
                          src="https://avatars.githubusercontent.com/u/46317225?v=4"
                          alt="shasankp000"
                          className="w-8 h-8 rounded-full border-2 border-purple-300 hover:border-purple-500 transition-colors"
                          title="shasankp000 - Main Developer"
                        />
                      </div>
                      <span className="text-xs text-slate-500 ml-2">Utility Project</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4 text-xs text-slate-500">
                      <span className="flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        Python
                      </span>
                      <span className="flex items-center">
                        ⭐ 3
                      </span>
                    </div>
                    <a href="https://github.com/shasankp000/PyMicMute" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      View →
                    </a>
                  </div>
                </div>

                {/* CSE-Engineering-Notes */}
                <div className="p-8 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl border border-yellow-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="text-lg font-bold text-slate-800">CSE-Engineering-Notes</h4>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Public</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-6">
                    A free repository of high quality free custom made notes on the various subjects under CS
                  </p>
                  
                  {/* Contributors */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs font-semibold text-slate-700">👥 Contributors & Collaborators:</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="relative group">
                        <img
                          src="https://avatars.githubusercontent.com/u/46317225?v=4"
                          alt="shasankp000"
                          className="w-7 h-7 rounded-full border-2 border-yellow-300 hover:border-yellow-500 transition-colors"
                          title="shasankp000 - Main Author"
                        />
                      </div>
                      <div className="relative group">
                        <img
                          src="https://avatars.githubusercontent.com/u/73281276?v=4"
                          alt="arkapg211002"
                          className="w-7 h-7 rounded-full border-2 border-yellow-300 hover:border-yellow-500 transition-colors -ml-1"
                          title="arkapg211002 - Content Collaborator (Sem 3-8)"
                        />
                      </div>
                      <span className="text-xs text-slate-500 ml-2">Collaborative Project</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-slate-500">
                      <span className="flex items-center">
                        <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                        SCSS
                      </span>
                      <span className="flex items-center">
                        ⭐ 1
                      </span>
                    </div>
                    <a href="https://github.com/shasankp000/CSE-Engineering-Notes" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-800 text-sm font-medium">
                      View →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a href="https://github.com/shasankp000?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="mr-2">📂</span>
                  View All Projects
                </a>
              </div>
            </div>

            {/* Project Timeline */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-yellow-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-2xl mr-3">⏰</span>
                Development Timeline
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-orange-400 to-yellow-400"></div>
                
                <div className="space-y-8">
                  {/* 2024 - Current */}
                  <div className="relative flex items-start space-x-6">
                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center z-10 shadow-lg">
                      <span className="text-white text-sm font-bold">24</span>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-bold text-slate-800">2024 - Present</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Current</span>
                      </div>
                      <p className="text-slate-600 mb-3">
                        <strong>AI-Player Website Launch</strong> - Comprehensive project documentation and community building
                      </p>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          84% focus on website development & deployment
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          GitHub Pages integration with custom domain
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          Real-time GitHub & Modrinth statistics integration
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2023-2024 - AI Player Development */}
                  <div className="relative flex items-start space-x-6">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center z-10 shadow-lg">
                      <span className="text-white text-sm font-bold">23</span>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-bold text-slate-800">2023-2024</h4>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Major Release</span>
                      </div>
                      <p className="text-slate-600 mb-3">
                        <strong>AI-Player Mod Core Development</strong> - Advanced AI systems and NLP integration
                      </p>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          Pathfinding & environmental interaction systems
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          LLM integration for natural conversations
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          Reinforcement learning for goal-oriented behavior
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2022-2023 - Foundation Projects */}
                  <div className="relative flex items-start space-x-6">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center z-10 shadow-lg">
                      <span className="text-white text-sm font-bold">22</span>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-bold text-slate-800">2022-2023</h4>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Foundation</span>
                      </div>
                      <p className="text-slate-600 mb-3">
                        <strong>PyCraft Launcher & Utility Projects</strong> - Python-based tools and launchers
                      </p>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          PyCraft: Minecraft launcher with 83 stars
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          PyMicMute: Audio control utility
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                          CS Engineering Notes platform
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Future Plans */}
                  <div className="relative flex items-start space-x-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center z-10 shadow-lg">
                      <span className="text-white text-sm font-bold">🚀</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-bold text-slate-800">2025 & Beyond</h4>
                        <span className="px-2 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs rounded-full">Future Vision</span>
                      </div>
                      <p className="text-slate-600 mb-3">
                        <strong>Next-Generation AI Companions</strong> - Scaling beyond Minecraft to universal AI systems
                      </p>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-2"></span>
                          Human-brain-inspired AGI architecture
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-2"></span>
                          Cross-platform AI companion deployment
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-2"></span>
                          Private, emotion-aware AI systems
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Tools */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-indigo-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-2xl mr-3">🔧</span>
                Skills & Tools
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <span className="text-lg mr-2">💻</span>
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'C', 'Rust'].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <span className="text-lg mr-2">🤖</span>
                    AI/ML
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Natural Language Processing', 'Reinforcement Learning', 'Deep Learning', 'AI Data Mining', 'Model Training', 'Retrieval Systems'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <span className="text-lg mr-2">🛠️</span>
                    Other
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Game Modding', 'Distributed Design', 'API Integrations', 'Web Development'].map((other) => (
                      <span key={other} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        {other}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Research Interests */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-purple-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🔬</span>
                Research Interests
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">🤖 AI Autonomy</h4>
                  <p className="text-sm text-slate-600">Developing intelligent agents capable of independent decision-making in complex environments</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">💬 Natural Language Processing</h4>
                  <p className="text-sm text-slate-600">Creating conversational AI that understands context and emotional nuance</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">🎮 AI Companions</h4>
                  <p className="text-sm text-slate-600">Building meaningful AI relationships that reduce loneliness in digital spaces</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">🧪 Experimental AI</h4>
                  <p className="text-sm text-slate-600">Exploring cutting-edge algorithms through practical Minecraft implementations</p>
                </div>
              </div>
            </div>

            {/* Current Contributions */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-teal-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-2xl mr-3">📈</span>
                Current Activity
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">1,604</div>
                  <div className="text-sm text-slate-600">Contributions This Year</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                  <div className="text-sm text-slate-600">Commits This Month</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                  <div className="text-sm text-slate-600">Active Repositories</div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-slate-800 mb-3">🎯 October 2025 Focus</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                    <span>AI-Player-Website (84% of commits)</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    <span>AI-Player mod development (9% of commits)</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                    <span>Profile updates (7% of commits)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-amber-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-2xl mr-3">🌟</span>
                Featured Work
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">🎮 AI Player Mod</h4>
                  <p className="text-slate-600 mb-4">
                    A Minecraft mod with pathfinding, NLP, reflexes, self-goals, and LLM-powered conversations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Reinforcement Learning</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">NLP</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Pathfinding</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">LLM Integration</span>
                  </div>
                  <a href="https://github.com/shasankp000/AI-Player" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                    View Project →
                  </a>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">📚 CS Engineering Notes</h4>
                  <p className="text-slate-600 mb-4">
                    A website where CS students can access high-quality custom notes on various Computer Science subjects.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Education</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Web Development</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Open Source</span>
                  </div>
                  <a href="https://cse-engineering-notes.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium">
                    Visit Website →
                  </a>
                </div>
              </div>
            </div>

            {/* Support Message */}
            <div className="bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-2xl border border-amber-200 shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Support the Journey</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                This project represents not just code, but a vision of more connected, less lonely digital experiences. 
                Your support helps prove that student innovation can make a real difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;