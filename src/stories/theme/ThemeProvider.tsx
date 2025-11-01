import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultMode = 'light' 
}) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Check if we're in browser environment
    if (typeof window === 'undefined') {
      return defaultMode;
    }
    
    try {
      // Check localStorage first
      const saved = localStorage.getItem('theme-mode') as ThemeMode;
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch (e) {
      // localStorage might not be available
      console.warn('localStorage not available:', e);
    }
    
    // Check system preference
    try {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (e) {
      // matchMedia might not be available
      console.warn('matchMedia not available:', e);
    }
    
    return defaultMode;
  });

  useEffect(() => {
    // Apply theme to document
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', mode);
    }
    
    // Save to localStorage
    try {
      if (typeof window !== 'undefined' && localStorage) {
        localStorage.setItem('theme-mode', mode);
      }
    } catch (e) {
      console.warn('Failed to save theme to localStorage:', e);
    }
  }, [mode]);

  const toggleTheme = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

