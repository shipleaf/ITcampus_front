import React from 'react'
import styled from 'styled-components'

const DropdownPage = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 45px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start
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

// 링크 추가 필요

function DropdownMenu() {
    return (
        <DropdownPage>
            <SmallMenu>
                <Title>기업소개</Title>
                <Content>기업소개</Content>
            </SmallMenu>
            <SmallMenu>
                <Title>IT자격증</Title>
                <Content>IT자격증</Content>
            </SmallMenu>
            <SmallMenu>
                <Title>지원사업</Title>
                <Content>정부 지원 프로그램</Content>
                <Content>기업 지원 프로그램</Content>
            </SmallMenu>
            <SmallMenu>
                <Title>채용 공고</Title>
                <Content>프론트엔드</Content>
                <Content>백엔드/서버</Content>
                <Content>데이터</Content>
                <Content>앱(iOS/안드로이드)</Content>
            </SmallMenu>
            <SmallMenu>
                <Title>커뮤니티</Title>
                <Content>정보게시판</Content>
                <Content>스터디 모집</Content>
            </SmallMenu>
        </DropdownPage>
    )
}

export default DropdownMenu;
