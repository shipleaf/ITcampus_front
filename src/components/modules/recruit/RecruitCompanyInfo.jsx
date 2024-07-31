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
    margin-left: 30px;
`

const Contents = styled.div`
    margin-left: 10px;
`;

const InfoItem = styled.div`
    display: flex;
    margin-bottom: 10px;
`;


const ScrapButtonCotainer = styled(Button)`
    width: 130px;
    & div{
        border: none;
    }
`
function RecruitCompanyInfo({ company }) {

    const establishDate = new Date(company.establish).toLocaleDateString();


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
                    <StyledImage src={company.logo} />
                </LogoContainer>
                <CompanyInfoBodyTitle>
                    <div>{company.companyName}</div>
                    <ScrapButtonCotainer>
                        <ScrapButton />
                    </ScrapButtonCotainer>
                    <Button to={company.link}>기업 홈페이지<IoIosArrowForward /></Button>
                </CompanyInfoBodyTitle>
                <CompanyInfoBody>
                    <InfoContainer>
                        <InfoItem>
                            <Toc>산업</Toc>
                            <Contents>{company.track}</Contents>
                        </InfoItem>
                        <InfoItem>
                            <Toc>설립</Toc>
                            <Contents>{establishDate}</Contents>
                        </InfoItem>
                        <InfoItem>
                            <Toc>사원 수</Toc>
                            <Contents>{company.employee}</Contents>
                        </InfoItem>
                    </InfoContainer>
                    <InfoContainer>
                        <InfoItem>
                            <Toc>스택</Toc>
                            <Contents>{company.stack}</Contents>
                        </InfoItem>
                        <InfoItem>
                            <Toc>주소</Toc>
                            <Contents>{company.location}</Contents>
                        </InfoItem>
                    </InfoContainer>
                </CompanyInfoBody>
            </CompanyInfo>
        </div>
    );
}

export default RecruitCompanyInfo;
