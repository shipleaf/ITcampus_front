import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DropdownPage = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 45px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
`

const SmallMenu = styled.div`
    
`

const Title = styled.div`
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 15px;
`

const Content = styled.div`
    color: #777;
    margin-bottom: 10px;
    font-size: 12px;
`

function DropdownMenu() {
    return (
        <DropdownPage>
            <SmallMenu>
                <Title>기업소개</Title>
                <Content>
                    <Link to="/companylist" style={{ textDecoration: 'none', color: '#777' }}>
                        기업소개
                    </Link>
                </Content>
            </SmallMenu>
            <SmallMenu>
                <Title>IT자격증</Title>
                <Content>
                    <Link to="/licenselist" style={{ textDecoration: 'none', color: '#777' }}>
                        IT자격증
                    </Link>
                </Content>
            </SmallMenu>
            <SmallMenu>
                <Title>지원사업</Title>
                <Content>
                    <Link to="/governmentlist" style={{ textDecoration: 'none', color: '#777' }}>
                        지원 프로그램
                    </Link>
                </Content>
            </SmallMenu>
            <SmallMenu>
                <Title>채용 공고</Title>
                <Content>
                    <Link to="/recruitlist" style={{ textDecoration: 'none', color: '#777' }}>
                        채용 공고
                    </Link>
                </Content>
            </SmallMenu>
            <SmallMenu>
                <Title>커뮤니티</Title>
                <Content>
                    <Link to="/informationlist" style={{ textDecoration: 'none', color: '#777' }}>
                        정보게시판
                    </Link>
                </Content>
                <Content>
                    <Link to="/studylist" style={{ textDecoration: 'none', color: '#777' }}>
                        스터디 게시판
                    </Link>
                </Content>
            </SmallMenu>
        </DropdownPage>
    );
}

export default DropdownMenu;
