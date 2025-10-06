import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Quick Start', path: '/quick-start' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'About', path: '/about' },
    { name: 'GitHub', path: 'https://github.com/shasankp000/AI-Player', external: true }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/90 backdrop-blur-xl border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden transform group-hover:scale-110 transition-transform duration-200 bg-white shadow-md">
              <img 
                src="https://raw.githubusercontent.com/shasankp000/AI-Player/1.21.1/src/main/resources/assets/ai-player/icon.png"
                alt="AI-Player Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to the original gradient design if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-white font-bold text-lg">AI</span>
              </div>
            </div>
            <span className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors duration-200">
              AI-Player
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-amber-700 hover:text-amber-900 hover:bg-amber-100 transition-all duration-200 font-medium"
                  >
                    {item.name}
                    <span className="ml-1 text-xs">↗</span>
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-amber-900 bg-amber-200 border border-amber-300'
                        : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-700 hover:text-amber-900 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative flex items-center justify-center">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45' : '-translate-y-2'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-50/95 backdrop-blur-xl border-t border-amber-200 mt-2">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-amber-700 hover:text-amber-900 hover:bg-amber-100 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="ml-1 text-xs">↗</span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-amber-900 bg-amber-200'
                      : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;