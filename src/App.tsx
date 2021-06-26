import React from 'react';

import Home from './pages/Home';

import { GlobalStyles } from './globalStyles';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <GlobalStyles />
    </>
  );
}

export default App;
