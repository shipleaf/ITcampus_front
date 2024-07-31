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
        const response = await axiosInstance.post(`/api/studyboard/create`, postData)
        return response;
    } catch (error) {
        console.error('스터디글 작성 실패: ', error)
        throw error;
    }
}