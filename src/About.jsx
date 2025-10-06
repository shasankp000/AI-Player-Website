import { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

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
                  <div className="text-2xl font-bold text-orange-600">29</div>
                  <div className="text-sm text-slate-600">Repositories</div>
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
            {/* Bio Section */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-orange-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🧠</span>
                About Me
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                CS student & AI tinkerer. Exploring autonomy, NLP, and AI companions through Minecraft experiments.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Passionate about pushing the boundaries of artificial intelligence in gaming environments. 
                The AI-Player project represents thousands of hours of research, trials, and errors, 
                driven by the simple goal of eliminating loneliness from Minecraft as much as possible.
              </p>
            </div>

            {/* Project Journey */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-yellow-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                Project Journey
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-slate-800">Current Focus</p>
                    <p className="text-slate-600">Final-year computer science student balancing academics with AI-Player development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-slate-800">Academic Load</p>
                    <p className="text-slate-600">Studying 11 subjects including Machine Learning, Linear Algebra, Physics, and CyberSecurity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-slate-800">Development Philosophy</p>
                    <p className="text-slate-600">"I won't ever give up on this project" - Committed to long-term development despite challenges</p>
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