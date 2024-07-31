import React from 'react';
import styled from 'styled-components';
import RecruitmentPost from '../../post/RecruitmentPost';

const Container = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

const HeaderContainer = styled.div`
    width: 100%;
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

const Message = styled.div`
    margin-top: 20px;
    text-align: center;
    font-size : 30px;
    color: #999;
`;

function OtherAnnouncements({ otherJobData = [] }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
            <Container>
                <HeaderContainer>
                    <Header>
                        기업의 다른 공고 보기
                    </Header>
                </HeaderContainer>
                {otherJobData.length === 0 ? (
                    <Message>현재 기업의 채용중인 다른공고가 없습니다.</Message>
                ) : (
                    otherJobData.map((post) => (
                        <RecruitmentPost
                            key={post.key}
                            postKey={post.key}
                            title={post.title}
                            body={post.body}
                            companyname={post.companyname}
                            pic1={post.pic1}
                            scrapCount={post.scrapCount}
                            startdate={post.startdate}
                            enddate={post.enddate}
                            recruit_part={post.recruit_part}
                            stack={post.stack}
                            experience={post.experience}
                            education={post.education}
                            work_type={post.work_type}
                        />
                    ))
                )}
            </Container>
        </div>
    );
}

export default OtherAnnouncements;
