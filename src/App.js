import React from 'react';
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
