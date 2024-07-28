import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import InfoPostContent from '../components/infopostdetail/InfoPostContent';
import InfoPostComments from '../components/infopostdetail/InfoPostComments';
import { fetchInfoComments, fetchInfoPost } from '../APIs/infoAPI';
import Header from '../components/header/Header';

const InformationDetails = () => {
  const { key } = useParams();
  const [postData, setPostData] = useState(null);
  const [postComments, setPostComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInfoPost = async () => {
      try {
        const postResponse = await fetchInfoPost(key);
        const commentsResponse = await fetchInfoComments(key);
        setPostData(postResponse.data);
        setPostComments(commentsResponse.data); 
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getInfoPost();
  }, [key]);

  if (loading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  return (
    <PageContainer>
      <Header/>
      <Container>
        {postData && <InfoPostContent InfoKey={key} {...postData} />}
        <Spacer />
        <CommentsContainer>
          <InfoPostComments comments={postComments} InfoKey={key}/>
        </CommentsContainer>
      </Container>
    </PageContainer>
  );
};

export default InformationDetails;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Spacer = styled.div`
  flex: 1;
`

const CommentsContainer = styled.div`
  width: 100%;
`