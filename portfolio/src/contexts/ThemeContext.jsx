import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    const initialTheme = savedTheme || 'dark';
    
    // Apply theme immediately on initialization
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    
    return initialTheme;
  });

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem('portfolio-theme', theme);
    
    // Apply theme class to document root with more explicit handling
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    // Also set data attribute for debugging
    document.documentElement.setAttribute('data-theme', theme);
    
    console.log('Theme changed to:', theme); // Debug log
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    isLight: theme === 'light',
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
