import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { loginState } from '../../state/atoms';
import SignInComponent from './SignInComponent';
import SignUpComponent from './SignUpComponent';
import { IoClose } from 'react-icons/io5';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

function LoginModal({ closeModal }) {
  const [isSignUp, setIsSignUp] = useState(false); // 상태 추가
  const [, setIsLoggedIn] = useRecoilState(loginState);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ModalContainer>
      <CloseButton onClick={closeModal}>
        <IoClose />
      </CloseButton>
      {isSignUp ? (
        <SignUpComponent toggleComponent={() => setIsSignUp(false)} />
      ) : (
        <SignInComponent toggleComponent={() => setIsSignUp(true)} handleLogin={handleLogin} closeModal={closeModal} />
      )}
    </ModalContainer>
  );
}

export default LoginModal;
