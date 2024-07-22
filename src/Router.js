import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecruitmentDetails from './pages/RecruitmentDetails';
import ITLicense from './pages/ITLicense';
import ITLicenseDetails from './pages/ITLicenseDetails';
import Recruitment from './pages/Recruitment';
import GovernmentsSupport from './pages/GovernmentSupport';
import CorporateProgram from './pages/CorporateProgram';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/jobdetails' element={<RecruitmentDetails />} />
        <Route path='/licensedetails' element={<ITLicenseDetails />} />
        <Route path='/licenselist' element={<ITLicense />} />
        <Route path='/recruittlist' element={<Recruitment />} />
        <Route path='/governmentlist' element={<GovernmentsSupport />} />
        <Route path='/corporatelist' element={<CorporateProgram />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
