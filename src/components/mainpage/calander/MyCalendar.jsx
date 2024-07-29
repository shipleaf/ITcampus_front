import React, { useEffect, useRef, useImperativeHandle, forwardRef, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import '../../../style/customCalendar.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentDateState, filterState, myEventState } from '../../../state/atoms';
import { fetchMyEvents } from '../../../APIs/CalendarDetailAPI';

const MyCalendar = forwardRef(({ onDateClick }, ref) => {
    const calendarRef = useRef(null);
    const filters = useRecoilValue(filterState);
    const [myEvents, setMyEvents] = useRecoilState(myEventState);
    const [, SetCurrentDate] = useRecoilState(currentDateState);

    useImperativeHandle(ref, () => ({
        next: () => {
            if (calendarRef.current) {
                const calendarApi = calendarRef.current.getApi();
                calendarApi.next();
                SetCurrentDate(calendarApi.getDate())
            }
        },
        prev: () => {
            if (calendarRef.current) {
                const calendarApi = calendarRef.current.getApi();
                calendarApi.prev();
                SetCurrentDate(calendarApi.getDate())
            }
        }
    }));

    const handleDateClick = (info) => {
        if (!info.dayEl) {
            console.error("Day element is not defined.");
            return;
        }

        const cellRect = info.dayEl.getBoundingClientRect();
        const detailWidth = 448;
        const gap = 10;

        const left = cellRect.left - detailWidth - gap < 0 ? cellRect.right + gap : cellRect.left - detailWidth - gap;
        const top = 186;

        const clickedDateEvents = myEvents.filter(event => event.start === info.dateStr);

        onDateClick(info.dateStr, { top, left }, clickedDateEvents);
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
            const calendarBody = document.querySelector('.fc-daygrid-body');
            if (calendarBody) {
                const weeks = calendarBody.querySelectorAll('table.fc-scrollgrid-sync-table tbody tr');
                const weekCount = weeks.length;
                weeks.forEach((week, index) => {
                    if (index >= 5 && weekCount > 5) {
                        week.classList.add('hidden-week');
                    } else {
                        week.classList.remove('hidden-week');
                    }
                });
            }
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
                const data = await fetchMyEvents();
                console.log("Fetched data:", data);
                const formattedEvents = data.map(event => {
                    if (!event.key || !event.title || !event.whatis || !event.startdate || !event.enddate) {
                        console.error("Event object is missing required properties:", event);
                        return null;
                    }

                    const endDate = new Date(event.enddate);
                    endDate.setDate(endDate.getDate() + 1);

                    return {
                        key: event.key,
                        title: event.title,
                        whatis: event.whatis,
                        start: event.startdate,
                        end: endDate.toISOString().split('T')[0],
                        endtime: endDate, // enddate에 하루를 더한 값
                        backgroundColor: getColor(event.whatis)
                    };
                }).filter(event => event !== null);
                console.log("Formatted events:", formattedEvents);
                setMyEvents(formattedEvents);
            } catch (error) {
                console.error(`이벤트 데이터를 가져오는 데 실패했습니다: ${error.message}`);
                alert(`이벤트 데이터를 가져오는 데 실패했습니다: ${error.message}`);
            }
        };

        loadEvents();
    }, [getColor, setMyEvents]);

    return (
        <div className="container">
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={false}
                height="85vh"
                dateClick={handleDateClick}
                events={myEvents}
                eventOrder="start,-duration,allDay,title"
                displayEventTime={false}
                eventContent={renderEventContent}
                locales={[koLocale]}
                locale="ko"
                titleFormat={{ month: 'long' }}
                dayCellContent={renderDayCellContent}
                viewDidMount={hideExtraWeeks}
                datesSet={hideExtraWeeks} // 새롭게 추가된 부분
            />
        </div>
    );
});

export default MyCalendar;
