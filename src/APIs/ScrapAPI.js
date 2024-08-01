import axiosInstance from "./axiosInstance";

export const licenseScrap = async (apiEndpoint) => {
    try {
        const response = await axiosInstance.post(apiEndpoint);
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 요청 실패사유:', error);
        throw error;
    }
};

export const licenseUnScrap = async (apiEndpoint) => {
    try {
        const response = await axiosInstance.delete(apiEndpoint);
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 취소 요청 실패사유:', error);
        throw error;
    }
};

export const companyScrap = async (apiEndpoint) => {
    try {
        const response = await axiosInstance.post(apiEndpoint);
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 요청 실패사유:', error);
        throw error;
    }
};

export const companyUnScrap = async (apiEndpoint) => {
    try {
        const response = await axiosInstance.delete(apiEndpoint);
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 취소 요청 실패사유:', error);
        throw error;
    }
};

export const supportScrap = async (apiEndpoint) => {
    try {
        const response = await axiosInstance.post(apiEndpoint);
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 요청 실패사유:', error);
        throw error;
    }
};

export const supportUnScrap = async (apiEndpoint) => {
    try {
        const response = await axiosInstance.delete(apiEndpoint);
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 취소 요청 실패사유:', error);
        throw error;
    }
};

export const recruitScrap = async (apiEndpoint) => {
    try {
        const response = await axiosInstance.post(apiEndpoint);
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 요청 실패사유:', error);
        throw error;
    }
};

export const recruitUnScrap = async (apiEndpoint) => {
    try {
        const response = await axiosInstance.delete(apiEndpoint);
        console.log(response.status);
        return response;
    } catch (error) {
        console.error('스크랩 취소 요청 실패사유:', error);
        throw error;
    }
};
