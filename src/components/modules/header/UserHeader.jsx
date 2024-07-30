import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Logo from '../../header/Logo';
import DropdownMenu from '../../header/DropdownMenu';
import { FaRegBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import UserDropdownMenu from './UserDropdownMenu';

const GuestHeaderComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #ddd;
`;

const LogoContainer = styled.div`
  flex-shrink: 0;
`;

const MenuBar = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
  & div {
    margin-right: 10px;
    margin-left: 10px;
    font-size: 1vw; /* Use viewport width for responsive font size */
    font-weight: 400;
    font-family: "Noto Sans KR", sans-serif;

    @media (max-width: 1350px) {
      font-size: 1vw; /* Adjust font size for smaller screens */
    }

    @media (max-width: 768px) {
      font-size: 1.5vw; /* Adjust font size for smaller screens */
    }

    @media (max-width: 480px) {
      font-size: 1%.5; /* Adjust font size for even smaller screens */
    }

    & span:hover {
      border-bottom: 1px solid #000;
      cursor: pointer;
    }
  }
`;

const HeaderRight = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;
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

  &:hover {
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

function UserHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.target) &&
      userDropdownRef.current && !userDropdownRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
      setShowUserDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <GuestHeaderComp>
        <div style={{width: '60%', display: 'flex', justifyContent: 'space-between'}}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <MenuBar
            ref={dropdownRef}
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
            {/* <SearchBar>
              <CiSearch style={{ color: '#00ACEE' }} size={25} />
              <input type='text' />
            </SearchBar> */}
            <NoticeButton>
              <FaRegBell style={{ color: '#00ACEE' }} size={25} />
            </NoticeButton>
            <UserButton onClick={() => setShowUserDropdown(!showUserDropdown)}>
              <FaRegUserCircle style={{ color: '#bbb' }} size={30} />
              <div style={{ fontSize: '12px', marginLeft: '5px' }}>김선엽</div>
              <VscTriangleDown size={10} />
              {showUserDropdown && (
                <div ref={userDropdownRef}>
                  <UserDropdownMenu />
                </div>
              )}
            </UserButton>
          </HeaderRight>
        </div>
      </GuestHeaderComp>
      <DropdownMenuContainer
        show={showDropdown}
        ref={dropdownRef}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <DropdownMenu />
      </DropdownMenuContainer>
    </div>
  );
}

export default UserHeader;
