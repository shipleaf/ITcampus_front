import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

export const fetchStudyList = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}api/studyboard`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('스터디 정보 불러오기 실패:', error);
        throw error;
    }
};


export const fetchStudyDetails = async (studyId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}api/studyboard/${studyId}`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('스터디 정보 불러오기 실패:', error);
        throw error;
    }
};
