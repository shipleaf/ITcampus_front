import React from 'react';
import styled from 'styled-components';

const RecruitDetailContainer = styled.div`
  padding: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;   
  background-color: #fff;
`;

const CompanyName = styled.div`
    color: #333;
    width: 95%;
`;

const Title = styled.div`
  font-size: 24px;
  margin: 10px 0;
  width: 95%;
`;

const Toc = styled.div`
    color: #999;
    width: 100px; /* 고정된 너비 설정 */
    text-align: right;
    padding-right: 10px;
    box-sizing: border-box;
    flex-shrink: 0;
`;

const Body = styled.div`
  font-size: 16px;
  display: flex;
  width: 100%;
`;

const ContentsContainer = styled.div`
`;

const JobRequirements = styled(ContentsContainer)`
  margin-top: 20px;
  width: 50%;
`;

const RequirementItem = styled(ContentsContainer)`
  display: flex;
  margin-bottom: 10px;
  position: relative;
`;

const WorkingEnvironment = styled.div`
  margin-top: 20px;
  width: 50%;
`;

const Contents = styled.div`
    margin-left: 30px;
    text-align: left;
    flex-grow: 1;
`;

function RecruitDetailHeader({ jobDetailData }) {
    if (!jobDetailData) {
        return null;
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', width: '62%', padding: '15px', marginLeft: '20px' }}>채용공고</div>
            <hr style={{ width: '62%', height: '1px', backgroundColor: '#000', marginTop: '0' }} />
            <RecruitDetailContainer>
                <CompanyName>
                    {jobDetailData.companyname}
                </CompanyName>
                <Title>
                    {jobDetailData.title}
                </Title>
                <hr style={{ width: '95%' }} />
                <Body>
                    <JobRequirements>
                        <div style={{ fontSize: '18px', fontWeight: '550', textAlign: 'center', marginBottom: '25px' }}>지원자격</div>
                        <RequirementItem>
                            <Toc>경력</Toc>
                            <Contents style={{ color: '#00ACEE', fontWeight: '500' }}>{jobDetailData.experience}</Contents>
                        </RequirementItem>
                        <RequirementItem>
                            <Toc>학력</Toc>
                            <Contents style={{ color: '#00ACEE', fontWeight: '500' }}>{jobDetailData.education}</Contents>
                        </RequirementItem>
                        <RequirementItem>
                            <Toc>기술</Toc>
                            <Contents>{jobDetailData.stack.join(', ')}</Contents>
                        </RequirementItem>
                        <RequirementItem>
                            <Toc>핵심역량</Toc>
                            <Contents>{jobDetailData.key_skills.join(', ')}</Contents>
                        </RequirementItem>
                        <RequirementItem>
                            <Toc>우대사항</Toc>
                            <Contents>{jobDetailData.preferences.join(', ')}</Contents>
                        </RequirementItem>
                    </JobRequirements>
                    <WorkingEnvironment>
                        <div style={{ fontSize: '18px', fontWeight: '550', textAlign: 'center', marginBottom: '25px' }}>근무여건</div>
                        <RequirementItem>
                            <Toc>근무 형태</Toc>
                            <Contents style={{ color: '#00ACEE', fontWeight: '500' }}>{jobDetailData.work_type}</Contents>
                        </RequirementItem>
                        <RequirementItem>
                            <Toc>급여</Toc>
                            <Contents>{jobDetailData.salary}</Contents>
                        </RequirementItem>
                        <RequirementItem>
                            <Toc>지역</Toc>
                            <Contents>{jobDetailData.location}</Contents>
                        </RequirementItem>
                        <RequirementItem>
                            <Toc>근무 시간</Toc>
                            <Contents>{jobDetailData.work_time}</Contents>
                        </RequirementItem>
                    </WorkingEnvironment>
                </Body>
            </RecruitDetailContainer>
        </div>
    );
}

export default RecruitDetailHeader;
