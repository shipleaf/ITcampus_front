import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080';

const API_URL = 'http://223.130.135.136:8080'; 


export const fetchInfoList = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/freeboard`, {
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

// 정보게시판 포스터 가져오기
export const fetchInfoPost = async (infoId) => {
    try {
        const response = await axios.get(`${API_URL}/api/freeboard/${infoId}`, {
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

// 정보게시판 댓글 가져오기
export const fetchInfoComments = async (infoId) => {
    try {
        const response = await axios.get(`${API_URL}/api/freeboardComment/${infoId}`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('정보게시판댓글 정보 불러오기 실패:', error);
        throw error;
    }
};


export const createInfoComment = async (infoboardkey, commentData) => {
    console.log(infoboardkey, commentData);
    try {
        const response = await axios.post(`${API_URL}/api/freeboardComment/create/${infoboardkey}`, commentData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });
        console.log(response);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('댓글 추가 실패:', error.response.data);
            console.error('상태 코드:', error.response.status);
        } else if (error.request) {
            console.error('응답을 받지 못했습니다:', error.request);
        } else {
            console.error('요청 설정 중 오류가 발생했습니다:', error.message);
        }
        throw error;
    }
};

// export const login = async (userData) => {
//     try {
//         const response = await axios.post(`${API_URL}/api/login`, userData);
//         console.log(`${API_URL}/api/login`)
//         console.log(response.status)
//         return response;
//     } catch (error) {
//         console.error('로그인 실패사유:', error);
//         throw error;
//     }
// };


// 정보게시판 댓글 삭제
export const deleteInfoComment = async (infoboardkey, commentkey) => {
    try {
        const response = await axios.delete(`${API_URL}api/freeboardComment/delete/${infoboardkey}/${commentkey}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        console.error('댓글 삭제 실패:', error);
        throw error;
    }
};
