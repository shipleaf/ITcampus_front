import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import star from '../../assets/scrap.png';

function Post({ itKey, supKey, title, body, agency, pic1, scrapCount, startdate, enddate, width }) {
    const navigate = useNavigate();
    const formatDate = (dateString) => {
        const date = new window.Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}. ${month}. ${day}`;
    };

    const handleClick = () => {
        if (itKey) {
            navigate(`/licensedetails/${itKey}`)
        }
        else if (supKey) {
            navigate(`/governmentsupportdetails/${supKey}`)
        }
    }
    return (
        <ButtonFrame width={width} onClick={handleClick}>
            <ContentContainer>
                <Title>{title}</Title>
                <Content>{body}</Content>
                <Remain>
                    <Footer>
                        <Writer>{agency}</Writer>
                        <Date>{`${formatDate(startdate)} ~ ${formatDate(enddate)}`}</Date>
                        <ScrapContainer>
                            <ScrapImg src={star} />
                            <ScrapCount>{scrapCount}</ScrapCount>
                        </ScrapContainer>
                    </Footer>
                </Remain>
            </ContentContainer>
            {pic1 ? (
                <ThumbnailContainer>
                    <Thumbnail src={pic1} />
                </ThumbnailContainer>
            ) : null}
        </ButtonFrame>
    );
}

export default Post;

const Remain = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    height: 100%;
`

const ButtonFrame = styled.button`
    display: flex;
    width: ${(props) => props.width || '100%'};
    height: 190px;
    margin: 15px auto;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border: 2px solid #fff;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
    border: 2px solid #36bef1;
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
    font-size: 20px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    margin: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
    padding: 10px;
`
const Content = styled.div`
  font-size: 12px;
  color: #999;
  text-align: left;
  height: auto;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  padding-left: 10px;
`

const Footer = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
`
const Writer = styled.div`
    display: block;
    height: auto;
    font-size: 16px;
    font-weight: bold;
    width: 200px;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    box-sizing: border-box;
    padding-left: 10px;
`

const Date = styled.div`
    font-size: 14px;
    color: #999;
`

const ScrapContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 40px;
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