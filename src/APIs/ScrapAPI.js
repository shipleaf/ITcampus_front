import axiosInstance from "./axiosInstance";

export const licenseScrap = async (apiEndpoint, action) => {
    try {
        const response = await axiosInstance.post(apiEndpoint, { action });
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 요청 실패사유:', error);
        throw error;
    }
};


export const companyScrap = async (apiEndpoint, action) => {
    try {
        const response = await axiosInstance.post(apiEndpoint, { action });
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 요청 실패사유:', error);
        throw error;
    }
};

export const supportScrap = async (apiEndpoint, action) => {
    try {
        const response = await axiosInstance.post(apiEndpoint, { action });
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 요청 실패사유:', error);
        throw error;
    }
};

export const recuitScrap = async (apiEndpoint, action) => {
    try {
        const response = await axiosInstance.post(apiEndpoint, { action });
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 요청 실패사유:', error);
        throw error;
    }
};
