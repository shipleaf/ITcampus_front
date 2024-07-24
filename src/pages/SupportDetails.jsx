import React from 'react';
import styled from 'styled-components';
import SupportHeader from '../components/support/SupportHeader';
import ScrapButtonDiv from '../components/modules/recruit/ScrapButtonDiv';

const ScrapContainer = styled.div`
    width: 8%;
`

function SupportDetails() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <SupportHeader />
            <ScrapContainer>
                <ScrapButtonDiv />
            </ScrapContainer>
        </div>
    )
}

export default SupportDetails
