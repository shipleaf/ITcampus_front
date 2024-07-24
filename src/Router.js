import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RecruitmentDetails from './pages/RecruitmentDetails';
import CompanyList from './pages/CompanyList';
import CorporateProgram from './pages/CorporateProgram';
import GovermentSupport from './pages/GovernmentSupport';
import InformationList from './pages/InformationList';
import ITLicense from './pages/GovernmentSupport';
import ITLicenseDetails from './pages/ITLicenseDetails'
import StudyList from './pages/StudyList';
import CompanyDetails from './pages/CompanyDetails';
import Recruitment from './pages/Recruitment';
import SupportDetails from './pages/SupportDetails';
import MainCalendarPage from './pages/MainCalendarPage';
import MyPage from './pages/MyPage';
import PostDetail from './pages/PostWithComments';
import GuestHeader from './components/header/GuestHeader';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<GuestHeader />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/studydetail' element={<PostDetail />} />
        <Route path='/jobdetails' element={<RecruitmentDetails />} />
        <Route path='/licensedetails' element={<ITLicenseDetails />} />
        <Route path='/licenselist' element={<ITLicense />} />
        <Route path='/recruittlist' element={<Recruitment />} />
        <Route path='/governmentlist' element={<GovermentSupport />} />
        <Route path='/corporatelist' element={<CorporateProgram />} />
        <Route path='/companydetail' element={<CompanyDetails/>} />
        <Route path='/companylist' element={<CompanyList/>} />
        <Route path='/informationlist' element={<InformationList/>} />
        <Route path='/studylist' element={<StudyList/>} />
        <Route path='/supportdetails' element={<SupportDetails/>} />
        <Route path='/mainpage' element={<MainCalendarPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
