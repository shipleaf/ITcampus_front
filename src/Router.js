import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecruitmentDetails from './pages/RecruitmentDetails';
import CompanyList from './pages/CompanyList';
import CorporateProgram from './pages/CorporateProgram';
import GovernmentSupport from './pages/GovernmentSupport';
import InformationList from './pages/InformationList';
import InformationDetails from './pages/InformationDetails';
import ITLicense from './pages/ITLicense';
import ITLicenseDetails from './pages/ITLicenseDetails'
import StudyList from './pages/StudyList';
import CompanyDetails from './pages/CompanyDetails';
import Recruitment from './pages/Recruitment';
//import coporateDetail from './pages/CorporateSupportDetail';
import GovernmentSupportDetails from './pages/GovernmentSupportDetails';
import MainCalendarPage from './pages/MainCalendarPage';
import MyPage from './pages/MyPage';
import StudyDetails from './pages/StudyDetails';
import Header from './components/header/Header';
import WritePost from './pages/CreatePost';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/mainpage' element={<MainCalendarPage/>} />
        <Route path='/' element={<Header/>} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/companylist' element={<CompanyList/>} />
        <Route path='/companydetails/:key' element={<CompanyDetails/>} />
        <Route path='/governmentlist' element={<GovernmentSupport />} />
        <Route path='/governmentsupportdetails/:key' element={<GovernmentSupportDetails/>} />
        <Route path='/corporatelist' element={<CorporateProgram />} />
        <Route path='/recruitlist' element={<Recruitment />} />
        <Route path='/recruitmentdetails/:key' element={<RecruitmentDetails />} />
        <Route path='/licenselist' element={<ITLicense />} />
        <Route path='/licensedetails/:key' element={<ITLicenseDetails />} />
        <Route path='/studylist' element={<StudyList/>} />
        <Route Path='/studypostwrite' element = {<WritePost/>} />
        <Route path='/studydetails/:key' element={<StudyDetails />} />
        <Route path='/informationlist' element={<InformationList/>} />
        <Route path='/informationdetails/:key' element={<InformationDetails/>} />
      </Routes>
    </Router> 
  );
};

export default AppRouter;
