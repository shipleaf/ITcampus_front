import React, { useEffect } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import AppRouter from './Router';
import { loginState } from './state/atoms';

const App = () => {
  const ResetLoginState = () => {
    const setLoginState = useSetRecoilState(loginState);

    useEffect(() => {
      const isSessionActive = sessionStorage.getItem('isSessionActive');
      if (!isSessionActive) {
        setLoginState(false);
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
        sessionStorage.setItem('isSessionActive', 'true');
      }
    }, [setLoginState]);

    return null;
  };

  return (
    <RecoilRoot>
      <ResetLoginState />
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;
