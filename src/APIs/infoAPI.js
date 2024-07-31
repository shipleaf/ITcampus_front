import axiosInstance from "./axiosInstance";

export const fetchInfoList = async () => {
    try {
        const response = await axiosInstance.get(`/api/freeboard`);
        console.log(response.status)
        console.log(response.data)

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }

        if (response.status >= 400 && response.status < 500) {
            throw new Error('잘못된 요청입니다.');
        }

        if (response.status >= 500) {
            throw new Error('서버에서 오류가 발생했습니다.');
        }
    } catch (error) {
        console.log('에러 발생!')
        if (error.response) {
            throw new Error(`Error: ${error.response.status}`);
        } else if (error.request) {
            throw new Error('서버가 응답하지 않습니다.');
        } else {
            throw new Error(`에러: ${error.message}`);
        }
    }
};


// 정보게시판 포스터 가져오기
export const fetchInfoPost = async (infoId) => {
    try {
        const response = await axiosInstance.get(`/api/freeboard/${infoId}`, {
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
        const response = await axiosInstance.get(`/api/freeboardComment/${infoId}`, {
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
        const response = await axiosInstance.post(`/api/freeboardComment/create/${infoboardkey}`, commentData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });
        console.log(response);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('댓글 추가 실패:', error.response.status, error.message);
        } else {
            console.error('댓글 추가 실패:', error.message);
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
        const response = await axiosInstance.delete(`/api/freeboardComment/delete/${infoboardkey}/${commentkey}`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('댓글 삭제 실패:', error);
        throw error;
    }
};

// 정보게시판 찾기
export const searchInfo = async (query) => {
    try {
        const response = await axiosInstance.post(`/api/freeboard/search`, { title: query }, {
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