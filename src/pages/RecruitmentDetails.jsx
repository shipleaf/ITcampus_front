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
import { fetchRecruitmentDetails } from '../APIs/RecruitmentAPI'; // 주석 처리
import { Element } from 'react-scroll';

const ScrapContainer = styled.div`
    width: 8%;
`;



function RecruitmentDetails() {
    const [jobDetailData, setJobDetailData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isLoggedIn = useRecoilValue(loginState);

    const { key } = useParams();

    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const getJobDetails = async () => {
            try {
                const data = await fetchRecruitmentDetails(key); 
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
                    <ScrapButtonDiv apiEndpoint={`/api/recruitmentNoticeInfo/${key}/scrap`} isScrapped={jobDetailData.isScrapped} type="recruit" />
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
