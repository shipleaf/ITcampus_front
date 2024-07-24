import React from 'react';
import CalendarComponent from '../components/mainpage/calander/CalendarComponent2';
import Header from '../components/header/Header';
import Sidebar from '../components/mainpage/Sidebar';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  flex: 1; // SidebarContainer가 나머지 공간을 차지하도록 설정
  overflow: hidden; // 내부 요소가 넘치지 않도록 설정
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // 화면 전체 높이에 맞추기
  overflow: hidden; // 스크롤 방지
`;

function MainCalendarPage() {
  return (
    <MainContainer>
      <Header style={{ height: '64px' }} />
      <SidebarContainer>
        <Sidebar />
        <CalendarComponent />
      </SidebarContainer>
    </MainContainer>
  );
};

export default MainCalendarPage;
