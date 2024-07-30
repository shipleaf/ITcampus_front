

// const API_URL = 'http://223.130.135.136:8080';  // 프로토콜 추가

// const API_URL = 'http://223.130.153.246:8080'; // 동근

// const API_URL = 'http://localhost:8080';

const API_URL = 'https://mjcback.duckdns.org';

export const fetchProfile = async () => {

    try {
        const response = await fetch(`${API_URL}/api/profile`);

        if (response.status >= 200 && response.status < 300) {
            console.log(response)
            return await response.json();

        } else {
            throw new Error('Failed to fetch profile');
        }
    } catch (error) {
        console.error('내 정보 불러오기 실패:', error);
        throw error;
    }
};
