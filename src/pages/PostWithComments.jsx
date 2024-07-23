import React from 'react';
import styled from 'styled-components';
import PostContent from '../components/PostDetail/PostContent';
import PostComments from '../components/PostDetail/PostComments';

const PostWithComments = () => {
  const postData = {
    title: '안녕하세요 프론트엔드 개발자 면접 스터디원 모집합니다.',
    id: '정준용',
    date: '2024.07.15 20:36',
    body: `같이 주 2회 만나서 서로 기술면접에 대한 내용을 질의응답 형식으로 공부하실분 구합니다.
모집인원: 1명
더 궁금한 사항있으면 연락이나 댓글남겨주세요
오픈 카카오톡 : https://open.kakao.com/~~~~~~~~~~~~~~
많은 관심 부탁드립니다.`,
    tag: 'apple'
  };

  const commentsData = [
    {
      id: '정준용',
      text: '비밀글 입니다.',
      date: '2024.07.15 20:58'
    },
    {
      id: '김선엽',
      text: '비밀글 입니다.',
      date: '2024.07.15 20:58'
    }
  ];

  const currentUser = '한시현';

  return (
    <Container>
      <PostContent {...postData} />
      <PostComments comments={commentsData} currentUser={currentUser} />
    </Container>
  );
};

export default PostWithComments;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`
