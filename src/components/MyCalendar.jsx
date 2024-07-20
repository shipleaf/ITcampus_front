import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import '../style/customCalendar.css';

function MyCalendar({ onDateClick }) {
    const handleDateClick = (info) => {
        onDateClick(info.dateStr);
    };

    const renderEventContent = (eventInfo) => {
        return (
            <div className="custom-event-content">
                <span>{eventInfo.event.title}</span>
            </div>
        );
    };

    const renderDayCellContent = (dayCellContent) => {
        return dayCellContent.dayNumberText.replace('일', ''); // '일' 제거
    };

    return (
        <div className="container">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: 'prev',
                    center: 'title',
                    end: 'next'
                }}
                height="85vh"
                dateClick={handleDateClick}
                events={[
                    { title: 'ㅋㅋ', start: '2024-07-18T10:00:00', end: '2024-07-20T12:00:00', color: '#f4cdac' },
                    { title: '엘지', start: '2024-07-19T09:00:00', end: '2024-07-23T10:00:00', color: '#aee1ce' },
                    { title: 'Github', start: '2024-07-18T08:00:00', end: '2024-07-30T09:00:00', color: '#e7a1a1' }
                ]}
                eventOrder="start,-duration,allDay,title"
                displayEventTime={false}
                eventContent={renderEventContent}
                locales={[koLocale]}
                locale="ko"
                titleFormat={{ month: 'long' }} // '7월' 형태로 표시
                dayCellContent={renderDayCellContent} // 날짜 타일에서 '일' 제거
            />
        </div>
    );
}

export default MyCalendar;
