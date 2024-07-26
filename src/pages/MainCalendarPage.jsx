import React, { useRef } from 'react';
import CalendarComponent from '../components/mainpage/calander/CalendarComponent2';
import Sidebar from '../components/mainpage/Sidebar';
import styled from 'styled-components';
import CalendarHeader from '../components/modules/header/CalendarHeader';

const SidebarContainer = styled.div`
  width: 264px; // Sidebar의 고정 너비 설정
  height: 100%; 
`;

const MainContent = styled.div`
  display: flex;
  flex: 1; // 나머지 공간을 차지하도록 설정
  overflow: hidden; // 내부 요소가 넘치지 않도록 설정
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // 화면 전체 높이에 맞추기
  overflow: hidden; // 스크롤 방지
`;

function MainCalendarPage() {
  const calendarRef = useRef(null);

  const handlePrevMonth = () => {
    if (calendarRef.current) {
      calendarRef.current.prev();
    }
  };

  const handleNextMonth = () => {
    if (calendarRef.current) {
      calendarRef.current.next();
    }
  };

  const handleDateClick = (dateStr) => {
    console.log("Clicked date:", dateStr);
  };

  return (
    <MainContainer>
      <CalendarHeader onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} style={{ height: '64px' }} />
      <MainContent>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <CalendarComponent ref={calendarRef} onDateClick={handleDateClick} style={{ flex: 1 }} />
      </MainContent>
    </MainContainer>
  );
}

export default MainCalendarPage;
