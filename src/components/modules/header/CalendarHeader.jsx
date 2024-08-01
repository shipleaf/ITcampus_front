import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Logo from '../../header/Logo';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import LoginModal from '../../login/LoginModal';
import Modal from 'react-modal';
import { useRecoilValue } from 'recoil';
import { currentDateState } from '../../../state/atoms';
import { useNavigate } from 'react-router-dom'; 

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const Header = styled.div`
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SidebarToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40%;
`;

const NavigationButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const CurrentDate = styled.div`
  font-size: 20px;
  color: #777;
  display: flex;
  font-family: "Noto Sans KR", sans-serif;
  align-items: center;
  justify-content: center;

  @media (max-width: 980px){
    font-size: 18px;
  }

  @media (max-width: 954px){
    font-size: 16px;
  }

  @media (max-width: 930px){
    font-size: 14px;
  }
`;

const UserButton = styled.div`
  display: flex;
  align-items: center;
`;

const LoginButton = styled.button`
  width: 90px;
  height: 30px;
  font-size: 15px;
  border: 1px solid #999;
  background-color: #fff;
  border-radius: 1rem;
  margin-right: 10px;
  &:hover{
    cursor: pointer;
    background-color: #f0f0f0;
  }
  &:focus{
    outline: none;
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #999;
  justify-content: space-between;
  margin-right: 10px;
  animation: ${({ visible }) => visible ? css`${fadeIn} 0.3s forwards` : css`${fadeOut} 0.3s forwards`};
`;

const SearchButton = styled.button`
  border: none;
  background-color: #fff;
  color: #777;
  margin-right: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Input = styled.input`
  width: 500px;
  border: none;
  &:focus{
    outline: none;
  }
`;

const Select = styled.select`
  width: 20%;
  height: 100%;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  &:focus{
    outline: none;
  }
  &:hover{
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

const Option = styled.option`
`;

Modal.setAppElement('#root');

function CalendarHeader({ onPrevMonth, onNextMonth, toggleSidebar }) {
  const [searchType, setSearchType] = useState('채용공고');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentDate = useRecoilValue(currentDateState);
  const navigate = useNavigate(); 

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const searchBarRef = useRef(null);

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setIsSearchVisible(false);
    }
  };

  const handleSearch = () => {
    if (searchType === 'studentSupport') { 
      navigate(`/governmentlist?query=${searchTerm}`);
    }
    else if(searchType === 'qualification'){
      navigate(`/licenselist?query=${searchTerm}`);
    }
    else if(searchType === 'company'){
      navigate(`/companylist?query=${searchTerm}`);
    }
    else{
      navigate(`/recruitlist?query=${searchTerm}`);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Header>
      <SidebarToggleContainer>
        <Logo />
        <NavigationButtons>
          <NavButton onClick={onPrevMonth}>
            <IoIosArrowBack size={25} />
          </NavButton>
          <CurrentDate>{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월</CurrentDate>
          <NavButton onClick={onNextMonth}>
            <IoIosArrowForward size={25} />
          </NavButton>
        </NavigationButtons>
      </SidebarToggleContainer>
      <UserButton>
        {isSearchVisible ? (
          <SearchBar visible={isSearchVisible} ref={searchBarRef}>
            <HiSearch size={25} style={{ color: '#777' }} />
            <Input
              type='text'
              value={searchTerm}
              onChange={handleSearchTermChange}
              placeholder='원하시는 정보를 검색하세요'
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
            />
            <Select value={searchType} onChange={handleSearchTypeChange}>
              <Option value='recruitmentNotice'>채용공고</Option>
              <Option value='company'>기업정보</Option>
              <Option value='studentSupport'>지원프로그램</Option>
              <Option value='qualification'>자격증일정</Option>
            </Select>
          </SearchBar>
        ) : (
          <SearchButton onClick={toggleSearchBar}>
            <HiSearch size={28} />
          </SearchButton>
        )}
        <LoginButton onClick={openModal}>
          로그인
        </LoginButton>
      </UserButton>
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
    </Header>
  );
}

export default CalendarHeader;
