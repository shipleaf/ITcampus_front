import React, { useState } from 'react';
import styled from 'styled-components';

function LicenseBody({ licenseDetails }) {
    const [selectedTab, setSelectedTab] = useState('출제경향');

    console.log({licenseDetails});

    if (!licenseDetails) {
        return null;
    }

    const renderBodyContent = () => {
        switch (selectedTab) {
            case '출제경향':
                return (
                    <div>   
                        {licenseDetails.testinfo}
                    </div>
                );
            case '취득이점':
                return (
                    <div>
                        {licenseDetails.workview}
                    </div>
                );
            case '기출문제':
                return (
                    <div>
                        <a href={licenseDetails.problems} >기출문제 링크</a>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Container>
                <Header>
                    <TabButton onClick={() => setSelectedTab('출제경향')} active={selectedTab === '출제경향'}>출제경향</TabButton>
                    <TabButton onClick={() => setSelectedTab('취득이점')} active={selectedTab === '취득이점'}>취득이점</TabButton>
                    <TabButton onClick={() => setSelectedTab('기출문제')} active={selectedTab === '기출문제'}>기출문제</TabButton>
                </Header>
                <Body>
                    {renderBodyContent()}
                </Body>
            </Container>
        </div>
    );
}

export default LicenseBody;

const Header = styled.div`
    display: flex;
    width: 60%;
`

const Body = styled.div`
    padding: 20px;
    background-color: #fff;
    padding-bottom: 50px;
`

const TabButton = styled.button`
    background-color: ${props => props.active ? '#fff' : 'transparent'};
    border: none;
    width: 20%;
    cursor: pointer;
    padding: 20px;
    &:hover {
        background-color: #f0f0f0;
    }
`

const Container = styled.div`
    width: 60%;
    border: 1px solid #79BFFF;
    border-radius: 10px;
    border-top: 2px solid #79BFFF;
    overflow: hidden;
    margin-top: 50px;
`