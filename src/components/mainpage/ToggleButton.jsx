import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 45px;
    height: 26px;
    border-radius: 30px;
    background-color: rgb(233,233,234);
  }
  
  > .toggle--checked {
    background-color: #00ACEE;
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 2px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255,254,255);
    transition: 0.5s;
  }
  
  > .toggle-circle.toggle--checked {
    left: 23px;
    transition: 0.5s;
  }
`;

export const Toggle = ({ isOn, toggleHandler }) => {

  return (
    <ToggleContainer onClick={toggleHandler}>
      <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`} />
      <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`} />
    </ToggleContainer>
  );
};
