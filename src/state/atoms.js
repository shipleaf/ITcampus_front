import { atom } from 'recoil';

export const loginState = atom({
    key: 'loginState',
    default: false,
});

export const sideState = atom({
    key: 'sideState',
    default: true,
});

// 로그인 상태를 전역에서 관리할 수 있는 recoil 라이브러리 사용해봄