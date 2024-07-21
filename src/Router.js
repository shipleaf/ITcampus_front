import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './components/post/Top';
import StudyPost from './components/studypost/StudyPost';

const AppRouter = ({ setIsLoggedIn }) => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<StudyPost />} />
          <Route path='/' element={<StudyPost />} />

        </Routes>
      </Router>
    );
  };

  export default AppRouter;
  