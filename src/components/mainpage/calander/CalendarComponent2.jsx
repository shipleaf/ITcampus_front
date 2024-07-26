import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import '../../../style/customCalendar.css';
import { useRecoilValue } from 'recoil';
import { filterState } from '../../../state/atoms';
import { fetchEvents } from '../../../APIs/CalendarDetailAPI';
import CalendarDetail from './CalendarDetail'; // CalendarDetail 가져오기

const CalendarComponent = forwardRef(({ onDateClick }, ref) => {
    const calendarRef = useRef(null);
    const filters = useRecoilValue(filterState);
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [detailPosition, setDetailPosition] = useState({ top: 0, left: 0 });

    useImperativeHandle(ref, () => ({
        next: () => {
            if (calendarRef.current) {
                const calendarApi = calendarRef.current.getApi();
                calendarApi.next();
            }
        },
        prev: () => {
            if (calendarRef.current) {
                const calendarApi = calendarRef.current.getApi();
                calendarApi.prev();
            }
        }
    }));

    const handleDateClick = (info) => {
        console.log(info.dayEl)
        if (!info.dayEl) {
            console.error("Day element is not defined.");
            return;
        }

        const calendarRect = calendarRef.current.el.getBoundingClientRect();
        console.log(calendarRect);
        const cellRect = info.dayEl.getBoundingClientRect();
        const detailWidth = 448; // CalendarDetail의 너비

        // 화면에 맞춰 위치 조정
        const left = cellRect.left - detailWidth < 0 ? cellRect.right : cellRect.left - detailWidth;
        const top = cellRect.top - calendarRect.top;

        setDetailPosition({ top, left });
        setSelectedDate(info.dateStr);
        onDateClick(info.dateStr);
    };

    const renderEventContent = (eventInfo) => {
        const shouldHideEvent =
            (!filters.event_recruit && eventInfo.event.extendedProps.whatis === 'recruitmentNotice') ||
            (!filters.event_license && eventInfo.event.extendedProps.whatis === 'qualification') ||
            (!filters.event_support && eventInfo.event.extendedProps.whatis === 'studentSupport');

        return (
            <div className="custom-event-content" style={{
                backgroundColor: eventInfo.event.backgroundColor,
                display: shouldHideEvent ? 'none' : 'block'
            }}>
                <span style={{ color: '#fff', fontWeight: '700', fontSize: '12px' }}>
                    {eventInfo.event.title}
                </span>
            </div>
        );
    };

    const renderDayCellContent = (dayCellContent) => {
        return dayCellContent.dayNumberText.replace('일', ''); // '일' 제거
    };

    const hideExtraWeeks = () => {
        setTimeout(() => {
            const calendarApi = document.querySelector('.fc-daygrid-body');
            const weeks = calendarApi.querySelectorAll('table.fc-scrollgrid-sync-table tbody tr');
            weeks.forEach((week, index) => {
                if (index >= 5) {
                    week.classList.add('hidden-week');
                }
            });
        }, 0);
    };

    useEffect(() => {
        hideExtraWeeks();
    }, []);

    const colorSchemes = useRef({
        recruitmentNotice: ['#AE55B4', '#69306D', '#441F47'],
        qualification: ['#78A9F7', '#4285F4', '#09419A'],
        studentSupport: ['#70D7A7', '#33B679', '#1F6F4A']
    }).current;

    let colorCounters = useRef({
        recruitmentNotice: 0,
        qualification: 0,
        studentSupport: 0
    }).current;

    const getColor = useCallback((whatis) => {
        const colors = colorSchemes[whatis];
        const counter = colorCounters[whatis]++;
        return colors[counter % colors.length];
    }, [colorSchemes, colorCounters]);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const data = await fetchEvents();
                console.log("Fetched data:", data);
                const formattedEvents = data.map(event => {
                    if (!event.key || !event.title || !event.whatis || !event.startdate || !event.enddate) {
                        console.error("Event object is missing required properties:", event);
                        return null; // 잘못된 이벤트 객체는 무시
                    }

                    return {
                        key: event.key,
                        title: event.title,
                        whatis: event.whatis,
                        start: event.startdate,
                        end: event.enddate,
                        backgroundColor: getColor(event.whatis)
                    };
                }).filter(event => event !== null); // null 값은 필터링
                console.log("Formatted events:", formattedEvents);
                setEvents(formattedEvents);
            } catch (error) {
                console.error(`이벤트 데이터를 가져오는 데 실패했습니다: ${error.message}`);
                alert(`이벤트 데이터를 가져오는 데 실패했습니다: ${error.message}`);
            }
        };

        loadEvents();
    }, [getColor]);

    return (
        <div className="container">
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={false} // 헤더 비활성화
                height="85vh"
                dateClick={handleDateClick}
                events={events}
                eventOrder="start,-duration,allDay,title"
                displayEventTime={false}
                eventContent={renderEventContent}
                locales={[koLocale]}
                locale="ko"
                titleFormat={{ month: 'long' }} // '7월' 형태로 표시
                dayCellContent={renderDayCellContent} // 날짜 타일에서 '일' 제거
                viewDidMount={hideExtraWeeks}
            />
            {selectedDate && (
                <CalendarDetail
                    style={{ top: detailPosition.top, left: detailPosition.left }}
                    date={selectedDate}
                />
            )}
        </div>
    );
});

export default CalendarComponent;
