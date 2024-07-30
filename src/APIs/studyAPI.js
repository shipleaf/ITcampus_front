import axios from 'axios';


// const API_URL = 'http://localhost:8080';

// const API_URL = 'http://223.130.135.136:8080';

const API_URL = 'http://223.130.153.246:8080'; // 동근


export const fetchStudyList = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/studyboard`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('스터디 정보 불러오기 실패:', error);
        throw error;
    }
};


export const fetchStudyPost = async (studyId) => {
    try {
        const response = await axios.get(`${API_URL}/api/studyboard/${studyId}`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('스터디게시판 정보 불러오기 실패:', error);
        throw error;
    }
};

export const fetchStudyComments = async (studyId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}api/studyboardComment/${studyId}`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('스터디게시판댓글 정보 불러오기 실패:', error);
        throw error;
    }
};