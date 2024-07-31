import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSupportDetails } from '../APIs/supportAPI';
import styled from "styled-components";
import GuestHeader from "../components/modules/header/GuestHeader";
import UserHeader from "../components/modules/header/UserHeader";
import { useRecoilValue } from "recoil";
import { loginState } from "../state/atoms";
import SupportHeader from "../components/support/SupportHeader";
import ScrapButtonDiv from "../components/modules/recruit/ScrapButtonDiv";
import SupportBody from "../components/support/SupportBody";

function GovernmentSupportDetails() {

  const [supportDetailData, setSupportDetailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isLoggedIn = useRecoilValue(loginState);
  const { key } = useParams();

  useEffect(() => {
    const getSupportDetails = async () => {
      try {
        const response = await fetchSupportDetails(key);
        if (response.status >= 200 && response.status < 300) {
          setSupportDetailData(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getSupportDetails();
  }, [key]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !supportDetailData) {
    return <p>지원사업 정보 불러오기 실패: {error?.message}</p>;
  }

  return (
    <>
      {isLoggedIn ? (
        <UserHeader />
      ) : (
        <GuestHeader />
      )}
      <Frame>
        <SupportHeader supportdata={supportDetailData} />
        <ScrapContainer>
          <ScrapButtonDiv apiEndpoint={`api/studentSupportInfo/${key}/scrap`}/>
        </ScrapContainer>
        <SupportBody supportdata={supportDetailData} />
      </Frame>
    </>
  );
}

export default GovernmentSupportDetails;

const Frame = styled.div`
  display: flex;
  background-color: #f9f9f9;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ScrapContainer = styled.div`
  width: 12%;
`
