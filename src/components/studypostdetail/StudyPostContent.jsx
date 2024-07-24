import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const StudyPostContent = ({ title, id, date, body, tag}) => {
  return (
    <ContentContainer>
      <ArrowButtonLeft onClick={1+1}>
        <FontAwesomeIcon style={{height : "20px", border: "2px solid #79BFFF", borderRadius: "50%", padding : "10px"}} icon={faArrowLeft} />
      </ArrowButtonLeft>
      <ContentWrapper>
        <Header>
          <Tag>{tag}</Tag>
          <ActionButtons>
            <ActionButton>수정</ActionButton>
            <ActionButton>삭제</ActionButton>
          </ActionButtons>
        </Header>
        <Title>{title}</Title>
        <Meta>
          작성자: {id}
          <br />
          작성일: {date}
        </Meta>
        <Divider />
        <Content>
          {body}
        </Content>
      </ContentWrapper>
      <ArrowButtonRight onClick={1+1}>
        <FontAwesomeIcon style={{height : "20px", border: "2px solid #79BFFF", borderRadius: "50%", padding : "10px"}} icon={faArrowRight} />
      </ArrowButtonRight>
    </ContentContainer>
  );
};

export default StudyPostContent;

const ContentContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 900px;
  margin: 20px auto;
  padding: 20px;
  min-height: 400px;
  display: flex;
  align-items: center;
  position: relative;
`

const ContentWrapper = styled.div`
  flex: 1;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Tag = styled.div`
  font-size: 20px;
  color: #999;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 5px;
`

const ActionButton = styled.button`
  font-size: 12px;
  color: #79BFFF;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`

const Title = styled.div`
  font-size: 30px;
  color: #333;
  font-weight: 500;
  margin-bottom: 10px;
`

const Meta = styled.div`
  font-size: 14px;
  color: #666;
  white-space: nowrap;
  margin-bottom: 10px;
`

const Divider = styled.div`
  width: 85%;
  height: 1px;
  background-color: black;
  margin: 30px 0;
`

const Content = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  white-space: pre-line;
`

const ArrowButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  color : #79BFFF;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const ArrowButtonLeft = styled(ArrowButton)`
  left: -180px;
`

const ArrowButtonRight = styled(ArrowButton)`
  right: -60px;
`