import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Logo from '../../header/Logo';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import UserDropdownMenu from './UserDropdownMenu';
import { currentDateState } from '../../../state/atoms';
import { useRecoilValue } from 'recoil';
import Cookies from 'js-cookie';
import { username } from '../../../state/atoms';
import { useRecoilState } from 'recoil';
import { getUsername } from '../../../APIs/loginAPI';
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
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
`;

const UserButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  max-width: 100px;
  position: relative;
  &:hover {
    background-color: #f0f0f0;
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
  &:focus {
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
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

const Option = styled.option``;

function CalendarUserHeader({ onPrevMonth, onNextMonth, toggleSidebar }) {
  const [searchType, setSearchType] = useState('채용공고');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const currentDate = useRecoilValue(currentDateState);
  const allCookies = Cookies.get();
  const [name, setName] = useRecoilState(username);
  
  console.log(allCookies);
  
  const navigate = useNavigate();

  const searchBarRef = useRef(null);
  const userButtonRef = useRef(null);
  const dropdownRef = useRef(null);

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
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !userButtonRef.current.contains(event.target)) {
      setShowUserDropdown(false);
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
    const fetchUsername = async () => {
      try {
        const response = await getUsername();
        console.log(response.data)
        setName(response.data.name);
      } catch (error) {
        console.error("Username 불러오기 실패:", error);
      }
    };

    fetchUsername();
  }, [setName]);


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
      <div style={{ display: 'flex' }}>
        <SearchContainer>
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
        </SearchContainer>
        <UserButton ref={userButtonRef} onClick={() => setShowUserDropdown(!showUserDropdown)}>
          <FaRegUserCircle style={{ color: '#bbb' }} size={30} />
          <div style={{ fontSize: '12px', marginLeft: '5px' }}>{name}</div>
          <VscTriangleDown size={10} />
          {showUserDropdown && <UserDropdownMenu ref={dropdownRef} />}
        </UserButton>
      </div>
    </Header>
  );
}

export default CalendarUserHeader;
