import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchStudyComments, fetchStudyPost } from '../APIs/studyAPI';
import StudyPostComments from '../components/studypostdetail/StudyPostComments';
import StudyPostContent from '../components/studypostdetail/StudyPostContent';
import Header from '../components/header/Header';


function StudyDetails(){
  const { key } = useParams();
  const [postData, setPostData] = useState(null);
  const [postComments, setPostComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudyPost = async () => {
      try {
        const postResponse = await fetchStudyPost(key);
        const commentsResponse = await fetchStudyComments(key);
        setPostData(postResponse.data);
        setPostComments(commentsResponse.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getStudyPost();
  }, [key]);

  if (loading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  return (
    <>
    <Header/>
    <Container>
      {postData && <StudyPostContent key={key} {...postData} />}
      <StudyPostComments comments={postComments} key={key} />
    </Container>
    </>
  );
};

export default StudyDetails;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`