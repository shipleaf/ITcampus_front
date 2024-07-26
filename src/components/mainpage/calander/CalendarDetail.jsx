import React from 'react';
import styled from 'styled-components';

const DayDetail = styled.div`
    width: 448px;
    height: 480px;
    border-radius: 8px;
    border: 1px solid #999;
    position: absolute;
    background-color: white;
    z-index: 1000;
`;

const CalendarDetail = ({ style, date }) => {
    return (
        <DayDetail style={style}>
            <p>{date}</p>
        </DayDetail>
    );
};

export default CalendarDetail;
