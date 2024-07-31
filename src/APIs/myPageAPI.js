import axiosInstance from './axiosInstance';
import { API_URL } from './api_url';


export const myPageAPI = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/profile`, {
            headers: {
                'Cache-Control': 'no-cache'
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        console.error('마이페이지 불러오기 실패:', error);
        throw error;
    }
};

export const editProfileAPI = async (profileData) => {
    try {
        const response = await axios.put(`${API_URL}/api/profile/edit`, profileData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        console.error('프로필 수정 실패:', error);
        throw error;
    }
};