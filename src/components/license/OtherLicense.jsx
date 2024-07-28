import React from "react";
import styled from "styled-components";
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
`

function OtherLicense() {
  const postDetails = {
    title: "[공지] 12기 중앙 해커톤 안내",
    detail:
      "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
    writer: "멋쟁이사자처럼 대학",
    img: "star",
    scrap: 215,
    startDate: "2024. 7. 5",
    endDate: "2024. 7. 14",
  };

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
        <Post
          title={postDetails.title}
          detail={postDetails.detail}
          writer={postDetails.writer}
          img={postDetails.img}
          scrap={postDetails.scrap}
          startDate={postDetails.startDate}
          endDate={postDetails.endDate}
        />
        <Post
          title={postDetails.title}
          detail={postDetails.detail}
          writer={postDetails.writer}
          img={postDetails.img}
          scrap={postDetails.scrap}
          startDate={postDetails.startDate}
          endDate={postDetails.endDate}
        />
        <Post
          title={postDetails.title}
          detail={postDetails.detail}
          writer={postDetails.writer}
          img={postDetails.img}
          scrap={postDetails.scrap}
          startDate={postDetails.startDate}
          endDate={postDetails.endDate}
        />
      </Container>
    </div>
  );
}

export default OtherLicense;
