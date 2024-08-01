import axiosInstance from './axiosInstance';

export const fetchStudyList = async () => {
    try {
        const response = await axiosInstance.get(`/api/studyboard`, {
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
        const response = await axiosInstance.get(`/api/studyboard/${studyId}`, {
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
        const response = await axiosInstance.get(`/api/studyboardComment/${studyId}`, {
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

export const searchStudy = async (query) => {
    try {
        const response = await axiosInstance.post(`/api/studyboard/search`, { title: query }, {
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

export const postStudy = async (postData) => {
    try {
        const response = await axiosInstance.post(`/api/studyboard/create`, postData);

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error('스터디글 작성 실패:', error);
        throw error;
    }
};

export const createStudyComment = async (studyboardkey, commentData) => {
    console.log(studyboardkey, commentData);
    try {
        const response = await axiosInstance.post(`/api/studyboardComment/create/${studyboardkey}`, commentData);
        if (response.status >= 200 && response.status < 300) {
            console.log(response);
            return response;
        } else {
            throw new Error("댓글 생성 불가");
        }
    } catch (error) {
        if (error.response) {
            console.error('댓글 추가 실패:', error.response.status, error.message);
        } else {
            console.error('댓글 추가 실패:', error.message);
        }
        throw error;
    }
};

export const deleteStudyComment = async (studyboardkey, commentkey) => {
    try {
        const response = await axiosInstance.delete(`/api/studyboardComment/delete/${studyboardkey}/${commentkey}`)
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            throw new Error("댓글 삭제 불가");
        }
    } catch (error) {
        console.error('댓글 삭제 실패:', error);
        throw error;
    }
};

export const editStudyPost = async (studyId, postData) => {
    try {
      const response = await axiosInstance.put(`/api/studyboard/update/${studyId}`, postData, {
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

export const deleteStudyPost = async (studyboardkey) => {
    try {
        const response = await axiosInstance.delete(`/api/studyboard/delete/${studyboardkey}`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('게시글 삭제 실패:', error);
        throw error;
    }
};