import React from 'react';
import styled from 'styled-components';
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from "recoil";
import { loginState } from "../state/atoms";
import Carousel from '../components/mainpage/Carousel';
import StudyBoard from '../components/mainpage/StudyBoard';
import NearDeadlineJobs from '../components/mainpage/NearDeadlineJobs';
import '../style/MainPage.css';

const ContentsContainer = styled.div`
  background-color: #eff5ff;
`;

const CarouselArea = styled.div`
`;

const StudyBoardArea = styled.div`
  width: 900px;
`;

const NearDeadlineJobsArea = styled.div`
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`




function MainPage() {
  const isLoggedIn = useRecoilValue(loginState);

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
            <NearDeadlineJobs />
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
