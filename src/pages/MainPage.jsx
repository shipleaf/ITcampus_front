import React, { useState } from 'react';
import styled from 'styled-components';
import CalendarComponent from '../components/calander/CalendarComponent2';
import DateInfo from '../components/calander/DateInfo';
import Carousel from '../components/mainpage/Carousel'
import StudyBoard from '../components/mainpage/StudyBoard';
import ScrapRankings from '../components/mainpage/ScrapRankings';
import NearDeadlineJobs from '../components/mainpage/NearDeadlineJobs';
import GuestHeader from '../components/header/GuestHeader';
import MyCalendar from '../components/calander/MyCalendar';
import { CSSTransition } from 'react-transition-group';
import '../style/MainPage.css';

const ContentsContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #eff5ff;
  grid-template-columns: 1000px 330px;
  grid-template-rows: auto auto;
  gap: 10px 20px;
  padding: 20px;
  grid-template-areas: 
    "carousel scrap"
    "studyboard scrap";
`;

const CarouselArea = styled.div`
  grid-area: carousel;
  width: 1000px;
  margin: 0 auto;
`;

const StudyBoardArea = styled.div`
  grid-area: studyboard;
  width: 1000px;
  margin: 0 auto;
`;

const ScrapRankingsArea = styled.div`
  grid-area: scrap;
`;

const NearDeadlineJobsArea = styled.div`
  grid-area: scrap;
  margin-top: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding-bottom: 100px;
`;

const CalendarContainer = styled.div`
  min-width: 1000px;
  box-sizing: border-box;
  z-index: 1000;
`;

const DateInfoContainer = styled.div`
  width: 400px;
  box-sizing: border-box;
  padding: 20px;
  z-index: 300;
`;

const CalendarTitle = styled.div`
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  border: none;
  color: ${(props) => (props.active ? '#000': '#999')};
  border-bottom: ${(props) => (props.active ? '1px solid #000' : 'none')};
`;

function MainPage() {
  const [dateDetails, setDateDetails] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showSecondCalendar, setShowSecondCalendar] = useState(false);

  const allDetails = [
    {
      key: 1,
      index: 1,
      title: "카카오 모집 공고",
      start: '2024-07-18T10:00:00',
      end: '2024-07-20T12:00:00',
    },
    {
      key: 2,
      index: 2,
      title: "세종 학생 지원 프로그램",
      start: '2024-07-19T09:00:00',
      end: '2024-07-23T10:00:00',
    },
    {
      key: 3,
      index: 3,
      title: "IT 자격증 필기 시험",
      start: '2024-07-18T08:00:00',
      end: '2024-07-30T09:00:00',
    },
    {
      key: 4,
      index: 3,
      title: "IT 자격증 필기 시험",
      start: '2024-07-18T08:00:00',
      end: '2024-07-30T09:00:00',
    },
    {
      key: 5,
      index: 1,
      title: "토스 채용 공고",
      start: '2024-07-18T08:00:00',
      end: '2024-07-30T09:00:00',
    },
    {
      key: 6,
      index: 2,
      title: "국가 지원 프로그램",
      start: '2024-07-18T08:00:00',
      end: '2024-07-30T09:00:00',
    },
    {
      key: 7,
      index: 3,
      title: "IT 자격증 필기 시험",
      start: '2024-07-18T08:00:00',
      end: '2024-07-30T09:00:00',
    }
  ];

  const handleDateClick = (date) => {
    const clickedDate = new Date(date);
    if (selectedDate && clickedDate.toDateString() === new Date(selectedDate).toDateString()) {
      setSelectedDate(null);
      setDateDetails([]);
    } else {
      const filteredDetails = allDetails.filter(detail => {
        const startDate = new Date(detail.start);
        const endDate = new Date(detail.end);
        return clickedDate >= startDate && clickedDate <= endDate;
      });
      setSelectedDate(date);
      setDateDetails(filteredDetails);
    }
  };

  return (
    <div>
      <GuestHeader />
      <ContentsContainer>
        <CarouselArea>
          <Carousel />
        </CarouselArea>
        <StudyBoardArea>
          <StudyBoard />
        </StudyBoardArea>
        <ScrapRankingsArea>
          <ScrapRankings />
          <NearDeadlineJobsArea>
            <NearDeadlineJobs />
          </NearDeadlineJobsArea>
        </ScrapRankingsArea>
      </ContentsContainer>
      <CalendarTitle>주요 일정</CalendarTitle>
      <ButtonContainer>
        <Button active={!showSecondCalendar} onClick={() => setShowSecondCalendar(false)}>전체 일정</Button>
        <Button active={showSecondCalendar} onClick={() => setShowSecondCalendar(true)}>나의 일정</Button>
      </ButtonContainer>
      <Row>
        <CalendarContainer>
          {showSecondCalendar ? (
            <MyCalendar onDateClick={handleDateClick} />
          ) : (
            <CalendarComponent onDateClick={handleDateClick} />
          )}
        </CalendarContainer>
        <CSSTransition
          in={dateDetails.length > 0}
          timeout={300}
          classNames="slide"
          unmountOnExit
        >
          <DateInfoContainer>
            <DateInfo dateDetails={dateDetails} selectedDate={selectedDate} />
          </DateInfoContainer>
        </CSSTransition>
      </Row>
    </div>
  );
}

export default MainPage;
