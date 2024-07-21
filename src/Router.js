import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './components/post/Top';


const AppRouter = ({ setIsLoggedIn }) => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Top />} />

        </Routes>
      </Router>
    );
  };

  export default AppRouter;
  