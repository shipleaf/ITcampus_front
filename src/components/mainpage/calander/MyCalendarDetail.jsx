import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FcDepartment, FcConferenceCall } from "react-icons/fc";
import { PiCertificateDuotone } from "react-icons/pi";
import { FaSquare } from "react-icons/fa";
import { useRecoilValue } from 'recoil';
import { myEventState } from '../../../state/atoms'

const CalendarDetailDiv = styled.div`
    position: absolute;
    z-index: 12000;
    animation: ${(props) => props.animate ? 'slideInFromRight 0.2s ease-out' : 'none'};
    width: 448px;
    height: 700px;
    max-height: 700px;
    box-shadow: -5px 3px 20px 5px #aaa;
    border-radius: 10px;
    background-color: white;
    opacity: 1;
    overflow: hidden;
`;

const ContentContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
`;

const Toc = styled.div`
    width: 100%;
    font-family: "Noto Sans KR", sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ddd;
    margin-top: 8px;

    & span{
        margin-left: 5px;
    }
`;
const Content = styled.div`
    width: 100%;
    font-family: "Noto Sans KR", sans-serif;
    box-sizing: border-box;
    padding-left: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    & div{
        cursor: pointer;
        color: ${(props) => props.color || '#000'};
    }
`
const Schedule = styled.div`
    width: 100%;
    margin-left: 10px;
`

const DragButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5%;
    background-color: #f0f0f0;
    cursor: move;

    & div{
        font-weight: 500;
        font-size: 15px;
        margin-left: 10px;
        font-family: Jua, sans-serif;
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 30px;
    color: #777;
    cursor: pointer;
    margin-right: 5px;
`;

const ScrollableContent = styled.div`
    height: calc(100% - 5%);
    overflow: auto;
`;

const MyCalendarDetail = ({ style, date, animate, onClose }) => {
    const detailRef = useRef(null);
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const ClickedDate = `${year} 년 ${month} 월 ${day} 일`;
    const events = useRecoilValue(myEventState);

    const navigate = useNavigate();

    const goToAbout = (address) => {
        navigate(`/${address}`);
    };

    const formatDateTime = (dateTimeString) => {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        const date = new Date(dateTimeString);
        date.setHours(date.getHours() + 9); // 9시간 더해줌
        return date.toLocaleString('ko-KR', options).replace(',', '');
    };

    const isEventWithinDateRange = (event) => {
        const startDate = new Date(event.start);
        const endDate = new Date(event.end);
        return dateObj >= startDate && dateObj <= endDate;
    };

    const getFilteredAndSortedEvents = (eventType) => {
        return events
            .filter(event => event.whatis === eventType && isEventWithinDateRange(event))
            .sort((a, b) => new Date(a.start) - new Date(b.start));
    };

    useEffect(() => {
        const handleMouseDown = (e) => {
            const detailElement = detailRef.current;
            const shiftX = e.clientX - detailElement.getBoundingClientRect().left;
            const shiftY = e.clientY - detailElement.getBoundingClientRect().top;

            const moveAt = (pageX, pageY) => {
                let newX = pageX - shiftX;
                let newY = pageY - shiftY;

                const minX = 0;
                const minY = 0;
                const maxX = window.innerWidth - detailElement.offsetWidth;
                const maxY = window.innerHeight - detailElement.offsetHeight;

                if (newX < minX) newX = minX;
                if (newX > maxX) newX = maxX;
                if (newY < minY) newY = minY;
                if (newY > maxY) newY = maxY;

                detailElement.style.left = `${newX}px`;
                detailElement.style.top = `${newY}px`;
            };

            const onMouseMove = (e) => {
                moveAt(e.pageX, e.pageY);
            };

            document.addEventListener('mousemove', onMouseMove);

            document.onmouseup = () => {
                document.removeEventListener('mousemove', onMouseMove);
                document.onmouseup = null;
            };
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const dragButton = detailRef.current.querySelector('.drag-button');
        dragButton.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            dragButton.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <CalendarDetailDiv ref={detailRef} style={style} animate={animate}>
            <DragButton className="drag-button">
                <div>{ClickedDate}</div>
                <CloseButton onClick={onClose}>&times;</CloseButton>
            </DragButton>
            <ScrollableContent>
                <ContentContainer>
                    <Toc>
                        <FcDepartment size={20} />
                        <span>취업 공고</span>
                    </Toc>
                    {getFilteredAndSortedEvents('recruitmentNotice').map(event => (
                        <Content key={event.key}>
                            <Title color={event.backgroundColor}>
                                <FaSquare size={6} style={{ color: '#777' }} />
                                <div style={{ margin: '10px' }} onClick={() => goToAbout(`recruitmentdetails/${event.key}`)}>{event.title}</div>
                            </Title>
                            <Schedule>지원 시작일: {formatDateTime(event.start)}</Schedule>
                            <Schedule>지원 마감일: {formatDateTime(event.endtime)}</Schedule>
                        </Content>
                    ))}
                </ContentContainer>
                <ContentContainer>
                    <Toc>
                        <FcConferenceCall size={20} />
                        <span>지원 프로그램</span>
                    </Toc>
                    {getFilteredAndSortedEvents('studentSupport').map(event => (
                        <Content key={event.key}>
                            <Title color={event.backgroundColor}>
                                <FaSquare size={6} style={{ color: '#777' }} />
                                <div style={{ margin: '10px' }} onClick={() => goToAbout(`governmentsupportdetails/${event.key}`)}>{event.title}</div>
                            </Title>
                            <Schedule>신청 시작일: {formatDateTime(event.start)}</Schedule>
                            <Schedule>신청 마감일: {formatDateTime(event.endtime)}</Schedule>
                        </Content>
                    ))}
                </ContentContainer>
                <ContentContainer>
                    <Toc>
                        <PiCertificateDuotone style={{ color: '#3788d8' }} size={20} />
                        <span>자격증 일정</span>
                    </Toc>
                    {getFilteredAndSortedEvents('qualification').map(event => (
                        <Content key={event.key}>
                            <Title color={event.backgroundColor}>
                                <FaSquare size={6} style={{ color: '#777' }} />
                                <div style={{ margin: '10px' }} onClick={() => goToAbout(`licensedetails/${event.key}`)}>{event.title}</div>
                            </Title>
                            <Schedule>신청 시작일: {formatDateTime(event.start)}</Schedule>
                            <Schedule>신청 마감일: {formatDateTime(event.endtime)}</Schedule>
                        </Content>
                    ))}
                </ContentContainer>
            </ScrollableContent>
        </CalendarDetailDiv>
    );
};

MyCalendarDetail.propTypes = {
    style: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    animate: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default MyCalendarDetail;
