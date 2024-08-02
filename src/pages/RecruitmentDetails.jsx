import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from "recoil";
import { loginState } from "../state/atoms";
import RecruitDetailHeader from '../components/modules/recruit/RecruitDetailHeader';
import ScrapButtonDiv from '../components/modules/recruit/ScrapButtonDiv';
import RecruitDetailBody from '../components/modules/recruit/RecruitDetailBody';
import RecruitCompanyInfo from '../components/modules/recruit/RecruitCompanyInfo';
import styled from 'styled-components';
import RecruitNotice from '../components/modules/recruit/RecruitNotice';
import OtherAnnouncements from '../components/modules/recruit/OtherAnnouncements';
import RelatedRecruitments from '../components/modules/recruit/RelatedRecruitments';
// import { fetchRecruitmentDetails } from '../APIs/RecruitmentAPI'; // 주석 처리
import { Element } from 'react-scroll';

const ScrapContainer = styled.div`
    width: 8%;
`;

const dummyData = {
    recruitmentNoticeInfo: {
        key: 1,
        title: "2024년 상반기 신입사원 채용 공고",
        startdate: "2024-08-01T00:00:00.000Z",
        enddate: "2024-08-31T23:59:59.000Z",
        resultdate: "2024-09-15T00:00:00.000Z",
        pic1: "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11288734&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wMjIwX251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006",
        pic2: "https://media.istockphoto.com/id/520700958/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%BD%83-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=",
        pic3: "pic3.jpg",
        pic4: "pic4.jpg",
        pic5: "pic5.jpg",
        body: "우리 회사에서는 2024년 상반기 신입사원을 모집합니다. 많은 지원 바랍니다.",
        experience: "신입 가능",
        education: "학사 이상",
        stack: [
            "JavaScript",
            "Node.js",
            "React"
        ],
        qualification: [
            "관련 학과 졸업자"
        ],
        preferences: [
            "유관 경력자 우대"
        ],
        work_type: "정규직",
        salary: "연봉 3,500만원 이상",
        location: "서울특별시",
        work_time: "주 5일, 09:00 ~ 18:00",
        recruit_part: "개발, 디자인, 마케팅",
        duties: "웹 개발, UI/UX 디자인, 마케팅 전략 수립",
        key_skills: [
            "문제 해결 능력",
            "팀워크",
            "커뮤니케이션"
        ],
        recruit_num: 3,
        link: "https://example.com/apply",
        companyname: "ABC Corporation",
        scrapCount: 0,
        isScrapped: true
    },
    company: {
        companyID: 4,
        companyName: "ABC Corporation",
        establish: "2023-01-01T00:00:00.000Z",
        logo: "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
        pic1: "pic1.png",
        pic2: "pic2.png",
        pic3: "pic3.png",
        pic4: "pic4.png",
        pic5: "pic5.png",
        body: "This is a test company.",
        track: [
            "Test Track"
        ],
        stack: [
            "Test Stack"
        ],
        welfare: "Test Welfare",
        salary: "Test Salary",
        location: "Test Location",
        employee: "100",
        link: "http://testcompany.com",
        revenue: "1000000"
    },
    otherRecruitmentNotices: [
        {
            key: 13,
            title: "2024년 상반기 신입사원 채용 공고33",
            body: "우리 회사에서는 2024년 상반기 신입사원을 모집합니다. 많은 지원 바랍니다.",
            experience: "신입 가능",
            education: "학사 이상",
            stack: [
                "JavaScript",
                "Node.js",
                "React"
            ],
            work_type: "정규직",
            companyname: "ABC Corporation",
            startdate: "2024-08-01T00:00:00.000Z",
            enddate: "2024-08-31T23:59:59.000Z",
            pic1: "pic1.jpg",
            recruit_part: "개발, 디자인, 마케팅",
            scrapCount: 0
        },
    ],
    relatedNotices: [
        {
            key: 1,
            title: "2024년 상반기 신입사원 채용 공고",
            startdate: "2024-08-01T00:00:00.000Z",
            enddate: "2024-08-31T23:59:59.000Z",
            resultdate: "2024-09-15T00:00:00.000Z",
            pic1: "pic1.jpg",
            pic2: "pic2.jpg",
            pic3: "pic3.jpg",
            pic4: "pic4.jpg",
            pic5: "pic5.jpg",
            body: "우리 회사에서는 2024년 상반기 신입사원을 모집합니다. 많은 지원 바랍니다.",
            experience: "신입 가능",
            education: "학사 이상",
            stack: [
                "JavaScript",
                "Node.js",
                "React"
            ],
            qualification: [
                "관련 학과 졸업자"
            ],
            preferences: [
                "유관 경력자 우대"
            ],
            work_type: "정규직",
            salary: "연봉 3,500만원 이상",
            location: "서울특별시",
            work_time: "주 5일, 09:00 ~ 18:00",
            recruit_part: "개발, 디자인, 마케팅",
            duties: "웹 개발, UI/UX 디자인, 마케팅 전략 수립",
            key_skills: [
                "문제 해결 능력",
                "팀워크",
                "커뮤니케이션"
            ],
            recruit_num: 3,
            link: "https://example.com/apply",
            companyname: "ABC Corporation",
            scrapCount: 0
        }
    ]
};

function RecruitmentDetails() {
    const [jobDetailData, setJobDetailData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isLoggedIn = useRecoilValue(loginState);

    const { key } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        const getJobDetails = async () => {
            try {
                // const data = await fetchRecruitmentDetails(key); // 주석 처리
                const data = dummyData; // 더미 데이터 사용
                console.log("데이터 : ", data);
                setJobDetailData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getJobDetails();
    }, [key]);

    if (loading) {
        return <div>로딩중...</div>;
    }

    if (error) {
        return <div>에러: {error.message}</div>;
    }

    if (!jobDetailData) {
        return <div>데이터를 불러오지 못했습니다.</div>;
    }

    const { recruitmentNoticeInfo, company, otherRecruitmentNotices, relatedNotices } = jobDetailData;

    const topOtherNotices = otherRecruitmentNotices?.sort((a, b) => b.key - a.key).slice(0, 2) || [];

    return (
        <div style={{ backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column' }}>
            {isLoggedIn ? (
                <UserHeader />
            ) : (
                <GuestHeader />
            )}
            <RecruitDetailHeader jobDetailData={recruitmentNoticeInfo} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ScrapContainer>
                    <ScrapButtonDiv apiEndpoint={`/api/recruitmentNoticeInfo/${key}/scrap`} isScrapped={jobDetailData.isScrapped} type="recruit"/>
                </ScrapContainer>
            </div>
            <RecruitDetailBody jobDetailData={recruitmentNoticeInfo} />
            <Element name="company">
                <RecruitCompanyInfo company={company} />
            </Element>
            <Element name="period">
                <RecruitNotice jobDetailData={recruitmentNoticeInfo} />
            </Element>
            <OtherAnnouncements otherJobData={topOtherNotices} />
            <RelatedRecruitments relatedNotices={relatedNotices} />
        </div>
    );
}

export default RecruitmentDetails;
