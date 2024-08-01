import React from 'react';
import styled from 'styled-components';
import star from '../../assets/scrap.png';
import { useNavigate } from 'react-router-dom';

function RecruitmentPost({ postKey, title, body, companyname, pic1, scrapCount, startdate, enddate, recruit_part, stack, experience, width }) {
    const navigate = useNavigate();
    const formatDate = (dateString) => {
        const date = new window.Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}. ${month}. ${day}`;
    };

    const handleClick = () => {
        navigate(`/recruitmentdetails/${postKey}`);
    };

    // 최대 너비 계산을 위한 로직
    const MAX_WIDTH = 600; // 예시로 ContentContainer의 최대 너비를 설정합니다.
    const MARGIN = 10; // Requirement 사이의 간격
    const requirements = [
        ...(recruit_part ? [recruit_part] : []),
        ...(stack || []),
        ...(experience ? [experience] : [])
    ];

    let currentWidth = 0;

    const filteredRequirements = requirements.filter(req => {
        const reqWidth = req.length * 10 + MARGIN * 2; // 대략적인 문자 길이로 너비 계산
        if (currentWidth + reqWidth <= MAX_WIDTH) {
            currentWidth += reqWidth;
            return true;
        }
        return false;
    });

    return (
        <ButtonFrame width={width} onClick={handleClick}>
            <ContentContainer>
                <Title>{title}</Title>
                <RequirementContainer>
                    {filteredRequirements.map((req, index) => (
                        <Requirement key={index} title={req}>{req}</Requirement>
                    ))}
                </RequirementContainer>
                <Content>{body}</Content>
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
    width: ${(props) => props.width || '100%'};
    height: 220px;
    margin: 15px auto;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border : none;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 2px;

    &:hover {
        border: 2px solid #36bef1;
        padding: 0;
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
    padding-left: 10px;
`

const Title = styled.div`
    height: 15%;
    font-size: 22px;
    font-weight: bold;
    margin: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Noto Sans KR", sans-serif;
`

const Content = styled.div`
    font-family: "Noto Sans KR", sans-serif;
    font-size: 13px;
    color: #999;
    text-align: left;
    height: 27.17%;
    margin: 10px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
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
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    text-align: left;
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
`

const ThumbnailContainer = styled.div`
    flex-shrink: 1;
    margin-right: 20px;
`

const Thumbnail = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`
