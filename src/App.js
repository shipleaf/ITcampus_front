import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRouter from './Router';

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <AppRouter />
      </div>
    </RecoilRoot>
  );
}

export default App;
