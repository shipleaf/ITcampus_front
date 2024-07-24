import React from 'react'
import styled from 'styled-components'

const DeadlinenJobsContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #eaedf4;
    padding: 10px;
`

const DeadlinenJobsHeader = styled.div`
    font-size: 15px;
    color: #373f57;
    font-weight: bold;
    left: 15px;
    top: 15px;
    margin-bottom: 10px;
    padding: 10px;
`

const DeadlinenJobsContents = styled.div`
    color: #373f57;
    margin-top: 15px;
`

const CompanyItem = styled.div`
    margin: 8px 0;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #999;
`

const Deadline = styled.span`
    display: flex;
    align-items: center;
    color: #999;
`

function NearDeadlineJobs() {
    const jobListings = [
        { id: 1, name: '우아한 형제들', deadline: '2024-07-21' },
        { id: 2, name: '쿠팡', deadline: '2024-07-20' },
        { id: 3, name: '토스 엔지니어', deadline: '2024-07-22' }
    ];

    // 종료 날짜가 가까운 순으로 정렬
    const sortedJobListings = jobListings.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    return (
        <div>
            <DeadlinenJobsContainer>
                <DeadlinenJobsHeader>
                    지금 핫한 공고
                </DeadlinenJobsHeader>
                <hr style={{width: '85%'}}/>
                <DeadlinenJobsContents>
                    {sortedJobListings.map((job, index) => (
                        <CompanyItem key={job. id}>
                            <div>
                                {index + 1}. {job.name}
                            </div>
                            <Deadline>
                                ~ {job.deadline}
                            </Deadline>
                        </CompanyItem>
                    ))}
                </DeadlinenJobsContents>
            </DeadlinenJobsContainer>
        </div>
    )
}

export default NearDeadlineJobs;
