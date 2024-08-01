import React from 'react';
import styled from 'styled-components';
import { Link, Element } from 'react-scroll';

const RecruitBodyContainer = styled.div`
    width: 62%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    border-bottom: 1px solid #999;
`;

const AnchorContainer = styled.div`
    width: 100%;
    display: flex;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    background-color: #fff;
`;

const Anchor = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    &:not(:first-child) {
        margin-left: 4%;
        color: #777;
        &:hover{
            color: #000;
        }
    }
`;

const RecruitImageContainer = styled.div`
    display: flex;
    background-color: #fff;
    justify-content: center;
`;

const StyledImage = styled.img`
    width: auto;
    max-width: 100%;
    height: auto;
    min-width: 700px;
    max-height: 840px;
    object-fit: contain;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const Body = styled.div`
    width: 100%;
    padding: 20px;
`;

function RecruitDetailBody({ jobDetailData }) {
    if (!jobDetailData) {
        return null;
    }
    const images = [jobDetailData.pic1, jobDetailData.pic2, jobDetailData.pic3, jobDetailData.pic4, jobDetailData.pic5];

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <RecruitBodyContainer>
                <AnchorContainer>
                    <Link to="details" smooth={true} duration={500}>
                        <Anchor>상세 정보</Anchor>
                    </Link>
                    <Link to="company" smooth={true} duration={500}>
                        <Anchor>기업 정보</Anchor>
                    </Link>
                    <Link to="period" smooth={true} duration={500}>
                        <Anchor>접수 기간/방법</Anchor>
                    </Link>
                </AnchorContainer>
                <Element name="details">
                    {images.map((pic, index) => (
                        pic && (
                            <RecruitImageContainer key={index}>
                                <StyledImage src={pic} alt={`Recruit Image ${index + 1}`} />
                            </RecruitImageContainer>
                        )
                    ))}
                </Element>
                <Body dangerouslySetInnerHTML={{ __html: jobDetailData.body }} />
            </RecruitBodyContainer>
        </div>
    );
}

export default RecruitDetailBody;
    