import React, { useState } from "react";
import styled from "styled-components";
import Modal from 'react-modal';

function SupportBody({ supportdata }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null);
  };

  const formatDate = ( dateString ) => {
    const date = new window.Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    return `${year}. ${month}. ${day}`;
  };

  return (
    <>
      <Title>상세 내용</Title>
      <Container>
        <Section>
          <SectionTitle>지원 자격</SectionTitle>
          <ul>
            <Content>{supportdata.qualification}</Content>
          </ul>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>신청 안내</SectionTitle>
          <ul>
            <SubSectionTitle>신청 기간</SubSectionTitle>
            <SubSectionContent>{formatDate(supportdata.startdate)} ~ {formatDate(supportdata.enddate)}</SubSectionContent>
            <SubSectionTitle>신청 방법</SubSectionTitle>
            <SubSectionContent>
              {supportdata.application_method}
            </SubSectionContent>
          </ul>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>문의</SectionTitle>
          <ul>
          <Content>
            홈페이지 : <a href={supportdata.link}>{supportdata.link}</a>
          </Content>
          </ul>
        </Section>
      </Container>
      <Title>참고 자료</Title>
      <ImgContainer>
        {supportdata.pic1 && <Img src={supportdata.pic1} onClick={() => openModal(supportdata.pic1)}/>}
        {supportdata.pic2 && <Img src={supportdata.pic2} onClick={() => openModal(supportdata.pic2)} />}
        {supportdata.pic3 && <Img src={supportdata.pic3} onClick={() => openModal(supportdata.pic3)}/>}
        {supportdata.pic4 && <Img src={supportdata.pic4} onClick={() => openModal(supportdata.pic4)}/>}
      </ImgContainer>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <ModalImage src={modalImage} />
      </Modal>
    </>
  );
}

export default SupportBody;

const Container = styled.div`
  width: 60%;
  margin: 10px auto;
  padding: 20px;
  background-color: white;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  box-sizing: border-box;
`

const Title = styled.div`
  display: flex;
  width: 60%;
  text-align: start;
  margin-top: 50px;
  padding-left: 20px;
`

const Section = styled.div`
  margin-bottom: 20px;
`

const SectionTitle = styled.li`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
  list-style-type: square;
  &::marker {
    color: #007bff;
    font-size: 21px;
  }
`

const SubSectionTitle = styled.li`
  font-size: 15px;
  color: black;
  font-weight: 500;
  text-shadow: 2px 1px 2px #999;
  list-style-type: square;
`

const SubSectionContent = styled.li`
  font-size: 15px;
  color: gray;
  margin: 8px 20px 20px;
  margin-left: 20px;
`

const Content = styled.li`
  font-size: 16px;
  line-height: 1.5;
  color: gray;
`

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  margin: 20px 0;
`

const ImgContainer = styled.div`
  width: 60%;
  margin: 10px auto;
  padding: 20px;
  background-color: white;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  margin-bottom: 100px;
`

const Img = styled.img`
  max-width: 100%;
  object-fit: cover;
`
const ModalImage = styled.img`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  max-height: 600px;
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
    maxWidth: "1000px",
    maxHeight: "600px",
    padding: 0,
    overflow: 'hidden',
  },
}
