import axiosInstance from './axiosInstance';

export const login = async (userData) => {
    try {
        const response = await axiosInstance.post(`/api/login`, userData);
        console.log(response.status)
        return response;
    } catch (error) {
        console.error('로그인 실패사유:', error);
        throw error;
    }
};

export const regist = async (registData) => {
    try {
        const response = await axiosInstance.post(`/api/register`, registData);
        return response;
    } catch (error) {
        console.error('회원가입 실패사유:', error);
        throw error;
    }
};


export const logout = async () => {
    try {
        const response = await axiosInstance.post(`/api/logout`);
        return response;
    } catch (error) {
        console.error('로그아웃 실패사유:', error);
        throw error;
    }
};
