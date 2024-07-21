import React from 'react';
import styled from 'styled-components';
import GuestHeader from '../components/GuestHeader';
import RecruitDeatilHeader from '../components/modules/recruit/RecruitDeatilHeader';
import ScrapButtonDiv from '../components/modules/recruit/ScrapButtonDiv';

function RecruitmentDetails() {
    return (
        <div style={{backgroundColor: '#f9f9f9'}}>
            <GuestHeader />
            <RecruitDeatilHeader />
            <ScrapButtonDiv />
        </div>
    )
}

export default RecruitmentDetails;
