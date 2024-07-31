import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { editProfileAPI } from "../../../APIs/myPageAPI";

function EditProfileModal({ isOpen, onClose, user, setUserData }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [job, setJob] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
      setGender(user.gender);
      setBirthdate(user.birth.split('T')[0]);
      setJob(user.job);
    }
  }, [user]);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleBirthdateChange = (e) => setBirthdate(e.target.value);
  const handleJobChange = (e) => setJob(e.target.value);

  const handleSave = async () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const profileData = {
      email,
      name,
      password,
      birth: birthdate,
      gender,
      job
    };

    try {
      const response = await editProfileAPI(profileData);
      console.log(response.data);
      alert("프로필이 성공적으로 수정되었습니다.");
      onClose(); 
      setUserData(prevData => ({
        ...prevData,
        user: {
          ...prevData.user,
          email,
          name,
          birth: birthdate,
          gender,
          job
        }
      }));
    } catch (error) {
      console.error(error);
      alert("프로필 수정에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>정보 수정</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <Form>
          <Label>이메일 </Label>
          <Input value={email} onChange={handleEmailChange} disabled />
          <Label>이름 </Label>
          <Input value={name} onChange={handleNameChange} />
          <Label>새로운 비밀번호 </Label>
          <Input type="password" value={password} onChange={handlePasswordChange} placeholder="새로운 비밀번호 입력" />
          <Input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="비밀번호 확인" />
          <Label>성별 </Label>
          <RadioGroup>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="gender"
                value="남성"
                checked={gender === '남성'}
                onChange={handleGenderChange}
              />
              남성
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="gender"
                value="여성"
                checked={gender === '여성'}
                onChange={handleGenderChange}
              />
              여성
            </RadioLabel>
          </RadioGroup>
          <Label>생년월일 </Label>
          <Input
            type="date"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
          <Label>직업 </Label>
          <Input value={job} onChange={handleJobChange} placeholder='없으면 "없음"을 입력하시오' />
        </Form>
        <ButtonContainer>
          <EditButton onClick={handleSave}>수정</EditButton>
          <CancelButton onClick={onClose}>취소</CancelButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
}

export default EditProfileModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  border: 3px solid #00ACEE;
  width: 350px;
  position: relative;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ModalTitle = styled.div`
  position: absolute;
  left: 50%;
  margin-top: 10px;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: bold;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
  position: absolute;
  right: 0;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
`

const Label = styled.div`
  align-self: flex-start;
  margin-left: 30px;
  margin-top: 20px;
  font-size: 12px;
  color: #333;
`

const Input = styled.input`
  margin-top: 10px;
  width: 70%;
  height: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

const RadioLabel = styled.label`
  margin: 0 40px;
  font-size: 14px;
`

const RadioInput = styled.input`
  margin-right: 5px;
`

const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  margin: 20px auto;
  justify-content: center;
  flex-direction: column;
`

const EditButton = styled.button`
  width: 100%;
  height: 40px;
  color: #fff;
  background-color: #00ACEE;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`

const CancelButton = styled.button`
  width: 100%;
  padding: 1px;
  height: 40px;
  color: #00ACEE;
  background-color: #fff;
  border: 1px solid black;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
`
