import React from 'react'
import styled from 'styled-components';
import OtherRecruitModule from './OtherRecruitModule';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    
`

const Header = styled.div`
    width: 62%;
    border-bottom: 1px solid #999;
    padding: 20px;
    font-size: 16px;
    font-weight: 600;
`

const Row = styled.div`
    display: flex;
    gap: 50px;
`

function RelatedRecruitments() {
    return (
        <div style={{marginBottom: '50px'}}>
            <HeaderContainer>
                <Header>비슷한 공고 보기</Header>
            </HeaderContainer>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                <Row>
                    <OtherRecruitModule />
                    <OtherRecruitModule />
                    <OtherRecruitModule />
                </Row>
                <Row>
                    <OtherRecruitModule />
                    <OtherRecruitModule />
                    <OtherRecruitModule />
                </Row>
            </div>
        </div>
    )
}

export default RelatedRecruitments;
