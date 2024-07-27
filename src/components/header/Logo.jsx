import React from 'react';
import styled from 'styled-components';

const LogoDiv = styled.div`
  color: #777;
  font-size: 30px;
  font-family: "Inika", serif;
  font-weight: 700;
  font-style: normal;
  margin-left: 10px;
  padding: 10px;
  
  #it {
    color: #00ACEE;
  }
`;

function Logo() {
  return (
    <LogoDiv>
      <span id="it">JOB</span>calendar<span></span>
    </LogoDiv>
  );
}

export default Logo;
