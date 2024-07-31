import axiosInstance from './axiosInstance';
import { API_URL } from './api_url';


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
        const response = await axiosInstance.post(`${API_URL}/api/studentSupportInfo/search`, { title: query }, {
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