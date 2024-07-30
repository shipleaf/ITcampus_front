import axios from 'axios';

const API_URL = 'http://localhost:8080';

// const API_URL = 'http://223.130.135.136:8080'; 

export const fetchRecruitmentList = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/recruitmentNoticeInfo`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('채용공고 리스트 정보 불러오기 실패:', error);
        throw error;
    }
};

export const fetchRecruitmentDetails = async (recruitId) => {
    try {
        const response = await axios.get(`${API_URL}/api/recruitmentNoticeInfo/${recruitId}`);
        return response.data;
    } catch (error) {
        console.error('채용공고 상세 정보 불러오기 실패:', error);
        throw error;
    }
};

export const searchRecruit = async (query) => {
    try {
        const response = await axios.post(`${API_URL}/api/recruitmentNoticeInfo/search`, { title: query }, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('채용공고 정보 불러오기 실패:', error);
        throw error;
    }
};