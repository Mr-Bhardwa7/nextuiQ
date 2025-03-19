"use client";
import * as React from 'react';

type Theme = 'light' | 'dark' | 'system';
type ThemeContextType = { theme: Theme; toggleTheme: () => void };

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeClient({ children, defaultTheme = 'system' }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateTheme = () => {
      const currentTheme = theme === 'system' 
        ? (mediaQuery.matches ? 'dark' : 'light')
        : theme;
      
      document.body.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', theme);
    };

    const handleChange = () => {
      if (theme === 'system') {
        updateTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    updateTheme();

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = React.useCallback(() => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case 'light': return 'dark';
        case 'dark': return 'system';
        case 'system': return 'light';
        default: return 'light';
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};