import React from 'react';
import styled from 'styled-components';
import CalendarComponent from '../components/CalendarComponent2';
import DateInfo from '../components/DateInfo';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CalendarContainer = styled.div`
  min-width: 1000px;
  box-sizing: border-box;
`;

const DateInfoContainer = styled.div`
    width: 400px;
  box-sizing: border-box;
  /* display: none; */
  padding: 20px;
`;



function MainPage() {
  return (
    <Row>
      <CalendarContainer>
        <CalendarComponent />
      </CalendarContainer>
      <DateInfoContainer>
        <DateInfo />
      </DateInfoContainer>
    </Row>
  );
}

export default MainPage;
