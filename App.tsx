import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Method } from './pages/Method';
import { Cases } from './pages/Cases';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash.slice(1) || '/';
      setCurrentPath(path);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home onNavigate={navigate} />;
      case '/metodo-psi-na-gringa':
        return <Method />;
      case '/cases':
        return <Cases />;
      case '/sobre':
        return <About />;
      case '/contato':
        return <Contact />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <Layout currentPath={currentPath} onNavigate={navigate}>
      {renderPage()}
    </Layout>
  );
};

export default App;