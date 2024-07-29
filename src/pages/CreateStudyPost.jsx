import React, { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/header/Header";

// 쿠키를 읽는 함수
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

function CreateStudyPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [pic1, setPic1] = useState(null);
  const [pic2, setPic2] = useState(null);
  const [error, setError] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handlePic1Change = (event) => {
    setPic1(event.target.files[0]);
  };

  const handlePic2Change = (event) => {
    setPic2(event.target.files[0]);
  };

  const handleCancel = () => {
    window.location.href = "/studypostlist";
    console.log("Canceled");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Title:", title);
    console.log("Body:", body);
    console.log("Pic1:", pic1);
    console.log("Pic2:", pic2);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    if (pic1) {
      formData.append("pic1", pic1);
    }
    if (pic2) {
      formData.append("pic2", pic2);
    }

    // FormData 내용 출력
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      const token = getCookie('authToken'); // 쿠키에서 토큰 가져오기
      if (!token) {
        throw new Error('No auth token found in cookies');
      }
      console.log('Using token from cookie:', token); // 토큰 확인

      const response = await axios.post("http://223.130.135.136:8080/api/studyboard/create", formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });

      if (response.status !== 200) {
        console.error("Response Status:", response.status);
        console.error("Response Data:", response.data);
        alert("글 작성 실패.");
        throw new Error("글 작성 실패.");
      }

      console.log("글 작성 성공:", response.data);
      window.location.href = "/studypostlist"; // 성공 시 리스트 페이지로 이동
    } catch (error) {
      console.error("에러 발생:", error.response ? error.response.data : error.message);
      setError("글 작성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <Header />
      <Frame
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
      >
        <IntroContainer>
          <Intro> 게시글 작성</Intro>
        </IntroContainer>
        <PostCreateFrame>
          <TitleContainer>
            <TitleInput
              type="text"
              placeholder="제목을 입력해 주세요."
              value={title}
              onChange={handleTitleChange}
            />
            <StyledImgContainer>
              <StyledIoImageOutline />
              <StyledImageWord>사진1</StyledImageWord>
              <HiddenFileInput
                type="file"
                accept="image/*"
                onChange={handlePic1Change}
              />
            </StyledImgContainer>
            <StyledImgContainer>
              <StyledIoImageOutline />
              <StyledImageWord>사진2</StyledImageWord>
              <HiddenFileInput
                type="file"
                accept="image/*"
                onChange={handlePic2Change}
              />
            </StyledImgContainer>
          </TitleContainer>
          <Textarea
            placeholder="내용을 입력하세요."
            value={body}
            onChange={handleBodyChange}
          />
          <ButtonContainer>
            <CancelButton type="button" onClick={handleCancel}>
              취소
            </CancelButton>
            <SaveButton type="submit">
              저장
            </SaveButton>
          </ButtonContainer>
        </PostCreateFrame>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Frame>
    </>
  );
}

export default CreateStudyPost;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: auto;
  margin: 30px auto;
  margin-top: 80px;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 10px auto;
  padding-left: 10px;
`;

const Intro = styled.div`
  margin-left: 10px;
  font-size: 35px;
  font-weight: bold;
`;

const PostCreateFrame = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  width: 800px;
  margin: 10px auto;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
`;

const StyledImgContainer = styled.label`
  display: flex;
  cursor: pointer;
  margin-right: 10px; /* 두 번째 이미지 컨테이너와 간격을 두기 위해 추가 */
`;

const StyledIoImageOutline = styled(IoImageOutline)`
  font-size: 50px;
  color: #ccc;
  margin-left: 10px;
`;

const StyledImageWord = styled.div`
  font-size: 38px;
  color: #ccc;
  margin-left: 10px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const TitleInput = styled.input`
  flex: 1;
  padding: 10px;
  padding-top: 15px;
  font-size: 25px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: white;
  margin-right: 10px;
`;

const Textarea = styled.textarea`
  align-self: center;
  width: 100%;
  height: 400px;
  padding: 10px;
  font-size: 18px;
  margin-left: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  margin-right: 30px;
  background-color: white;
  color: #000;
  font-weight: bold;
  font-size: 20px;
  height: 40px;
  width: 80px;
  border: 1px solid #999;
  border-radius: 10px;
  cursor: pointer;
`;

const SaveButton = styled.button`
  background-color: #79bfff;
  font-weight: bold;
  font-size: 20px;
  height: 40px;
  width: 80px;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  margin-top: 10px;
`;
