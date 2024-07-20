import React, { useState } from 'react';
import styled from 'styled-components';
import SignInComponent from './modules/header/SignInComponent';
import SignUpComponent from './modules/header/SignUpComponent';
import Modal from 'react-modal';
import { HiMiniXMark } from "react-icons/hi2";

const ModalOffButton = styled.button`
  background-color: #fff;
  display: flex;
  align-items: center;
  border: none;
  color: #999;

  &:hover{
    color: #000;
  }
`

Modal.setAppElement('#root');

function LoginModal({ closeModal }) {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleComponent = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div>
      {showSignIn ? (
        <SignInComponent toggleComponent={toggleComponent} />
      ) : (
        <SignUpComponent toggleComponent={toggleComponent} />
      )}
      <ModalOffButton onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>
        <HiMiniXMark size={22}/>
      </ModalOffButton>
    </div>
  );
}

export default LoginModal;
