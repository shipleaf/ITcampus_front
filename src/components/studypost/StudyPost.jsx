import React from 'react';
import styled from 'styled-components';
import commentImg from '../../assets/commentImg.png'

function StudyPost(title, detail, writer, img, date, commentNum){
    return (
        <>
        <ButtonFrame>
          <ContentContainer >
            <Title>
                [이벤트] 멋사 장학금 이벤트(~6/19)
            </Title>
            <Content>혹시 멋대생이라면 누구나 받을 수 이쓴ㄴ '무제한' 멋사 장학금을 아세[요?</Content>
            <Footer>
                <Writer>
                    김형석
                </Writer>
                <Date>
                    2024. 7.5 
                </Date>
                <CommentContainer>
                    <CommentImg src = {commentImg} />
                    <CommentCount>8</CommentCount>
                </CommentContainer>
            </Footer>
          </ContentContainer>
          <ThumbnailContainer>
            <Thumbnail/>
          </ThumbnailContainer>
        </ButtonFrame>
        <Divider></Divider>
        </>
    );
}
export default StudyPost;

const ButtonFrame = styled.button`
    display: flex;
    width: 60%;
    height: 20%;
    margin: 30px auto 15px auto;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border : none;
    border-radius: 5px;
    cursor: pointer;
    border: 3px solid white;
    margin-bottom: 1px solid black;
    
    &:hover {
    border: 3px solid #36bef1;
  }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    height: 100%;
    margin: 5px;
    overflow: hidden;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Content = styled.div`
  font-size: 16px;
  color: #666;
  text-align: left;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Footer = styled.div`
    display : flex;
    width: 100%;
    height: 10%;
    align-items: center;
    margin-top: auto; 
    margin : 15px 0px 0px 0px;
`
const Writer = styled.div`
    font-size: 16px;
    font-weight: bold;
    width: 150px;
    color: black;
`

const Date = styled.div`
    font-size: 14px;
    color: #999;
    margin : auto 10px;
`

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 30px;
`
const CommentImg = styled.img`
    width: 25px;
    height: 25px;
`

const CommentCount = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #999;
    margin-left : 7px;
    margin-top : 2.4px;
`

const ThumbnailContainer = styled.div`
    flex-shrink: 1;
    margin-right: 20px;
`

const Thumbnail = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`

const Divider = styled.div`
    margin: 5px auto;  
  width: 60%;
  height: 1px;
  background-color: #ccc;
`;