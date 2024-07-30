import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const InfoPostContent = ({ title, id, date, body, pic1, pic2, InfoKey}) => {
  const hasPictures = pic1 || pic2;
  pic1 = "https://url.kr/5jer3t"

  const formatDate = (dateString) => {
    const date = new window.Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    return `${year}. ${month}. ${day}`;
};

  return (
    <ContentContainer>
      <StyledLink to={`/informationdetails/${Number(InfoKey) + 1}`}>
      <ArrowButtonLeft>
        <FontAwesomeIcon style={{ height: "20px", border: "2px solid #79BFFF", borderRadius: "50%", padding: "10px" }} icon={faArrowLeft} />
      </ArrowButtonLeft>
      </StyledLink>
      <ContentWrapper>
        <>
          <Header>
            <Tag>정보게시판</Tag>
            <ActionButtons>
              <ActionButton>수정</ActionButton>
              <ActionButton>삭제</ActionButton>
            </ActionButtons>
          </Header>
          <Title>{title}</Title>
          <Meta>
            작성자: {id}
            <br />
            작성일: {formatDate(date)}
          </Meta>
          <Divider />
        </>
        <ContentWithImages>
          <Content>
            {body}
          </Content>
          {hasPictures && (
            <ImageWrapper>
              {pic1 && <Image src={pic1}/>}
            </ImageWrapper>
          )}
        </ContentWithImages>
      </ContentWrapper>
      <StyledLink to={`/informationdetails/${InfoKey-1}`}>
      <ArrowButtonRight>
        <FontAwesomeIcon style={{ height: "20px", border: "2px solid #79BFFF", borderRadius: "50%", padding: "10px" }} icon={faArrowRight} />
      </ArrowButtonRight>
      </StyledLink>
    </ContentContainer>
  );
};

export default InfoPostContent;

const ContentContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 900px;
  margin: 20px auto;
  padding: 20px;
  min-height: 400px;
  display: flex;
  align-items: flex-start;
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

const ContentWithImages = styled.div`
  display: flex;
  justify-content: space-between;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Image = styled.img`
  max-width: 300px;
  max-height: 300px;
  object-fit: cover;
`

const ArrowButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  color: #79BFFF;
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
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: none;
    }
`