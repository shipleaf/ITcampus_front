import React from 'react';
import styled from 'styled-components';
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../header/Logo';

const Header = styled.div`
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SidebarToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

const NavigationButtons = styled.div`
  display: flex;
  align-items: center;
`;

const NavButton = styled.button`
  margin: 0 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

function CalendarHeader({ onPrevMonth, onNextMonth }) {
  return (
    <Header>
      <SidebarToggleContainer>
        <RxHamburgerMenu size={20} />
        <Logo />
      </SidebarToggleContainer>
      <NavigationButtons>
        <NavButton onClick={onPrevMonth}>Prev Month</NavButton>
        <NavButton onClick={onNextMonth}>Next Month</NavButton>
      </NavigationButtons>
    </Header>
  );
}

export default CalendarHeader;
