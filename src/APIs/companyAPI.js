import axiosInstance from "./axiosInstance";

export const fetchCompanyDetails = async (companyId) => {
    try {
        const response = await axiosInstance.get(`/api/company/${companyId}`)
        if (200 <= response.status && response.status < 300){
            return response;
        }else{
            throw new Error('서버 연결 실패');
        }

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
        console.log('함수 들어옴')
        console.log(query);
        const response = await axiosInstance.post(`/api/company/search`, { companyName: query }, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        console.log(response);
        console.log('요청 처리됨')
        return response;
    } catch (error) {
        console.error('기업 정보 불러오기 실패:', error);
        throw error;
    }
};
