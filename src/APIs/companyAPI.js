import axiosInstance from "./axiosInstance";

// const API_URL = 'http://223.130.135.136:8080'; 

// const API_URL = 'http://localhost:8080';

// const API_URL = 'http://223.130.153.246:8080';

const API_URL = 'https://mjcback.duckdns.org';

export const fetchCompanyDetails = async (companyId) => {
    try {
        const response = await axiosInstance.get(`${API_URL}/api/company/${companyId}`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('회사 정보 불러오기 실패:', error);
        throw error;
    }
};

export const fetchCompanyList = async () => {
    try {
        const response = await axiosInstance.get(`${API_URL}/api/company`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('회사 정보 불러오기 실패:', error);
        throw error;
    }
};

