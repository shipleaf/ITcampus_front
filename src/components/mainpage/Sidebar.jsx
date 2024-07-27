import React, { useState } from 'react';
import styled from 'styled-components';
import calendarImage from '../../assets/smallcalendar.png';
import EventContainer from './calander/EventContainer';
import MyEventContainer from './calander/MyEventContainer';
import { Toggle } from './ToggleButton';

const LogoContainer = styled.div`
  width: 100%;
  height: 84px;
  border-top: rgb(218,220,224) 1px solid;
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

const ToggleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-bottom: 10px;
`;

const ToggleLabel = styled.span`
  margin-right: 22px;
  font-size: 14px;
  color: ${(props) => (props.isOn ? '#444' : '#999')};
`;

function Sidebar() {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <LogoContainer />
      <ImageContainer>
        <CalendarImage src={calendarImage} alt='Calendar' />
      </ImageContainer>
      <ToggleButtonContainer>
        <ToggleLabel isOn={isOn}>마이 캘린더</ToggleLabel>
        <Toggle isOn={isOn} toggleHandler={toggleHandler} />
      </ToggleButtonContainer>
      {isOn ? <MyEventContainer /> : <EventContainer />}
    </div>
  );
}

export default Sidebar;
