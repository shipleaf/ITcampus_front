import React from 'react';
import styled from 'styled-components';
import companyLogo from "../../../assets/hyundai.png";

const CompanyHeader = ({ data }) => {
    return (
        <Header>
            <CompanyInfo>
                <CompanyName>{data.companyName}</CompanyName>
                <Divder />
                <CompanyDetailsList>
                    <CompanyDetail>
                        <DetailLabel>산업 분야</DetailLabel>
                        <DetailValue>{data.track}</DetailValue>
                    </CompanyDetail>
                    <CompanyDetail>
                        <DetailLabel>직원수</DetailLabel> 
                        <DetailValue>{data.employee}</DetailValue>
                    </CompanyDetail>
                    <CompanyDetail>
                        <DetailLabel>회사위치</DetailLabel> 
                        <DetailValue>{data.location}</DetailValue>
                    </CompanyDetail>
                    <CompanyDetail>
                        <DetailLabel>설립일</DetailLabel> 
                        <DetailValue>{data.establish}</DetailValue>
                    </CompanyDetail>
                    <CompanyDetail>
                        <DetailLabel>스택</DetailLabel> 
                        <DetailValue>{data.stack}</DetailValue>
                    </CompanyDetail>
                    <CompanyDetail>
                        <DetailLabel>홈페이지</DetailLabel> 
                        <DetailValue><a href={data.link}>{data.link}</a></DetailValue>
                    </CompanyDetail>
                    <CompanyDetail>
                        <DetailLabel>연봉</DetailLabel> 
                        <DetailValue>{data.salary}</DetailValue>
                    </CompanyDetail>
                    <CompanyDetail>
                        <DetailLabel>매출액</DetailLabel> 
                        <DetailValue>{data.revenue}</DetailValue>
                    </CompanyDetail>
                </CompanyDetailsList>
            </CompanyInfo>
            <CompanyLogo src={companyLogo} alt="Company Logo" />
        </Header>
    );
}

export default CompanyHeader;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1.5px solid #d4edf7;
    padding: 20px;
    border-radius: 10px;
`

const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const CompanyName = styled.div`
    margin: 0;
    font-size: 24px;
    font-weight: bold;
`

const Divder = styled.div`
    width: 150%;
    height: 1px;
    background-color: #8b8b8b;
    margin: 10px 0;
`

const CompanyDetailsList = styled.div`
    margin-top: 5%; 
    list-style: none;
    padding: 0;
`

const CompanyDetail = styled.div`
    margin-bottom: 15px;
    display: flex;
`

const DetailLabel = styled.div`
    font-weight: bold;
    color: #999;
    margin-right: 5px;
    width: 120px; 
`

const DetailValue = styled.div`
    flex: 1;
`

const CompanyLogo = styled.img`
    width: 300px;
    height: 200px;
`
