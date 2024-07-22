import React from 'react';
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
