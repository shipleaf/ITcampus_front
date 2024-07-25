import React, { useState } from 'react';
import styled from 'styled-components';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import axios from 'axios';

function CompanyPost({ logo, companyName, scrapCount,  width }) {
    const [isScrapped, setIsScrapped] = useState(false);

    const handleScrap = async (e) => {
        e.stopPropagation();
        try {
            setIsScrapped((prev) => !prev);
            if (!isScrapped) {
                await axios.post('/api/scrap', { action: 'add' });
                alert('스크랩 되었습니다!');
            } else {
                await axios.post('/api/scrap', { action: 'remove' });
                alert('스크랩이 취소되었습니다.');
            }
        } catch (error) {
            console.error('스크랩 요청 중 오류 발생:', error);
        }
    };

    return (
        <ButtonFrame width={width}>
            <ThumbnailContainer>
                <Thumbnail src={logo} />
            </ThumbnailContainer>
            <CompanyContainer>
                <Company>{companyName}</Company>
                <CompanyRecruitment>현재 채용중 00건</CompanyRecruitment>
            </CompanyContainer>
            <Detail></Detail>
            <ShowScrap>
                <FaStar size={30} style={{ color: '#ffff00' }} />
                <ScrapCount>{scrapCount}</ScrapCount>
            </ShowScrap>
            <ScrapButtonContainer onClick={handleScrap}>
                <ScrapButtonText >스크랩</ScrapButtonText>
                {isScrapped ? (
                    <FaStar size={30} style={{ color: '#ffff00' }} />
                ) : (
                    <CiStar size={30} style={{ color: '#A8A8A8' }} />
                )}
            </ScrapButtonContainer>
        </ButtonFrame>
    );
}

export default CompanyPost;

const ButtonFrame = styled.div`
    display: flex;
    width: ${(props) => props.width || '60%'};
    height: 100px;
    margin: 15px auto;
    margin-bottom: 35px;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #999;
    border-radius: 10px;
    cursor: pointer;
    justify-content: space-between;

    &:hover {
        border: 3px solid #36bef1;
    }
`

const ThumbnailContainer = styled.div`
    display: flex;
    margin: 0 20px;
    width: 100px;
`

const Thumbnail = styled.img`
    width: 100px;
    height: 50px;
`

const CompanyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 12%;
    margin: 0 25px;
`

const Company = styled.div`
    font-size: 15px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const CompanyRecruitment = styled.div`
    font-size: 12px;
    color: #999;
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Detail = styled.div`
    font-size: 12px;
    color: #999;
    width: 40%;
    margin: 0 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const ShowScrap = styled.div`
    display: flex;
    height: 100%;
    width: 10%;
    margin-left: 50px;
    align-items: center;
`

const ScrapCount = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #999;
    margin-left: 7px;
`

const ScrapButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    width: 10%;
    height: 40px;
    cursor: pointer;
    background-color: #fff;
    margin-right: 20px;
    pointer-events: auto;
    
    &:hover {
        border: 3px solid black;
    }
`

const ScrapButtonText = styled.div`
    color: #999;
    margin-left: 5px;
    margin-right: 8px;
    font-size : 15px;
    pointer-events: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
