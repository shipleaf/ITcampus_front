import React from 'react';
import styled from 'styled-components';
import scrap from '../../assets/scrap.png'

const PostWithComments = () => {
  const img = scrap; 

  return (
    <Container>
      <ContentContainer>
            <Tag>apple </Tag>
        <Header>
          <Title>안녕하세요 프론트엔드 개발자 면접 스터디원 모집합니다.</Title>
          <Meta>
            작성자: 정준용
            <br/>
            작성일: 2024.07.15 20:36
          </Meta>
        </Header>
        <Divider />
        <ContentImageContainer>
          <Content hasImage={img}>
            같이 주 2회 만나서 서로 기술면접에 대한 내용을 질의응답 형식으로 공부하실분 구합니다.
            <br />
            <br />
            모집인원: 1명
            <br />
            <br />
            더 궁금한 사항있으면 연락이나 댓글남겨주세요
            <br />
            <br />
            오픈 카카오톡 : https://open.kakao.com/~~~~~~~~~~~~~~
            <br />
            많은 관심 부탁드립니다.
          </Content>
          {img && <Image src={img} />}
        </ContentImageContainer>
      </ContentContainer>
      <CommentBackground>
        <CommentsContainer>
        <CommentTitleContainer>
                <CommentTitle>
                    댓글
                </CommentTitle>
                <CommentCount>
                    2
                </CommentCount>
            </CommentTitleContainer>
          <Comment>
            <CommentAuthor>정준용</CommentAuthor>
            <CommentText>비밀글 입니다.</CommentText>
            <Meta style = {{marginLeft : "5px"}}>2024.07.15 20:58</Meta>
          </Comment>
          <Comment>
            <CommentAuthor>김선엽</CommentAuthor>
            <CommentText>비밀글 입니다.</CommentText>
            <Meta style = {{marginLeft : "5px"}}>2024.07.15 20:58</Meta>
          </Comment>
        <CommentInputContainer>
             <CommentInput  placeholder="댓글을 남겨보세요"/>
        </CommentInputContainer>
        </CommentsContainer>
      </CommentBackground>
    </Container>
  );
};

export default PostWithComments;

const Container = styled.div`
  width: 100%;
`

const ContentContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 900px;
  margin: 20px auto 80px auto;
  padding: 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin : 20px 0;
`

const Tag = styled.div`
    display : flex;
    padding-top : 30px;
    width: 100px;
    height : 50px;
    font-size : 20px;
    color: #999;
    margin-bottom: -30px;
`

const Title = styled.div`
  font-size: 30px;
  color: #333;
  font-weight: 500;
`

const Meta = styled.div`
  font-size: 0.9em;
  color: #666;
  white-space: nowrap;
  margin-left: 20px;
  margin-top: 10px;
`

const Divider = styled.div`
  display : flex;
  width: 85%;
  height: 1px;
  background-color: black;
  margin : 30px 0px;
`

const ContentImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Content = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-right: 20px;
  flex: ${({ hasImage }) => (hasImage ? '1' : 'none')};
`

const Image = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 8px;
`

const CommentBackground = styled.div`
  background-color: #f0f8ff;
  border-radius: 8px;
  padding: 20px;
`

const CommentsContainer = styled.div`
  width: 900px;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
`

const CommentTitleContainer = styled.div`
    display : flex;
    margin-bottom : 10px;
`

const CommentTitle = styled.div`
    font-size : 22px;
    font-weight: bold;
`
const CommentCount = styled.div`
    font-size : 22px;
    font-weight: bold;
    color : #0085FF;
    margin-left : 10px;
`

const Comment = styled.div`
padding-bottom: 10px;
border-bottom: 1px solid black;
  margin-bottom: 10px;
`

const CommentAuthor = styled.div`
  font-size: 17px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`

const CommentText = styled.div`
  font-size: 15px;
  margin-left: 5px;
`

const CommentInputContainer = styled.div`
  width: 100%;
  padding: 10px;
`

const CommentInput = styled.input`

  font-size: 17px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
