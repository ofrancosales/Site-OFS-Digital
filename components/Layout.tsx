import React, { useState } from 'react';
import { Menu, X, Globe, Instagram, Linkedin } from 'lucide-react';
import { NavItem } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Método Psi na Gringa', path: '/metodo-psi-na-gringa' },
  { label: 'Cases', path: '/cases' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Contato', path: '/contato' },
];

export const Layout: React.FC<LayoutProps> = ({ children, currentPath, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button 
              onClick={() => handleNav('/')} 
              className="flex items-center gap-2 font-bold text-2xl text-slate-900 tracking-tight"
            >
              <div className="bg-teal-700 text-white p-1.5 rounded-lg">
                <Globe size={24} />
              </div>
              OFS Digital
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`text-sm font-medium transition-colors hover:text-teal-700 ${
                    currentPath === item.path ? 'text-teal-700' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                    currentPath === item.path
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-2xl text-white mb-4">
                <Globe size={24} className="text-teal-500" />
                OFS Digital
              </div>
              <p className="text-sm leading-relaxed max-w-xs text-slate-400">
                Especialistas em marketing internacional para psicólogas. 
                Levamos sua clínica para o mundo com o Método Psi na Gringa.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <button 
                      onClick={() => handleNav(item.path)}
                      className="hover:text-teal-400 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>WhatsApp: +55 85 98481-5378</li>
                <li>Email: contato@ofsdigital.com.br</li>
                <li className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-teal-400"><Instagram size={20} /></a>
                  <a href="#" className="hover:text-teal-400"><Linkedin size={20} /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} OFS Digital. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};