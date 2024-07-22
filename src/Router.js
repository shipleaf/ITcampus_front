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

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/jobdetails' element={<RecruitmentDetails/>} />
          <Route path='/other' element={<RelatedRecruitments/>} />
          <Route path='/company' element={<CompanyList/>} />
          <Route path='/corporateprogram' element={<CorporateProgram/>} />
          <Route path='/govermentsupport' element={<GovermentSupport/>} />
          <Route path='/informatiuonlist' element={<InformationList/>} />
          <Route path='/itlicense' element={<ITLicense/>} />
          <Route path='/studylist' element={<StudyList/>} />
        </Routes>
      </Router>
    );
  };

  export default AppRouter;
  