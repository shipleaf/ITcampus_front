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
import CreateStudyPost from './pages/CreateStudyPost';
import CreateInfoPost from './pages/CreateInfoPost';
import AdminMainPage from './admin/AdminMainpage';
import AdminCompanyDetail from './admin/AdminCompanyDetail';
import AdminSupportDetail from './admin/AdminSupportDetail';
import AdminLicenseDetail from './admin/AdminLicenseDetail';
import AdminRecruitDetail from './admin/AdminRecruitDetail';
import AdminInfoboard from './admin/AdminInfoboard';
import AdminStudyboard from './admin/AdminStudyboard';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainCalendarPage/>} />
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
        <Route path='/createstudypost' element = {<CreateStudyPost/>} />
        <Route path='/createInfopost' element = {<CreateInfoPost/>} />
        <Route path='/studydetails/:key' element={<StudyDetails />} />
        <Route path='/informationlist' element={<InformationList/>} />
        <Route path='/informationdetails/:key' element={<InformationDetails/>} />
            <Route path='/admin' element={<AdminMainPage/>} />
            <Route  path='/admincompanydetail' element={<AdminCompanyDetail/>} />
            <Route  path='/adminsupportdetail' element={<AdminSupportDetail/>} />
            <Route  path='/adminlicensedetail' element={<AdminLicenseDetail/>} />
            <Route  path='/adminrecruitdetail' element={<AdminRecruitDetail/>} />
            <Route  path='/admininfoboard' element={<AdminInfoboard/>} />
            <Route  path='/adminstudyboard' element={<AdminStudyboard/>} />
            
      </Routes>
    </Router> 
  );
};

export default AppRouter;
