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
  default: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
});

export const sideState = atom({
  key: 'sideState',
  default: false,
});

export const mainEventState = atom({
  key: 'eventDataState',
  default: [],
})

export const myEventState = atom({
  key: 'myEventDataState',
  default: [],
})

export const sidebarState = atom({
  key: 'sidebarState',
  default: true,
});

export const toggleState = atom({
  key: 'toggleState',
  default: false,
});

export const currentDateState = atom({
  key: 'currentDateState',
  default: new Date(),
});

export const smallSelectedDateState = atom({
  key: 'smallSelectedDateState',
  default: '',
});

export const username = atom({
  key: 'username',
  default: '',
})