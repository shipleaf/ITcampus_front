import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecruitmentDetails from './pages/RecruitmentDetails';
import ITLicense from './pages/ITLicense';
import Recruitment from './pages/Recruitment';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/jobdetails' element={<RecruitmentDetails/>} />
          <Route path='/license' element={<ITLicense/>} />
          <Route path='/recruittlist' element={<Recruitment/>} />
        </Routes>
      </Router>
    );
  };

  export default AppRouter;
  