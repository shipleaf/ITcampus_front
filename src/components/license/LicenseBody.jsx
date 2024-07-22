import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    width: 60%
`;

const Body = styled.div`
    padding: 20px;
    background-color: #fff;
    padding-bottom: 50px;
`;

const Button = styled.button`
    background-color: none;
    border: none;
    width: 20%;
    cursor: pointer;
    padding: 20px;
`
const Container = styled.div`
    width: 60%;
    border: 1px solid #79BFFF;
    border-radius: 10px;
    border-top: 2px solid #79BFFF;
    overflow: hidden;
    margin-top: 50px;
`


function LicenseBody({ licenseDetails }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Container>
                <Header>
                    <Button>출제경향</Button>
                    <Button>취득방법</Button>
                    <Button>기출문제</Button>
                </Header>
                <Body>
                    {licenseDetails.testinfo.map((info, index) => (
                        <div key={index}>{info}</div>
                    ))}
                </Body>
            </Container>
        </div>
    );
}

export default LicenseBody;
