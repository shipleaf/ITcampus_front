import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { licenseScrap, licenseUnScrap, companyScrap, companyUnScrap, supportScrap, supportUnScrap, recruitScrap, recruitUnScrap } from '../../../APIs/ScrapAPI';

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

function ScrapButton({ apiEndpoint, isScrapped, type }) {
    const [isScrappedFront, setIsScrappedFront] = useState(isScrapped);

    useEffect(() => {
        setIsScrappedFront(isScrapped);
    }, [isScrapped]);

    const handleScrap = async () => {
        try {
            let response;
            if (isScrappedFront) {
                if (type === 'license') {
                    response = await licenseUnScrap(apiEndpoint);
                } else if (type === 'company') {
                    response = await companyUnScrap(apiEndpoint);
                } else if (type === 'support') {
                    response = await supportUnScrap(apiEndpoint);
                } else if (type === 'recruit') {
                    response = await recruitUnScrap(apiEndpoint);
                }
            } else {
                if (type === 'license') {
                    response = await licenseScrap(apiEndpoint);
                } else if (type === 'company') {
                    response = await companyScrap(apiEndpoint);
                } else if (type === 'support') {
                    response = await supportScrap(apiEndpoint);
                } else if (type === 'recruit') {
                    response = await recruitScrap(apiEndpoint);
                }
            }

            if (response.status >= 200 && response.status < 300) {
                setIsScrappedFront(prev => !prev);
                alert(isScrappedFront ? '스크랩이 취소되었습니다.' : '스크랩 되었습니다!');
            } else {
                alert('스크랩 요청에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('스크랩 요청 중 오류 발생:', error);
            alert('스크랩 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <ScrapButtonContainer onClick={handleScrap}>
                {isScrappedFront ? (
                    <>
                        <FaStar size={30} style={{ color: '#F5F500' }} />
                        <div style={{ color: '#999', marginLeft: '5px' }}>스크랩 취소</div>
                    </>
                ) : (
                    <>
                        <CiStar size={30} style={{ color: '#A8A8A8' }} />
                        <div style={{ color: '#999', marginLeft: '5px' }}>스크랩</div>
                    </>
                )}
            </ScrapButtonContainer>
        </div>
    );
}

export default ScrapButton;
