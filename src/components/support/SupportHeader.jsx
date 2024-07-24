import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

const Header = styled.div`
    width: 60%;
    border-bottom: 1.5px solid #000;
    padding: 10px;
    box-sizing: border-box;
`
const BodyContainer = styled.div`
    display: flex;
    padding: 10px;
    font-size: 18px;
`

const HeaderContents = styled.div`
    
`
const Container = styled.div`
  width: 60%;
  border: 1px solid #999;
  padding: 40px;
  padding-top: 20px;
  box-sizing: border-box;
  padding-bottom: 20px;
  position: relative;
  margin-top: 15px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 10%; /* 한 변의 길이 */
    height: 30%; /* 한 변의 길이 */
    border-color: #00ACEE;
    border-style: solid;
  }

  /* 왼쪽 위 꼭짓점 */
  &::before {
    top: 0;
    left: 0;
    border-width: 3px 0 0 3px; /* 상단과 좌측 테두리만 표시 */
    border-color: #00ACEE transparent transparent #00ACEE;
  }

  /* 오른쪽 아래 꼭짓점 */
  &::after {
    bottom: 0;
    right: 0;
    border-width: 0 3px 3px 0; /* 하단과 우측 테두리만 표시 */
    border-color: transparent #00ACEE #00ACEE transparent;
  }
`;

const Department = styled.div`
    
`

const Title = styled.div`
    margin-top: 10px;
    font-weight: 550;
    font-size: 22px;
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
`
const BodyTitle = styled.div`
    display: 'flex';
`

const Body = styled.div`
    padding: 10px;
`

function SupportHeader() {

    const supportdata = {
        key: 1,
        title: "2024 학생지원 프로그램",
        startdate: "2024-08-01T00:00:00.000Z",
        enddate: "2024-12-31T23:59:59.000Z",
        resultdate: "2025-01-15T00:00:00.000Z",
        logo: "logo.png",
        pic1: "pic1.jpg",
        pic2: "pic2.jpg",
        pic3: "pic3.jpg",
        pic4: "pic4.jpg",
        pic5: "pic5.jpg",
        body: "이 프로그램은 학생들의 다양한 활동을 지원하기 위해 마련되었습니다.이 프로그램은 학생들의 다양한 활동을 지원하기 위해 마련되었습니다.이 프로그램은 학생들의 다양한 활동을 지원하기 위해 마련되었습니다.이 프로그램은 학생들의 다양한 활동을 지원하기 위해 마련되었습니다.이 프로그램은 학생들의 다양한 활동을 지원하기 위해 마련되었습니다.",
        support_target: "모든 학부생",
        application_method: "온라인 신청",
        qualification: "재학생",
        support_detail: "장학금, 생활비 지원",
        link: "https://example.com/apply",
        agency: "교육부"
    }

    return (
        <TitleContainer>
            <Header>
                지원 프로그램
            </Header>
            <Container>
                <HeaderContents>
                    <Department style={{ fontSize: '14px' }}>{supportdata.agency}</Department>
                    <Title>{supportdata.title}</Title>
                    <BodyContainer><BodyTitle style={{ color: '#007FFF', fontWeight: '900' }}>{supportdata.title}</BodyTitle><span style={{ fontWeight: '700' }}> 이란?</span></BodyContainer>
                    <Body>{supportdata.body}</Body>
                </HeaderContents>
            </Container>
        </TitleContainer>
    )
}

export default SupportHeader;