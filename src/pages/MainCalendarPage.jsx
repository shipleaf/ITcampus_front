import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import CalendarComponent from '../components/mainpage/calander/CalendarComponent2';
import MyCalendar from '../components/mainpage/calander/MyCalendar';
import Sidebar from '../components/mainpage/Sidebar';
import styled from 'styled-components';
import CalendarHeader from '../components/modules/header/CalendarHeader';
import CalendarUserHeader from '../components/modules/header/CalendarUserHeader';
import CalendarDetail from '../components/mainpage/calander/CalendarDetail';
import MyCalendarDetail from '../components/mainpage/calander/MyCalendarDetail';
import { useRecoilState, useRecoilValue } from 'recoil';
import { sidebarState, loginState, toggleState, mainEventState, myEventState} from '../state/atoms';

const SidebarContainer = styled.div`
  width: 264px;
  height: 100%;
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.4s ease-in-out;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

function MainCalendarPage() {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [detailPosition, setDetailPosition] = useState({ top: 0, left: 0 });
  const [showDetail, setShowDetail] = useState(false);
  const [, setEvents] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useRecoilState(sidebarState);
  const isLoggedIn = useRecoilValue(loginState);
  const isOn = useRecoilValue(toggleState);
  const mainEvents = useRecoilValue(mainEventState);
  const myEvents = useRecoilValue(myEventState);

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

  const handleDateClick = (dateStr, position) => {
    setShowDetail(false); // 일시적으로 숨기기
    setTimeout(() => {
      setDetailPosition(position);
      setSelectedDate(dateStr);
      setShowDetail(true);
      console.log("Clicked date:", dateStr);
    }, 10);
  };

  const handleEventsLoad = (loadedEvents) => {
    setEvents(loadedEvents);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <MainContainer>
        {isLoggedIn ? (
          <CalendarUserHeader
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            currentDate={new Date()}
            toggleSidebar={toggleSidebar}
          />
        ) : (
          <CalendarHeader
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            currentDate={new Date()}
            toggleSidebar={toggleSidebar}
          />
        )}
        <MainContent>
          <SidebarContainer isVisible={isSidebarVisible}>
            <Sidebar />
          </SidebarContainer>
          {isOn ? (
            <MyCalendar
              ref={calendarRef}
              onDateClick={handleDateClick}
              onEventsLoad={handleEventsLoad}
              style={{ flex: 1 }}
            />
          ) : (
            <CalendarComponent
              ref={calendarRef}
              onDateClick={handleDateClick}
              onEventsLoad={handleEventsLoad}
              style={{ flex: 1 }}
            />
          )}
        </MainContent>
      </MainContainer>
      {showDetail && selectedDate && ReactDOM.createPortal(
        isOn ? (
          <MyCalendarDetail
            key={selectedDate}
            style={{
              top: detailPosition.top,
              left: detailPosition.left,
              position: 'absolute',
              zIndex: '12000',
            }}
            date={selectedDate}
            animate={true}
            events={myEvents}
            onClose={() => setShowDetail(false)}
          />
        ) : (
          <CalendarDetail
            key={selectedDate}
            style={{
              top: detailPosition.top,
              left: detailPosition.left,
              position: 'absolute',
              zIndex: '12000',
            }}
            date={selectedDate}
            animate={true}
            events={mainEvents}
            onClose={() => setShowDetail(false)}
          />
        ),
        document.body
      )}
    </div>
  );
}

export default MainCalendarPage;