import React from 'react';
import GuestHeader from '../components/header/GuestHeader';
import RecruitDetailHeader from '../components/modules/recruit/RecruitDetailHeader';
import ScrapButtonDiv from '../components/modules/recruit/ScrapButtonDiv';
import RecruitDetailBody from '../components/modules/recruit/RecruitDetailBody';
import RecruitCompanyInfo from '../components/modules/recruit/RecruitCompanyInfo';
import styled from 'styled-components';
import RecruitNotice from '../components/modules/recruit/RecruitNotice';
import OtherAnnouncements from '../components/modules/recruit/OtherAnnouncements';
import RelatedRecruitments from '../components/modules/recruit/RelatedRecruitments';

const ScrapContainer = styled.div`
    width: 8%;
`

// import { fetchJobDetails } from '../api/RecruitAPI';

// function RecruitmentDetails() {
//     const [jobDetailData, setJobDetailData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const getJobDetails = async () => {
//             try {
//                 const data = await fetchJobDetails();
//                 setJobDetailData(data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getJobDetails();
//     }, []);

//     if (loading) {
//         return <div>로딩중.</div>;
//     }

//     if (error) {
//         return <div>에러: {error.message}</div>;
//     }
function RecruitmentDetails() {

    const jobDetailData = {
        key: 1,
        title: "우아한 형제들 하반기 채용[프론트엔드 개발자]",
        startdate: '2024-07-18T10:00:00',
        enddate: '2024-07-20T12:00:00',
        resultdate: '2024-07-30T12:00:00',
        pic1: 'https://daoift3qrrnil.cloudfront.net/content_images/images/000/170/334/original/%EC%83%81%ED%92%88%EB%B3%B8%EB%B6%80_%EA%B2%BD%EB%A0%A5_2%EA%B1%B4%28%EC%95%95%EC%B6%95%29.jpg?1676946275',
        pic2: 'https://lh6.googleusercontent.com/proxy/QOLaf-JFQW4OEdcF3MDil4DQATl_KcKwGsTYX9CVkFo9qjKegC4kycCaMcRac0ajms32uLCosT1LqV21o08sGabCn1FYFPeAlYaZdnxOg4Ty6h-CmumrBg   ',
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
        <div style={{ backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column' }}>
            <GuestHeader />
            <RecruitDetailHeader jobDetailData={jobDetailData} />
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <ScrapContainer>
                    <ScrapButtonDiv />
                </ScrapContainer>
            </div>
            <RecruitDetailBody jobDetailData={jobDetailData} />
            <RecruitCompanyInfo jobDetailData={jobDetailData} />
            <RecruitNotice jobDetailData={jobDetailData}/>
            <OtherAnnouncements />
            <RelatedRecruitments />
        </div>
    )
}

export default RecruitmentDetails;
