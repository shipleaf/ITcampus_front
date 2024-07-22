import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecruitmentDetails from './pages/RecruitmentDetails';
import RelatedRecruitments from './components/modules/recruit/RelatedRecruitments';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/jobdetails' element={<RecruitmentDetails/>} />
          <Route path='/other' element={<RelatedRecruitments/>} />
        </Routes>
      </Router>
    );
  };

  export default AppRouter;
  