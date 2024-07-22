import React, { useState } from 'react';
import styled from 'styled-components';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import axios from 'axios';

const ScrapButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0e0e0;
    width: 100%;
    height: 40px;
    cursor: pointer;
    background-color: #fff;
`;

function ScrapButton() {
    const [isScrapped, setIsScrapped] = useState(false);

    const handleScrap = async () => {
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
        <div style={{width: '100%'}}>
            <ScrapButtonContainer onClick={handleScrap}>
                {isScrapped ? (
                    <FaStar size={30} style={{ color: '#ffff00' }} />
                ) : (
                    <CiStar size={30} style={{ color: '#A8A8A8' }} />
                )}
                <div style={{ color: '#999', marginLeft: '5px' }}>스크랩</div>
            </ScrapButtonContainer>
        </div>
    );
}

export default ScrapButton;
