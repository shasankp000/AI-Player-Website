import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './Navbar';
import Home from './Home';
import QuickStart from './QuickStart';
import Documentation from './Documentation';
import About from './About';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quick-start" element={<QuickStart />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
