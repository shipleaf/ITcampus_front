import React, { useState } from 'react';
import AppRouter from './Router';
import Top from './components/post/Top';
import Post from './components/post/Post';

const App = () => {

  return (
    <div>
      <Top />
      <Post />
      <AppRouter />
      
      <AppRouter  />
    </div>
  );
}

export default App;
