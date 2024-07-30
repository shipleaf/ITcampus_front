import axiosInstance from './axiosInstance';

const API_URL = 'http://223.130.135.136:8080';  // 프로토콜 추가

// const API_URL = 'http://localhost:8080';

export const login = async (userData) => {
    try {
        const response = await axiosInstance.post(`${API_URL}/api/login`, userData);
        console.log(`${API_URL}/api/login`)
        console.log(response.status)
        return response;
    } catch (error) {
        console.error('로그인 실패사유:', error);
        throw error;
    }
};

export const regist = async (registData) => {
    try {
        const response = await axiosInstance.post(`${API_URL}/api/register`, registData);
        return response;
    } catch (error) {
        console.error('회원가입 실패사유:', error);
        throw error;
    }
};


export const logout = async () => {
    try {
        const response = await axiosInstance.post(`${API_URL}/api/logout`);
        return response;
    } catch (error) {
        console.error('로그아웃 실패사유:', error);
        throw error;
    }
};
