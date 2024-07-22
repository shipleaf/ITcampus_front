import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Logo from './Logo';
import { CiSearch } from "react-icons/ci";
import DropdownMenu from './DropdownMenu';
import LoginModal from '../login/LoginModal';

const GuestHeaderComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
`;

const LogoContainer = styled.div`
  flex-shrink: 0;
`;

const MenuBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
  & div {
    margin-right: 10px;
    margin-left: 10px;
    font-size: 18px;
    font-weight: 500;

    & span:hover {
      border-bottom: 1px solid #000;
      cursor: pointer;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  padding-right: 30px;
`;

const SearchBar = styled.div`
  height: 30px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid #00ACEE;

  & input {
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

const LoginButton = styled.div`
  width: 30%;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    width: 100px;
    height: 100%;
    border: none;
    box-shadow: 0 0 0 0.5px #000;
    border-radius: 10px;
    background-color: #fff;
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }
  }
`;

const DropdownMenuContainer = styled.div`
  width: 100%;
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  background-color: #fff;
`;

Modal.setAppElement('#root'); // 모달을 렌더링하는 앱 요소 설정

function GuestHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scroll when modal is open
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'unset'; // Enable scroll when modal is closed
  };

  return (
    <div>
      <GuestHeaderComp>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <MenuBar
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div>
            <span>기업 소개</span>
          </div>
          <div>
            <span>IT 자격증</span>
          </div>
          <div>
            <span>지원 사업</span>
          </div>
          <div>
            <span>채용 공고</span>
          </div>
          <div>
            <span>커뮤니티</span>
          </div>
        </MenuBar>
        <HeaderRight>
          <SearchBar>
            <CiSearch style={{ color: '#00ACEE' }} size={25} />
            <input
              type='text'
            />
          </SearchBar>
          <LoginButton>
            <button onClick={openModal}>로그인</button>
          </LoginButton>
        </HeaderRight>
      </GuestHeaderComp>
      <DropdownMenuContainer show={showDropdown}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}>
        <DropdownMenu />
      </DropdownMenuContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false} // Prevent closing modal by clicking outside
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1001,
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            borderRadius: '10px',
            padding: '10px',
            border: '3px solid #00ACEE',
          },
        }}
      >
        <LoginModal closeModal={closeModal} />
      </Modal>
    </div>
  );
}

export default GuestHeader;
