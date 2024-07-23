import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecruitmentDetails from './pages/RecruitmentDetails';
import CompanyList from './pages/CompanyList';
import CorporateProgram from './pages/CorporateProgram';
import GovermentSupport from './pages/GovernmentSupport';
import InformationList from './pages/InformationList';
import ITLicense from './pages/GovernmentSupport';
import StudyList from './pages/StudyList';
import RelatedRecruitments from './components/modules/recruit/RelatedRecruitments';
import CompanyDetails from './pages/CompanyDetails';


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
        <Route path='/companydetail' element={<CompanyDetails/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
