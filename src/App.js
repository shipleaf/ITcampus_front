import React from 'react';
import { RecoilRoot } from 'recoil';
import AppRouter from './Router';

const App = () => {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </div>
  );
}

export default App;