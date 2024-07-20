import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ScrapButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

function ScrapButton() {
    const [isScrapped, setIsScrapped] = useState(false);

    const handleScrap = useCallback(async () => {
        setIsScrapped((prev) => !prev);

        try {
            const response = await fetch('http://localhost:8080/api/scrap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isScrapped: !isScrapped }),
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('서버에 기록하는데 실패했습니다.');
            }

            const result = await response.json();
            console.log('서버 기록 성공:', result);
        } catch (error) {
            alert(error.message);
        }
    }, [isScrapped]);

    return (
        <ScrapButtonContainer>
            {isScrapped ? (
                <FaStar size={80} style={{ color: '#ffff00' }} onClick={handleScrap} />
            ) : (
                <CiStar size={80} style={{ color: '#A8A8A8' }} onClick={handleScrap} />
            )}
        </ScrapButtonContainer>
    );
}

export default ScrapButton;
