import axios from 'axios';

const API_URL = 'http://localhost:8080/';

//const API_URL = 'http://223.130.135.136:8080'; 

export const fetchLicenseList = async () => {
    try {
        const response = await axios.get(`${API_URL}api/qualificationInfo`);
        return response;
    } catch (error) {
        console.error('IT자격증리스트 정보 불러오기 실패:', error);
        throw error;
    }
};


export const fetchLicenseDetails = async (licenseId) => {
    try {
        const response = await axios.get(`${API_URL}api/qualificationInfo/${licenseId}`);
        return response.data;
    } catch (error) {
        console.error('IT자격증상세 정보 불러오기 실패:', error);
        throw error;
    }
};


export const searchLicense = async (query) => {
    try {
        const response = await axios.post(`${API_URL}api/qualificationInfo/search`, { title: query }, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('라이센스 정보 불러오기 실패:', error);
        throw error;
    }
};