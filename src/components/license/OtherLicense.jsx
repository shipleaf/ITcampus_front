import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchLicenseList } from "../../APIs/licenseAPI";
import Post from "../post/Post";

const Title = styled.div`
  width: 58%;
  font-weight: 600;
  text-align: left;
  margin-bottom: 20px;
  padding: 20px;
  border-bottom: 1px solid #999;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

function OtherLicense({ currentKey }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getLicense = async () => {
      try {
        const response = await fetchLicenseList();
        if (response.status >= 200 && response.status < 300) {
          setPosts(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getLicense();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const filteredPosts = posts
    .filter(post => post.key !== currentKey) 
    .sort((a, b) => b.key - a.key) 
    .slice(0, 2); 

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Title>다른 IT자격증을 보고 싶다면?</Title>
      <Container>
        {filteredPosts.map((post) => (
          <Post
            key={post.key}
            title={post.title}
            agency={post.agency}
            body={post.body}
            writer={post.writer}
            pic1={post.pic1}
            scrapCount={post.scrapCount}
            startdate={post.startdate}
            enddate={post.enddate}
          />
        ))}
      </Container>
    </div>
  );
}

export default OtherLicense;
