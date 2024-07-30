import axios from 'axios';

// const API_URL = 'http://localhost:8080';

const API_URL = 'http://223.130.135.136:8080'; 

export const googleLogin = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/auth`);
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            throw new Error(`Unexpected status code: ${response.status}`);
        }
    } catch (error) {
        console.error('구글 로그인 실패사유:', error);
        throw error;
    }
};
