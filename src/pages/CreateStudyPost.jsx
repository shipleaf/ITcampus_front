import React, { useState, useEffect } from 'react';
import { IoImageOutline, IoCloseOutline } from "react-icons/io5";
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
    navigate('/studylist');
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

  const handleRemoveImage1 = () => {
    setImageBase64('');
    setFileName1('');
  };

  const handleRemoveImage2 = () => {
    setImageBase642('');
    setFileName2('');
  };

  return (
    <>
      {isLoggedIn ? (
        <UserHeader />
      ) : (
        <GuestHeader />
      )}
      <Frame onSubmit={handleSubmit}>
        <IntroContainer>
          <Intro> 게시글 작성<span style={{ marginLeft: '5px', fontWeight: 'bold', borderBottom: '1px solid #000' }}>스터디</span></Intro>
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
            placeholder="내용을 입력해 주세요."
            value={body}
            onChange={handleBodyChange}
          />
          <StyledImgContainer>
            <ImageLabel htmlFor="imageUpload1" isSelected={!!imageBase64}>
              <StyledIoImageOutline />
              <span>{fileName1 || '이미지 선택'}</span>
              {imageBase64 && <RemoveButton onClick={handleRemoveImage1}><IoCloseOutline /></RemoveButton>}
            </ImageLabel>
            <HiddenFileInput
              id="imageUpload1"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <ImageLabel htmlFor="imageUpload2" isSelected={!!imageBase642}>
              <StyledIoImageOutline />
              <span>{fileName2 || '이미지 선택'}</span>
              {imageBase642 && <RemoveButton onClick={handleRemoveImage2}><IoCloseOutline /></RemoveButton>}
            </ImageLabel>
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
  width: 100%;
  height: auto;
  margin: 30px auto;
  margin-top: 40px;
  margin-bottom: 50px !important;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const Intro = styled.div`
  width: 40%;
  font-size: 25px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: '300';
`;

const PostCreateFrame = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  width: 40%;
  margin: 10px auto;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
`;

const StyledImgContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 5px;
  border: 1px solid #ccc;
  border-top: none;
`;

const ImageLabel = styled.label`
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-top: 5px;
  cursor: ${(props) => (props.isSelected ? 'default' : 'pointer')};
  background-color: ${(props) => (props.isSelected ? '#fff' : 'white')};

  & span {
    font-family: "Noto Sans KR", sans-serif;
    color: #999;
  }
`;

const StyledIoImageOutline = styled(IoImageOutline)`
  font-size: 30px;
  color: #ccc;
  margin-left: 10px;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #ff0000;
  font-size: 24px;
  margin-left: auto;
  padding-right: 10px;

  &:hover {
    color: #ff6666;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  flex: 1;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
  font-family: "Noto Sans KR", sans-serif;
  box-sizing: border-box;
  padding-left: 10px;
  &:focus{
    outline: none;
    border: 1px solid #999;
  }
`;

const Textarea = styled.textarea`
  align-self: center;
  width: 100%;
  height: 400px;
  font-size: 15px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  resize: none;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
  &:focus{
    outline: none;
    border: 1px solid #999;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  background-color: white;
  color: #000;
  font-size: 18px;
  height: 40px;
  width: 60px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #79bfff;
  font-size: 18px;
  height: 40px;
  width: 60px;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
`;
