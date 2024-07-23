import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../header/Logo'
import { CiSearch } from "react-icons/ci";
import DropdownMenu from '../../header/DropdownMenu'
import { FaRegBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import UserDropdownMenu from './UserDropdownMenu';


const GuestHeaderComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #ddd;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
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

const NoticeButton = styled.div`
  width: 10%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

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

const UserButton = styled.button`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  border-radius: 1rem;

  &:hover{
    background-color: #f5f5f5;
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

function GuestHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

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
            <input type='text' />
          </SearchBar>
          <NoticeButton>
            <FaRegBell style={{ color: '#00ACEE' }} size={25} />
          </NoticeButton>
          <UserButton onClick={() => setShowUserDropdown(!showUserDropdown)}>
            <FaRegUserCircle style={{ color: '#bbb' }} size={30} />
            <div style={{ fontSize: '12px', marginLeft: '5px' }}>김선엽</div>
            <VscTriangleDown size={10} />
            {showUserDropdown && <UserDropdownMenu />}
          </UserButton>
        </HeaderRight>
      </GuestHeaderComp>
      <DropdownMenuContainer
        show={showDropdown}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <DropdownMenu />
      </DropdownMenuContainer>
    </div>
  );
}

export default GuestHeader;