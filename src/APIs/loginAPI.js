import axios from 'axios';

const API_URL = 'http://223.130.135.136:8080';  // 프로토콜 추가

//const API_URL = 'http://localhost:8080';


export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/api/login`, userData);
        console.log(`${API_URL}/api/login`);
        console.log('응답 상태 코드:', response.status);
        console.log('응답 데이터:', response.data); // 응답 데이터 전체를 출력

        const token = response.data.token; // 응답 본문에서 토큰 추출

        if (token) {
            localStorage.setItem('authToken', token);
            localStorage.setItem('isLoggedIn', 'true');
            console.log('토큰이 저장되었습니다:', token);
        } else {
            console.log('토큰이 존재하지 않습니다.');
        }

        return response;
    } catch (error) {
        if (error.response) {
            console.error('로그인 실패 사유:', error.response.data);
            console.error('상태 코드:', error.response.status);
        } else if (error.request) {
            console.error('요청이 전송되었으나 응답을 받지 못했습니다.');
        } else {
            console.error('로그인 설정 중 에러 발생:', error.message);
        }
        throw error;
    }
};


export const regist = async (registData) => {
    try {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(`${API_URL}/api/register`, registData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error('회원가입 실패사유:', error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.setItem('isLoggedIn', 'false'); 
};
