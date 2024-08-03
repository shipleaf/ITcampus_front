import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const StudyBoardDiv = styled.div`
    margin-top: 10px;
    background-color: #fff;
    width: 46%;
    height: 45px;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    justify-content: space-between;
    border-radius: 10px;
    position: relative;
    left: 0.5%;
    margin-bottom: 15px;
`

const StudyDescrribe = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-weight: 550;
`

const StudyTitle = styled.div`
    color: #777;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    margin-left: 50px;
`

const ButtonContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 10px;
`

const StudyButton = styled.button`
    background-color: #fff;
    height: 75%;
    border: 1px solid #ddd;
    border-radius: 10%;
    display: flex;
    align-items: center;
    &:hover{
        background-color: #eee;
        cursor: pointer;
    }
`

const PrevButton = styled(StudyButton)`
    
`

const NextButton = styled(StudyButton)`
    
`

function StudyBoard() {

    const studyData = [
        {
            "key": 2,
            "id": "1",
            "title": "프론트 React 스터디 모집합니다~~!",
            "body": "This is a sample post content.",
            "date": "2024-07-19T05:35:53.000Z",
            "pic1": "pic1.jpg",
            "pic2": "pic2.jpg"
        },
        {
            "key": 5,
            "id": "1234",
            "title": "백엔드 Spring 스터디 하고 싶습니다.",
            "body": "This is a sample post content.",
            "date": "2024-07-19T05:35:59.000Z",
            "pic1": "pic1.jpg",
            "pic2": "pic2.jpg"
        },
        {
            "key": 6,
            "id": "1234",
            "title": "Typescript 스터디 모집합니다.",
            "body": "This is a sample post content.",
            "date": "2024-07-19T05:35:59.000Z",
            "pic1": "pic1.jpg",
            "pic2": "pic2.jpg"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % studyData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [studyData.length]);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + studyData.length) % studyData.length);
    }

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % studyData.length);
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <StudyBoardDiv>
                <StudyDescrribe>스터디 모집</StudyDescrribe>
                <StudyTitle>{studyData[currentIndex].title}</StudyTitle>
                <ButtonContainer>
                    <PrevButton onClick={handlePrevClick}>
                        <IoIosArrowBack size={20} />
                    </PrevButton>
                    <NextButton onClick={handleNextClick}>
                        <IoIosArrowForward size={20} />
                    </NextButton>
                </ButtonContainer>
            </StudyBoardDiv>
        </div>
    )
}

export default StudyBoard
