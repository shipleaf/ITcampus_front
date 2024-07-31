import axiosInstance from "./axiosInstance";

export const fetchCompanyDetails = async (companyId) => {
    try {
        const response = await axiosInstance.get(`/api/company/${companyId}`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('회사 정보 불러오기 실패:', error);
        throw error;
    }
};

export const fetchCompanyList = async () => {
    try {
        const response = await axiosInstance.get(`/api/company`, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('회사 정보 불러오기 실패:', error);
        throw error;
    }
};

export const searchCompany = async (query) => {
    try {
        const response = await axiosInstance.post(`/api/company/search`, { title: query }, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        return response;
    } catch (error) {
        console.error('기업 정보 불러오기 실패:', error);
        throw error;
    }
};
