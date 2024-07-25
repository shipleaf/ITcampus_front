import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

export const fetchLicenseList = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}api/qualificationInfo`);
        return response;
    } catch (error) {
        console.error('IT자격증 정보 불러오기 실패:', error);
        throw error;
    }
};