import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LogoDiv = styled.div`
  color: #777;
  font-size: 30px;
  font-family: "Inika", serif;
  font-weight: 700;
  font-style: normal;
  padding: 10px;
  cursor: pointer; /* 클릭 가능한 영역임을 나타내기 위해 커서를 포인터로 변경 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  #it {
    color: #00ACEE;
  }
`;

const Span = styled.span`
`

const My = styled.div`
  font-size: 15px;
  margin: 0;
  padding: 0;
  padding-left: 5px;
  margin-bottom: -9px;
`;

function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <LogoDiv onClick={handleLogoClick}>
      <My>My</My><Span><span id="it" style={{ margin: '0', padding: '0' }}>Job</span>Calendar<span></span></Span>
    </LogoDiv>
  );
}

export default Logo;
