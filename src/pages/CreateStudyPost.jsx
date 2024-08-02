import React, { useState, useEffect } from 'react';
import { IoImageOutline } from "react-icons/io5";
import styled from 'styled-components';
import UserHeader from '../components/modules/header/UserHeader';
import { loginState } from '../state/atoms';
import GuestHeader from '../components/modules/header/GuestHeader';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { postStudy } from '../APIs/studyAPI';


function CreateStudyPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [imageBase642, setImageBase642] = useState('');
  const [fileName1, setFileName1] = useState('');
  const [fileName2, setFileName2] = useState('');
  const isLoggedIn = useRecoilValue(loginState);

  const navigate = useNavigate();

  const handlePost = () => {
    navigate('/studylist');
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log('Image 1 selected:', file);
    setFileName1(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
      console.log('Image 1 Base64:', reader.result);
    };
    reader.readAsDataURL(file);
  };
  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);
  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    console.log('Image 2 selected:', file);
    setFileName2(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase642(reader.result);
      console.log('Image 2 Base64:', reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    navigate('/studylist')
    console.log('Canceled');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Title:', title);
    console.log('Body:', body);
    console.log('Image:', imageBase64);
    console.log('Image2:', imageBase642);

    const postData = {
      title: title,
      body: body,
      pic1: imageBase64,
      pic2: imageBase642,
    };

    try {
      const result = await postStudy(postData);
      console.log("글 작성 성공:", result);
      handlePost();
    } catch (error) {
      console.error("에러 발생:", error);
      alert("글 작성 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <UserHeader />
      ) : (
        <GuestHeader />
      )
      }
      <Frame onSubmit={handleSubmit}>
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
          </TitleContainer>
          <Textarea
            placeholder="내용을 입력하세요."
            value={body}
            onChange={handleBodyChange}
          />
          <StyledImgContainer>
            <Label htmlFor="imageUpload1">
              <StyledIoImageOutline />
              <span>{fileName1 || '이미지 선택'}</span>
            </Label>
            <HiddenFileInput
              id="imageUpload1"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </StyledImgContainer>
          <StyledImgContainer>
            <Label htmlFor="imageUpload2">
              <StyledIoImageOutline />
              <span>{fileName2 || '이미지 선택'}</span>
            </Label>
            <HiddenFileInput
              id="imageUpload2"
              type="file"
              accept="image/*"
              onChange={handleImageChange2}
            />
          </StyledImgContainer>
          <ButtonContainer>
            <CancelButton type="button" onClick={handleCancel}>취소</CancelButton>
            <SaveButton type="submit">저장</SaveButton>
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
const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  & span{
    font-family: "Noto Sans KR", sans-serif;
  }
  &:hover{
    cursor: pointer;
    background-color: #f0f0f0;
  }
`

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