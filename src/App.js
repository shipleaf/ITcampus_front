import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRouter from './Router';

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
