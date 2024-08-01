import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { fetchInfoPost, editInfoPost, deleteInfoPost } from '../../APIs/infoAPI';

Modal.setAppElement('#root');

function InfoPostContent({ title, id, date, body, pic1, pic2, InfoKey }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();
  
  const hasPictures = pic1 || pic2;

  console.log("사진 : ", pic1);

  const formatDate = (dateString) => {
    const date = new window.Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const hour = date.getUTCHours();
    const minute = date.getMinutes();
    return `${year}. ${month}. ${day} / ${hour}:${minute}`;
  };

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null);
  };

  const handleNavigation = async(Key) => {
    try{
      const response = await fetchInfoPost(Key);
      if (response && response.data) {
        navigate(`/informationdetails/${Key}`);
      } else {
        alert('게시글이 없습니다.');
      }
    } catch(error){
      alert('게시글이 없습니다.');
    }
  };

  const handleEditClick = async() =>{
    const postData = {};

    try {
      const response = await editInfoPost(InfoKey, postData);
      if (response.status >= 200 && response.status <300) {
        navigate(`/editInfopost//${InfoKey}`);
      }
    } catch (error) {
      alert('권한이 없습니다.');
    }
  };

  const handleDeleteClick = async () => {
    const confirmDelete = window.confirm('정말로 이 게시글을 삭제하시겠습니까?');
    if(!confirmDelete) return;
    try {
      const response = await deleteInfoPost(InfoKey);
      console.log("내용: ", response.status);
      if (response.status >= 200 && response.status < 300) {
        alert('게시글이 성공적으로 삭제되었습니다.');
        navigate('/informationlist');
      }
    } catch (error) {
      alert('권한이 없습니다.');
    }
  };

  return (
    <ContentContainer>
      <ArrowButtonLeft onClick={() => handleNavigation(InfoKey - 1)}>
        <FontAwesomeIcon style={{ height: "20px", border: "2px solid #79BFFF", borderRadius: "50%", padding: "10px" }} icon={faArrowLeft} />
      </ArrowButtonLeft>
      <ContentWrapper>
        <Header>
          <Tag>정보게시판</Tag>
          <ActionButtons>
              <ActionButton onClick={handleEditClick}>수정</ActionButton>
            <ActionButton onClick={handleDeleteClick}>삭제</ActionButton>
          </ActionButtons>
        </Header>
        <Title>{title}</Title>
        <Meta>
          작성자: {id}
          <br />
          작성일: {formatDate(date)}
        </Meta>
        <Divider />
        <ContentWithImages>
          <Content>{body}</Content>
          {hasPictures && (
            <ImageWrapper>
              {pic1 && <Image src={pic1} onClick={() => openModal(pic1)} single={!(pic1 && pic2)} />}
              {pic2 && <Image src={pic2} onClick={() => openModal(pic2)} />}
            </ImageWrapper>
          )}
        </ContentWithImages>
      </ContentWrapper>
      <ArrowButtonRight onClick={() => handleNavigation(Number(InfoKey) + 1)}>
        <FontAwesomeIcon style={{ height: "20px", border: "2px solid #79BFFF", borderRadius: "50%", padding: "10px" }} icon={faArrowRight} />
      </ArrowButtonRight>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <ModalImage src={modalImage} />
      </Modal>
    </ContentContainer>
  );
};

export default InfoPostContent;

const ContentContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 900px;
  margin: 20px auto;
  padding: 20px;
  min-height: 400px;
  display: flex;
  align-items: flex-start;
  position: relative;
`

const ContentWrapper = styled.div`
  flex: 1;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Tag = styled.div`
  font-size: 20px;
  color: #999;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 5px;
`

const ActionButton = styled.button`
  font-size: 12px;
  color: #79BFFF;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`

const Title = styled.div`
  font-size: 30px;
  color: #333;
  font-weight: 500;
  margin-bottom: 10px;
`

const Meta = styled.div`
  font-size: 14px;
  color: #666;
  white-space: nowrap;
  margin-bottom: 10px;
`

const Divider = styled.div`
  width: 85%;
  height: 1px;
  background-color: black;
  margin: 30px 0;
`

const Content = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  white-space: pre-line;
`

const ContentWithImages = styled.div`
  display: flex;
  justify-content: space-between;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  gap: 10px;
`

const Image = styled.img`
  width: ${props => props.single ? '300px' : '150px'};
  height: ${props => props.single ? '300px' : '150px'};
  object-fit: ${props => props.single ? 'contain' : 'cover'};
  cursor: pointer;
`

const ArrowButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  color: #79BFFF;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const ArrowButtonLeft = styled(ArrowButton)`
  left: -180px;
`

const ArrowButtonRight = styled(ArrowButton)`
  right: -60px;
`

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    maxHeight: '90%',
    padding: 0,
    overflow: 'hidden',
  },
}
