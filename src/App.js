import React from 'react';
import {ThemeProvider} from 'styled-components'
import theme from './theme/index'
import Main from './components/index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
