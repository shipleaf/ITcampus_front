import axiosInstance from './axiosInstance';

export const fetchRecruitmentList = async () => {
    try {
        const response = await axiosInstance.get(`/api/recruitmentNoticeInfo`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('채용공고 리스트 정보 불러오기 실패:', error);
        throw error;
    }
};

export const fetchRecruitmentDetails = async (recruitId) => {
    try {
        const response = await axiosInstance.get(`/api/recruitmentNoticeInfo/${recruitId}`,{
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response.data;
    } catch (error) {
        console.error('채용공고 상세 정보 불러오기 실패:', error);
        throw error;
    }
};

export const searchRecruit = async (query) => {
    try {
        const response = await axiosInstance.post(`/api/recruitmentNoticeInfo/search`, { title: query }, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('채용공고 정보 불러오기 실패:', error);
        throw error;
    }
};