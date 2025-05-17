
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, BookText, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">English Study Platform</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => cn(
                "flex items-center space-x-1 px-2 py-1 rounded-md transition-colors",
                isActive ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
              )}
              end
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </NavLink>
            <NavLink 
              to="/vocabulary" 
              className={({ isActive }) => cn(
                "flex items-center space-x-1 px-2 py-1 rounded-md transition-colors",
                isActive ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
              )}
            >
              <BookText className="h-4 w-4" />
              <span>Vocabulary</span>
            </NavLink>
            <NavLink 
              to="/grammar" 
              className={({ isActive }) => cn(
                "flex items-center space-x-1 px-2 py-1 rounded-md transition-colors",
                isActive ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
              )}
            >
              <BookOpen className="h-4 w-4" />
              <span>Grammar</span>
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="block text-gray-500 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu (hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => cn(
              "block px-3 py-2 rounded-md text-base font-medium",
              isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50 hover:text-primary"
            )}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/vocabulary" 
            className={({ isActive }) => cn(
              "block px-3 py-2 rounded-md text-base font-medium",
              isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50 hover:text-primary"
            )}
          >
            Vocabulary
          </NavLink>
          <NavLink 
            to="/grammar" 
            className={({ isActive }) => cn(
              "block px-3 py-2 rounded-md text-base font-medium",
              isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50 hover:text-primary"
            )}
          >
            Grammar
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
