import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCompanyDetails } from '../APIs/companyAPI';
import styled from 'styled-components';
import GuestHeader from '../components/modules/header/GuestHeader';
import UserHeader from '../components/modules/header/UserHeader';
import CompanyHeader from '../components/modules/company/CompanyHeader';
import ScrapButtonDiv from '../components/modules/recruit/ScrapButtonDiv';
import CompanyPost from '../components/post/CompanyPost';
import { loginState } from '../state/atoms';
import { useRecoilValue } from 'recoil';
import Modal from 'react-modal';


function CompanyDetails() {
    const [companyDetailData, setCompanyDetailData] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isExpanded] = useState(false);
    const isLoggedIn = useRecoilValue(loginState);

    const openModal = (image) => {
        setModalImage(image);
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
        setModalImage(null);
      };

    const { key } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        const getCompanyDetails = async () => {
            try {
                const response = await fetchCompanyDetails(key);
                if (response.status >= 200 && response.status < 300) {
                    setCompanyDetailData(response.data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getCompanyDetails();
    }, [key]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error || !companyDetailData) {
        return <p>회사 정보 불러오기 실패: {error?.message || 'Unknown error'}</p>;
    }

    const topCompanies = [...companyDetailData.otherCompanies]
        .sort((a, b) => b.companyID - a.companyID)
        .slice(0, 3);

    const imageSources = [
        companyDetailData.pic1,
        companyDetailData.pic2,
        companyDetailData.pic3,
        companyDetailData.pic4,
        companyDetailData.pic5,
    ].filter(pic => pic); // 값이 있는 pic만 필터링

    return (
        <>
            {isLoggedIn ? (
                <UserHeader />
            ) : (
                <GuestHeader />
            )}
            <Container>
                <Title>기업소개</Title>
                <Divder />
                <CompanyHeader data={companyDetailData} />
                <ScrapContainer>
                    <ScrapButtonDiv apiEndpoint={`/api/company/${key}/scrap`} isScrapped={companyDetailData.isScrapped} type="company" />
                </ScrapContainer>
                <Section>
                    <SectionTitle>회사 소개</SectionTitle>
                    <SectionContent isExpanded={isExpanded}>
                        {companyDetailData.body.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </SectionContent>
                </Section>
                {imageSources.length > 0 && (
                    <ImageGallery>
                        {imageSources.map((src, index) => (
                            <GalleryImage key={index} src={src} onClick={() => openModal(src)} alt={`이미지${index + 1}`} />
                        ))}
                    </ImageGallery>
                )}
                <Section>
                    <SectionTitle>복지 및 혜택</SectionTitle>
                    <SectionContent>
                        {companyDetailData.welfare}
                    </SectionContent>
                </Section>
                <Section style={{ marginTop: '100px' }}>
                    <SectionTitle style={{ fontSize: '15px' }}>다른 기업들을 보고싶다면?</SectionTitle>
                </Section>
                <OtherCompany>
                    {topCompanies.map((company) => (
                        <CompanyPostContainer key={company.companyID}>
                            <CompanyPost
                                postKey={company.companyID}
                                companyName={company.companyName}
                                stack={company.stack}
                                track={company.track}
                                logo={company.logo}
                                scrapCount={company.scrapCount}
                            />
                        </CompanyPostContainer>
                    ))}
                </OtherCompany>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                    <ModalImage src={modalImage} />
                </Modal>
            </Container>
        </>
    );
}

export default CompanyDetails;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const Container = styled.div`
    width: 60%;
    margin: 20px auto;
    font-family: Arial, sans-serif;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    width: 62%;
    padding: 15px;
    margin-left: 10px;
`

const Divder = styled.div`
    margin: 5px auto;  
    width: 99%;
    height: 2px;
    background-color: black;
`

const ScrapContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    margin: 20px auto;
`

const Section = styled.div`
    margin: 20px 0;
`

const SectionTitle = styled.h2`
    margin: 0 0 10px 0;
    font-size: 20px;
`

const SectionContent = styled.div`
    margin: 10px 0;
    font-size: 16px;
    max-height: ${({ isExpanded }) => (isExpanded ? 'none' : '110px')};
    overflow: hidden;
`

const ImageGallery = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 0;
`

const GalleryImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin: 0 10px;
`

const OtherCompany = styled.div`
    display: flex;
    flex-direction: column;
`

const CompanyPostContainer = styled.div`
    margin-bottom: -20px; 
`
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '1000px',
      maxHeight: '600px',
      padding: 0,
      overflow: 'hidden',
    },
  }
  