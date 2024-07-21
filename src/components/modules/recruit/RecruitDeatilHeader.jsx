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
`

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
`

const Body = styled.div`
  font-size: 16px;
  display: flex;
  width: 100%;
`;

const ContentsContainer = styled.div`
`

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
`

function RecruitDetailHeader() {
    const jobDetailData = {
        key: 1,
        title: "우아한 형제들 하반기 채용[프론트엔드 개발자]",
        startdate: '2024-07-18T10:00:00',
        enddate: '2024-07-20T12:00:00',
        resultdate: '2024-07-30T12:00:00',
        pic1: 'https://daoift3qrrnil.cloudfront.net/content_images/images/000/170/334/original/%EC%83%81%ED%92%88%EB%B3%B8%EB%B6%80_%EA%B2%BD%EB%A0%A5_2%EA%B1%B4%28%EC%95%95%EC%B6%95%29.jpg?1676946275',
        pic2: 'https://cdn.spotvnews.co.kr/news/photo/202405/681149_1047749_1528.jpg',
        pic3: '',
        pic4: '',
        pic5: '',
        body: '현대자동차에서 채용 공고를 시작합니다.',
        experience: '신입',
        education: '대졸',
        stack: ['React', 'Typescript', 'Javascript'],
        qualification: ['조기출근, 연장근무 가능자', '서버 배포 경험이 있는자', '협업 경험이 많은자'],
        preferences: ['React와 TypeScript를 이용한 실제 서비스를 해본 경험이 있는자', '개발 전문직 3년차'],
        work_type: '전문직',
        salary: '협의 후 결정',
        location: '세종시',
        work_time: '주 5일 (월~금) | 오전 9:00 ~ 오후 18:00',
        recruit_part: '',
        duties: '',
        key_skills: ['협동심', '유대감', '창의성'],
        recruit_num: '00명',
        link: 'https://www.saramin.co.kr/zf_user/',
        companyname: '(주)우아한 형제들'
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div style={{ fontSize: '20px', fontWeight: '500', width: '62%', padding: '15px', marginLeft: '20px', fontWeight: '700' }}>채용공고</div>
            <hr style={{width: '62%', height: '1px', backgroundColor: '#000', marginTop: '0'}}/>
            <RecruitDetailContainer>
                <CompanyName>
                    {jobDetailData.companyname}
                </CompanyName>
                <Title>
                    {jobDetailData.title}
                </Title>
                <hr style={{width: '95%'}}/>
                <Body>
                    <JobRequirements>
                        <div style={{fontSize: '18px', fontWeight: '550', textAlign: 'center', marginBottom: '25px'}}>지원자격</div>
                        <RequirementItem>
                            <Toc>경력</Toc>
                            <Contents style={{ color: '#00ACEE', fontWeight: '500'}}>{jobDetailData.experience}</Contents>
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
                        <div style={{fontSize: '18px', fontWeight: '550', textAlign: 'center', marginBottom: '25px'}}>근무여건</div>
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
