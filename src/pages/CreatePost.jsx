import React, { useState } from 'react';
import styled from 'styled-components';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [vote_content, setVoteContent] = useState('');
  const [body, setBody] = useState('');

  const [subtitle, setSubtitle] = useState(-1);
  //const [image, setImage] = useState(null);


  const handlesubtitleChange = (event) => {
    setSubtitle(Number(event.target.value));
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleVoteContentChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 10) {
      setVoteContent(inputValue);
    }
  };

  // const handleImageChange = (event) => {
  //   setImage(event.target.files[0]);
  // };

  // const handleSave = () => {
  //   handleSubmit();
  // }

  const handleCancel = () => {
    window.location.href = '/mainpage';
    console.log('Canceled');
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // 값이 제대로 제출되는지 확인
  
    console.log('Title:', title);
    console.log('Body:', body);
    console.log('VoteContent: ', vote_content);
  
    const PostData = {
      title,
      vote_content,
      body
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/posts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(PostData),
      });
  
      if (!response.ok) {
        alert('글 작성 성공.')
        throw new Error('글 작성 실패.');
      }
      const result = await response.json();
      console.log('글 작성 성공:', result);
    } catch (error) {
      console.error('에러 발생:', error);
    }
    //window.location.href = '/mainpage';
  };

  return (
    <Frame onSubmit={handleSubmit} action='' method='POST'>
      <IntroContainer>
        <Intro> 게시글 작성</Intro>
        <CreateImg></CreateImg>
      </IntroContainer>
      <PostCreateFrame>
        <TopContainer>
          <CheckboxContainer>
            <StyledSubtitle>
              <StyledInput
                type="radio"
                name="subtitle"
                value={0}
                onChange={handlesubtitleChange}
                checked={subtitle === 0}
              />
              <StyledP>없음</StyledP>
            </StyledSubtitle>
            <StyledSubtitle>
              <StyledInput
                type="radio"
                name="subtitle"
                value={1}
                onChange={handlesubtitleChange}
                checked={subtitle === 1}
              />
              <StyledP>투표</StyledP>
            </StyledSubtitle>
            <StyledSubtitle>
            </StyledSubtitle>
          </CheckboxContainer>
        </TopContainer>
        {subtitle === 1 && (
          <VoteContentInput
            type="text"
            placeholder="투표 내용을 입력하세요."
            value={vote_content}
            onChange={handleVoteContentChange}
          />
        )}
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
        <ButtonContainer>
          <SaveButton type="button" onClick={handleSubmit}>저장</SaveButton>
          <CancelButton type="button" onClick={handleCancel}>취소</CancelButton>
        </ButtonContainer>
      </PostCreateFrame>
    </Frame>
  );
};

export default CreatePost;


const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: auto;
  margin: 0px auto;
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width : 100%;
  height: 100px;
  margin: 20px auto;
  margin-top: 50px;
`

const CreateImg = styled.img`
  width: 80px;
  height: auto;
`

const Intro = styled.div`
  margin-left: 10px;
  font-size: 50px;
  font-weight: bold;
`

const PostCreateFrame = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  width: 800px;
  margin: 20px auto;
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;


const StyledSubtitle = styled.label`
  display: flex;
  white-space: nowrap;
  margin-right: 50px;
  align-items: center;
  user-select: none;
`

const StyledP = styled.p`
  margin-left: 0.25rem;
`

const StyledInput = styled.input`
  border: 1.5px;
  border-radius: 1px;
  width: 30px;
  height: 30px;
`

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 90%;
`

const VoteContentInput = styled.input`
  width: 86%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
`

const TitleInput = styled.input`
  flex: 1;
  padding: 10px;
  padding-top: 15px;
  font-size: 25px;
  border-radius: 4px;
  border: 1px solid #ccc;
  
  background-color: #ccc;
  &::placeholder{
    color: #474747;
  }
  margin-right: 10px;
`

const Textarea = styled.textarea`
  align-self: center;
  width: 100%;
  height: 400px;
  padding: 10px;
  font-size: 18px;
  margin-left: 15px;
  border-radius: 4px;
  border: 1px solid #ffffff;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`

const SaveButton = styled.button`
  padding: 10px 20px;
  margin-right: 300px;
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

// const ImageUploadContainer = styled.div`
//   margin-bottom: 20px;
//   width: 30%;
// `

// const ImageInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   outline: none;
// `;
