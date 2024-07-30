
import axiosInstance from './axiosInstance';


const API_URL = 'http://localhost:8080';

// const API_URL = 'http://223.130.135.136:8080';

// const API_URL = 'http://223.130.153.246:8080'; // 동근

const API_URL = 'https://mjcback.duckdns.org';

export const fetchSupportDetails = async (supportId) => {
    try {
        const response = await axiosInstance.get(`${API_URL}/api/studentSupportInfo/${supportId}`, {
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
        const response = await axiosInstance.get(`${API_URL}/api/studentSupportInfo`, {
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

export const searchSupport = async (query) => {
    try {
        const response = await axios.post(`${API_URL}/api/studentSupportInfo/search`, { title: query }, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('학생지원사업 정보 불러오기 실패:', error);
        throw error;
    }
};