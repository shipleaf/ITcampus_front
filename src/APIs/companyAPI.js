import axios from 'axios';

const API_BASE_URL = 'itcampus-server.duckdns.org';

export const fetchCompany = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${API_BASE_URL}/company`,
        });
        return response.data;

    } catch (error) {
        console.error('회사 정보 불러오기 실패:', error);
        throw error;
    }
};