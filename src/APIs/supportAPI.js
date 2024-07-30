import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080';

const API_URL = 'http://223.130.135.136:8080';

export const fetchSupportDetails = async (supportId) => {
    try {
        const response = await axios.get(`${API_URL}/api/studentSupportInfo/${supportId}`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('지원사업 정보 불러오기 실패:', error);
        throw error;
    }
};

export const fetchSupportList = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/studentSupportInfo`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('지원 사업 정보 불러오기 실패:', error);
        throw error;
    }
};

