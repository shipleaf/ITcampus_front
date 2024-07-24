import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GuestHeader from '../components/header/GuestHeader';
import CompanyHeader from '../components/modules/company/CompanyHeader';
import ScrapButtonDiv from '../components/modules/recruit/ScrapButtonDiv';
import CompanyPost from '../components/post/CompanyPost';
import star from '../assets/scrap.png'

const CompanyDetails = () => {
    const dummyData = [{
        key: 1,
        companyName: "현대자동차(주)",
        establish: "1967. 12. 29",
        logo: "example_logo.png",
        pic1: "example_pic1.png",
        pic2: "example_pic2.png",
        pic3: "example_pic3.png",
        pic4: "example_pic4.png",
        pic5: "example_pic5.png",
        body: `GINT 는 인류에게 가장 기본적이며 필수적인 산업인 농업, 그 중에서도 생산과정을 근본적으로 해결하기 위해 국내 최고 수준의 토르딘드, ICT 전문가들이 모인 Ag-Tech 스타트업입니다.
                기술신용평가에서 기술등급이라는 최고에 가까운 등급을 받은만큼 기술력, 시장성, 사업성, 경영역량에서 인증받았습니다.
                23년 상반기 165억 규모의 Series B 유치에 성공하였으며, 현재 누적 투자액 250억원을 유지하였습니다.
                자율주행 기술을 시작으로 한 본격적인 미래농업기술과 서비스 보급을 시작할 예정입니다.GINT 는 인류에게 가장 기본적이며 필수적인 산업인 농업, 그 중에서도 생산과정을 근본적으로 해결하기 위해 국내 최고 수준의 토르딘드, ICT 전문가들이 모인 Ag-Tech 스타트업입니다.
                기술신용평가에서 기술등급이라는 최고에 가까운 등급을 받은만큼 기술력, 시장성, 사업성, 경영역량에서 인증받았습니다.
                23년 상반기 165억 규모의 Series B 유치에 성공하였으며, 현재 누적 투자액 250억원을 유지하였습니다.
                자율주행 기술을 시작으로 한 본격적인 미래농업기술과 서비스 보급을 시작할 예정입니다.`,
        track: "자동차",
        stack: "JavaScript, Node.js, React",
        welfare: "Health insurance, Paid time off",
        salary: "경쟁",
        location: "서울 서초구 현릉로 12 (양재동) 본사",
        employee: "73,500명",
        link: "https://www.example.com",
        revenue: "100억",
        scrapCount: 1
    }
];

    const OtherCompany ={
        company: "가",
        detail: "#프리한 복장 가능 #정시출근 #편균 연령 40대이상 외 13가지",
        img: star,
        scrap: 215,
    };


    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    const { key } = useParams();

    const companyDetailData = dummyData.find(company => company.key === Number(key));
    
    if (!companyDetailData) {
        return <div>데이터를 불러오지 못했습니다.</div>;
    }

    return (
        <>
            <GuestHeader />
            <Container>
                <Title>기업소개</Title>
                <Divder />
                <CompanyHeader data={companyDetailData} />
                <ScrapContainer>
                    <ScrapButtonDiv />
                </ScrapContainer>
                <Section>
                    <SectionTitle>회사 소개</SectionTitle>
                    <SectionContent isExpanded={isExpanded}>
                        {companyDetailData.body.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </SectionContent>
                    <ExpandButton onClick={handleExpandClick}>
                        {isExpanded ? '접기 ▲' : '펼치기 ▼'}
                    </ExpandButton>
                </Section>
                <ImageGallery>
                    <GalleryImage src={companyDetailData.pic1} alt="이미지1" />
                    <GalleryImage src={companyDetailData.pic2} alt="이미지2" />
                    <GalleryImage src={companyDetailData.pic3} alt="이미지3" />
                    <GalleryImage src={companyDetailData.pic4} alt="이미지4" />
                </ImageGallery>
                <Section>
                    <SectionTitle>복지 및 혜택</SectionTitle>
                    <SectionContent>
                        {companyDetailData.welfare}
                    </SectionContent>
                </Section>
                <Section style = {{marginTop: '100px'}}>
                    <SectionTitle style = {{fontSize: '15px' }}>다른 기업들을 보고싶다면?</SectionTitle>
                    <SectionContent>
                    </SectionContent >
                </Section>
            </Container>
            <CompanyPost
                        company={OtherCompany.company} 
                        detail={OtherCompany.detail} 
                        img={OtherCompany.img} 
                        scrap={OtherCompany.scrap} 
            />
        </>
    );
}

export default CompanyDetails;

const Container = styled.div`
    width: 60%;
    margin: 20px auto;
    font-family: Arial, sans-serif;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    width: 62%;
    padding: 15px;
    margin-left: 10px;
`;

const Divder = styled.div`
    margin: 5px auto;  
    width: 99%;
    height: 2px;
    background-color: black;
`;

const ScrapContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    margin: 20px auto;
`;

const Section = styled.div`
    margin: 20px 0;
`;

const SectionTitle = styled.h2`
    margin: 0 0 10px 0;
    font-size: 20px;
`;

const SectionContent = styled.div`
    margin: 10px 0;
    font-size: 16px;
    max-height: ${({ isExpanded }) => (isExpanded ? 'none' : '110px')};
    overflow: hidden;
`;

const ExpandButton = styled.button`
    display: block;
    width: 100%;
    height: 50px;
    margin: 10px auto;
    padding: 5px 10px;
    background-color: white;
    font-size: 20px;
    font-weight: bold;
    color: black;
    border: 1px solid #999;
    border-radius: 5px;
    cursor: pointer;
`;

const ImageGallery = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`;

const GalleryImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`;
