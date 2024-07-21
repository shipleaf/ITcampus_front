import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecruitmentDetails from './pages/RecruitmentDetails';


const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/jobdetails' element={<RecruitmentDetails/>} />
        </Routes>
      </Router>
    );
  };

  export default AppRouter;
  