import React from 'react';
import styled from 'styled-components';
import OtherRecruitModule from './OtherRecruitModule';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const Header = styled.div`
    width: 62%;
    border-bottom: 1px solid #999;
    padding: 20px;
    font-size: 16px;
    font-weight: 600;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    justify-content: center;
    margin: 0 auto;
    width: 20%;
`;

function RelatedRecruitments({ relatedNotices = [] }) {
    if (!relatedNotices.length) {
        return null;
    }

    const topRelatedNotices = relatedNotices.slice(0, 6);

    return (
        <div style={{ marginBottom: '50px' }}>
            <HeaderContainer>
                <Header>비슷한 공고 보기</Header>
            </HeaderContainer>
            <GridContainer>
                {topRelatedNotices.map((notice) => (
                    <OtherRecruitModule key={notice.key} notice={notice} />
                ))}
            </GridContainer>
        </div>
    );
}

export default RelatedRecruitments;
