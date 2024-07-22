import axios from 'axios';

const API_BASE_URL = '';

export const fetchLicenseDetails = async (key) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/qualificationInfo/${key}`);
        return response.data;

    } catch (error) {
        console.error('자격증 정보 불러오기 실패:', error);
        throw error;
    }
};
