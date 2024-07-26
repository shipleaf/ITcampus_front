import { atom } from 'recoil';

export const filterState = atom({
  key: 'filterState',
  default: {
    event_recruit: true,
    event_support: true,
    event_license: true,
  },
});

export const loginState = atom({
  key: 'loginState',
  default: false,
});

export const sideState = atom({
  key: 'sideState',
  default: false,
});
