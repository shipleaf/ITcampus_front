import React from 'react'
import styled from 'styled-components'
import { CiStar } from "react-icons/ci";

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
`

const RecruitContainer = styled.div`
    width: 200px;
    border-radius: 10px;
    border: 1px solid #999;
`

const StyledImage = styled.img`
    width: 100%;
`

const Header = styled.div`
    
`

const Body = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const BodyContainer = styled.div`
    width: 100%;
    padding: 10px;
`
const FooterContainer = styled.div`
`
const Footer = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
`

function OtherRecruitModule() {

    const othercompany = {
        link: 'https://www.gspower.co.kr/pub/images/og_image.jpg',
        companyname: 'GS칼텍스',
        title: '[GSITM부트캠프5기모집]JAVA개발자/풀스택개발자/프론트엔드/백엔드',
        date: 'D-5'
    }
    return (
        <RecruitContainer>
            <Header>
                <StyledImage src={othercompany.link} />
            </Header>
            <BodyContainer>
                <Body>
                    {othercompany.title}
                </Body>
                <FooterContainer>
                <Footer>
                    <div style={{color: '#a4a4a4', fontSize: '12px'}}>{othercompany.companyname}</div>
                    <Date>{othercompany.date}</Date>
                    <div><CiStar style={{marginLeft: '30px'}}/></div>
                </Footer>
            </FooterContainer>
            </BodyContainer>
        </RecruitContainer>
    )
}

export default OtherRecruitModule;
