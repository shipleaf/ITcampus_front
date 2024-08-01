import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

function CompanyPost({ key, postKey, logo, companyName, scrapCount, stack, track, width, recruitmentNoticeCount, isScrapped }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/companydetails/${postKey}`)
    }


    return (
        <ButtonFrame width={width} onClick={handleClick}>
            <ThumbnailContainer>
                <Thumbnail src={logo} />
            </ThumbnailContainer>
            <CompanyContainer>
                <Company>{companyName}</Company>
                <CompanyRecruitment>현재 채용중 {recruitmentNoticeCount}건</CompanyRecruitment>
            </CompanyContainer>
            <Detail>
                #Track : {track}, #stack : {stack}
            </Detail>
            <ShowScrap>
                <FaStar size={30} style={{ color: '#F5F500' }} />
                <ScrapCount>{scrapCount}</ScrapCount>
            </ShowScrap>
        </ButtonFrame>
    );
}

export default CompanyPost;

const ButtonFrame = styled.div`
    display: flex;
    width: ${(props) => props.width || '100%'};
    height: 100px;
    margin: 10px auto;
    margin-bottom: 35px;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #999;
    border-radius: 10px;
    cursor: pointer;
    justify-content: space-between;

    &:hover {
        outline: 3px solid #36bef1;
        border: 1px solid white;
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
    font-size: 15px;
    color: #999;
    width: 40%;
    margin: 0 40px;
    margin-left : 50px;
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