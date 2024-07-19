import React, { useState } from 'react';
import styled from 'styled-components';

const InfoHeader = styled.div`
    height: 25px;
    padding-bottom: 10px;
    font-size: 15px;
    font-weight: 550;
`

function DateInfo() {
    const [dateDetails, setDateDetails] = useState([
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
    ]);

    return (
        <div>
            <InfoHeader>7월 19일 일정</InfoHeader>
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
