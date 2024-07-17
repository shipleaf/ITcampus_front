import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../style/calendar.css';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

function CalendarComponent() {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([
        { date: new Date(2024, 6, 18, 10, 0), title: 'test1', color: '#ffcc00' },
        { date: new Date(2024, 6, 18, 14, 0), title: 'test2', color: '#ff5733' },
        { date: new Date(2024, 6, 19, 9, 0), title: 'test3', color: '#33ff57' },
        { date: new Date(2024, 6, 19, 17, 0), title: 'test4', color: '#3357ff' },
    ]);

    const handleDateChange = (date) => {
        setDate(date);
    };

    const formatDay = (locale, date) => {
        return date.getDate();
    };

    const renderTileContent = ({ date, view }) => {
        if (view === 'month') {
            const dailyEvents = events
                .filter(e => e.date.toDateString() === date.toDateString())
                .sort((a, b) => a.date - b.date); // 시간 순으로 정렬

            return (
                <div>
                    {dailyEvents.map((event, index) => (
                        <div key={index} className="event-bar" style={{ backgroundColor: event.color }}>
                            {event.title}
                        </div>
                    ))}     
                </div>
            );
        }
    };

    return (
        <CalendarWrapper>
            <Calendar 
                onChange={handleDateChange} 
                value={date} 
                calendarType="gregory"
                formatDay={formatDay}
                tileContent={renderTileContent}
            />
        </CalendarWrapper>
    );
}

export default CalendarComponent;
