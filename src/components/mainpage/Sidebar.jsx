import React, { useState } from 'react';
import styled from 'styled-components';
import EventContainer from './calander/EventContainer';
import MyEventContainer from './calander/MyEventContainer';
import { Toggle } from './ToggleButton';
import { useNavigate } from 'react-router-dom';
import SmallCalendar from './calander/SmallCalendar';
import Modal from 'react-modal';
import LoginModal from '../login/LoginModal';
import { useRecoilValue, useRecoilState } from 'recoil';
import { loginState, toggleState } from '../../state/atoms';
import { IoIosCheckmark } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const ImageContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 20px;
`;

const ToggleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-bottom: 10px;
`;

const ConnectGoogle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 80%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 15px;
  cursor: pointer;
  & span {
    margin-left: 5px;
    font-family: "Noto Sans KR", sans-serif;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ToggleLabel = styled.span`
  margin-right: 22px;
  font-size: 14px;
  color: ${(props) => (props.isOn ? '#444' : '#999')};
`;

const Title = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  padding-left: 30px;
  padding-top: 15px;
`;

const ListContainer = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & div {
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const GoToList = styled.div`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  padding-left: 25px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  & div {
    margin-left: 5px;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;

Modal.setAppElement('#root');

function Sidebar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const auth = useRecoilValue(loginState);
  const [isOn, setIsOn] = useRecoilState(toggleState);

  const navigate = useNavigate();

  const goToAbout = (address) => {
    navigate(`/${address}`);
  };

  const toggleHandler = () => {
    if (!auth) {
      setModalIsOpen(true);
    } else {
      setIsOn(!isOn);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://mjcback.duckdns.org/api/auth';
  }

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div style={{ height: '100%', width: '100%', borderTop: '1px solid #ddd', overflow: 'auto' }}>
      <ImageContainer>
        <SmallCalendar />
      </ImageContainer>
      <ToggleButtonContainer>
        <ToggleLabel isOn={isOn}>마이 캘린더</ToggleLabel>
        <Toggle isOn={isOn} toggleHandler={toggleHandler} />
      </ToggleButtonContainer>
      {isOn && (
        <ConnectGoogle>
          <Button onClick={handleGoogleLogin}>
            <FcGoogle size={25} />
            <span>구글 캘린더 연동하기</span>
          </Button>
        </ConnectGoogle>
      )}
      {isOn ? <MyEventContainer /> : <EventContainer />}
      <ListContainer>
        <Title>정보 모아보기</Title>
        <GoToList onClick={() => goToAbout('companylist')}>
          <IoIosCheckmark size={20} />
          <div>기업 정보</div>
        </GoToList>
        <GoToList onClick={() => goToAbout('recruitlist')}>
          <IoIosCheckmark size={20} />
          <div>채용 공고</div>
        </GoToList>
        <GoToList onClick={() => goToAbout('governmentlist')}>
          <IoIosCheckmark size={20} />
          <div>지원 프로그램</div>
        </GoToList>
        <GoToList onClick={() => goToAbout('licenselist')}>
          <IoIosCheckmark size={20} />
          <div>자격증 일정</div>
        </GoToList>
        <GoToList onClick={() => goToAbout('informationlist')}>
          <IoIosCheckmark size={20} />
          <div>커뮤니티</div>
        </GoToList>
      </ListContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
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

export default Sidebar;
