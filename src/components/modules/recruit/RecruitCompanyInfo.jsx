import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from "react-icons/io";
import ScrapButton from '../utilities/ScrapButton';
import { Link } from 'react-router-dom';

const CompanyInfo = styled.div`
    width: 60%;
    padding: 20px;
    margin-top: 50px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
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

const CompanyRecruitAnchor = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #00ACEE;
    cursor: pointer;
`;

const LogoContainer = styled.div`
    margin-top: 30px;
`;

const StyledImage = styled.img`
    max-width: 250px;
    max-height: 300px;
    width: auto;
    height: auto;
    object-fit: contain;
`;

const CompanyInfoBody = styled.div`
    display: flex;
    margin-top: 20px;
`;

const CompanyInfoBodyTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
    display: flex;

`;

const InfoContainer = styled.div`
    width: 50%;
`;

const Toc = styled.div`
    color: #999;
    width: 100px;
`;

const Button = styled(Link)`
    width: 130px;
    color: #999;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 13px;
`

const Contents = styled.div`
    margin-left: 10px;
`;

const InfoItem = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const CompanyScrapButton = styled(ScrapButton)`
`

function RecruitCompanyInfo({ jobDetailData }) {

    const companyInfo = {
        companyID: "1",
        companyName: "Example Corp",
        establish: "2000-01-01T00:00:00.000Z",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-NyElWrGFtPvK8LzFthltftKgPRFM0v0qg&s",
        pic1: "응용 소프트웨어 개발 및 공급업",
        pic2: "김봉진",
        pic3: "example_pic3.png",
        pic4: "example_pic4.png",
        pic5: "example_pic5.png",
        body: "Example Corp is a leading company in the tech industry.",
        track: "Software Development",
        stack: "JavaScript, Node.js, React",
        welfare: "Health insurance, Paid time off",
        salary: "Competitive",
        location: "San Francisco, CA",
        employee: "500",
        link: "https://www.woowahan.com/",
        revenue: "$10M",
        scrapCount: "1"
    };

    const establishDate = new Date(companyInfo.establish).toLocaleDateString();


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <CompanyInfo>
                <HeaderContainer>
                    <Header>
                        기업 정보
                    </Header>
                    <CompanyRecruitAnchor>
                        진행 중인 취업 공고 보러가기
                        <IoIosArrowForward />
                    </CompanyRecruitAnchor>
                </HeaderContainer>
                <LogoContainer>
                    <StyledImage src={companyInfo.logo} />
                </LogoContainer>
                <CompanyInfoBodyTitle>
                    <div>{companyInfo.companyName}</div>
                    <CompanyScrapButton/>
                    <Button to={companyInfo.link}>기업 홈페이지<IoIosArrowForward /></Button>
                </CompanyInfoBodyTitle>
                <CompanyInfoBody>
                    <InfoContainer>
                        <InfoItem>
                            <Toc>산업</Toc>
                            <Contents>{companyInfo.pic1}</Contents>
                        </InfoItem>
                        <InfoItem>
                            <Toc>설립</Toc>
                            <Contents>{establishDate}</Contents>
                        </InfoItem>
                        <InfoItem>
                            <Toc>사원 수</Toc>
                            <Contents>{companyInfo.employee}</Contents>
                        </InfoItem>
                    </InfoContainer>
                    <InfoContainer>
                        <InfoItem>
                            <Toc>대표자명</Toc>
                            <Contents>{companyInfo.pic2}</Contents>
                        </InfoItem>
                        <InfoItem>
                            <Toc>주소</Toc>
                            <Contents>{companyInfo.location}</Contents>
                        </InfoItem>
                    </InfoContainer>
                </CompanyInfoBody>
            </CompanyInfo>
        </div>
    );
}

export default RecruitCompanyInfo;
