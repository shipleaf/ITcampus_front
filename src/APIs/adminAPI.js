import axios from "axios";
import { API_URL } from './api_url';

export const postCompanyDetails = async (companyDetails) => {
    try {
        const response = await axios.post(`${API_URL}/api/company/admin`, companyDetails, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response; 
    } catch (error) {
        console.error('기업 상세 정보 전송 실패:', error);
        throw error;
    }
};

export const deleteCompanyDetails = async (companyID) => {
    try {
        const response = await axios.delete(`${API_URL}/api/company/admin/${companyID}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error('기업 상세 정보 삭제 실패:', error);
        throw error;
    }
};

export const postSupportDetails = async (supportDetails) => {
    try {
        const response = await axios.post(`${API_URL}/api/studentSupportInfo/admin`, supportDetails, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response; 
    } catch (error) {
        console.error('학생지원 상세 정보 전송 실패:', error);
        throw error;
    }
};

export const deleteSupportDetails = async (supportID) => {
    try {
        const response = await axios.delete(`${API_URL}/api/studentSupportInfo/admin/delete/${supportID}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error('학생 지원 정보 삭제 실패:', error);
        throw error;
    }
};

export const postLicenseDetails = async (licenseDetails) => {
    try {
        const response = await axios.post(`${API_URL}/api/qualificationInfo/admin`, licenseDetails, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response; 
    } catch (error) {
        console.error('자격증 상세 정보 전송 실패:', error);
        throw error;
    }
};

export const deleteLicenseDetails = async (licenseID) => {
    try {
        const response = await axios.delete(`${API_URL}/api/qualificationInfo/admin/delete/${licenseID}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error('자격증 상세 정보 삭제 실패:', error);
        throw error;
    }
};

export const postRecruitDetails = async (recruitDetails) => {
    try {
        const response = await axios.post(`${API_URL}/api/recruitmentNoticeInfo/admin`, recruitDetails, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response; 
    } catch (error) {
        console.error('채용공고 상세 정보 전송 실패:', error);
        throw error;
    }
};


export const deleteRecruitDetails = async (recruitID) => {
    try {
        const response = await axios.delete(`${API_URL}/api/recruitmentNoticeInfo/admin/delete/${recruitID}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error('채용 공고 삭제 실패:', error);
        throw error;
    }
};

export const getAdminInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/admin/freeboard`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('정보게시판 정보 불러오기 실패:', error);
        throw error;
    }
};

export const deleteInfoPost = async (postKey) => {
    try {
        const response = await axios.delete(`${API_URL}/api/admin/freeboard/delete/${postKey}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error('정보게시판 삭제 실패:', error);
        throw error;
    }
};

export const deleteInfoComment = async (infoboardKey, commentKey) => {
    try {
        const response = await axios.delete(`${API_URL}/api/admin/freeboard/delete/${infoboardKey}/${commentKey}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error('정보게시판 댓글 삭제 실패:', error);
        throw error;
    }
};

export const getAdminStudy = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/admin/studyboard`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('스터디게시판 정보 불러오기 실패:', error);
        throw error;
    }
};

export const deleteStudyPost = async (postKey) => {
    try {
        const response = await axios.delete(`${API_URL}/api/admin/studyboard/delete/${postKey}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error('스터디게시판 삭제 실패:', error);
        throw error;
    }
};

export const deleteStudyComment = async (studyboardKey, commentKey) => {
    try {
        const response = await axios.delete(`${API_URL}/api/admin/studyboard/delete/${studyboardKey}/${commentKey}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error('스터디게시판 댓글 삭제 실패:', error);
        throw error;
    }
};