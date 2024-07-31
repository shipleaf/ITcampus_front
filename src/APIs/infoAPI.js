import axiosInstance from "./axiosInstance";

// 정보게시글 리스트 불러오기
export const fetchInfoList = async () => {
    try {
        const response = await axiosInstance.get(`/api/freeboard`);
        return response;
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


// 정보게시판 상세 불러오기
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

// 정보게시글 댓글 생성
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

//정보게시판 수정
export const editInfoPost = async (infoId, postData) => {
    try {
      const response = await axiosInstance.put(`/api/freeboard/update/${infoId}`, postData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return response;
    } catch (error) {
      console.error('게시판 수정 실패:', error);
      throw error;
    }
};