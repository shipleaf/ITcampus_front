import React, { useState } from 'react';
import styled from 'styled-components';
import { createStudyComment, deleteStudyComment } from '../../APIs/studyAPI';
import { useParams } from 'react-router-dom';

const StudyPostComments = ({ comments = [], studyboardkey, fetchStudyComments }) => {
  const [newComment, setNewComment] = useState('');
  const [isSecret, setIsSecret] = useState(false);
  const { key } = useParams();

  const formatDate = (dateString) => {
    const date = new window.Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getUTCHours();
    const minute = date.getMinutes();
    return `${year}. ${month}. ${day} / ${hour}:${minute}`;
  };

  const handleDelete = async (commentKey) => {
    try {
      await deleteStudyComment(studyboardkey, commentKey);
      alert('댓글이 삭제되었습니다.');
      fetchStudyComments();
    } catch (error) {
      console.error('댓글 삭제 실패:', error);
      alert('댓글 삭제에 실패했습니다.');
    }
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSecretChange = (event) => {
    setIsSecret(event.target.checked);
  };

  const handleCommentSubmit = async () => {
    try {
      const commentData = {
        comment: newComment,
        isSecret: isSecret,
      };
      console.log(commentData);
      await createStudyComment(studyboardkey, commentData);
      alert('댓글이 추가되었습니다.');
      setNewComment('');
      setIsSecret(false);
      fetchStudyComments(key);
    } catch (error) {
      console.error('댓글 추가 실패:', error);
      console.error('에러내용', error.response ? error.response.data : error.message);
    }
  };

  return (
    <CommentBackground>
      <CommentsContainer>
        <CommentTitleContainer>
          <CommentTitle>댓글</CommentTitle>
          <CommentCount>{comments.length}</CommentCount>
        </CommentTitleContainer>
        {comments.map((comment, index) => (
          <Comment key={index}>
            <CommentHeader>
              <CommentAuthor>{comment.id}</CommentAuthor>
              <DeleteButton onClick={() => handleDelete(comment.commentKey)}>x</DeleteButton>
            </CommentHeader>
            <CommentText>{comment.comment}</CommentText>
            <Meta style={{ marginLeft: '5px' }}>{formatDate(comment.date)}</Meta>
          </Comment>
        ))}
        <CommentInputContainer>
          <UserName>나</UserName>
          <CommentTextArea
            placeholder="댓글을 남겨보세요"
            value={newComment}
            onChange={handleCommentChange}
          />
          <OptionsWrapper>
            <SecretCheckbox>
              <SecretCheckboxInput
                type="checkbox"
                checked={isSecret}
                onChange={handleSecretChange}
              />
              비밀글
            </SecretCheckbox>
            <SubmitButton onClick={handleCommentSubmit}>등록</SubmitButton>
          </OptionsWrapper>
        </CommentInputContainer>
      </CommentsContainer>
    </CommentBackground>
  );
};

export default StudyPostComments;

const CommentBackground = styled.div`
  background-color: #f0f8ff;
  border-radius: 8px;
  padding: 20px;
`

const CommentsContainer = styled.div`
  width: 900px;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
`

const CommentTitleContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const CommentTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
`

const CommentCount = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #0085ff;
  margin-left: 10px;
`

const Comment = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CommentAuthor = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 16px;
`

const CommentText = styled.div`
  font-size: 13px;
  margin-left: 5px;
`

const CommentInputContainer = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

const UserName = styled.div`
  font-size: 16px;
  padding: 5px;
  font-weight: bold;
  color: #333;
`

const CommentTextArea = styled.textarea`
  font-size: 16px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 8px;
  resize: none;
  overflow: auto;
  min-height: 30px;
`

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
`

const SubmitButton = styled.button`
  background-color: white;
  color: #007bff;
  font-weight: 900;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 5px;
`

const SecretCheckbox = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
`

const SecretCheckboxInput = styled.input`
  margin-right: 5px;
`

const Meta = styled.div`
  font-size: 0.9em;
  color: #666;
  white-space: nowrap;
`
