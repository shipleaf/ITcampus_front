import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CompanyInfo = styled.div`
    width: 60%;
    padding: 30px;
    margin-top: 50px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    background-color: #fff;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = styled.div`
    color: #000;
    font-weight: 600;
`;

const LogoContainer = styled.div`
    margin-top: 30px;
`;

const CompanyInfoBody = styled.div`
    display: flex;
    margin-top: 20px;
`;

const InfoContainer = styled.div`
    width: 50%;
`;

const Toc = styled.div`
    color: #999;
    width: 100px;
`;


const Contents = styled.div`
    margin-left: 10px;
`;

const InfoItem = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const RecruitTerm = styled.div`
`
const TermItem = styled.div`
    display: flex;
    margin-bottom: 10px;
    
`
const ButtonContainer = styled.div`
    margin-top: 30px;
`

const RecruitButton = styled.button`
    width: 200px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: #00ACEE;
    height: 90px;
    color: #fff;
    font-size: 12px;
`

function RecruitNotice({ jobDetailData }) {
    if (!jobDetailData) {
        return null;
    }
    const recruitStart = new Date(jobDetailData.startdate).toLocaleDateString();
    const recruitEnd = new Date(jobDetailData.enddate).toLocaleDateString();
    const recruitResult = new Date(jobDetailData.resultdate).toLocaleDateString();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <CompanyInfo>
                <HeaderContainer>
                    <Header>
                        접수 기간 / 방법
                    </Header>
                </HeaderContainer>
                <LogoContainer>
                    <TermItem>
                        <Toc>접수 기간</Toc>
                        <RecruitTerm>
                            {recruitStart} ~ {recruitEnd}
                        </RecruitTerm>
                    </TermItem>
                    <TermItem>
                        <Toc>결과 발표</Toc>
                        <RecruitTerm>
                            {recruitResult}
                        </RecruitTerm>
                    </TermItem>
                </LogoContainer>
                <CompanyInfoBody>
                    <InfoContainer>
                        <InfoItem>
                            <Toc>모집 분야</Toc>
                            <Contents>{jobDetailData.recruit_part}</Contents>
                        </InfoItem>
                        <InfoItem>
                            <Toc>모집 인원</Toc>
                            <Contents></Contents>
                        </InfoItem>
                    </InfoContainer>
                </CompanyInfoBody>
                <ButtonContainer>
                    <RecruitButton>취업플랫폼에서 지원하기</RecruitButton>
                </ButtonContainer>
            </CompanyInfo>
        </div>
    );
}

export default RecruitNotice;
