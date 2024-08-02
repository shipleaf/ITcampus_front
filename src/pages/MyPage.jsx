import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { myPageAPI } from "../APIs/myPageAPI";
import { useRecoilState } from "recoil";
import { loginState } from "../state/atoms";
import Post from "../components/post/Post";
import CompanyPost from "../components/post/CompanyPost";
import RecruitmentPost from "../components/post/RecruitmentPost";
import StudyPost from "../components/post/StudyPost";
import EditProfileModal from "../components/modules/mypage/EditProfileModal";
import { FaPen } from "react-icons/fa";
import { deleteProfile } from "../APIs/myPageAPI";
import { useNavigate } from 'react-router-dom';

function MyPage() {
    const [userData, setUserData] = useState(null);
    const [selectedTab, setSelectedTab] = useState('기업');
    const [selectedWriteTab, setSelectedWriteTab] = useState('정보게시판');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
    const scrapSectionRef = useRef(null);
    const writtenSectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await myPageAPI();
                const data = response.data;
                console.log("프로필", data);
                setUserData(data);
            } catch (error) {
                console.error('데이터 불러오기 실패:', error);
            }
        };

        fetchData();
    }, []);

    const handleSidebarClick = (tab, isWriteTab = false) => {
        if (isWriteTab) {
            setSelectedWriteTab(tab);
            setTimeout(() => {
                writtenSectionRef.current.scrollIntoView({ behavior: 'smooth' })
            }, 50)
        } else {
            setSelectedTab(tab);
            setTimeout(() => {
                scrapSectionRef.current.scrollIntoView({ behavior: 'smooth' })
            }, 50);
        }
    };

    const handleDeleteProfile = async () => {
        const confirmed = window.confirm("정말로 회원탈퇴를 하시겠습니까?");
        if (confirmed) {
            try {
                await deleteProfile();
                alert('회원탈퇴가 완료되었습니다.');
                setIsLoggedIn(false);
                navigate('/');
            } catch (error) {
                alert('회원 탈퇴 실패: ' + error.message);
            }
        }
    };

    const renderWriterContent = () => {
        if (!userData) return null;

        const renderScrapItems = (items) => {
            const displayItems = showAll ? items : items.slice(0, 4);
            return (
                <>
                    {displayItems}
                    {!showAll && items.length > 3 && (
                        <ShowMoreButton onClick={() => setShowAll(true)}>더보기</ShowMoreButton>
                    )}
                </>
            );
        };

        switch (selectedWriteTab) {
            case '스터디게시판':
                return (
                    <ContentList>
                        {renderScrapItems(userData.studyboardPosts && userData.studyboardPosts.map((study, index) => (
                            <StudyPost
                                key={index}
                                studyKey={study.key}
                                width="100%"
                                {...study}
                            />
                        )))}
                    </ContentList>
                );
            case '정보게시판':
                return (
                    <ContentList>
                        {renderScrapItems(userData.freeboardPosts && userData.freeboardPosts.map((info, index) => (
                            <StudyPost
                                key={index}
                                infoKey={info.key}
                                width="100%"
                                title={info.title}
                                body={info.body}
                                date={info.date}
                                id={info.id}
                                pic1={info.pic1}
                                commentCount={info.commentCount}
                            />
                        )))}
                    </ContentList>
                );
            default:
                return null;
        }
    };

    const renderContent = () => {
        if (!userData || !userData.user) return null;

        const renderScrapItems = (items) => {
            const displayItems = showAll ? items : items.slice(0, 4);
            return (
                <>
                    {displayItems}
                    {!showAll && items.length > 4 && (
                        <ShowMoreButton onClick={() => setShowAll(true)}>더보기</ShowMoreButton>
                    )}
                </>
            );
        };

        switch (selectedTab) {
            case '기업':
                return (
                    <ContentList >
                        {renderScrapItems(userData.user.Scraps && userData.user.Scraps
                            .filter(scrap => scrap.companyID)
                            .map((scrap, index) => (
                                <CompanyPost
                                    key={index}
                                    postKey={scrap.companyID}
                                    companyName={scrap.Company.companyName}
                                    scrapCount={scrap.companyScrapCount}
                                    stack={scrap.Company.stack}
                                    track={scrap.Company.track}
                                    logo={scrap.Company.logo}
                                />
                            )))}
                    </ContentList>
                );
            case '자격증':
                return (
                    <ContentList>
                        {renderScrapItems(userData.user.Scraps && userData.user.Scraps
                            .filter(scrap => scrap.qualificationInfoKey)
                            .map((scrap, index) => (
                                <Post
                                    key={index}
                                    itKey={scrap.qualificationInfoKey}
                                    title={scrap.QualificationInfoModel.title}
                                    body={scrap.QualificationInfoModel.body}
                                    agency={scrap.QualificationInfoModel.agency}
                                    startdate={scrap.QualificationInfoModel.startdate}
                                    enddate={scrap.QualificationInfoModel.enddate}
                                    pic1={scrap.QualificationInfoModel.logo}
                                    scrapCount={scrap.qualificationScrapCount}//없음
                                />
                            )))}
                    </ContentList>
                );
            case '학생지원':
                return (
                    <ContentList>
                        {renderScrapItems(userData.user.Scraps && userData.user.Scraps
                            .filter(scrap => scrap.studentSupportInfoKey)
                            .map((scrap, index) => (
                                <Post
                                key={index}
                                supKey={scrap.studentSupportInfoKey}
                                title={scrap.StudentSupportInfoModel.title}
                                body={scrap.StudentSupportInfoModel.body}
                                agency={scrap.StudentSupportInfoModel.agency}
                                startdate={scrap.StudentSupportInfoModel.startdate}
                                enddate={scrap.StudentSupportInfoModel.enddate}
                                pic1={scrap.StudentSupportInfoModel.pic1}
                                scrapCount={scrap.studentSupportScrapCount}//없음
                                />
                            )))}
                    </ContentList>
                );
            case '채용공고':
                return (
                    <ContentList>
                        {renderScrapItems(userData.user.Scraps && userData.user.Scraps
                            .filter(scrap => scrap.recruitmentNoticeInfoKey)
                            .map((scrap, index) => (
                                <RecruitmentPost  // //recruit_part,// width }scrapCount, 
                                    key={index}
                                    postKey={scrap.recruitmentNoticeInfoKey}//
                                    title={scrap.RecruitmentNoticeInfoModel.title}//
                                    body={scrap.RecruitmentNoticeInfoModel.body}//
                                    experience={scrap.RecruitmentNoticeInfoModel.experience}//
                                    education={scrap.RecruitmentNoticeInfoModel.education}//
                                    stack={scrap.RecruitmentNoticeInfoModel.stack}//
                                    work_type={scrap.RecruitmentNoticeInfoModel.work_type}//
                                    companyname={scrap.RecruitmentNoticeInfoModel.companyname}//
                                    startdate={scrap.RecruitmentNoticeInfoModel.startdate}//
                                    enddate={scrap.RecruitmentNoticeInfoModel.enddate}//
                                    pic1={scrap.RecruitmentNoticeInfoModel.pic1}//
                                    recruit_part={scrap.RecruitmentNoticeInfoModel.recruit_part}
                                    scrapCount={scrap.recruitmentNoticeScrapCount}
                                />
                            )))}
                    </ContentList>
                );
            default:
                return null;
        }
    };

    if (!userData) {
        return <div>로딩 중...</div>;
    }

    return (
        <Frame>
            {isLoggedIn ? (
                <UserHeader />
            ) : (
                <GuestHeader />
            )}
            <MainContainer>
                <SidebarContainer>
                    <SidebarTitle>바로가기</SidebarTitle>
                    <SidebarTitle>개인정보 수정</SidebarTitle>
                    <SidebarTitle>스크랩 정보
                        <SidebarItemContainer>
                            <SidebarItem onClick={() => handleSidebarClick('기업')}>기업 스크랩</SidebarItem>
                            <SidebarItem onClick={() => handleSidebarClick('자격증')}>자격증 스크랩</SidebarItem>
                            <SidebarItem onClick={() => handleSidebarClick('학생지원')}>학생지원 스크랩</SidebarItem>
                            <SidebarItem onClick={() => handleSidebarClick('채용공고')}>채용공고 스크랩</SidebarItem>
                        </SidebarItemContainer>
                    </SidebarTitle>
                    <SidebarTitle>작성한 글
                        <SidebarItemContainer>
                            <SidebarItem onClick={() => handleSidebarClick('정보게시판', true)}>정보게시판</SidebarItem>
                            <SidebarItem onClick={() => handleSidebarClick('스터디게시판', true)}>스터디게시판</SidebarItem>
                        </SidebarItemContainer>
                    </SidebarTitle>
                    <SidebarTitle onClick={handleDeleteProfile}>회원탈퇴</SidebarTitle>
                </SidebarContainer>
                <Container>
                    <Header>
                        <ProfileImg src="data:image/jpeg;base64,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" alt="Profile" />
                        <WelcomeMessage>
                            <UserName>{userData.user.name}님 환영합니다!</UserName>
                            <UserStatus> {userData.user.job}</UserStatus>
                            <UserEdit onClick={() => setIsModalOpen(true)}><FaPen style={{ fontSize: "15px", marginRight: "5px" }} />개인정보 수정</UserEdit>
                        </WelcomeMessage>
                    </Header>
                    <ContentFrame ref={scrapSectionRef}>
                        <ContentTitle>스크랩 정보</ContentTitle>
                        <Content>
                            <Section>
                                <SectionTitle active={selectedTab === '기업'} onClick={() => setSelectedTab('기업')}>기업</SectionTitle>
                                <SectionTitle active={selectedTab === '자격증'} onClick={() => setSelectedTab('자격증')}>자격증</SectionTitle>
                                <SectionTitle active={selectedTab === '학생지원'} onClick={() => setSelectedTab('학생지원')}>학생지원</SectionTitle>
                                <SectionTitle active={selectedTab === '채용공고'} onClick={() => setSelectedTab('채용공고')}>채용공고</SectionTitle>
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
            </MainContainer>
            <EditProfileModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={userData.user}
                setUserData={setUserData}
            />
        </Frame>
    );
}

export default MyPage;

const Frame = styled.div`
  height: 100%;
`

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: #F2F4F7;
  flex-direction: row;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  max-width: 900px;
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

const SidebarContainer = styled.div`
  display: flex;
  margin-top : 50px;
  flex-direction: column;
  border: 1px solid black;
  width: 200px;
  height: 550px;
  background-color: white; 
  border-color: #e4e4e4;
  padding: 20px;
  margin-right: 20px;
`

const SidebarTitle = styled.div`
    margin: 10px 0;
    width: 100%;
    font-size: 18px;
    padding: 5px;
    padding-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid #e0e0e0;

    &:hover{
        cursor: pointer;
    }
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

const ShowMoreButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #8fd0e0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #577074;
  }
`