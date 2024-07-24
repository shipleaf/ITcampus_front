import React from 'react';
import styled from 'styled-components';

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
    &:not(:first-child) {
        margin-left: 4%;
    }
`;

const RecruitImageContainer = styled.div`
    display: flex;
    background-color: #fff;
    justify-content: center;
`;

const StyledImage = styled.img`
    max-width: 750px;
    max-height: 840px;
    width: auto;
    height: auto;
    object-fit: contain;
    margin-top: 30px;
    margin-bottom: 30px;
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
                    <Anchor>상세 정보</Anchor>
                    <Anchor>기업 정보</Anchor>
                    <Anchor>접수 기간/방법</Anchor>
                </AnchorContainer>
                {images.map((pic, index) => (
                    pic && (
                        <RecruitImageContainer key={index}>
                            <StyledImage src={pic} alt={`Recruit Image ${index + 1}`} />
                        </RecruitImageContainer>
                    )
                ))}
            </RecruitBodyContainer>
        </div>
    );
}

export default RecruitDetailBody;
