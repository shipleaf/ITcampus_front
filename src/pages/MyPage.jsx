import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
// import { myPageAPI } from "../APIs/myPageAPI"; // 주석 처리된 API 호출
import { useRecoilValue } from "recoil";
import { loginState } from "../state/atoms";
import Post from "../components/post/Post";
import CompanyPost from "../components/post/CompanyPost";
import RecruitmentPost from "../components/post/RecruitmentPost";
import StudyPost from "../components/post/StudyPost";
import EditProfileModal from "../components/modules/mypage/EditProfileModal";
import { FaPen } from "react-icons/fa";

const dummyUserData = {
  "user": {
    "userID": 2,
    "email": "testuser@example.com",
    "name": "John Doe",
    "birth": "1990-01-01T00:00:00.000Z",
    "gender": "남자",
    "job": "Software Engineer",
    "isAdmin": false,
    "Scraps": [
      {
        "companyID": 1,
        "studentSupportInfoKey": null,
        "qualificationInfoKey": null,
        "recruitmentNoticeInfoKey": null,
        "companyScrapCount": 1,
        "studentSupportScrapCount": 0,
        "qualificationScrapCount": 0,
        "recruitmentNoticeScrapCount": 0,
        "Company": {
          "companyName": "(주)어빌리티시스템즈",
          "establish": "2004-07-07T00:00:00.000Z",
          "logo": "",
          "track": "백엔드",
          "stack": "JAVA, JavaScript, jQuery, Spring, Oracle, MYSQL, PostgreSQL"
        },
        "StudentSupportInfoModel": null,
        "QualificationInfoModel": null,
        "RecruitmentNoticeInfoModel": null
      },
      // 더미 데이터 추가
    ]
  },
  "freeboardPosts": [],
  "studyboardPosts": [
    {
    "key": 1,
    "id": "testuser",
    "title": "Sample Post Title",
    "body": "This is a sample post content.",
    "date": "2024-07-31T12:05:25.000Z",
    "pic1": {
    "type": "Buffer",
    "data": [
    166,
    39,
    53,
    142,
    152
    ]
    },
    "pic2": {
    "type": "Buffer",
    "data": [
    166,
    39,
    54,
    142,
    152
    ]
    }
    },
    {
    "key": 2,
    "id": "testuser",
    "title": "Sample Post Title",
    "body": "This is a sample post content.",
    "date": "2024-07-31T12:05:26.000Z",
    "pic1": {
    "type": "Buffer",
    "data": [
    166,
    39,
    53,
    142,
    152
    ]
    },
    "pic2": {
    "type": "Buffer",
    "data": [
    166,
    39,
    54,
    142,
    152
    ]
    }
    }
    ]
};

function MyPage() {
  const [userData, setUserData] = useState(null);
  const [selectedTab, setSelectedTab] = useState('기업');
  const [selectedWriteTab, setSelectedWriteTab] = useState('정보게시판');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const isLoggedIn = useRecoilValue(loginState);
  const scrapSectionRef = useRef(null);
  const writtenSectionRef = useRef(null);

  useEffect(() => {
    // API 호출 대신 더미 데이터 사용
    setUserData(dummyUserData);
  }, []);

  const handleSidebarClick = (tab, isWriteTab = false) => {
    if (isWriteTab) {
      setSelectedWriteTab(tab);
      setTimeout(() => {
        writtenSectionRef.current.scrollIntoView({ behavior: 'smooth' })
      }, 20);
    } else {
      setSelectedTab(tab);
      setTimeout(()=>{
          scrapSectionRef.current.scrollIntoView({ behavior: 'smooth' })
        }, 20);
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
                  scrapCount={scrap.scrapCount}
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
                  pic1={scrap.QualificationInfoModel.pic1}
                  scrapCount={scrap.QualificationInfoModel.scrapCount}//없음
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
                  scrapCount={scrap.StudentSupportInfoModel.scrapCount}//없음
                />
              )))}
          </ContentList>
        );
      case '취업공고':
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
                  scrapCount={scrap.RecruitmentNoticeInfoModel.scrapCount}
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
              <SidebarItem onClick={() => handleSidebarClick('취업공고')}>취업공고 스크랩</SidebarItem>
            </SidebarItemContainer>
          </SidebarTitle>
          <SidebarTitle>작성한 글
            <SidebarItemContainer>
              <SidebarItem onClick={() => handleSidebarClick('정보게시판', true)}>정보게시판</SidebarItem>
              <SidebarItem onClick={() => handleSidebarClick('스터디게시판', true)}>스터디게시판</SidebarItem>
            </SidebarItemContainer>
          </SidebarTitle>
          <SidebarTitle>회원탈퇴</SidebarTitle>
        </SidebarContainer>
        <Container>
          <Header>
            <ProfileImg src="profile_image_url" alt="Profile" />
            <WelcomeMessage>
              <UserName>{userData.user.name}님 환영합니다!</UserName>
              <UserStatus> {userData.user.job}</UserStatus>
              <UserEdit onClick={() => setIsModalOpen(true)}><FaPen style={{ fontSize: "15px", marginRight: "5px"}} />개인정보 수정</UserEdit>
            </WelcomeMessage>
          </Header>
          <ContentFrame ref={scrapSectionRef}>
            <ContentTitle>스크랩 정보</ContentTitle>
            <Content>
              <Section>
                <SectionTitle active={selectedTab === '기업'} onClick={() => setSelectedTab('기업')}>기업</SectionTitle>
                <SectionTitle active={selectedTab === '자격증'} onClick={() => setSelectedTab('자격증')}>자격증</SectionTitle>
                <SectionTitle active={selectedTab === '학생지원'} onClick={() => setSelectedTab('학생지원')}>학생지원</SectionTitle>
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
  background-color: #F2F4F7;
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
