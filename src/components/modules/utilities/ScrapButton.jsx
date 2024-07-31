import React, { useState } from 'react';
import styled from 'styled-components';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { licenseScrap } from '../../../APIs/ScrapAPI';

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

function ScrapButton({ keyProp }) {
    const [isScrapped, setIsScrapped] = useState(false);

    const handleScrap = async () => {
        try {
            const action = isScrapped ? 'remove' : 'add';
            const response = await licenseScrap(keyProp, action);
            
            if (response.status >= 200 && response.status < 300) {
                setIsScrapped((prev) => !prev);
                alert(isScrapped ? '스크랩이 취소되었습니다.' : '스크랩 되었습니다!');
            } else {
                // 성공하지 않은 경우의 처리
                alert('스크랩 요청에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('스크랩 요청 중 오류 발생:', error);
            alert('스크랩 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
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
