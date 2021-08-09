import { useCallback, useEffect } from 'react';
import { createContext, ReactNode, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export type BlogThemeContext = {
  theme: DefaultTheme;
  setTheme?: (mode: 'default' | 'inverted') => void;
};

export const BlogThemeContext = createContext<BlogThemeContext>({ theme });

export const BlogThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const recoveredTheme = JSON.parse(localTheme);
    setBlogTheme(recoveredTheme);
  }, []);

  const handleSetTheme: BlogThemeContext['setTheme'] = useCallback((mode = 'default') => {
    if (mode === 'default') {
      setBlogTheme(theme);
      localStorage.setItem('theme', JSON.stringify(theme));
    } else {
      const newTheme = {
        ...theme,
        name: 'inverted',
        colors: {
          primary: '#FFFFFF',
          darkText: '#F9f9f9',
          secondary: '#dc143c',
          white: '#000000',
          mediumGray: '#f9f9f9',
          darkGray: '#CCCCCC',
        },
      };
      setBlogTheme(newTheme);
      localStorage.setItem('theme', JSON.stringify(newTheme));
    }
  }, []);

  return (
    <BlogThemeContext.Provider value={{ theme: blogTheme, setTheme: handleSetTheme }}>
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </BlogThemeContext.Provider>
  );
};

export type BlogThemeProviderProps = {
  children: ReactNode;
};
