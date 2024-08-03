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
import '../style/MainPage.css';

const ContentsContainer = styled.div`
  background-color: #eff5ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`

function MainPage() {
  const isLoggedIn = useRecoilValue(loginState);
  const [companyList, setCompanyList] = useState([]);

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
    </div>
  );
}

export default MainPage;
