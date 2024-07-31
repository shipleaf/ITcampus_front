import axiosInstance from "./axiosInstance";

export const googleLogin = async () => {
    try {
        const response = await axiosInstance.get(`/api/auth`);
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            throw new Error(`Unexpected status code: ${response.status}`);
        }
    } catch (error) {
        console.error('구글 로그인 실패사유:', error);
        throw error;
    }
}

