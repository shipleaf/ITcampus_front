import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRouter from './Router';

const App = () => {
  return (
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
  );
}

export default App;