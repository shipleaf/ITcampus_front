import React, { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import styled from "styled-components";
import UserHeader from "../components/modules/header/UserHeader";
import { postStudy } from "../APIs/studyAPI";

function CreateStudyPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleCancel = () => {
    window.location.href = "/studypostlist";
    console.log("Canceled");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Title:", title);
    console.log("Body:", body);
    console.log("Image:", image);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    if (image) {
      formData.append("image", image);
    }

    try {
      const result = await postStudy(formData);
      console.log("글 작성 성공:", result);
      window.location.href = "/studypostlist";
    } catch (error) {
      console.error("에러 발생:", error);
      alert("글 작성 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <UserHeader />
      <Frame
        onSubmit={handleSubmit}
        action=""
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
              <StyledImageWord>사진</StyledImageWord>
              <HiddenFileInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
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
            <SaveButton type="button" onClick={handleSubmit}>
              저장
            </SaveButton>
          </ButtonContainer>
        </PostCreateFrame>
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