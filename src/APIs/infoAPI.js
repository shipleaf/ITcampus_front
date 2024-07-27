import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

export const fetchInfoList = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}api/freeboard`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('정보게시판 정보 불러오기 실패:', error);
        throw error;
    }
};