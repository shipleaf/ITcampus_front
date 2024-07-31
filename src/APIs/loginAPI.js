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

export const getUsername = async () => {
    try{
        console.log('username 가져오는 중..')
        const response = await axiosInstance.get(`/api/profile/name`);
        if (response.status >= 200 && response.status < 300){
            console.log('username 가져오기')
            return response;
        } else {
            throw new Error('username load 실패');
        }
        
    } catch(error){
        console.error(error);
        throw error;
    }
}