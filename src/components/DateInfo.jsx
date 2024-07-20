import React from 'react';
import styled from 'styled-components';

const InfoHeader = styled.div`
    height: 25px;
    padding-bottom: 10px;
    font-size: 15px;
    font-weight: 550;
`;

function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
}

function DateInfo({ dateDetails, selectedDate }) {
    return (
        <div>
            <InfoHeader>{formatDate(selectedDate)} 일정</InfoHeader>
            <hr />
            <div className="jobPostings">
                <h2>채용 공고</h2>
                {dateDetails.filter(detail => detail.index === 1).map(detail => (
                    <p key={detail.key}>{detail.title}</p>
                ))}
            </div>
            <div className='grantProgram'>
                <h2>지원 사업</h2>
                {dateDetails.filter(detail => detail.index === 2).map(detail => (
                    <p key={detail.key}>{detail.title}</p>
                ))}
            </div>
            <div className="certificationSchedule">
                <h2>자격증 일정</h2>
                {dateDetails.filter(detail => detail.index === 3).map(detail => (
                    <p key={detail.key}>{detail.title}</p>
                ))}
            </div>
        </div>
    );
}

export default DateInfo;
