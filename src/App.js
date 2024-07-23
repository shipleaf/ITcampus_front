import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRouter from './Router';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </div>
  );
}

export default App;