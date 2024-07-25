import React from 'react';
import Logo from '../header/Logo';
import styled from 'styled-components';
import '../../style/smallCalendar.css';
import calendarImage from '../../assets/smallcalendar.png';
import EventFilter from './EventFilter';

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
  object-fit: contain; /* 이미지가 컨테이너 크기에 맞게 조절되도록 설정 */
`;

function Sidebar() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ImageContainer>
        <CalendarImage src={calendarImage} alt='Calendar' />
      </ImageContainer>
      <EventFilter />
    </div>
  );
}

export default Sidebar;
