import axiosInstance from "./axiosInstance";

const API_URL = 'https://mjcback.duckdns.org';

export const licenseScrap = async (key) => {
    try {
        const response = await axiosInstance.post(`${API_URL}/api/qualificationInfo/${key}/scrap`);
        console.log(`${API_URL}/api/qualificationInfo/${key}/scrap`)
        console.log(response.status)
        return response;
    } catch (error) {
        console.error('로그인 실패사유:', error);
        throw error;
    }
};

export const companyScrap = async (key) => {
    try {
        const response = await axiosInstance.post(`${API_URL}/api/qualificationInfo/${key}/scrap`);
        console.log(`${API_URL}/api/qualificationInfo/${key}/scrap`)
        console.log(response.status)
        return response;
    } catch (error) {
        console.error('로그인 실패사유:', error);
        throw error;
    }
};

export const supportScrap = async (key) => {
    try {
        const response = await axiosInstance.post(`${API_URL}api/studentSupportInfo/${key}/scrap`);
        console.log(response.status)
        return response;
    } catch (error) {
        console.error('로그인 실패사유:', error);
        throw error;
    }
};
