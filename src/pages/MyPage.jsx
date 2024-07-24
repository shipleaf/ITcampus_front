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
                    <ProfileImg src="path_to_profile_image" alt="Profile" />
                    <WelcomeMessage>
                        <UserName>김선엽님 환영합니다!</UserName>
                        <UserStatus>학생</UserStatus>
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
  width: 100%;
  height: 100%;
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
  border-bottom: 2px solid #e4e4e4;
`

const Content = styled.div`
  flex-direction: column;
  align-items: center;
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
