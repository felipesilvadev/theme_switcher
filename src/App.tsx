import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

import GlobalStyle from './styles/global';

import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
