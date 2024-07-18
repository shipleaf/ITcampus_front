import React, { useState } from 'react';
import AppRouter from './Router';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <AppRouter setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
