import axiosInstance from './axiosInstance';
import { API_URL } from './api_url';


export const fetchStudyList = async () => {
    try {
        const response = await axiosInstance.get(`${API_URL}/api/studyboard`, {
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
        const response = await axiosInstance.get(`${API_URL}/api/studyboard/${studyId}`, {
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
        const response = await axiosInstance.get(`${API_URL}api/studyboardComment/${studyId}`, {
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
        const response = await axiosInstance.post(`${API_URL}/api/studyboard/search`, { title: query }, {
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