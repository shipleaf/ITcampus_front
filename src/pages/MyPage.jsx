import React, { useState, useRef } from "react";
import styled from "styled-components";
import GuestHeader from "../components/header/GuestHeader";
import Post from "../components/post/Post";
import CompanyPost from "../components/post/CompanyPost";
import RecruitmentPost from "../components/post/RecruitmentPost";
import StudyPost from "../components/post/StudyPost";
import EditProfileModal from "../components/modules/mypage/EditProfileModal";

function MyPage() {
    const OtherCompany = [
        {
            company: "현대",
            detail: "자동차에 관심있으신분이면 아무나",
            scrap: 120
        },
        {
            company: "가",
            detail: "#프리한 복장 가능 #정시출근 #편균 연령 40대이상 외 13가지",
            scrap: 215,
        },
        {
            company: "나",
            detail: "#프리한 복장 가능 #정시출근 #편균 연령 40대이상 외 13가지",
            scrap: 215,
        }
    ];

    const OtherPosts = [
        {
            title: "[공지] 12기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            scrap: 215,
            startDate: "2024. 7. 5",
            endDate: "2024. 7. 14"
        },
        {
            title: "[공지] 13기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            scrap: 180,
            startDate: "2024. 8. 1",
            endDate: "2024. 8. 10"
        },
    ];

    const OtherRecruitments = [
        {
            title: "[공지] 19기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            job: "QA/테스터",
            stack: "Selenium",
            experience: "1~3년",
            education: "대학교졸업(2,3년)",
            employmentType: "인턴",
            scrap: 160,
            startDate: "2025. 1. 5",
            endDate: "2025. 1. 15"
        },
        {
            title: "[공지] 20기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            job: "개발PM",
            stack: "Project Management",
            experience: "5~7년",
            education: "대학교졸업(4년)",
            employmentType: "정규직",
            scrap: 250,
            startDate: "2025. 2. 1",
            endDate: "2025. 2. 10"
        },
        {
            title: "[공지] 21기 중앙 해커톤 안내",
            detail: "이러쿵저러쿵... 해커톤에 대한 자세한 내용...",
            writer: "멋쟁이사자처럼 대학",
            job: "네트워크 엔지니어",
            stack: "Cisco",
            experience: "3~5년",
            education: "대학교졸업(2,3년)",
            employmentType: "계약직",
            scrap: 130,
            startDate: "2025. 3. 1",
            endDate: "2025. 3. 10"
        }
    ];

    const StudyData = [
        {
            title: "[이벤트] 멋사 장학금 이벤트 (~6/19)",
            detail: "혹시 멋대생이라면 누구나 받을 수 있는 '무제한'멋사 장학금을 아세요?",
            writer: "정준용",
            datecreate: "2024. 7. 15",
            commentNum: "10"
        },
        {
            title: "멋사",
            detail: "가나다라마바사아자차카타파하",
            writer: "정준용",
            datecreate: "2024. 7. 15",
        },
    ];

    const [selectedTab, setSelectedTab] = useState('기업');
    const [selectedWriteTab, setSelectedWriteTab] = useState('스터디게시판');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrapSectionRef = useRef(null);
    const writtenSectionRef = useRef(null);

    const handleSidebarClick = (tab, isWriteTab = false) => {
        if (isWriteTab) {
            setSelectedWriteTab(tab);
            writtenSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            setSelectedTab(tab);
            scrapSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderWriterContent = () => {
        switch (selectedWriteTab) {
            case '스터디게시판':
                return (
                    <ContentList>
                        {StudyData.map((study, index) => (
                            <StudyPost
                                key={index}
                                width="100%"
                                {...study}
                            />
                        ))}
                    </ContentList>
                );
            case '정보게시판':
                return (
                    <ContentList>
                        {StudyData.map((study, index) => (
                            <StudyPost
                                key={index}
                                width="100%"
                                {...study}
                            />
                        ))}
                    </ContentList>
                );
            default:
                return null;
        }
    };

    const renderContent = () => {
        switch (selectedTab) {
            case '기업':
                return (
                    <ScaledWrapper>
                        <ContentList>
                            {OtherCompany.map((company, index) => (
                                <CompanyPost
                                    key={index}
                                    width="130%"
                                    company={company.company}
                                    detail={company.detail}
                                    img={company.img}
                                    scrap={company.scrap}
                                />
                            ))}
                        </ContentList>
                    </ScaledWrapper>
                );
            case '자격증':
                return (
                    <ContentList>
                        {OtherPosts.map((post, index) => (
                            <Post
                                key={index}
                                width="100%"
                                {...post}
                            />
                        ))}
                    </ContentList>
                );
            case '취업공고':
                return (
                    <ContentList>
                        {OtherRecruitments.map((recruitment, index) => (
                            <RecruitmentPost
                                key={index}
                                width="100%"
                                {...recruitment}
                            />
                        ))}
                    </ContentList>
                );
            default:
                return null;
        }
    };

    return (
        <Frame>
            <GuestHeader />
            <SidebarContainer>
                <SidebarTitle>바로가기</SidebarTitle>
                <SidebarTitle>개인정보 수정</SidebarTitle>
                <SidebarTitle>스크랩 정보
                    <SidebarItemContainer>
                        <SidebarItem onClick={() => handleSidebarClick('기업')}>기업 스크랩</SidebarItem>
                        <SidebarItem onClick={() => handleSidebarClick('자격증')}>자격증 스크랩</SidebarItem>
                        <SidebarItem onClick={() => handleSidebarClick('취업공고')}>취업공고 스크랩</SidebarItem>
                    </SidebarItemContainer>
                </SidebarTitle>
                <SidebarTitle>작성한 글
                    <SidebarItemContainer>
                        <SidebarItem  onClick={() => handleSidebarClick('정보게시판', true)}>정보게시판</SidebarItem>
                        <SidebarItem onClick={() => handleSidebarClick('스터디게시판', true)}>스터디게시판</SidebarItem>
                    </SidebarItemContainer>
                </SidebarTitle>
                <SidebarTitle>회원탈퇴</SidebarTitle>
            </SidebarContainer>
            <Container>
                <Header>
                    <ProfileImg src="data:image/jpeg;base64,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" alt="Profile" />
                    <WelcomeMessage>
                        <UserName>김선엽님 환영합니다!</UserName>
                        <UserStatus> 학생</UserStatus>
                        <UserEdit onClick={() => setIsModalOpen(true)}>개인정보 수정</UserEdit>
                    </WelcomeMessage>
                </Header>
                <ContentFrame ref={scrapSectionRef}>
                    <ContentTitle>스크랩 정보</ContentTitle>
                    <Content>
                        <Section>
                            <SectionTitle active={selectedTab === '기업'} onClick={() => setSelectedTab('기업')}>기업</SectionTitle>
                            <SectionTitle active={selectedTab === '자격증'} onClick={() => setSelectedTab('자격증')}>자격증</SectionTitle>
                            <SectionTitle active={selectedTab === '취업공고'} onClick={() => setSelectedTab('취업공고')}>취업공고</SectionTitle>
                        </Section>
                        {renderContent()}
                    </Content>
                </ContentFrame>
                <ContentFrame ref={writtenSectionRef}>
                    <ContentTitle>내가 작성한 글</ContentTitle>
                    <Content>
                        <Section>
                            <SectionTitle active={selectedWriteTab === '정보게시판'} onClick={() => setSelectedWriteTab('정보게시판')}>정보게시판</SectionTitle>
                            <SectionTitle active={selectedWriteTab === '스터디게시판'} onClick={() => setSelectedWriteTab('스터디게시판')}>스터디게시판</SectionTitle>
                        </Section>
                        {renderWriterContent()}
                    </Content>
                </ContentFrame>
            </Container>
            <EditProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Frame>
    );
}

export default MyPage;

const Frame = styled.div`
  background-color: #F2F4F7;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 5px;
  width: 900px;
  height: 180px;
  border: 2px solid #e4e4e4;
  background-color: white;
`

const ProfileImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: 50px;
`

const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
`

const UserName = styled.div`
  margin: 0;
  font-size: 25px;
  font-weight: bold;
`

const UserStatus = styled.div`
  margin-top: 10px;
  font-size: 18px;
  color: gray;
`

const UserEdit = styled.a`
  text-decoration: none;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #002AFF;

  &:hover {
    color: #ffd500;
    cursor: pointer;
  }
`

const ContentFrame = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;

  border: 2px solid #e4e4e4;
`

const ContentTitle = styled.div`
  display: flex;
  font-size: 25px;
  padding: 20px;
  font-weight: bold;
  background-color: #e6f7ff3b;
  border-bottom: 2px solid #e4e4e4;
`

const Content = styled.div`
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 10px 30px;
`

const Section = styled.div`
  display: flex;
  align-items: center;
`

const SectionTitle = styled.div`
  font-size: 30px;
  align-items: center;
  margin: 10px 20px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#456456' : '#999')};
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '2px solid #456456' : 'none')};
`

const ContentList = styled.div`
  width: 100%;
  max-width: 800px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

const ScaledWrapper = styled.div`
  transform: scale(0.8); 
  margin-left: -190px;
`

const SidebarContainer = styled.div`
    display: flex;
    position: absolute;
    border: 1px solid black;
    width: 200px;
    top: 110px;
    left: 200px;
    background-color: white; 
    border-color: #e4e4e4;
    flex-direction: column;
    align-items: center; 
    padding: 20px;
`

const SidebarTitle = styled.div`
    margin: 10px 0;
    width: 100%;
    font-size: 18px;
    padding: 5px;
    padding-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid #e0e0e0; 
`

const SidebarItemContainer = styled.div`
    width: 100%;
    margin-top: 5px;
`

const SidebarItem = styled.div`
    width: 100%;
    padding: 5px 10px;
    color: #999;
    font-size: 15px;
    cursor: pointer;
`
