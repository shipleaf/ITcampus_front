import axios from 'axios';

// const API_URL = 'http://localhost:8080';

const API_URL = 'http://223.130.153.246:8080'; // 동근

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
        console.error('채용공고 정보 불러오기 실패:', error);
        throw error;
    }
};
