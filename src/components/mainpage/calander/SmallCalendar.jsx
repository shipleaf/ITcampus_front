import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import { smallSelectedDateState } from '../../../state/atoms';
import { useRecoilState } from 'recoil';

const SmallCalendarContainer = styled.div`
  height: 100%; /* 부모 요소의 높이 100% */
  display: flex;
  align-items: center;

  .react-calendar {
    width: 85%;
    height: 100%; /* SmallCalendarContainer의 높이 100% */
    max-width: 350px;
    margin: auto;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    border: none;
  }

  .react-calendar__navigation__arrow {
    font-size: 20px;
    width: 24px !important;
    height: 24px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .react-calendar__navigation__label {
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
    border-radius: 10px;
  } 

  .react-calendar__tile {
    width: 30px !important;
    height: 30px !important;
    text-align: center;
    margin-bottom: 10px !important;
    line-height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    & > abbr {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 11px;
    }
  }

  .react-calendar__tile--now {
    background: #f0f0f0;
    color: #000;
  }

  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }

  .react-calendar__tile--active .react-calendar__month-view__days__day--weekend {
    background: #006edc;
    color: white;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
    &:focus {
        color: #f0f0f0;
    }
  }

  .react-calendar__tile--hasActive {
    background: #e6e6e6;
  }

  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(1) {
    order: 2; /* 월요일을 마지막으로 배치 */
  }
  .react-calendar__month-view__weekdays__weekday:nth-child(2) {
    order: 3; /* 화요일을 첫 번째로 배치 */
  }
  .react-calendar__month-view__weekdays__weekday:nth-child(3) {
    order: 4; /* 수요일을 두 번째로 배치 */
  }
  .react-calendar__month-view__weekdays__weekday:nth-child(4) {
    order: 5; /* 목요일을 세 번째로 배치 */
  }
  .react-calendar__month-view__weekdays__weekday:nth-child(5) {
    order: 6; /* 금요일을 네 번째로 배치 */
  }
  .react-calendar__month-view__weekdays__weekday:nth-child(6) {
    order: 7; /* 토요일을 다섯 번째로 배치 */
  }
  .react-calendar__month-view__weekdays__weekday:nth-child(7) {
    order: 1; /* 일요일을 여섯 번째로 배치 */
  }
`;

const SmallCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [smallClickedDate, setSmallClickedDate] = useRecoilState(smallSelectedDateState);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleClickDay = (value) => {
    const year = value.getFullYear();
    const month = value.getMonth() + 1;
    const day = value.getDate();
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSmallClickedDate(formattedDate);
    console.log(smallClickedDate);
  };

  const formatDay = (locale, date) => {
    return date.getDate().toString(); // 날짜에 '일'을 제거하고 숫자만 반환
  };

  return (
    <SmallCalendarContainer>
      <Calendar
        onChange={handleDateChange}
        onClickDay={handleClickDay} // 날짜 클릭 시 호출되는 이벤트 핸들러 추가
        value={date}
        locale="ko-KR"
        next2Label={null}
        prev2Label={null}
        formatDay={formatDay}
        calendarType="ISO 8601" // 월요일을 주의 시작으로 설정
      />
    </SmallCalendarContainer>
  );
};

export default SmallCalendar;
