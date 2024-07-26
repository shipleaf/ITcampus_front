import React from 'react';
import styled from 'styled-components';
import star from '../../assets/scrap.png';

function RecruitmentPost({ title, body, companyname, pic1, scrapCount, startdate, enddate, recruit_part, stack, experience, education, work_type, width }) {
    const formatDate = (dateString) => {
        const date = new window.Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; 
        const day = date.getDate();
        return `${year}. ${month}. ${day}`;
    };

    return (
        <ButtonFrame width={width} >
            <ContentContainer>
                <Title>{title}</Title>
                <Content>{body}</Content>
                <RequirementContainer>
                    <Requirement>{recruit_part}</Requirement>
                    <Requirement>{stack}</Requirement>
                    <Requirement>{experience}</Requirement>
                    <Requirement>{education}</Requirement>
                    <Requirement>{work_type}</Requirement>
                </RequirementContainer>
                <Footer>
                    <Writer>{companyname}</Writer>
                    <Date>{`${formatDate(startdate)} ~ ${formatDate(enddate)}`}</Date>
                    <ScrapContainer>
                        <ScrapImg src={star} />
                        <ScrapCount>{scrapCount}</ScrapCount>
                    </ScrapContainer>
                </Footer>
            </ContentContainer>
            <ThumbnailContainer>
                <Thumbnail src={pic1} />
            </ThumbnailContainer>
        </ButtonFrame>
    );
}

export default RecruitmentPost;

const ButtonFrame = styled.button`
    display: flex;
    width: ${(props) => props.width || '60%'};
    height: 250px;
    margin: 15px auto;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border : none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        border: 3px solid #36bef1;
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    height: 100%;
    margin: 5px;
    overflow: hidden;
`

const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Content = styled.div`
    font-size: 18px;
    color: #666;
    text-align: left;
    height: auto;
    margin: 10px 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const RequirementContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;
`

const Requirement = styled.div`
    font-size: 15px;
    color: #666;
    background-color: #f3f3f3;
    padding: 5px 10px;
    border-radius: 20px;
`


const Footer = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0px;
    height: 10%;
`

const Writer = styled.div`
    font-size: 16px;
    font-weight: bold;
    width: 200px;
    color: black;
`


const Date = styled.div`
    font-size: 14px;
    color: #999;
    margin: auto 10px;
`

const ScrapContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 30px;
`

const ScrapImg = styled.img`
    width: 25px;
    height: 25px;
`

const ScrapCount = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #999;
    margin-left: 7px;
    margin-top: 2.4px;
`;


const ThumbnailContainer = styled.div`
    flex-shrink: 1;
    margin-right: 20px;
`;

const Thumbnail = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`;
