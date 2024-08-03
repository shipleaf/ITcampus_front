// MainPage.jsx

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from "recoil";
import { loginState } from "../state/atoms";
import Carousel from '../components/mainpage/Carousel';
import StudyBoard from '../components/mainpage/StudyBoard';
import NearDeadlineJobs from '../components/mainpage/NearDeadlineJobs';
import { fetchCompanyList } from '../APIs/companyAPI'; // API 함수 가져오기
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../style/MainPage.css';

const ContentsContainer = styled.div`
  background-color: #eff5ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const CarouselArea = styled.div`
  width: 70%;
  margin-right: 20px;
`;

const StudyBoardArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NearDeadlineJobsArea = styled.div`
  height: 305px;
`;

const Top = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 286px);
  grid-template-rows: repeat(2, 350px);
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;

const CompanyContainer = styled.div`
  width: 286px;
  height: 350px;
  background-color: white;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer; /* Pointer cursor to indicate clickable */
`;

const CompanyLogo = styled.img`
  width: 100%;
  height: 130px;
`;

const CompanyTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  box-sizing: border-box;
  padding-left: 30px;
  font-family: "Noto Sans KR", sans-serif;
`;

const CompanyTrack = styled.p`
  font-size: 16px;
  margin: 10px 0;
  padding-left: 30px;
`;

const GridConatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ScrapCount = styled.p`
  font-size: 14px;
  color: gray;
  padding-left: 30px;
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 62%;
  text-align: left;
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  font-family: "Noto Sans KR", sans-serif;
`;

function MainPage() {
  const isLoggedIn = useRecoilValue(loginState);
  const [companyList, setCompanyList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCompanyList();
        setCompanyList(response.data);
      } catch (error) {
        console.error('회사 정보 불러오기 실패:', error);
      }
    };

    fetchData();
  }, []);

  const sortedCompanies = companyList.sort((a, b) => b.scrapCount - a.scrapCount).slice(0, 8);

  const handleCompanyClick = (companyID) => {
    navigate(`/companydetails/${companyID}`);
  };

  return (
    <div>
      {isLoggedIn ? (
        <UserHeader />
      ) : (
        <GuestHeader />
      )}
      <ContentsContainer>
        <Top>
          <CarouselArea>
            <Carousel />
          </CarouselArea>
          <NearDeadlineJobsArea>
            <NearDeadlineJobs companyList={companyList} />
          </NearDeadlineJobsArea>
        </Top>
        <StudyBoardArea>
          <StudyBoard />
        </StudyBoardArea>
      </ContentsContainer>
      <GridConatiner>
        <TitleContainer>요즘 핫한 기업 순</TitleContainer>
        <CompanyGrid>
          {sortedCompanies.map((company) => (
            <CompanyContainer key={company.companyID} onClick={() => handleCompanyClick(company.companyID)}>
              <CompanyLogo src={company.logo} alt={company.companyName} />
              <CompanyTitle>{company.companyName}</CompanyTitle>
              <CompanyTrack>{company.track}</CompanyTrack>
              <ScrapCount><FaStar size={20} style={{color: 'dfff00', marginRight: '10px'}}/>
                {company.scrapCount}</ScrapCount>
            </CompanyContainer>
          ))}
        </CompanyGrid>
      </GridConatiner>
    </div>
  );
}

export default MainPage;
