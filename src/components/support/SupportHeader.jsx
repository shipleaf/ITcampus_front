import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #000;
  font-size : 20px;
  padding: 10px;
  box-sizing: border-box;
`;
const BodyContainer = styled.div`
  display: flex;
  padding: 10px;
  font-size: 18px;
`;

const HeaderContents = styled.div``;
const Container = styled.div`
  width: 100%;
  border: 1px solid #999;
  padding: 40px;
  padding-top: 20px;
  box-sizing: border-box;
  padding-bottom: 20px;
  position: relative;
  margin-top: 15px;
  background-color: white;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10%; /* 한 변의 길이 */
    height: 30%; /* 한 변의 길이 */
    border-color: #00acee;
    border-style: solid;
  }

  /* 왼쪽 위 꼭짓점 */
  &::before {
    top: 0;
    left: 0;
    border-width: 3px 0 0 3px; /* 상단과 좌측 테두리만 표시 */
    border-color: #00acee transparent transparent #00acee;
  }

  /* 오른쪽 아래 꼭짓점 */
  &::after {
    bottom: 0;
    right: 0;
    border-width: 0 3px 3px 0; /* 하단과 우측 테두리만 표시 */
    border-color: transparent #00acee #00acee transparent;
  }
`;

const Department = styled.div``;

const Title = styled.div`
  margin-top: 10px;
  font-weight: 550;
  font-size: 22px;
  padding-bottom: 10px;
  border-bottom: 1px solid #999;
`;
const BodyTitle = styled.div`
  display: "flex";
`;

const Body = styled.div`
  padding: 10px;
`;

function SupportHeader({ supportdata }) {

  return (
      <TitleContainer>
          <Header>
              지원 프로그램
          </Header>
          <Container>
              <HeaderContents>
                  <Department>{supportdata.agency}</Department>
                  <Title>{supportdata.title}</Title>
                  <BodyContainer>
                      <BodyTitle style={{ color: '#007FFF', fontWeight: '900' }}>
                          {supportdata.title}
                      </BodyTitle>
                      <span style={{ fontWeight: '700' }}>  이란?</span>
                  </BodyContainer>
                  <Body>{supportdata.body}</Body>
              </HeaderContents>
          </Container>
      </TitleContainer>
  );
}

export default SupportHeader;
