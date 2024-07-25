import React from 'react';
import Logo from '../header/Logo';
import styled from 'styled-components';
import '../../style/smallCalendar.css';
import calendarImage from '../../assets/smallcalendar.png';
import EventContainer from './calander/EventContainer';
import MyEventContainer from './calander/MyEventContainer';

const LogoContainer = styled.div`
  width: 100%;
  height: 84px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 4px;
`;

const CalendarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

function Sidebar() {
  return (
    <div style={{ height: '100%', width: '100%', }}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ImageContainer>
        <CalendarImage src={calendarImage} alt='Calendar' />
      </ImageContainer>
      <EventContainer />
      <MyEventContainer />
    </div>
  );
}

export default Sidebar;
