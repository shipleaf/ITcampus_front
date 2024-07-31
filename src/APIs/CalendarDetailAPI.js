import axiosInstance from "./axiosInstance";

export const fetchEvents = async () => {
    try {
        console.log("불러오는 중...")
        const response = await axiosInstance.get(`${API_URL}/api/main`);
        console.log(response)

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }

        if (response.status >= 400 && response.status < 500) {
            throw new Error('잘못된 요청입니다.');
        }

        if (response.status >= 500) {
            throw new Error('서버에서 오류가 발생했습니다.');
        }
    } catch (error) {
        if (error.response) {
            throw new Error(`Error: ${error.response.status}`);
        } else if (error.request) {
            throw new Error('서버가 응답하지 않습니다.');
        } else {
            throw new Error(`에러: ${error.message}`);
        }
    }
};

export const fetchMyEvents = async () => {
    try {
        console.log("불러오는 중...")
        const response = await axiosInstance.get(`${API_URL}/api/my`); 
        console.log(response)

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }

        if (response.status >= 400 && response.status < 500) {
            throw new Error('잘못된 요청입니다.');
        }

        if (response.status >= 500) {
            throw new Error('서버에서 오류가 발생했습니다.');
        }
    } catch (error) {
        if (error.response) {
            throw new Error(`Error: ${error.response.status}`);
        } else if (error.request) {
            throw new Error('서버가 응답하지 않습니다.');
        } else {
            throw new Error(`에러: ${error.message}`);
        }
    }
};