import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaBuilding } from "react-icons/fa";

const Date = styled.div`
    width: 50px;
    color: #ff501b;
    border: 1px solid #ff501b;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border-radius: 3px;
    font-size: 12px;
`;

const RecruitContainer = styled.div`
    width: 200px;
    border-radius: 10px;
    border: 1px solid #999;
    overflow: hidden;
    cursor: pointer;
`;

const Header = styled.div`
    height: 57%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

const BodyContainer = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`;

const Body = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const FooterContainer = styled.div``;

const Footer = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
`;

function OtherRecruitModule({ notice }) {
    const navigate = useNavigate();
    const remainingDays = (endDate) => {
        const end = new window.Date(endDate);
        const today = new window.Date();
        const diffTime = end - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays >= 0 ? `D-${diffDays}` : "마감";
    };
    const handleClick = () => {
        navigate(`/recruitmentdetails/${notice.key}`);
    };

    return (
        <RecruitContainer onClick={handleClick}>
            <Header>
                {notice.pic1 ? (
                    <StyledImage src={notice.pic1} />
                ) : (
                    <FaBuilding />
                )}
            </Header>
            <BodyContainer>
                <Body>{notice.title}</Body>
                <FooterContainer>
                    <Footer>
                        <div style={{ color: '#a4a4a4', fontSize: '12px' }}>{notice.companyname}</div>
                        <Date>{remainingDays(notice.enddate)}</Date>
                    </Footer>
                </FooterContainer>
            </BodyContainer>
        </RecruitContainer>
    );
}

export default OtherRecruitModule;
