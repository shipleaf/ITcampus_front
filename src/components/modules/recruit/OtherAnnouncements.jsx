import React from 'react'
import styled from 'styled-components';
import Post from '../../post/Post';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`

const HeaderContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #999;
    padding: 20px;
`;

const Header = styled.div`
    color: #000;
    font-weight: 600;
`;


function OtherAnnouncements() {

    const postinfo = {
        title: "[공지] 12기 중앙 해커톤 안내",
        detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
        writer: "멋쟁이사자처럼 대학",
        img: '',
        scrap: 215,
        startDate: "2024. 7. 5",
        endDate: "2024. 7. 14"
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , marginTop: '50px'}}>
            <Container>
                <HeaderContainer>
                    <Header>
                        기업의 다른 공고 보기
                    </Header>
                </HeaderContainer>
                <Post
                    title={postinfo.title}
                    detail={postinfo.detail}
                    writer={postinfo.writer}
                    img={postinfo.img}
                    scrap={postinfo.scrap}
                    startDate={postinfo.startDate}
                    endDate={postinfo.endDate}
                />
            </Container>
        </div >
    )
}

export default OtherAnnouncements
