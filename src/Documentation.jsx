import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Table of Contents based on the flowchart
  const tableOfContents = [
    {
      id: 'overview',
      title: 'Overview',
      description: 'Introduction to AI-Player architecture and core concepts',
      icon: '📋'
    },
    {
      id: 'reinforcement-learning',
      title: 'Reinforcement Learning',
      description: 'Q-learning algorithms and neural network implementations',
      icon: '🧠',
      subsections: [
        { id: 'q-learning', title: 'Q-Learning Engine' },
        { id: 'neural-networks', title: 'Exploration Strategy' },
        { id: 'policy-optimization', title: 'Advanced Risk Assessment' }
      ]
    },
    {
      id: 'knowledge-integration',
      title: 'Knowledge Integration',
      description: 'Web-augmented intelligence and external knowledge access',
      icon: '🔗',
      subsections: [
        { id: 'web-search', title: 'Web Search Integration' },
        { id: 'knowledge-base', title: 'Knowledge Base Management' },
        { id: 'information-retrieval', title: 'Information Retrieval' }
      ]
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      description: 'Conversational AI and contextual understanding',
      icon: '💬',
      subsections: [
        { id: 'conversation-engine', title: 'Multi-Model Ensemble Architecture' },
        { id: 'emotion-recognition', title: 'Decision Resolver (Meta-Classifier)' },
        { id: 'context-understanding', title: 'Chat Processing & Message Handling' }
      ]
    },
    {
      id: 'task-decomposition',
      title: 'Task Decomposition',
      description: 'Hierarchical planning and goal execution',
      icon: '🔧',
      subsections: [
        { id: 'planning-system', title: 'System Architecture' },
        { id: 'instruction-parsing', title: 'Tool Ecosystem' },
        { id: 'goal-execution', title: 'State Management & Placeholder System' }
      ]
    },
    {
      id: 'pathfinding-tracing',
      title: 'Pathfinding and Path Tracing',
      description: 'Advanced navigation algorithms and movement execution',
      icon: '🗺️',
      subsections: [
        { id: 'pathfinding-algorithms', title: 'Pathfinding Algorithms' },
        { id: 'path-execution', title: 'Path Execution System' },
        { id: 'movement-coordination', title: 'Movement Coordination' }
      ]
    },
    {
      id: 'multi-environment-ai',
      title: 'Multi-Environment AI',
      description: 'Cross-dimensional adaptation and strategy optimization',
      icon: '🌍',
      subsections: [
        { id: 'environment-detection', title: 'Environment Detection' },
        { id: 'strategy-optimization', title: 'Strategy Optimization' },
        { id: 'learning-transfer', title: 'Learning Transfer' }
      ]
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      description: 'Adaptive algorithms and progressive skill acquisition',
      icon: '📈',
      subsections: [
        { id: 'experience-replay', title: 'Experience Replay' },
        { id: 'skill-acquisition', title: 'Progressive Skill Acquisition' },
        { id: 'adaptive-algorithms', title: 'Adaptive Learning Algorithms' }
      ]
    },
    {
      id: 'research-methodology',
      title: 'Research Methodology',
      description: 'Academic approach and experimental framework',
      icon: '📊',
      subsections: [
        { id: 'experimental-design', title: 'Experimental Design' },
        { id: 'data-collection', title: 'Data Collection Methods' },
        { id: 'performance-metrics', title: 'Performance Metrics' }
      ]
    },
    {
      id: 'technical-specifications',
      title: 'Technical Specifications',
      description: 'Platform requirements and implementation details',
      icon: '⚙️',
      subsections: [
        { id: 'system-requirements', title: 'Development & Testing Environment' },
        { id: 'api-integration', title: 'Server Deployment Requirements' },
        { id: 'mod-architecture', title: 'Implementation Architecture' }
      ]
    }
  ];

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false); // Close mobile sidebar
  };

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(section => section.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative top-20 md:top-0 left-0 z-30 w-80 md:w-80 h-[calc(100vh-5rem)] md:h-auto bg-white/70 backdrop-blur-xl rounded-2xl border border-amber-200 shadow-lg p-6 transition-transform duration-300 md:transition-none overflow-y-auto`}>
            <div className="flex justify-between items-center mb-6 md:hidden">
              <h2 className="text-lg font-bold text-slate-800">Table of Contents</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
                aria-label="Close table of contents"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h2 className="text-lg font-bold text-slate-800 mb-6 hidden md:block">Table of Contents</h2>
            
            <nav className="space-y-2">
              {tableOfContents.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 shadow-sm'
                        : 'hover:bg-amber-50 border border-transparent'
                    }`}
                  >
                    <span className="text-lg mt-0.5 group-hover:scale-110 transition-transform">
                      {section.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm leading-tight ${
                        activeSection === section.id ? 'text-amber-800' : 'text-slate-700'
                      }`}>
                        {section.title}
                      </h3>
                      <p className={`text-xs mt-1 leading-tight ${
                        activeSection === section.id ? 'text-amber-600' : 'text-slate-500'
                      }`}>
                        {section.description}
                      </p>
                    </div>
                  </button>
                  
                  {/* Subsections */}
                  {section.subsections && (
                    <div className="ml-6 mt-2 space-y-1">
                      {section.subsections.map((subsection) => (
                        <button
                          key={subsection.id}
                          onClick={() => scrollToSection(subsection.id)}
                          className={`w-full text-left text-sm p-2 rounded-md transition-colors ${
                            activeSection === subsection.id
                              ? 'text-amber-700 bg-amber-50'
                              : 'text-slate-600 hover:text-amber-600 hover:bg-amber-25'
                          }`}
                        >
                          {subsection.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Floating TOC button for mobile */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden fixed bottom-6 right-6 z-30 w-14 h-14 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center"
            aria-label="Open table of contents"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Main Content */}
          <main className="flex-1 min-w-0 md:ml-0">
            {/* Navigation breadcrumb */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-amber-600 transition-colors">← Home</Link>
                <span>/</span>
                <span className="text-amber-600 font-medium">Documentation</span>
              </div>
            </div>

            {/* Welcome Section */}
            <section id="overview" className="mb-16">
              <div className="bg-gradient-to-r from-amber-100/80 to-orange-100/80 rounded-3xl border border-amber-200 shadow-lg p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center text-2xl mr-6">
                    📋
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-slate-800 mb-2">AI-Player Documentation</h1>
                    <p className="text-xl text-amber-700">Comprehensive guide to the AI-Player Minecraft mod architecture</p>
                  </div>
                </div>
                
                <div className="prose prose-amber max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Welcome to the comprehensive documentation for AI-Player, an advanced artificial intelligence mod for Minecraft that implements 
                    cutting-edge machine learning techniques to create intelligent, adaptive NPCs. This documentation covers the entire architecture, 
                    from reinforcement learning algorithms to natural language processing systems.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 bg-white/60 rounded-xl border border-amber-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">🎯 What You'll Learn</h3>
                      <ul className="space-y-2 text-slate-600">
                        <li>• How reinforcement learning drives AI behavior</li>
                        <li>• Web-augmented intelligence implementation</li>
                        <li>• Natural language processing integration</li>
                        <li>• Multi-environment adaptation strategies</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-white/60 rounded-xl border border-amber-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">🔧 Technical Focus</h3>
                      <ul className="space-y-2 text-slate-600">
                        <li>• Q-learning and neural network architectures</li>
                        <li>• Real-time knowledge integration</li>
                        <li>• Hierarchical task decomposition</li>
                        <li>• Continuous learning mechanisms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Reinforcement Learning Section */}
            <section key="reinforcement-learning" id="reinforcement-learning" className="mb-16">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-200 to-blue-200 rounded-xl flex items-center justify-center text-xl mr-4">
                    🧠
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800">Reinforcement Learning</h2>
                    <p className="text-amber-700">Q-learning algorithms with advanced risk assessment and decision-making</p>
                  </div>
                </div>
                
                <div className="prose prose-amber max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    The reinforcement learning system is the sophisticated brain of AI-Player, combining traditional Q-learning with advanced risk assessment, 
                    dynamic action weighting, and multi-dimensional state analysis. It's like having an expert strategist who considers dozens of factors 
                    before making each decision, learning from every outcome to become increasingly intelligent.
                  </p>

                  {/* Core Q-Learning System */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                      <h3 id="q-learning" className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">Q</span>
                        Q-Learning Engine
                      </h3>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span><strong>Learning Rate (α = 0.1):</strong> Balanced update speed for stable learning</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span><strong>Discount Factor (γ = 0.9):</strong> 90% weight on future rewards for long-term planning</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span><strong>State Consistency:</strong> Advanced similarity matching for state reuse</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span><strong>Persistent Memory:</strong> Q-table survives bot deaths and server restarts</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                      <h3 id="neural-networks" className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">ε</span>
                        Exploration Strategy
                      </h3>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span><strong>Dynamic Epsilon:</strong> Starts at 1.0 (full exploration) for new bots</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span><strong>Decay Rate (0.99):</strong> Gradual shift to exploitation as knowledge grows</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span><strong>Training Mode Boost:</strong> +0.2 epsilon during exploration phases</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span><strong>Minimum Floor (0.1):</strong> Always maintains 10% experimentation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Advanced Risk Assessment System */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200 p-8 mb-12">
                    <h3 id="policy-optimization" className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                      <span className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center text-lg mr-4">⚠️</span>
                      Advanced Risk Assessment System
                    </h3>
                    
                    <p className="text-slate-700 mb-6">
                      Every action is evaluated through a sophisticated risk calculation system that considers environmental threats, 
                      entity positioning, equipment status, and situational context. The bot doesn't just react—it strategically plans.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="p-4 bg-white/60 rounded-lg border border-red-100">
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                          <span className="w-6 h-6 bg-red-400 text-white rounded-md flex items-center justify-center text-xs mr-2">🎯</span>
                          Entity Risk Analysis
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li>• <strong>Distance-based threat:</strong> 1/distance × threat multiplier</li>
                          <li>• <strong>Directional awareness:</strong> Higher risk for flanking enemies</li>
                          <li>• <strong>Entity-specific threats:</strong> Warden (+100 risk), Creeper (+50 risk)</li>
                          <li>• <strong>Group dynamics:</strong> +10 risk per additional hostile entity</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-white/60 rounded-lg border border-orange-100">
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                          <span className="w-6 h-6 bg-orange-400 text-white rounded-md flex items-center justify-center text-xs mr-2">🌍</span>
                          Environmental Factors
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li>• <strong>Sculk detection:</strong> +20 risk for jumping near sensors</li>
                          <li>• <strong>Danger zones:</strong> Lava pools, cliffs, deep water</li>
                          <li>• <strong>Dimension penalties:</strong> Nether (-5), End (-10), Unknown (-20)</li>
                          <li>• <strong>Time of day:</strong> Night increases general risk factors</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-white/60 rounded-lg border border-yellow-100">
                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                          <span className="w-6 h-6 bg-yellow-400 text-white rounded-md flex items-center justify-center text-xs mr-2">⚔️</span>
                          Equipment Assessment
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          <li>• <strong>Weapon advantages:</strong> -50% entity risk with sword/axe</li>
                          <li>• <strong>Armor protection:</strong> Diamond/Netherite reduces combat risk</li>
                          <li>• <strong>Shield bonus:</strong> +20 reward for weapon+shield combo</li>
                          <li>• <strong>Tool relevance:</strong> +2 risk for pickaxe during combat</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/40 rounded-lg p-6 border border-red-100">
                      <h4 className="font-semibold text-slate-800 mb-4">🧮 Risk Calculation Formula</h4>
                      <div className="bg-slate-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
                        <div>risk = base_action_risk + Σ(entity_threats) + environment_modifiers</div>
                        <div className="mt-2 text-slate-400">// Capped at 100.0 for balance, normalized for decision making</div>
                      </div>
                      <p className="text-sm text-slate-600">
                        The system evaluates every possible action against current conditions, building a comprehensive risk map 
                        that guides decision-making. Actions with risk &gt; appetite threshold are filtered out unless no alternatives exist.
                      </p>
                    </div>
                  </div>

                  {/* Risk Appetite & Dynamic Decision Making */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">📊</span>
                        Dynamic Risk Appetite
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">The bot's willingness to take risks changes based on its current state:</p>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">•</span>
                          <span><strong>Health Factor (50% weight):</strong> Low health = low risk appetite</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">•</span>
                          <span><strong>Resource Factor (30% weight):</strong> Better equipment = higher confidence</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">•</span>
                          <span><strong>Threat Factor (20% weight):</strong> Nearby dangers reduce appetite</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">•</span>
                          <span><strong>Optimal State Bonus:</strong> +0.7 minimum when conditions are ideal</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-indigo-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">💀</span>
                        Probability of Death (PoD)
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">Advanced metric tracking action consequences:</p>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-3 mt-1">•</span>
                          <span><strong>Health Depletion:</strong> ×0.5 weight per health point lost</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-3 mt-1">•</span>
                          <span><strong>Hunger Depletion:</strong> ×0.3 weight per hunger level lost</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-3 mt-1">•</span>
                          <span><strong>Proximity Danger:</strong> +0.6 per unit closer to hostiles</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-indigo-500 mr-3 mt-1">•</span>
                          <span><strong>Threshold Filter:</strong> Actions with PoD &gt; 0.7 are avoided</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* State Analysis System */}
                  <div className="bg-amber-50/50 rounded-lg p-8 border border-amber-200 mb-12">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                      <span className="w-10 h-10 bg-amber-500 text-white rounded-lg flex items-center justify-center text-lg mr-4">🔍</span>
                      Comprehensive State Analysis
                    </h3>
                    
                    <p className="text-slate-700 mb-6">
                      The bot analyzes 20+ different parameters to understand its current situation, creating a detailed state fingerprint 
                      that enables precise decision-making and learning transfer between similar scenarios.
                    </p>

                    <div className="grid md:grid-cols-4 gap-4 mb-6">
                      <div className="p-4 bg-white/60 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">🏃 Movement Data</h4>
                        <ul className="text-xs text-slate-600 space-y-1">
                          <li>• Position coordinates (X, Y, Z)</li>
                          <li>• Distance to hostile entities</li>
                          <li>• Distance to danger zones</li>
                          <li>• Movement restrictions</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white/60 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">❤️ Vital Stats</h4>
                        <ul className="text-xs text-slate-600 space-y-1">
                          <li>• Health points (0-20)</li>
                          <li>• Hunger level (0-20)</li>
                          <li>• Oxygen level (underwater)</li>
                          <li>• Frost level (cold biomes)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white/60 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">🎒 Equipment</h4>
                        <ul className="text-xs text-slate-600 space-y-1">
                          <li>• Hotbar items (9 slots)</li>
                          <li>• Selected item details</li>
                          <li>• Offhand item</li>
                          <li>• Armor pieces</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white/60 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">🌍 Environment</h4>
                        <ul className="text-xs text-slate-600 space-y-1">
                          <li>• Nearby entities (10 block radius)</li>
                          <li>• Nearby blocks (5 block radius)</li>
                          <li>• Time of day</li>
                          <li>• Dimension type</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/40 rounded-lg p-4 border border-amber-100">
                      <h4 className="font-semibold text-slate-800 mb-2">🧠 State Consistency Algorithm</h4>
                      <p className="text-sm text-slate-600">
                        The system uses sophisticated similarity matching to reuse learning from comparable situations. States are considered 
                        consistent when entity overlap ≥ 50%, block similarity ≥ 50%, and distance variations ≤ 8 blocks, enabling 
                        efficient knowledge transfer across similar scenarios.
                      </p>
                    </div>
                  </div>

                  {/* Current Capabilities */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✅</span>
                        Current Capabilities
                      </h3>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span><strong>Combat Intelligence:</strong> Strategic fighting with weapon/armor consideration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span><strong>Survival Optimization:</strong> Health, hunger, and safety management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span><strong>Environmental Awareness:</strong> Warden detection, sculk avoidance, cliff safety</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span><strong>Adaptive Risk Management:</strong> Dynamic decision-making based on context</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">•</span>
                          <span><strong>Persistent Learning:</strong> Knowledge retention across sessions and deaths</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🚀</span>
                        Future Developments
                      </h3>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span><strong>Deep Neural Networks:</strong> Advanced pattern recognition for complex scenarios</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span><strong>Multi-Agent Coordination:</strong> Collaborative strategies between multiple bots</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span><strong>Long-term Planning:</strong> Goal-oriented behavior spanning multiple sessions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span><strong>Advanced Reward Shaping:</strong> More nuanced learning signals</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span><strong>Transfer Learning:</strong> Knowledge sharing between different bot instances</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Learning Process Visualization */}
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-slate-200 p-8 mb-8">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                      <span className="w-10 h-10 bg-slate-500 text-white rounded-lg flex items-center justify-center text-lg mr-4">🔄</span>
                      Complete Learning Cycle
                    </h3>
                    
                    <div className="grid md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">1</div>
                        <h4 className="font-semibold text-slate-700 mb-2">State Analysis</h4>
                        <p className="text-xs text-slate-600">Comprehensive environment assessment with 20+ parameters</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">2</div>
                        <h4 className="font-semibold text-slate-700 mb-2">Risk Calculation</h4>
                        <p className="text-xs text-slate-600">Multi-factor risk assessment for all possible actions</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">3</div>
                        <h4 className="font-semibold text-slate-700 mb-2">Action Selection</h4>
                        <p className="text-xs text-slate-600">Epsilon-greedy choice with risk appetite filtering</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">4</div>
                        <h4 className="font-semibold text-slate-700 mb-2">Outcome Assessment</h4>
                        <p className="text-xs text-slate-600">Reward calculation and PoD evaluation</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-3">5</div>
                        <h4 className="font-semibold text-slate-700 mb-2">Q-Value Update</h4>
                        <p className="text-xs text-slate-600">Persistent learning with state consistency matching</p>
                      </div>
                    </div>
                  </div>

                  {/* Technical Implementation Details */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-6 bg-white/60 rounded-xl border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">🎮 Available Actions</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="px-3 py-1 bg-gray-100 rounded">MOVE_FORWARD</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">MOVE_BACKWARD</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">TURN_LEFT</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">TURN_RIGHT</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">ATTACK</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">USE_ITEM</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">JUMP</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">SNEAK</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">SPRINT</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">STAY</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">STOP_MOVING</span>
                        <span className="px-3 py-1 bg-gray-100 rounded">EQUIP_ARMOR</span>
                      </div>
                    </div>

                    <div className="p-6 bg-white/60 rounded-xl border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">📊 Reward Examples</h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li><span className="text-green-600 font-semibold">+20:</span> Calculated risk combat success</li>
                        <li><span className="text-green-600 font-semibold">+15:</span> Attack nearby threats effectively</li>
                        <li><span className="text-green-600 font-semibold">+10:</span> Safe distance maintenance</li>
                        <li><span className="text-green-600 font-semibold">+10:</span> Proper equipment selection</li>
                        <li><span className="text-red-600 font-semibold">-20:</span> Critical health situations</li>
                        <li><span className="text-red-600 font-semibold">-15:</span> Too close to danger zones</li>
                        <li><span className="text-red-600 font-semibold">-10:</span> Poor positioning decisions</li>
                        <li><span className="text-blue-600 font-semibold">×1.5:</span> High-risk action multiplier</li>
                      </ul>
                    </div>
                  </div>

                  {/* YouTube Video Showcase */}
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200 p-8">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                      <span className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center text-lg mr-4">🎥</span>
                      See It In Action
                    </h3>
                    
                    <p className="text-slate-700 mb-6">
                      Watch the AI-Player reinforcement learning system in action! This video from a year ago showcases the early implementation 
                      of the Q-learning algorithms and demonstrates how the bot learns to survive and adapt in various Minecraft scenarios.
                    </p>

                    <div className="bg-white/60 rounded-xl p-4 border border-red-100">
                      <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/6zEORx1OKfA"
                          title="AI-Player Reinforcement Learning Demonstration"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      
                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-600">
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="flex items-center">
                            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                            Live Demo
                          </span>
                          <span className="flex items-center">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                            Real Q-Learning
                          </span>
                          <span className="flex items-center">
                            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                            Adaptive Behavior
                          </span>
                        </div>
                        <a 
                          href="https://www.youtube.com/watch?v=6zEORx1OKfA" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-700 font-medium transition-colors whitespace-nowrap"
                        >
                          Watch on YouTube ↗
                        </a>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-white/40 rounded-lg border border-red-100 text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">Early Stage</div>
                        <p className="text-sm text-slate-600">Foundation Q-learning implementation</p>
                      </div>
                      <div className="p-4 bg-white/40 rounded-lg border border-red-100 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">Learning Visible</div>
                        <p className="text-sm text-slate-600">Watch the bot improve over time</p>
                      </div>
                      <div className="p-4 bg-white/40 rounded-lg border border-red-100 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">Real Gameplay</div>
                        <p className="text-sm text-slate-600">Unscripted AI decision-making</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-amber-50/50 rounded-lg border border-amber-200">
                      <p className="text-sm text-slate-600 text-center">
                        <strong>Note:</strong> This video shows an earlier version of the AI system. The current implementation includes 
                        significantly more advanced features like risk assessment, PoD calculation, and multi-factor decision-making as described above.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Knowledge Integration Section */}
            <section key="knowledge-integration" id="knowledge-integration" className="mb-16">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-200 to-red-200 rounded-xl flex items-center justify-center text-xl mr-4">
                    🔗
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800">Knowledge Integration</h2>
                    <p className="text-amber-700">Web-augmented intelligence and external knowledge access</p>
                  </div>
                </div>
                
                <div className="prose prose-amber max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Knowledge Integration transforms the AI from an isolated game bot into a connected intelligence that can access and use real-world information. 
                    It's like giving the AI access to the internet's knowledge while playing Minecraft.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🌐</span>
                        Web Search Engine
                      </h3>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-3 mt-1">•</span>
                          <span><strong>Real-time Search:</strong> Accesses current information from the web during gameplay</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-3 mt-1">•</span>
                          <span><strong>Context-Aware Queries:</strong> Automatically generates relevant search terms based on situation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-500 mr-3 mt-1">•</span>
                          <span><strong>Information Filtering:</strong> Extracts useful data and discards irrelevant results</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">💾</span>
                        Knowledge Database
                      </h3>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1">•</span>
                          <span><strong>RAG Implementation:</strong> Retrieval-Augmented Generation for contextual responses</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1">•</span>
                          <span><strong>Memory Storage:</strong> Persistent knowledge base that grows with experience</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1">•</span>
                          <span><strong>Vector Embeddings:</strong> Semantic search using nomic-embed-text model</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50/50 rounded-lg p-6 border border-amber-200 mb-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🔄</span>
                      Information Flow Process
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm mx-auto mb-3">1</div>
                        <h4 className="font-semibold text-slate-700 mb-2">Query Generation</h4>
                        <p className="text-xs text-slate-600">AI identifies information needs based on current context</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center text-white text-sm mx-auto mb-3">2</div>
                        <h4 className="font-semibold text-slate-700 mb-2">Web Search</h4>
                        <p className="text-xs text-slate-600">Searches multiple sources for relevant information</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm mx-auto mb-3">3</div>
                        <h4 className="font-semibold text-slate-700 mb-2">Processing</h4>
                        <p className="text-xs text-slate-600">Extracts and structures useful information</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center text-white text-sm mx-auto mb-3">4</div>
                        <h4 className="font-semibold text-slate-700 mb-2">Integration</h4>
                        <p className="text-xs text-slate-600">Applies knowledge to current gameplay decisions</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white/60 rounded-xl border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">📚 Knowledge Sources</h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Minecraft Wiki & Strategies</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Real-time Game Updates</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Community Forums & Guides</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Historical Gameplay Data</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>Technical Documentation</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-white/60 rounded-xl border border-slate-200">
                      <h3 className="text-lg font-semibold text-slate-800 mb-4">🔧 Technical Stack</h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li><span className="font-semibold text-blue-600">Embedding Model:</span> nomic-embed-text for semantic search</li>
                        <li><span className="font-semibold text-green-600">Database:</span> SQLite for persistent storage</li>
                        <li><span className="font-semibold text-purple-600">Web Client:</span> HTTP-based search integration</li>
                        <li><span className="font-semibold text-orange-600">Processing:</span> Real-time information filtering</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Natural Language Processing Section */}
            <section key="natural-language-processing" id="natural-language-processing" className="mb-16">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-8">
                <h2 className="text-3xl font-semibold text-slate-800 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-lg mr-4">🗣️</span>
                  Natural Language Processing
                </h2>
                <p className="text-slate-700 text-lg mb-8">
                  Advanced multi-model ensemble system featuring BERT, CART, and LIDSNet classifiers with an intelligent 
                  Decision Resolver that enables sophisticated human-AI communication in Minecraft environments.
                </p>

                {/* Architecture Overview */}
                <div className="mb-12">
                  <h3 id="conversation-engine" className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🏗️</span>
                    Multi-Model Ensemble Architecture
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 bg-white/80 rounded-xl border border-purple-200">
                      <div className="flex items-center mb-4">
                        <span className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">B</span>
                        <h4 className="text-lg font-semibold text-slate-800">BERT Model</h4>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">DistilBERT fine-tuned for intent classification</p>
                      <div className="space-y-2 text-xs text-slate-500">
                        <div className="flex justify-between">
                          <span>Architecture:</span>
                          <span className="font-medium">TorchScript</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Classes:</span>
                          <span className="font-medium">3 intents</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tokenizer:</span>
                          <span className="font-medium">HuggingFace</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-white/80 rounded-xl border border-purple-200">
                      <div className="flex items-center mb-4">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">C</span>
                        <h4 className="text-lg font-semibold text-slate-800">CART Classifier</h4>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">Decision tree with symbolic feature engineering</p>
                      <div className="space-y-2 text-xs text-slate-500">
                        <div className="flex justify-between">
                          <span>Features:</span>
                          <span className="font-medium">POS + Lemmas</span>
                        </div>
                        <div className="flex justify-between">
                          <span>NLP Engine:</span>
                          <span className="font-medium">OpenNLP</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Vocabulary:</span>
                          <span className="font-medium">Term Frequency</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-white/80 rounded-xl border border-purple-200">
                      <div className="flex items-center mb-4">
                        <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">L</span>
                        <h4 className="text-lg font-semibold text-slate-800">LIDSNet Model</h4>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">Lightweight Intent Detection System neural network</p>
                      <div className="space-y-2 text-xs text-slate-500">
                        <div className="flex justify-between">
                          <span>Framework:</span>
                          <span className="font-medium">PyTorch</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Input:</span>
                          <span className="font-medium">Feature Vector</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Output:</span>
                          <span className="font-medium">Softmax Probs</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decision Resolver */}
                  <div className="p-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl border border-purple-200 mb-8">
                    <h4 id="emotion-recognition" className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-indigo-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🎯</span>
                      Decision Resolver (Meta-Classifier)
                    </h4>
                    <p className="text-slate-600 mb-4">
                      LLM-powered ensemble aggregator that analyzes all three model predictions with their confidence scores 
                      to make the final intent classification decision. Handles model disagreements and edge cases intelligently.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white/50 rounded-lg">
                        <h5 className="font-semibold text-slate-700 mb-2">Input Analysis</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• BERT prediction + confidence</li>
                          <li>• CART classification + confidence</li>
                          <li>• LIDSNet result + confidence</li>
                          <li>• Original player message</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-white/50 rounded-lg">
                        <h5 className="font-semibold text-slate-700 mb-2">Resolution Strategy</h5>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Confidence-weighted analysis</li>
                          <li>• Contextual understanding</li>
                          <li>• Fallback mechanisms</li>
                          <li>• Experimental model override</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Intent Classification System */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🎯</span>
                    Intent Classification Pipeline
                  </h3>

                  <div className="grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6 mb-8">
                    <div className="p-5 bg-white/80 rounded-xl border border-emerald-200 text-center">
                      <div className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center text-lg mx-auto mb-3">⚡</div>
                      <h4 className="font-semibold text-slate-800 mb-2 text-sm">REQUEST_ACTION</h4>
                      <p className="text-xs text-slate-600 mb-3">Commands for bot actions</p>
                      <div className="space-y-1 text-xs text-slate-500">
                        <div>"Go to coordinates"</div>
                        <div>"Mine some stone"</div>
                        <div>"Attack hostile mobs"</div>
                        <div>"Build a shelter"</div>
                      </div>
                    </div>

                    <div className="p-5 bg-white/80 rounded-xl border border-emerald-200 text-center">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center text-lg mx-auto mb-3">❓</div>
                      <h4 className="font-semibold text-slate-800 mb-2 text-sm">ASK_INFORMATION</h4>
                      <p className="text-xs text-slate-600 mb-3">Queries for information</p>
                      <div className="space-y-1 text-xs text-slate-500">
                        <div>"Where are villagers?"</div>
                        <div>"What time is it?"</div>
                        <div>"How many hearts left?"</div>
                        <div>"Did you find diamonds?"</div>
                      </div>
                    </div>

                    <div className="p-5 bg-white/80 rounded-xl border border-emerald-200 text-center">
                      <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center text-lg mx-auto mb-3">💬</div>
                      <h4 className="font-semibold text-slate-800 mb-2 text-sm leading-relaxed break-words">GENERAL_CONVERSATION</h4>
                      <p className="text-xs text-slate-600 mb-3">Casual chat and small talk</p>
                      <div className="space-y-1 text-xs text-slate-500">
                        <div>"Weather is nice today"</div>
                        <div>"I built a house"</div>
                        <div>"The sky looks clear"</div>
                        <div>"This is fun"</div>
                      </div>
                    </div>

                    <div className="p-5 bg-white/80 rounded-xl border border-emerald-200 text-center">
                      <div className="w-12 h-12 bg-gray-500 text-white rounded-lg flex items-center justify-center text-lg mx-auto mb-3">❌</div>
                      <h4 className="font-semibold text-slate-800 mb-2 text-sm">UNSPECIFIED</h4>
                      <p className="text-xs text-slate-600 mb-3">Unclear or ambiguous input</p>
                      <div className="space-y-1 text-xs text-slate-500">
                        <div>"Can you..."</div>
                        <div>"Do it"</div>
                        <div>"Make something"</div>
                        <div>"What are we?"</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Processing Pipeline */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">⚙️</span>
                    Real-time Processing Pipeline
                  </h3>

                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">1</div>
                      <div className="flex-1 p-4 bg-white/80 rounded-xl border border-teal-200">
                        <h4 className="font-semibold text-slate-800 mb-2">Message Reception & Preprocessing</h4>
                        <p className="text-slate-600 text-sm mb-3">
                          Chat message received via <code className="bg-gray-100 px-2 py-1 rounded text-xs">LLMServiceHandler.runFromChat()</code> 
                          and routed to NLP processing pipeline.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="text-xs font-semibold text-slate-700 mb-1">OpenNLP Preprocessing</h5>
                            <ul className="text-xs text-slate-600 space-y-1">
                              <li>• Sentence detection</li>
                              <li>• Tokenization</li>
                              <li>• POS tagging</li>
                              <li>• Lemmatization</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="text-xs font-semibold text-slate-700 mb-1">Feature Engineering</h5>
                            <ul className="text-xs text-slate-600 space-y-1">
                              <li>• Symbolic feature extraction</li>
                              <li>• Term frequency vectorization</li>
                              <li>• Input vector construction</li>
                              <li>• Model-specific formatting</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">2</div>
                      <div className="flex-1 p-4 bg-white/80 rounded-xl border border-teal-200">
                        <h4 className="font-semibold text-slate-800 mb-2">Parallel Model Inference</h4>
                        <p className="text-slate-600 text-sm mb-3">
                          All three models process the input simultaneously with thread-safe model managers handling memory and prediction.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <h5 className="text-xs font-semibold text-blue-800 mb-2">BERT Processing</h5>
                            <div className="space-y-1 text-xs text-blue-600">
                              <div>• HuggingFace tokenization</div>
                              <div>• TorchScript inference</div>
                              <div>• Confidence calculation</div>
                              <div className="font-mono bg-blue-100 p-1 rounded">bertLabel, bertConf</div>
                            </div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <h5 className="text-xs font-semibold text-green-800 mb-2">CART Processing</h5>
                            <div className="space-y-1 text-xs text-green-600">
                              <div>• Feature vectorization</div>
                              <div>• Tree traversal</div>
                              <div>• Leaf node prediction</div>
                              <div className="font-mono bg-green-100 p-1 rounded">cartLabel, cartConf</div>
                            </div>
                          </div>
                          <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                            <h5 className="text-xs font-semibold text-orange-800 mb-2">LIDSNet Processing</h5>
                            <div className="space-y-1 text-xs text-orange-600">
                              <div>• Feature vector input</div>
                              <div>• Neural network forward pass</div>
                              <div>• Softmax probability</div>
                              <div className="font-mono bg-orange-100 p-1 rounded">lidsNetLabel, lidsNetConf</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">3</div>
                      <div className="flex-1 p-4 bg-white/80 rounded-xl border border-teal-200">
                        <h4 className="font-semibold text-slate-800 mb-2">Decision Resolver Analysis</h4>
                        <p className="text-slate-600 text-sm mb-3">
                          Meta-classifier analyzes all predictions and confidences using LLM reasoning to make final decision.
                        </p>
                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <h5 className="text-sm font-semibold text-purple-800 mb-2">Resolver Prompt Structure</h5>
                          <div className="space-y-2 text-xs text-purple-700">
                            <div>📝 <strong>Player message:</strong> Original input text</div>
                            <div>🤖 <strong>BERT:</strong> {`{prediction} ({confidence}%)`}</div>
                            <div>🌳 <strong>CART:</strong> {`{prediction} ({confidence}%)`}</div>
                            <div>🧠 <strong>LIDSNet:</strong> {`{prediction} ({confidence}%)`}</div>
                            <div className="mt-2 p-2 bg-purple-100 rounded text-purple-800">
                              <strong>Output:</strong> Single intent classification with confidence-weighted reasoning
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">4</div>
                      <div className="flex-1 p-4 bg-white/80 rounded-xl border border-teal-200">
                        <h4 className="font-semibold text-slate-800 mb-2">Intent Routing & Execution</h4>
                        <p className="text-slate-600 text-sm mb-3">
                          Final intent triggers appropriate system module with fallback retry mechanism for unclear classifications.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="text-xs font-semibold text-slate-700 mb-1">Primary Routing</h5>
                            <ul className="text-xs text-slate-600 space-y-1">
                              <li>• <code className="bg-gray-200 px-1 rounded">REQUEST_ACTION</code> → FunctionCallerV2</li>
                              <li>• <code className="bg-gray-200 px-1 rounded">ASK_INFORMATION</code> → RAG2 System</li>
                              <li>• <code className="bg-gray-200 px-1 rounded">GENERAL_CONVERSATION</code> → RAG2 System</li>
                              <li>• <code className="bg-gray-200 px-1 rounded">UNSPECIFIED</code> → LLM Retry</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h5 className="text-xs font-semibold text-slate-700 mb-1">Fallback Mechanism</h5>
                            <ul className="text-xs text-slate-600 space-y-1">
                              <li>• LLM retry classification</li>
                              <li>• Thread pool execution</li>
                              <li>• Error handling & logging</li>
                              <li>• User feedback messages</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Processing & Message Handling */}
                <div className="mb-12">
                  <h3 id="context-understanding" className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-indigo-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">💬</span>
                    Chat Processing & Message Handling
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white/80 rounded-xl border border-indigo-200">
                      <h4 className="text-lg font-semibold text-slate-800 mb-4">📨 Message Processing</h4>
                      <div className="space-y-4">
                        <div className="p-3 bg-indigo-50 rounded-lg">
                          <h5 className="font-semibold text-indigo-800 mb-2">Intelligent Text Splitting</h5>
                          <ul className="text-sm text-indigo-700 space-y-1">
                            <li>• 100-character message limit handling</li>
                            <li>• Sentence-boundary preservation</li>
                            <li>• Word-level splitting for long sentences</li>
                            <li>• Color-coded message formatting</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-indigo-50 rounded-lg">
                          <h5 className="font-semibold text-indigo-800 mb-2">Typing Simulation</h5>
                          <ul className="text-sm text-indigo-700 space-y-1">
                            <li>• 2.5-second realistic delays</li>
                            <li>• Multi-part message coordination</li>
                            <li>• Thread-safe message queuing</li>
                            <li>• Server main thread execution</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-white/80 rounded-xl border border-indigo-200">
                      <h4 className="text-lg font-semibold text-slate-800 mb-4">🎭 Response Processing</h4>
                      <div className="space-y-4">
                        <div className="p-3 bg-indigo-50 rounded-lg">
                          <h5 className="font-semibold text-indigo-800 mb-2">Thinking State Management</h5>
                          <ul className="text-sm text-indigo-700 space-y-1">
                            <li>• <code className="bg-indigo-200 px-1 rounded text-xs">&lt;think&gt;</code> block parsing</li>
                            <li>• Visual thinking indicators</li>
                            <li>• State transition management</li>
                            <li>• Thought line accumulation</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-indigo-50 rounded-lg">
                          <h5 className="font-semibold text-indigo-800 mb-2">Output Formatting</h5>
                          <ul className="text-sm text-indigo-700 space-y-1">
                            <li>• Random color code application</li>
                            <li>• Bot name prefixing</li>
                            <li>• System message differentiation</li>
                            <li>• Error message standardization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Implementation Details */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-slate-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🔧</span>
                    Technical Implementation
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="p-6 bg-white/80 rounded-xl border border-slate-200">
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">🏗️ Model Architecture</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-slate-700 mb-2">Thread-Safe Model Management</h5>
                            <ul className="text-sm text-slate-600 space-y-1">
                              <li>• ReentrantReadWriteLock implementation</li>
                              <li>• Lazy loading with memory optimization</li>
                              <li>• Singleton pattern for model managers</li>
                              <li>• Concurrent prediction handling</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-slate-700 mb-2">Model Loading & Validation</h5>
                            <ul className="text-sm text-slate-600 space-y-1">
                              <li>• SHA-256 hash verification</li>
                              <li>• Automatic retry mechanism</li>
                              <li>• ZIP extraction with integrity checks</li>
                              <li>• Progressive download fallback</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-white/80 rounded-xl border border-slate-200">
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">⚡ Performance Optimizations</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-slate-700 mb-2">Inference Speed</h5>
                            <ul className="text-sm text-slate-600 space-y-1">
                              <li>• Sub-second model predictions</li>
                              <li>• Optimized feature vector construction</li>
                              <li>• Cached tokenization results</li>
                              <li>• Parallel processing pipeline</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-slate-700 mb-2">Memory Management</h5>
                            <ul className="text-sm text-slate-600 space-y-1">
                              <li>• Predictors with automatic resource cleanup</li>
                              <li>• NDArray memory management</li>
                              <li>• Model unloading capabilities</li>
                              <li>• Efficient vocabulary storage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 bg-white/80 rounded-xl border border-slate-200">
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">🛠️ Development Tools</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-slate-700 mb-2">Model Training Assets</h5>
                            <ul className="text-sm text-slate-600 space-y-1">
                              <li>• Feature map JSON configuration</li>
                              <li>• Class label mapping files</li>
                              <li>• Vocabulary vectorizer settings</li>
                              <li>• Decision tree structure export</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-slate-700 mb-2">Debugging & Analysis</h5>
                            <ul className="text-sm text-slate-600 space-y-1">
                              <li>• Comprehensive prediction logging</li>
                              <li>• Confidence score tracking</li>
                              <li>• Model disagreement detection</li>
                              <li>• Performance metrics collection</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-white/80 rounded-xl border border-slate-200">
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">🔧 Integration Layer</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-slate-700 mb-2">Game Integration</h5>
                            <ul className="text-sm text-slate-600 space-y-1">
                              <li>• Minecraft server thread compatibility</li>
                              <li>• Real-time chat event processing</li>
                              <li>• Player UUID tracking</li>
                              <li>• Command source management</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <h5 className="font-semibold text-slate-700 mb-2">Error Handling</h5>
                            <ul className="text-sm text-slate-600 space-y-1">
                              <li>• Graceful model loading failures</li>
                              <li>• Network timeout management</li>
                              <li>• User-friendly error messages</li>
                              <li>• Automatic retry mechanisms</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real-world Examples */}
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl border border-emerald-200 p-8">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-sm mr-3">🎯</span>
                    Real-world Classification Examples
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="p-4 bg-white/80 rounded-lg border border-emerald-200">
                        <h4 className="font-semibold text-emerald-800 mb-3">🔍 Complex Disambiguation</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-emerald-50 rounded-lg">
                            <div className="text-sm font-medium text-emerald-900 mb-1">Input: "Did you go somewhere recently?"</div>
                            <div className="text-xs text-emerald-700 mb-2">Contains action keyword "go" but context indicates questioning</div>
                            <div className="flex justify-between text-xs">
                              <span className="text-emerald-600">Classification:</span>
                              <span className="font-bold text-emerald-800">ASK_INFORMATION</span>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50 rounded-lg">
                            <div className="text-sm font-medium text-emerald-900 mb-1">Input: "Could you mine some stone?"</div>
                            <div className="text-xs text-emerald-700 mb-2">Polite request structure with clear action directive</div>
                            <div className="flex justify-between text-xs">
                              <span className="text-emerald-600">Classification:</span>
                              <span className="font-bold text-emerald-800">REQUEST_ACTION</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white/80 rounded-lg border border-emerald-200">
                        <h4 className="font-semibold text-emerald-800 mb-3">🎭 Grammar-based Analysis</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-emerald-50 rounded-lg">
                            <div className="text-sm font-medium text-emerald-900 mb-1">Imperative Sentences</div>
                            <div className="text-xs text-emerald-700 mb-2">"Build", "Attack", "Craft" → Direct commands</div>
                            <div className="flex justify-between text-xs">
                              <span className="text-emerald-600">Result:</span>
                              <span className="font-bold text-emerald-800">REQUEST_ACTION</span>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50 rounded-lg">
                            <div className="text-sm font-medium text-emerald-900 mb-1">Interrogative Sentences</div>
                            <div className="text-xs text-emerald-700 mb-2">"What", "Where", "Why", "Did you" → Questions</div>
                            <div className="flex justify-between text-xs">
                              <span className="text-emerald-600">Result:</span>
                              <span className="font-bold text-emerald-800">ASK_INFORMATION</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-white/80 rounded-lg border border-emerald-200">
                        <h4 className="font-semibold text-emerald-800 mb-3">🧠 Model Ensemble Decisions</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-emerald-50 rounded-lg">
                            <div className="text-sm font-medium text-emerald-900 mb-2">Confidence Weighting Example</div>
                            <div className="space-y-1 text-xs text-emerald-700">
                              <div>BERT: GENERAL_CONVERSATION (85%)</div>
                              <div>CART: REQUEST_ACTION (45%)</div>
                              <div>LIDSNet: GENERAL_CONVERSATION (78%)</div>
                            </div>
                            <div className="flex justify-between text-xs mt-2">
                              <span className="text-emerald-600">Decision Resolver:</span>
                              <span className="font-bold text-emerald-800">GENERAL_CONVERSATION</span>
                            </div>
                          </div>
                          <div className="p-3 bg-emerald-50 rounded-lg">
                            <div className="text-sm font-medium text-emerald-900 mb-2">Experimental Override</div>
                            <div className="text-xs text-emerald-700 mb-2">
                              When models disagree, LLM analyzes original context and overrides if needed
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-emerald-600">Strategy:</span>
                              <span className="font-bold text-emerald-800">Human-like reasoning</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white/80 rounded-lg border border-emerald-200">
                        <h4 className="font-semibold text-emerald-800 mb-3">📊 Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-emerald-50 rounded-lg text-center">
                            <div className="text-lg font-bold text-emerald-800">~300ms</div>
                            <div className="text-xs text-emerald-600">Total Processing Time</div>
                          </div>
                          <div className="p-3 bg-emerald-50 rounded-lg text-center">
                            <div className="text-lg font-bold text-emerald-800">94%+</div>
                            <div className="text-xs text-emerald-600">Classification Accuracy</div>
                          </div>
                          <div className="p-3 bg-emerald-50 rounded-lg text-center">
                            <div className="text-lg font-bold text-emerald-800">3-Model</div>
                            <div className="text-xs text-emerald-600">Ensemble Approach</div>
                          </div>
                          <div className="p-3 bg-emerald-50 rounded-lg text-center">
                            <div className="text-lg font-bold text-emerald-800">LLM</div>
                            <div className="text-xs text-emerald-600">Meta-Resolver</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Task Decomposition Section */}
            <section id="task-decomposition" className="mb-16">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-200 to-blue-200 rounded-xl flex items-center justify-center text-xl mr-4">
                    🔧
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800">Task Decomposition</h2>
                    <p className="text-purple-700">Hierarchical planning and goal execution</p>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6">
                  The FunctionCallerV2 system transforms natural language requests into executable action sequences through sophisticated tool orchestration, pipeline management, and adaptive execution strategies.
                </p>

                {/* Architecture Overview */}
                <div className="mb-8">
                  <h3 id="planning-system" className="text-xl font-semibold text-slate-800 mb-4">System Architecture</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-3">Core Components</h4>
                      <ul className="space-y-2 text-purple-800 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Tool Registry:</strong> Dynamic function catalog with parameter specifications
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Pipeline Engine:</strong> Sequential execution with FIFO queue management
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Shared State:</strong> Concurrent HashMap for cross-tool data persistence
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Verification System:</strong> State-based output validation per function
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3">Execution Flow</h4>
                      <ul className="space-y-2 text-blue-800 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Prompt Analysis:</strong> First-principles reasoning for tool selection
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>JSON Generation:</strong> Single function or pipeline structure output
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Parameter Resolution:</strong> Placeholder substitution from shared state
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Adaptive Retry:</strong> LLM fallback for failed executions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Available Tools */}
                <div className="mb-8">
                  <h3 id="instruction-parsing" className="text-xl font-semibold text-slate-800 mb-4">Tool Ecosystem</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "goTo", desc: "Path finding & navigation with inertia-based control", category: "Movement" },
                      { name: "detectBlocks", desc: "Raycast-based block detection & coordinate extraction", category: "Perception" },
                      { name: "mineBlock", desc: "Block breaking with tool selection & face alignment", category: "Manipulation" },
                      { name: "turn", desc: "Directional rotation (left/right/back) with axis tracking", category: "Movement" },
                      { name: "look", desc: "Cardinal direction facing (north/south/east/west)", category: "Movement" },
                      { name: "faceBlock", desc: "Precise block targeting with yaw/pitch calculation", category: "Targeting" },
                      { name: "chartPathToBlock", desc: "Advanced pathfinding to specific block coordinates", category: "Navigation" },
                      { name: "webSearch", desc: "External information retrieval with caching", category: "Utility" },
                      { name: "getOxygenLevel", desc: "Environmental status monitoring", category: "Status" }
                    ].map((tool, index) => (
                      <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <div className="flex items-center mb-2">
                          <code className="text-sm font-mono bg-slate-200 px-2 py-1 rounded text-purple-700">{tool.name}</code>
                          <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{tool.category}</span>
                        </div>
                        <p className="text-slate-600 text-sm">{tool.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* State Management */}
                <div className="mb-8">
                  <h3 id="goal-execution" className="text-xl font-semibold text-slate-800 mb-4">State Management & Placeholder System</h3>
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Shared State Structure</h4>
                        <div className="bg-white p-4 rounded border border-slate-200">
                          <pre className="text-xs text-slate-700 overflow-x-auto">
{`// ConcurrentHashMap<String, Object>
{
  "lastDetectedBlock.x": 142,
  "lastDetectedBlock.y": 64, 
  "lastDetectedBlock.z": -87,
  "botPosition.x": 139,
  "botPosition.y": 64,
  "botPosition.z": -84,
  "facing.direction": "north",
  "facing.axis": "z"
}`}
                          </pre>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-3">Placeholder Resolution</h4>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border border-slate-200">
                            <p className="text-sm font-mono text-purple-700">$lastDetectedBlock.x</p>
                            <p className="text-xs text-slate-600 mt-1">Resolves to coordinate from previous detectBlocks call</p>
                          </div>
                          <div className="bg-white p-3 rounded border border-slate-200">
                            <p className="text-sm font-mono text-purple-700">$botPosition.y</p>
                            <p className="text-xs text-slate-600 mt-1">Current bot Y coordinate for relative positioning</p>
                          </div>
                          <div className="bg-white p-3 rounded border border-slate-200">
                            <p className="text-sm font-mono text-purple-700">$facing.direction</p>
                            <p className="text-xs text-slate-600 mt-1">Bot's current facing direction for path planning</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pipeline Example */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Pipeline Execution Example</h3>
                  <div className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto">
                    <div className="mb-4">
                      <p className="text-green-400 text-sm mb-2">// Player Request: "Can you mine some stone blocks nearby?"</p>
                    </div>
                    <pre className="text-sm">
{`{
  "pipeline": [
    {
      "functionName": "detectBlocks",
      "parameters": [
        { "parameterName": "blockType", "parameterValue": "stone" }
      ]
    },
    {
      "functionName": "goTo", 
      "parameters": [
        { "parameterName": "x", "parameterValue": "$lastDetectedBlock.x" },
        { "parameterName": "y", "parameterValue": "$lastDetectedBlock.y" },
        { "parameterName": "z", "parameterValue": "$lastDetectedBlock.z" },
        { "parameterName": "sprint", "parameterValue": "true" }
      ]
    },
    {
      "functionName": "mineBlock",
      "parameters": [
        { "parameterName": "targetX", "parameterValue": "$lastDetectedBlock.x" },
        { "parameterName": "targetY", "parameterValue": "$lastDetectedBlock.y" },
        { "parameterName": "targetZ", "parameterValue": "$lastDetectedBlock.z" }
      ]
    }
  ]
}`}
                    </pre>
                  </div>
                </div>

                {/* Verification & Recovery */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Verification & Recovery Systems</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-3">State-Based Verification</h4>
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Position Validation:</strong> Distance calculation for movement tools
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Success Confirmation:</strong> Output parsing for completion status
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Cross-Validation:</strong> Bot entity state verification
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3">Adaptive Recovery</h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>LLM Fallback:</strong> Dynamic pipeline reconstruction on failure
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Parameter Retry:</strong> Unresolved placeholder resolution
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <strong>Max Retry Logic:</strong> Graceful degradation with 3-attempt limit
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How It Works - Complete Flow */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">How It Works: Complete Execution Flow</h3>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                    <p className="text-slate-700 mb-6">
                      Follow the complete journey from natural language input to coordinated bot actions through our sophisticated pipeline system.
                    </p>
                    
                    {/* Step-by-step Flow */}
                    <div className="space-y-6">
                      {/* Step 1: Input Processing */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-blue-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">🎯 Input Reception & Context Building</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              Player message arrives at FunctionCallerV2.run() with full environmental context
                            </p>
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <div className="grid md:grid-cols-3 gap-3 text-xs">
                                <div>
                                  <strong className="text-blue-800">User Input:</strong>
                                  <p className="text-blue-700">"Mine some diamond ore"</p>
                                </div>
                                <div>
                                  <strong className="text-blue-800">Bot Context:</strong>
                                  <p className="text-blue-700">Position, inventory, surroundings</p>
                                </div>
                                <div>
                                  <strong className="text-blue-800">Shared State:</strong>
                                  <p className="text-blue-700">ConcurrentHashMap initialized</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 2: LLM Analysis */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-green-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">🧠 LLM Reasoning & Tool Selection</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              buildPrompt() creates comprehensive system prompt with tool catalog and first-principles reasoning instructions
                            </p>
                            <div className="bg-green-50 p-3 rounded-lg">
                              <div className="text-xs space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-green-800 font-medium">Analysis:</span>
                                  <span className="text-green-700">"Mine" → requires detection + navigation + mining</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-green-800 font-medium">Tool Chain:</span>
                                  <span className="text-green-700">detectBlocks → goTo → mineBlock</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-green-800 font-medium">Output Format:</span>
                                  <span className="text-green-700">JSON pipeline with parameters</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3: JSON Generation */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-yellow-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">📋 JSON Pipeline Generation</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              LLM generates structured JSON with function sequence and placeholder parameters
                            </p>
                            <div className="bg-yellow-50 p-3 rounded-lg">
                              <pre className="text-xs text-slate-700 overflow-x-auto">
{`{
  "pipeline": [
    {
      "functionName": "detectBlocks",
      "parameters": [
        { "parameterName": "blockType", "parameterValue": "diamond_ore" }
      ]
    },
    {
      "functionName": "goTo",
      "parameters": [
        { "parameterName": "x", "parameterValue": "$lastDetectedBlock.x" },
        { "parameterName": "sprint", "parameterValue": "true" }
      ]
    },
    { "functionName": "mineBlock", "parameters": [...] }
  ]
}`}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 4: Pipeline Execution */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-purple-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">⚙️ Sequential Pipeline Execution</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              runPipelineLoop() processes each step with ArrayDeque stack management
                            </p>
                            <div className="grid md:grid-cols-3 gap-3">
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-purple-800 mb-1">Step 1: detectBlocks</h5>
                                <div className="text-xs text-purple-700 space-y-1">
                                  <div>• Raycast for diamond_ore</div>
                                  <div>• Found at (142, 64, -87)</div>
                                  <div>• Update shared state</div>
                                </div>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-purple-800 mb-1">Step 2: goTo</h5>
                                <div className="text-xs text-purple-700 space-y-1">
                                  <div>• Resolve $lastDetectedBlock.x</div>
                                  <div>• Navigate to (142, 64, -87)</div>
                                  <div>• PathTracer execution</div>
                                </div>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-purple-800 mb-1">Step 3: mineBlock</h5>
                                <div className="text-xs text-purple-700 space-y-1">
                                  <div>• Face target block</div>
                                  <div>• Select best tool</div>
                                  <div>• Execute mining action</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 5: Verification & State Updates */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-red-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">✅ Verification & State Management</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              Each step is verified through ToolVerifiers and results stored in shared state
                            </p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-red-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-red-800 mb-2">Verification Process</h5>
                                <ul className="text-xs text-red-700 space-y-1">
                                  <li>• Position validation (distance ≤ 4 blocks)</li>
                                  <li>• Cross-check with bot entity state</li>
                                  <li>• Success/failure determination</li>
                                  <li>• Error handling & retry logic</li>
                                </ul>
                              </div>
                              <div className="bg-red-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-red-800 mb-2">State Updates</h5>
                                <ul className="text-xs text-red-700 space-y-1">
                                  <li>• parseOutputValues() extracts coordinates</li>
                                  <li>• SharedStateUtils.setValue() updates map</li>
                                  <li>• Tool state updaters run automatically</li>
                                  <li>• Context preserved for next step</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 6: Adaptive Recovery */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-indigo-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">🔄 Adaptive Recovery System</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              When steps fail, LLM analyzes context and reconstructs pipeline or adjusts parameters
                            </p>
                            <div className="bg-indigo-50 p-3 rounded-lg">
                              <div className="grid md:grid-cols-3 gap-3 text-xs">
                                <div>
                                  <strong className="text-indigo-800">Failure Detection:</strong>
                                  <p className="text-indigo-700">Verifier returns false</p>
                                </div>
                                <div>
                                  <strong className="text-indigo-800">LLM Fallback:</strong>
                                  <p className="text-indigo-700">New pipeline generation</p>
                                </div>
                                <div>
                                  <strong className="text-indigo-800">Max Retries:</strong>
                                  <p className="text-indigo-700">3 attempts before abort</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 7: Completion & Persistence */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">7</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-emerald-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">💾 Completion & Learning</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              Pipeline completes with result persistence and experience storage for future learning
                            </p>
                            <div className="bg-emerald-50 p-3 rounded-lg">
                              <div className="grid md:grid-cols-2 gap-3 text-xs">
                                <div>
                                  <strong className="text-emerald-800">Data Storage:</strong>
                                  <ul className="text-emerald-700 mt-1 space-y-1">
                                    <li>• ExecutionRecord with embeddings</li>
                                    <li>• SQLite database persistence</li>
                                    <li>• Context and result correlation</li>
                                  </ul>
                                </div>
                                <div>
                                  <strong className="text-emerald-800">Cleanup:</strong>
                                  <ul className="text-emerald-700 mt-1 space-y-1">
                                    <li>• PathTracer.flushAllMovementTasks()</li>
                                    <li>• AutoFaceEntity.setBotExecutingTask(false)</li>
                                    <li>• Shared state ready for next task</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Flow Summary */}
                    <div className="mt-6 p-4 bg-white/60 rounded-lg border border-slate-200">
                      <h4 className="font-semibold text-slate-800 mb-2">🔄 Complete Flow Summary</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Input</span>
                        <span className="text-slate-400">→</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">LLM Analysis</span>
                        <span className="text-slate-400">→</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">JSON Pipeline</span>
                        <span className="text-slate-400">→</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Sequential Execution</span>
                        <span className="text-slate-400">→</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Verification</span>
                        <span className="text-slate-400">→</span>
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Recovery</span>
                        <span className="text-slate-400">→</span>
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded">Completion</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Limitations and Future Plans */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Current Limitations & Future Evolution</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Current Limitations */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">⚠️</div>
                        <h4 className="font-semibold text-amber-900">Current Limitations</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/60 p-4 rounded-lg border border-amber-100">
                          <h5 className="font-semibold text-amber-800 mb-2">🕐 Latency Challenges</h5>
                          <p className="text-amber-700 text-sm mb-2">
                            LLM-based reasoning introduces inherent latency between user input and bot action execution, even with optimized AI providers and enhanced hardware.
                          </p>
                          <div className="text-xs text-amber-600 space-y-1">
                            <div>• <strong>Processing Time:</strong> 2-5 seconds for complex multi-step planning</div>
                            <div>• <strong>Network Dependency:</strong> External API calls add communication overhead</div>
                            <div>• <strong>Context Loading:</strong> Large prompt processing for comprehensive reasoning</div>
                          </div>
                        </div>
                        
                        <div className="bg-white/60 p-4 rounded-lg border border-amber-100">
                          <h5 className="font-semibold text-amber-800 mb-2">⚡ Real-time Performance</h5>
                          <p className="text-amber-700 text-sm mb-2">
                            Current architecture prioritizes accuracy over speed, which can impact user experience in time-sensitive scenarios.
                          </p>
                          <div className="text-xs text-amber-600 space-y-1">
                            <div>• <strong>Combat Scenarios:</strong> Delayed reactions in hostile situations</div>
                            <div>• <strong>Interactive Gameplay:</strong> Noticeable pauses during continuous tasks</div>
                            <div>• <strong>Resource Constraints:</strong> Token limits affecting complex reasoning chains</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Future Evolution */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🚀</div>
                        <h4 className="font-semibold text-emerald-900">Future Evolution</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/60 p-4 rounded-lg border border-emerald-100">
                          <h5 className="font-semibold text-emerald-800 mb-2">🧮 Lightweight Logic Engine</h5>
                          <p className="text-emerald-700 text-sm mb-2">
                            Development of a local, low-latency decision engine powered by mathematical frameworks for instantaneous response times.
                          </p>
                          <div className="text-xs text-emerald-600 space-y-1">
                            <div>• <strong>Markov Chains:</strong> Probabilistic state transitions for pattern-based decisions</div>
                            <div>• <strong>Decision Trees:</strong> Pre-computed action mappings for common scenarios</div>
                            <div>• <strong>Local Processing:</strong> Zero network dependency for core operations</div>
                          </div>
                        </div>
                        
                        <div className="bg-white/60 p-4 rounded-lg border border-emerald-100">
                          <h5 className="font-semibold text-emerald-800 mb-2">🔄 Hybrid Architecture</h5>
                          <p className="text-emerald-700 text-sm mb-2">
                            Intelligent routing between fast local decisions and comprehensive LLM reasoning based on task complexity and urgency.
                          </p>
                          <div className="text-xs text-emerald-600 space-y-1">
                            <div>• <strong>Fast Path:</strong> Immediate responses for known patterns</div>
                            <div>• <strong>LLM Fallback:</strong> Complex reasoning for novel situations</div>
                            <div>• <strong>Learning Integration:</strong> Pattern recognition to expand fast path coverage</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Implementation Roadmap */}
                  <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-4">🗺️ Implementation Roadmap</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center mb-2">
                          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                          <h5 className="font-semibold text-blue-800">Phase 1: Research</h5>
                        </div>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• Markov chain modeling for action sequences</li>
                          <li>• Performance benchmarking studies</li>
                          <li>• Pattern extraction from execution history</li>
                          <li>• Mathematical framework validation</li>
                        </ul>
                      </div>
                      <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center mb-2">
                          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                          <h5 className="font-semibold text-blue-800">Phase 2: Development</h5>
                        </div>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• Lightweight engine prototype</li>
                          <li>• Local decision tree construction</li>
                          <li>• Integration with existing pipeline</li>
                          <li>• Fallback mechanism implementation</li>
                        </ul>
                      </div>
                      <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center mb-2">
                          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                          <h5 className="font-semibold text-blue-800">Phase 3: Optimization</h5>
                        </div>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• Performance optimization and tuning</li>
                          <li>• Adaptive routing logic refinement</li>
                          <li>• Comprehensive testing across scenarios</li>
                          <li>• Production deployment and monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expected Benefits */}
                  <div className="mt-6 p-4 bg-white/40 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-3">🎯 Expected Benefits of Hybrid Approach</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <ul className="space-y-3 text-slate-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <strong className="text-slate-800">Sub-100ms response times</strong>
                              <span className="text-slate-600"> for common actions</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <strong className="text-slate-800">Zero network dependency</strong>
                              <span className="text-slate-600"> for core functionality</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <strong className="text-slate-800">Graceful degradation</strong>
                              <span className="text-slate-600"> maintaining current capabilities</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-3 text-slate-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <strong className="text-slate-800">Adaptive learning</strong>
                              <span className="text-slate-600"> expanding fast-path coverage over time</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <strong className="text-slate-800">Resource efficiency</strong>
                              <span className="text-slate-600"> reducing computational overhead</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <strong className="text-slate-800">Enhanced user experience</strong>
                              <span className="text-slate-600"> with seamless interactions</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Implementation */}
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">Technical Implementation Details</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Execution Engine</h4>
                      <ul className="space-y-1 text-purple-700 text-sm">
                        <li>• <code>ExecutorService</code> with fixed thread pool (4 threads)</li>
                        <li>• <code>ArrayDeque</code> for FIFO pipeline stack management</li>
                        <li>• <code>CompletableFuture</code> for asynchronous tool execution</li>
                        <li>• 100ms state settling delays for movement operations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Data Persistence</h4>
                      <ul className="space-y-1 text-purple-700 text-sm">
                        <li>• SQLite database with embedding storage for execution history</li>
                        <li>• Ollama integration for result embedding generation</li>
                        <li>• Context preservation across multi-step operations</li>
                        <li>• Automatic cleanup and state reset mechanisms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pathfinding and Path Tracing Section */}
            <section id="pathfinding-tracing" className="mb-16">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-xl mr-4">
                    🗺️
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800">Pathfinding and Path Tracing</h2>
                    <p className="text-cyan-700">Advanced navigation algorithms and movement execution systems</p>
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
                    <p className="text-slate-700 leading-relaxed">
                      The AI-Player employs a sophisticated navigation system combining <strong>bidirectional A* pathfinding</strong> with 
                      advanced <strong>segment-based movement execution</strong>. This dual-layer approach ensures both optimal path planning 
                      and precise movement coordination, enabling the bot to navigate complex 3D environments with remarkable accuracy 
                      and adaptability.
                    </p>
                  </div>
                </div>

                {/* Pathfinding Algorithms */}
                <div className="mb-8">
                  <h3 id="pathfinding-algorithms" className="text-xl font-semibold text-slate-800 mb-4">🔍 Core Pathfinding Algorithms</h3>
                  
                  {/* Bidirectional A* Algorithm */}
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">A*</div>
                      <h4 className="font-semibold text-purple-900">Bidirectional A* Implementation</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-purple-800 mb-3">Algorithm Architecture</h5>
                        <div className="bg-white/60 p-4 rounded-lg border border-purple-100 mb-4">
                          <div className="space-y-3 text-sm">
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <div>
                                <strong className="text-purple-800">Forward Search:</strong>
                                <span className="text-purple-700"> Expands from start position toward goal</span>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <div>
                                <strong className="text-purple-800">Backward Search:</strong>
                                <span className="text-purple-700"> Expands from goal position toward start</span>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <div>
                                <strong className="text-purple-800">Path Intersection:</strong>
                                <span className="text-purple-700"> Merges when searches meet</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/60 p-4 rounded-lg border border-purple-100">
                          <h6 className="font-semibold text-purple-800 mb-2">Performance Benefits</h6>
                          <ul className="text-xs text-purple-700 space-y-1">
                            <li>• <strong>50% reduction</strong> in search space exploration</li>
                            <li>• <strong>Optimal path guarantee</strong> with reduced computation</li>
                            <li>• <strong>Early termination</strong> when searches intersect</li>
                            <li>• <strong>Memory efficiency</strong> through dual priority queues</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-purple-800 mb-3">Heuristic Functions & Node System</h5>
                        <div className="bg-white/60 p-4 rounded-lg border border-purple-100 mb-4">
                          <code className="text-xs text-purple-800 block mb-2">PathFinder.Node Class Structure</code>
                          <div className="text-xs text-purple-700 space-y-1 font-mono">
                            <div>• <strong>position:</strong> BlockPos coordinates</div>
                            <div>• <strong>parent:</strong> Path reconstruction link</div>
                            <div>• <strong>gScore:</strong> Distance from start</div>
                            <div>• <strong>hScore:</strong> Heuristic to goal</div>
                            <div>• <strong>fScore:</strong> g + h (priority)</div>
                          </div>
                        </div>

                        <div className="bg-white/60 p-4 rounded-lg border border-purple-100">
                          <h6 className="font-semibold text-purple-800 mb-2">Intelligent Neighbor Expansion</h6>
                          <ul className="text-xs text-purple-700 space-y-1">
                            <li>• <strong>6-directional movement:</strong> N/S/E/W/Up/Down</li>
                            <li>• <strong>Smart step-up detection:</strong> 1-block height climbing</li>
                            <li>• <strong>Walkability validation:</strong> Block collision checking</li>
                            <li>• <strong>Jump optimization:</strong> Vertical movement analysis</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Path Simplification & Tagging */}
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">📐</div>
                      <h4 className="font-semibold text-emerald-900">Path Simplification & Block Tagging</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="bg-white/60 p-4 rounded-lg border border-emerald-100">
                        <h5 className="font-semibold text-emerald-800 mb-2">Walkability Analysis</h5>
                        <ul className="text-xs text-emerald-700 space-y-1">
                          <li>• <strong>Solid foundation check:</strong> Block below validation</li>
                          <li>• <strong>Body clearance:</strong> Current position passable</li>
                          <li>• <strong>Head clearance:</strong> Above position passable</li>
                          <li>• <strong>Slab detection:</strong> Half-block step optimization</li>
                        </ul>
                      </div>

                      <div className="bg-white/60 p-4 rounded-lg border border-emerald-100">
                        <h5 className="font-semibold text-emerald-800 mb-2">Jump Detection Logic</h5>
                        <ul className="text-xs text-emerald-700 space-y-1">
                          <li>• <strong>Multi-block obstacles:</strong> Up-position validation</li>
                          <li>• <strong>Crop traversal:</strong> Non-destructive movement</li>
                          <li>• <strong>Vertical transitions:</strong> Y-level change analysis</li>
                          <li>• <strong>Dynamic tolerance:</strong> Jump-dependent precision</li>
                        </ul>
                      </div>

                      <div className="bg-white/60 p-4 rounded-lg border border-emerald-100">
                        <h5 className="font-semibold text-emerald-800 mb-2">Path Optimization</h5>
                        <ul className="text-xs text-emerald-700 space-y-1">
                          <li>• <strong>Duplicate filtering:</strong> Position deduplication</li>
                          <li>• <strong>Block type tagging:</strong> Surface material identification</li>
                          <li>• <strong>Segment preparation:</strong> Movement instruction generation</li>
                          <li>• <strong>Final validation:</strong> Complete path verification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Path Execution System */}
                <div className="mb-8">
                  <h3 id="path-execution" className="text-xl font-semibold text-slate-800 mb-4">⚙️ Advanced Path Execution System</h3>
                  
                  {/* Segment-Based Execution */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🔗</div>
                      <h4 className="font-semibold text-orange-900">Segment-Based Movement Architecture</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-orange-800 mb-3">Segment Structure & Conversion</h5>
                        <div className="bg-white/60 p-4 rounded-lg border border-orange-100 mb-4">
                          <code className="text-xs text-orange-800 block mb-2">Segment Record Components</code>
                          <div className="text-xs text-orange-700 space-y-2 font-mono">
                            <div className="flex justify-between">
                              <span><strong>start():</strong></span>
                              <span>BlockPos origin</span>
                            </div>
                            <div className="flex justify-between">
                              <span><strong>end():</strong></span>
                              <span>BlockPos destination</span>
                            </div>
                            <div className="flex justify-between">
                              <span><strong>jump():</strong></span>
                              <span>boolean flag</span>
                            </div>
                            <div className="flex justify-between">
                              <span><strong>sprint():</strong></span>
                              <span>boolean flag</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/60 p-4 rounded-lg border border-orange-100">
                          <h6 className="font-semibold text-orange-800 mb-2">Intelligent Segmentation Logic</h6>
                          <ul className="text-xs text-orange-700 space-y-1">
                            <li>• <strong>Axis change detection:</strong> X/Y/Z direction transitions</li>
                            <li>• <strong>Direction reversal:</strong> Movement vector analysis</li>
                            <li>• <strong>Jump requirement breaks:</strong> Vertical movement segments</li>
                            <li>• <strong>Zero-length filtering:</strong> Duplicate position removal</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-orange-800 mb-3">BotSegmentManager Execution</h5>
                        <div className="bg-white/60 p-4 rounded-lg border border-orange-100 mb-4">
                          <h6 className="font-semibold text-orange-800 mb-2">Queue Management</h6>
                          <ul className="text-xs text-orange-700 space-y-1">
                            <li>• <strong>FIFO processing:</strong> Sequential segment execution</li>
                            <li>• <strong>Dynamic state tracking:</strong> Movement progress monitoring</li>
                            <li>• <strong>Completion futures:</strong> Async result handling</li>
                            <li>• <strong>Retry mechanism:</strong> Failure recovery system</li>
                          </ul>
                        </div>

                        <div className="bg-white/60 p-4 rounded-lg border border-orange-100">
                          <h6 className="font-semibold text-orange-800 mb-2">Precise Timing Calculations</h6>
                          <ul className="text-xs text-orange-700 space-y-1">
                            <li>• <strong>Walking speed:</strong> 4.317 blocks/second</li>
                            <li>• <strong>Sprinting speed:</strong> 5.612 blocks/second</li>
                            <li>• <strong>Dynamic delays:</strong> Distance-based timing</li>
                            <li>• <strong>Jump coordination:</strong> Mid-segment execution</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Movement Coordination */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🎯</div>
                      <h4 className="font-semibold text-blue-900">Intelligent Movement Coordination</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                        <h5 className="font-semibold text-blue-800 mb-2">Directional Facing System</h5>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• <strong>Axis-aligned detection:</strong> Cardinal direction calculation</li>
                          <li>• <strong>Smart facing updates:</strong> Movement-based orientation</li>
                          <li>• <strong>Direction persistence:</strong> Previous state maintenance</li>
                          <li>• <strong>Vertical handling:</strong> Up/down movement support</li>
                        </ul>
                      </div>

                      <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                        <h5 className="font-semibold text-blue-800 mb-2">Target Reaching Detection</h5>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• <strong>Dynamic tolerance:</strong> Jump-dependent precision (0.8-1.0 blocks)</li>
                          <li>• <strong>Entity position accuracy:</strong> Player coordinate validation</li>
                          <li>• <strong>3D distance calculation:</strong> Euclidean distance metrics</li>
                          <li>• <strong>Final destination proximity:</strong> 2-block completion threshold</li>
                        </ul>
                      </div>

                      <div className="bg-white/60 p-4 rounded-lg border border-blue-100">
                        <h5 className="font-semibold text-blue-800 mb-2">Adaptive Recovery Logic</h5>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• <strong>Segment skip detection:</strong> Advanced position matching</li>
                          <li>• <strong>Re-pathfinding triggers:</strong> 5-retry failure threshold</li>
                          <li>• <strong>Queue reconstruction:</strong> Dynamic path updates</li>
                          <li>• <strong>Movement state cleanup:</strong> Task flushing mechanisms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integration with FunctionCaller */}
                <div className="mb-8">
                  <h3 id="movement-coordination" className="text-xl font-semibold text-slate-800 mb-4">🔗 Integration with Task Decomposition System</h3>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🔧</div>
                      <h4 className="font-semibold text-amber-900">FunctionCallerV2 Navigation Tools</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-amber-800 mb-3">Core Navigation Tools</h5>
                        <div className="space-y-4">
                          <div className="bg-white/60 p-4 rounded-lg border border-amber-100">
                            <h6 className="font-semibold text-amber-800 mb-2">goTo() Tool</h6>
                            <ul className="text-xs text-amber-700 space-y-1">
                              <li>• <strong>Primary navigation interface</strong> for coordinate-based movement</li>
                              <li>• <strong>Sprint parameter support</strong> for speed optimization</li>
                              <li>• <strong>Full pipeline integration</strong> with PathFinder and PathTracer</li>
                              <li>• <strong>CompletableFuture response</strong> for async execution</li>
                            </ul>
                          </div>

                          <div className="bg-white/60 p-4 rounded-lg border border-amber-100">
                            <h6 className="font-semibold text-amber-800 mb-2">chartPathToBlock() Tool</h6>
                            <ul className="text-xs text-amber-700 space-y-1">
                              <li>• <strong>Precision positioning</strong> for exact block targeting</li>
                              <li>• <strong>Block type awareness</strong> for context-sensitive navigation</li>
                              <li>• <strong>Final approach optimization</strong> for interaction preparation</li>
                              <li>• <strong>Micro-navigation capabilities</strong> for sub-block precision</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-amber-800 mb-3">State Management & Output Parsing</h5>
                        <div className="bg-white/60 p-4 rounded-lg border border-amber-100 mb-4">
                          <h6 className="font-semibold text-amber-800 mb-2">Position State Tracking</h6>
                          <div className="text-xs text-amber-700 space-y-2">
                            <div><strong>parseOutputValues():</strong> Extracts coordinates from execution results</div>
                            <div><strong>SharedStateUtils.setValue():</strong> Updates global position state</div>
                            <div><strong>tracePathOutput():</strong> Formats position data for parsing</div>
                          </div>
                        </div>

                        <div className="bg-white/60 p-4 rounded-lg border border-amber-100">
                          <h6 className="font-semibold text-amber-800 mb-2">Pipeline Coordination</h6>
                          <ul className="text-xs text-amber-700 space-y-1">
                            <li>• <strong>Multi-step navigation chains</strong> with state persistence</li>
                            <li>• <strong>Conditional routing</strong> based on navigation success</li>
                            <li>• <strong>Error propagation</strong> for failed movement operations</li>
                            <li>• <strong>Context preservation</strong> across navigation sequences</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How It Works - Complete Execution Flow */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">⚡ How It Works: Complete Execution Flow</h3>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-indigo-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🔄</div>
                      <h4 className="font-semibold text-indigo-900">End-to-End Navigation Pipeline</h4>
                    </div>
                    
                    <p className="text-indigo-700 mb-6 text-sm">
                      Follow a complete navigation request from user input through LLM processing to precise bot movement execution.
                    </p>

                    <div className="space-y-6">
                      {/* Step 1: User Input & LLM Processing */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-blue-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">🎯 User Input & LLM Processing</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              User issues command: <em>"Go to coordinates X:100, Y:64, Z:200"</em>
                            </p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-blue-800 mb-2">LLM Analysis</h5>
                                <ul className="text-xs text-blue-700 space-y-1">
                                  <li>• Intent classification: NAVIGATION</li>
                                  <li>• Coordinate extraction: x=100, y=64, z=200</li>
                                  <li>• Tool selection: goTo() function</li>
                                  <li>• Parameter mapping: sprint=false (default)</li>
                                </ul>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-purple-800 mb-2">Pipeline Generation</h5>
                                <ul className="text-xs text-purple-700 space-y-1">
                                  <li>• JSON pipeline construction</li>
                                  <li>• Tool validation and parameter setup</li>
                                  <li>• Execution queue preparation</li>
                                  <li>• Context preservation setup</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 2: Path Calculation */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-emerald-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">🧭 Bidirectional A* Path Calculation</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              PathFinder.calculatePath() executes bidirectional A* from bot's current position to target
                            </p>
                            <div className="grid md:grid-cols-3 gap-3">
                              <div className="bg-emerald-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-emerald-800 mb-2">Forward Search</h5>
                                <ul className="text-xs text-emerald-700 space-y-1">
                                  <li>• Start: Bot position (50, 64, 100)</li>
                                  <li>• Goal: Target (100, 64, 200)</li>
                                  <li>• Heuristic: Euclidean distance</li>
                                  <li>• Node expansion: 6-directional</li>
                                </ul>
                              </div>
                              <div className="bg-teal-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-teal-800 mb-2">Backward Search</h5>
                                <ul className="text-xs text-teal-700 space-y-1">
                                  <li>• Start: Target (100, 64, 200)</li>
                                  <li>• Goal: Bot position (50, 64, 100)</li>
                                  <li>• Parallel exploration</li>
                                  <li>• Intersection detection</li>
                                </ul>
                              </div>
                              <div className="bg-cyan-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-cyan-800 mb-2">Path Merging</h5>
                                <ul className="text-xs text-cyan-700 space-y-1">
                                  <li>• Searches meet at (75, 64, 150)</li>
                                  <li>• Path reconstruction begins</li>
                                  <li>• Optimal route guaranteed</li>
                                  <li>• ~50% search space reduction</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3: Path Simplification */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-orange-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">📐 Path Simplification & Block Analysis</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              Raw path of 150 nodes reduced to 12 optimized waypoints with movement annotations
                            </p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-orange-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-orange-800 mb-2">Walkability Analysis</h5>
                                <ul className="text-xs text-orange-700 space-y-1">
                                  <li>• Block(75,64,150): grass_block ✓ walkable</li>
                                  <li>• Block(76,65,151): air ✓ body clear</li>
                                  <li>• Block(77,66,152): air ✓ head clear</li>
                                  <li>• Block(78,65,153): stone ✗ jump required</li>
                                </ul>
                              </div>
                              <div className="bg-red-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-red-800 mb-2">Jump Detection</h5>
                                <ul className="text-xs text-red-700 space-y-1">
                                  <li>• Y-level increase: 64→65 (+1 block)</li>
                                  <li>• Obstacle validation: solid block ahead</li>
                                  <li>• Landing position: (78,66,153) clear</li>
                                  <li>• Jump flag: true for segment</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 4: Segment Conversion */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-purple-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">🔗 Segment Conversion & Queue Setup</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              12 waypoints converted to 4 movement segments based on axis changes and jump requirements
                            </p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-purple-800 mb-2">Segment Examples</h5>
                                <div className="text-xs text-purple-700 space-y-2">
                                  <div className="bg-white/60 p-2 rounded border">
                                    <strong>Segment 1:</strong> (50,64,100) → (75,64,150)<br/>
                                    jump=false, sprint=false, axis=diagonal
                                  </div>
                                  <div className="bg-white/60 p-2 rounded border">
                                    <strong>Segment 2:</strong> (75,64,150) → (78,66,153)<br/>
                                    jump=true, sprint=false, axis=y-change
                                  </div>
                                </div>
                              </div>
                              <div className="bg-indigo-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-indigo-800 mb-2">Queue Initialization</h5>
                                <ul className="text-xs text-indigo-700 space-y-1">
                                  <li>• BotSegmentManager.addSegmentJob()</li>
                                  <li>• FIFO queue: 4 segments loaded</li>
                                  <li>• CompletableFuture setup</li>
                                  <li>• Execution state: READY</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 5: Movement Execution */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-red-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">🏃 Precise Movement Execution</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              Sequential segment execution with timing calculations and jump coordination
                            </p>
                            <div className="grid md:grid-cols-3 gap-3">
                              <div className="bg-red-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-red-800 mb-2">Timing Calculation</h5>
                                <ul className="text-xs text-red-700 space-y-1">
                                  <li>• Distance: 35.36 blocks</li>
                                  <li>• Speed: 4.317 blocks/sec</li>
                                  <li>• Travel time: 8.19 seconds</li>
                                  <li>• Delay: 8190 milliseconds</li>
                                </ul>
                              </div>
                              <div className="bg-pink-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-pink-800 mb-2">Movement Commands</h5>
                                <ul className="text-xs text-pink-700 space-y-1">
                                  <li>• /player bot look east</li>
                                  <li>• /player bot forward start</li>
                                  <li>• /player bot jump (@ 4095ms)</li>
                                  <li>• /player bot forward stop</li>
                                </ul>
                              </div>
                              <div className="bg-rose-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-rose-800 mb-2">Progress Monitoring</h5>
                                <ul className="text-xs text-rose-700 space-y-1">
                                  <li>• Position polling: every 100ms</li>
                                  <li>• Target reached: ±0.8 block tolerance</li>
                                  <li>• Segment completion detection</li>
                                  <li>• Queue advance trigger</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 6: Completion & State Update */}
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
                        <div className="flex-1">
                          <div className="bg-white/80 rounded-xl border border-green-200 p-4">
                            <h4 className="font-semibold text-slate-800 mb-2">✅ Completion & State Synchronization</h4>
                            <p className="text-slate-600 text-sm mb-3">
                              Navigation completed successfully with state updates and result propagation
                            </p>
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="bg-green-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-green-800 mb-2">Final Validation</h5>
                                <ul className="text-xs text-green-700 space-y-1">
                                  <li>• Bot position: (99.7, 64.0, 199.8)</li>
                                  <li>• Target proximity: 0.3 blocks (✓ within tolerance)</li>
                                  <li>• All segments completed successfully</li>
                                  <li>• Movement state cleanup initiated</li>
                                </ul>
                              </div>
                              <div className="bg-emerald-50 p-3 rounded-lg">
                                <h5 className="text-xs font-bold text-emerald-800 mb-2">Result Propagation</h5>
                                <ul className="text-xs text-emerald-700 space-y-1">
                                  <li>• tracePathOutput(): position formatted</li>
                                  <li>• parseOutputValues(): coordinates extracted</li>
                                  <li>• SharedStateUtils: global state updated</li>
                                  <li>• CompletableFuture: success result returned</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Summary */}
                    <div className="mt-6 p-4 bg-white/40 rounded-lg border border-indigo-200">
                      <h4 className="font-semibold text-indigo-800 mb-3">📊 Execution Performance Summary</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-lg font-bold text-indigo-600">~150ms</div>
                          <div className="text-xs text-indigo-700">Path Calculation</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-indigo-600">12</div>
                          <div className="text-xs text-indigo-700">Optimized Waypoints</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-indigo-600">4</div>
                          <div className="text-xs text-indigo-700">Movement Segments</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-indigo-600">±0.3</div>
                          <div className="text-xs text-indigo-700">Final Accuracy (blocks)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Limitations and Future Plans */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Current Limitations & Future Evolution</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Current Limitations */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">⚠️</div>
                        <h4 className="font-semibold text-amber-900">Current Limitations</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/60 p-4 rounded-lg border border-amber-100">
                          <h5 className="font-semibold text-amber-800 mb-2">🧱 Block-by-Block Bridging</h5>
                          <p className="text-amber-700 text-sm mb-2">
                            The current pathfinding system cannot dynamically place blocks to create paths where none exist, limiting navigation to pre-existing walkable terrain.
                          </p>
                          <div className="text-xs text-amber-600 space-y-1">
                            <div>• <strong>Vertical Bridging:</strong> Cannot build upward block-by-block to reach higher elevations</div>
                            <div>• <strong>Gap Bridging:</strong> Unable to bridge chasms or water bodies by placing blocks</div>
                            <div>• <strong>Pathfinding Integration:</strong> No coordination between building and navigation systems</div>
                          </div>
                        </div>
                        
                        <div className="bg-white/60 p-4 rounded-lg border border-amber-100">
                          <h5 className="font-semibold text-amber-800 mb-2">🗺️ Terrain Dependency</h5>
                          <p className="text-amber-700 text-sm mb-2">
                            Navigation relies entirely on existing walkable surfaces, creating constraints in open-world exploration scenarios.
                          </p>
                          <div className="text-xs text-amber-600 space-y-1">
                            <div>• <strong>Impassable Obstacles:</strong> Large gaps, tall walls, or missing terrain blocks navigation</div>
                            <div>• <strong>Limited Creativity:</strong> Bot cannot modify environment to create optimal paths</div>
                            <div>• <strong>Resource Utilization:</strong> Carrying building materials but unable to use them strategically</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Future Evolution */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🚀</div>
                        <h4 className="font-semibold text-emerald-900">Future Evolution</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/60 p-4 rounded-lg border border-emerald-100">
                          <h5 className="font-semibold text-emerald-800 mb-2">🏗️ Intelligent Building Integration</h5>
                          <p className="text-emerald-700 text-sm mb-2">
                            Advanced pathfinding will integrate block placement capabilities, enabling dynamic terrain modification for optimal navigation.
                          </p>
                          <div className="text-xs text-emerald-600 space-y-1">
                            <div>• <strong>Vertical Scaffolding:</strong> Automated upward block placement for elevation gain</div>
                            <div>• <strong>Bridge Construction:</strong> Dynamic gap bridging across chasms and water bodies</div>
                            <div>• <strong>Optimal Path Creation:</strong> Terrain modification for shortest-path optimization</div>
                            <div>• <strong>Resource Management:</strong> Intelligent inventory usage for building materials</div>
                          </div>
                        </div>
                        
                        <div className="bg-white/60 p-4 rounded-lg border border-emerald-100">
                          <h5 className="font-semibold text-emerald-800 mb-2">🎯 Enhanced Navigation Capabilities</h5>
                          <p className="text-emerald-700 text-sm mb-2">
                            Future iterations will combine pathfinding with construction planning for comprehensive environmental navigation.
                          </p>
                          <div className="text-xs text-emerald-600 space-y-1">
                            <div>• <strong>Hybrid Path Planning:</strong> Consideration of both existing terrain and buildable paths</div>
                            <div>• <strong>Cost-Benefit Analysis:</strong> Building vs. detour path evaluation</div>
                            <div>• <strong>Environmental Awareness:</strong> Biome-specific building strategies and material preferences</div>
                            <div>• <strong>Collaborative Building:</strong> Multi-bot construction projects for complex navigation challenges</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Implementation Roadmap */}
                  <div className="mt-6 p-4 bg-white/40 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-3">🗓️ Implementation Roadmap</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center mb-2">
                          <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
                          <h5 className="font-semibold text-blue-800">Phase 1: Building System Integration</h5>
                        </div>
                        <ul className="text-xs text-blue-700 space-y-1">
                          <li>• Block placement tool development</li>
                          <li>• Inventory management integration</li>
                          <li>• Basic bridging algorithms</li>
                          <li>• Safety validation systems</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                        <div className="flex items-center mb-2">
                          <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
                          <h5 className="font-semibold text-purple-800">Phase 2: Hybrid Pathfinding</h5>
                        </div>
                        <ul className="text-xs text-purple-700 space-y-1">
                          <li>• Extended A* with building costs</li>
                          <li>• Dynamic terrain modification planning</li>
                          <li>• Multi-objective optimization</li>
                          <li>• Real-time adaptation algorithms</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <div className="flex items-center mb-2">
                          <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
                          <h5 className="font-semibold text-green-800">Phase 3: Advanced Construction</h5>
                        </div>
                        <ul className="text-xs text-green-700 space-y-1">
                          <li>• Complex structure planning</li>
                          <li>• Collaborative building protocols</li>
                          <li>• Environmental optimization</li>
                          <li>• Performance tuning and deployment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Performance */}
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">📊 Technical Performance Characteristics</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Algorithm Efficiency</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Time Complexity:</strong> O(b^(d/2)) bidirectional search</li>
                        <li>• <strong>Space Complexity:</strong> O(b^(d/2)) memory usage</li>
                        <li>• <strong>Path Optimality:</strong> Guaranteed shortest path</li>
                        <li>• <strong>Search Reduction:</strong> ~50% node exploration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Movement Precision</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Position Accuracy:</strong> ±0.8 block tolerance</li>
                        <li>• <strong>Timing Precision:</strong> Millisecond-level coordination</li>
                        <li>• <strong>Jump Optimization:</strong> 1.0 block jump tolerance</li>
                        <li>• <strong>Sprint Integration:</strong> Dual-speed support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Reliability Features</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Retry Logic:</strong> 5-attempt failure recovery</li>
                        <li>• <strong>Re-pathfinding:</strong> Dynamic route recalculation</li>
                        <li>• <strong>Async Execution:</strong> Non-blocking operation</li>
                        <li>• <strong>State Cleanup:</strong> Resource management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Specifications Section */}
            <section id="technical-specifications" className="mb-16">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-xl flex items-center justify-center text-xl mr-4">
                    ⚙️
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800">Technical Specifications</h2>
                    <p className="text-slate-700">Platform requirements, hardware specifications, and deployment considerations</p>
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg border border-slate-200">
                    <p className="text-slate-700 leading-relaxed">
                      AI-Player is a resource-intensive mod that leverages advanced machine learning models, real-time pathfinding algorithms, 
                      and sophisticated NLP processing. Optimal performance requires careful consideration of hardware specifications, 
                      particularly for CPU-intensive AI operations and GPU acceleration for neural network inference.
                    </p>
                  </div>
                </div>

                {/* Development Environment */}
                <div className="mb-8">
                  <h3 id="system-requirements" className="text-xl font-semibold text-slate-800 mb-4">🖥️ Development & Testing Environment</h3>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🔧</div>
                      <h4 className="font-semibold text-blue-900">Development Hardware Specifications</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-blue-800 mb-3">Primary Development Machine</h5>
                        <div className="bg-white/60 p-4 rounded-lg border border-blue-100 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-blue-700 font-medium">CPU:</span>
                            <span className="text-slate-800">AMD Ryzen 5 4600 (6C/12T)</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-blue-700 font-medium">GPU:</span>
                            <span className="text-slate-800">NVIDIA RTX 3060 12GB GDDR6</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-blue-700 font-medium">RAM:</span>
                            <span className="text-slate-800">16GB DDR4</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-blue-700 font-medium">Storage:</span>
                            <span className="text-slate-800">1.5TB NVMe SSD</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-blue-700 font-medium">OS:</span>
                            <span className="text-slate-800">Pop!_OS → Windows 10</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-blue-800 mb-3">Performance Characteristics</h5>
                        <div className="bg-white/60 p-4 rounded-lg border border-blue-100 space-y-3">
                          <div className="text-sm text-blue-700">
                            <strong>AI Model Loading:</strong> ~2-3 seconds initial startup
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>Pathfinding Performance:</strong> ~150ms for complex navigation
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>NLP Processing:</strong> ~500ms for ensemble inference
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>Concurrent Operations:</strong> Stable with 2-3 bots
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>Memory Usage:</strong> ~8-12GB during active operations
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Requirements */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">📋 System Requirements</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Minimum Requirements */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-yellow-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">⚠️</div>
                        <h4 className="font-semibold text-yellow-900">Minimum Requirements</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/60 p-4 rounded-lg border border-yellow-100">
                          <h5 className="font-semibold text-yellow-800 mb-2">Hardware</h5>
                          <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• <strong>CPU:</strong> Intel i5-8400 / AMD Ryzen 5 2600 (6+ cores)</li>
                            <li>• <strong>RAM:</strong> 12GB DDR4 (8GB system + 4GB mod)</li>
                            <li>• <strong>GPU:</strong> GTX 1060 6GB / RX 580 8GB</li>
                            <li>• <strong>Storage:</strong> 500GB SSD (NVMe recommended)</li>
                            <li>• <strong>Network:</strong> Stable broadband for LLM API calls</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/60 p-4 rounded-lg border border-yellow-100">
                          <h5 className="font-semibold text-yellow-800 mb-2">Software</h5>
                          <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• <strong>OS:</strong> Windows 10/11, Linux (Ubuntu 20.04+)</li>
                            <li>• <strong>Java:</strong> OpenJDK 17+ or Oracle JDK 17+</li>
                            <li>• <strong>Minecraft:</strong> 1.21.1 (Fabric Mod Loader)</li>
                            <li>• <strong>Python:</strong> 3.8+ (for ML model serving)</li>
                          </ul>
                        </div>

                        <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-200">
                          <p className="text-xs text-yellow-800">
                            <strong>Note:</strong> Minimum specs may result in slower AI response times (3-8 seconds) 
                            and limited concurrent bot operations.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Recommended Requirements */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">✅</div>
                        <h4 className="font-semibold text-green-900">Recommended Requirements</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/60 p-4 rounded-lg border border-green-100">
                          <h5 className="font-semibold text-green-800 mb-2">Hardware</h5>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• <strong>CPU:</strong> Intel i7-10700K / AMD Ryzen 7 3700X (8+ cores)</li>
                            <li>• <strong>RAM:</strong> 16-32GB DDR4-3200</li>
                            <li>• <strong>GPU:</strong> RTX 3060 12GB / RTX 4060 / RX 6700 XT</li>
                            <li>• <strong>Storage:</strong> 1TB+ NVMe SSD (PCIe 3.0+)</li>
                            <li>• <strong>Network:</strong> Gigabit Ethernet</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/60 p-4 rounded-lg border border-green-100">
                          <h5 className="font-semibold text-green-800 mb-2">Software</h5>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• <strong>OS:</strong> Windows 11 / Ubuntu 22.04 LTS</li>
                            <li>• <strong>Java:</strong> OpenJDK 21 with optimized JVM args</li>
                            <li>• <strong>CUDA:</strong> CUDA 12.0+ (for GPU acceleration)</li>
                            <li>• <strong>Python:</strong> 3.10+ with virtual environment</li>
                          </ul>
                        </div>

                        <div className="bg-green-100 p-3 rounded-lg border border-green-200">
                          <p className="text-xs text-green-800">
                            <strong>Optimal:</strong> Recommended specs enable sub-second AI responses, 
                            smooth multi-bot operations, and full feature utilization.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Server Requirements */}
                <div className="mb-8">
                  <h3 id="api-integration" className="text-xl font-semibold text-slate-800 mb-4">🖧 Server Deployment Requirements</h3>
                  
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg border border-red-200 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">⚠️</div>
                      <h4 className="font-semibold text-red-900">Commercial Hosting Limitations</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-red-700 text-sm">
                        <strong>Important:</strong> Most commercial Minecraft server hosting providers (Aternos, Minehut, PebbleHost, etc.) 
                        cannot run AI-Player due to severe system limitations and restrictions.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/60 p-4 rounded-lg border border-red-100">
                          <h5 className="font-semibold text-red-800 mb-2">Hosting Provider Limitations</h5>
                          <ul className="text-xs text-red-700 space-y-1">
                            <li>• <strong>No OS-level access:</strong> Cannot install Python/ML dependencies</li>
                            <li>• <strong>Limited RAM allocation:</strong> Typically 1-8GB maximum</li>
                            <li>• <strong>No GPU access:</strong> CPU-only inference severely limited</li>
                            <li>• <strong>Restricted file system:</strong> Cannot write ML model files</li>
                            <li>• <strong>Network restrictions:</strong> Limited external API access</li>
                            <li>• <strong>Process limitations:</strong> Cannot spawn Python subprocesses</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/60 p-4 rounded-lg border border-red-100">
                          <h5 className="font-semibold text-red-800 mb-2">Required System Access</h5>
                          <ul className="text-xs text-red-700 space-y-1">
                            <li>• <strong>Full OS access:</strong> Install packages, modify system</li>
                            <li>• <strong>Python environment:</strong> Install PyTorch, transformers, etc.</li>
                            <li>• <strong>Model storage:</strong> 2-5GB for ML models</li>
                            <li>• <strong>Process management:</strong> Background AI services</li>
                            <li>• <strong>Network freedom:</strong> Unrestricted API calls</li>
                            <li>• <strong>Resource allocation:</strong> Dedicated CPU/GPU/RAM</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Self-Hosting Requirements */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm mr-3">🏠</div>
                      <h4 className="font-semibold text-blue-900">Self-Hosting Requirements</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-blue-800 mb-3">Server Minimum Specs</h5>
                        <div className="bg-white/60 p-4 rounded-lg border border-blue-100 space-y-2">
                          <div className="text-sm text-blue-700">
                            <strong>CPU:</strong> Intel Xeon E3-1230v6 / AMD Ryzen 5 3600 (8+ cores)
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>RAM:</strong> 16GB DDR4 ECC (24GB+ recommended)
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>Storage:</strong> 100GB+ NVMe SSD for OS + models
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>Network:</strong> 100Mbps+ symmetric bandwidth
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>GPU:</strong> Optional but recommended (RTX 3060+)
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-blue-800 mb-3">Server Recommended Specs</h5>
                        <div className="bg-white/60 p-4 rounded-lg border border-blue-100 space-y-2">
                          <div className="text-sm text-blue-700">
                            <strong>CPU:</strong> Intel Xeon E5-2690v4 / AMD EPYC 7402P (16+ cores)
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>RAM:</strong> 32-64GB DDR4 ECC
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>Storage:</strong> 500GB+ NVMe SSD RAID 1
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>Network:</strong> Gigabit+ dedicated bandwidth
                          </div>
                          <div className="text-sm text-blue-700">
                            <strong>GPU:</strong> RTX 4070+ / Tesla T4+ for acceleration
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white/40 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-blue-800 mb-3">Self-Hosting Deployment Options</h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h6 className="font-semibold text-blue-700 mb-2">🏠 Home Server</h6>
                          <ul className="text-blue-600 space-y-1 text-xs">
                            <li>• Full control & customization</li>
                            <li>• One-time hardware cost</li>
                            <li>• Requires technical expertise</li>
                            <li>• Internet bandwidth dependent</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-blue-700 mb-2">☁️ VPS/Cloud</h6>
                          <ul className="text-blue-600 space-y-1 text-xs">
                            <li>• AWS EC2, DigitalOcean, Vultr</li>
                            <li>• Scalable resources</li>
                            <li>• $50-200/month for adequate specs</li>
                            <li>• Professional datacenter reliability</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-blue-700 mb-2">🎮 Dedicated Gaming</h6>
                          <ul className="text-blue-600 space-y-1 text-xs">
                            <li>• OVH, Hetzner dedicated servers</li>
                            <li>• High-performance hardware</li>
                            <li>• Root access & custom installs</li>
                            <li>• Best price/performance ratio</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementation Architecture */}
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 id="mod-architecture" className="text-lg font-semibold text-slate-900 mb-4">🏗️ Implementation Architecture</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Core Dependencies</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Fabric API:</strong> 1.21.1 mod framework</li>
                        <li>• <strong>PyTorch:</strong> Neural network inference</li>
                        <li>• <strong>HuggingFace:</strong> Transformer models</li>
                        <li>• <strong>SQLite:</strong> Local data persistence</li>
                        <li>• <strong>OkHttp:</strong> API communication</li>
                        <li>• <strong>Jackson:</strong> JSON processing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Runtime Components</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Minecraft Server:</strong> Game world simulation</li>
                        <li>• <strong>Python ML Service:</strong> Model inference server</li>
                        <li>• <strong>LLM API Client:</strong> External reasoning service</li>
                        <li>• <strong>Database Engine:</strong> State persistence</li>
                        <li>• <strong>Thread Pool:</strong> Concurrent task execution</li>
                        <li>• <strong>Memory Manager:</strong> Resource optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Performance Optimizations</h4>
                      <ul className="space-y-1 text-slate-700 text-sm">
                        <li>• <strong>Model Caching:</strong> Pre-loaded inference</li>
                        <li>• <strong>Thread Pooling:</strong> Concurrent operations</li>
                        <li>• <strong>Memory Mapping:</strong> Large file handling</li>
                        <li>• <strong>Connection Pooling:</strong> HTTP reuse</li>
                        <li>• <strong>Batch Processing:</strong> Multiple bot coordination</li>
                        <li>• <strong>JIT Compilation:</strong> Optimized bytecode</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Continue with remaining sections... */}
            {tableOfContents.slice(6, -1).map((section) => (
              <section key={section.id} id={section.id} className="mb-16">
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-200 to-orange-200 rounded-xl flex items-center justify-center text-xl mr-4">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-800">{section.title}</h2>
                      <p className="text-amber-700">{section.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50/50 rounded-lg p-6 border border-amber-200">
                    <p className="text-slate-600 italic">
                      📝 This section is coming soon! Detailed documentation for {section.title.toLowerCase()} will be added in the next update.
                    </p>
                    
                    {section.subsections && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-slate-700 mb-2">Upcoming Topics:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {section.subsections.map((subsection) => (
                            <li key={subsection.id} className="flex items-center text-sm text-slate-600">
                              <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                              {subsection.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation;