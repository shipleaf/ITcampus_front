import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #eff;
  }
`;

const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
`;

const CustomCheckboxContainer = styled.label`
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  input {
    display: none; /* 기본 체크박스 숨기기 */
  }
`;

const MyFirstCheckBox = styled(CustomCheckboxContainer)`
  input + span {
    width: 18px;
    height: 18px;
    display: inline-block;
    border: 2px solid #7986CB;
    background: #fff;
    margin-right: 5px;
    box-sizing: border-box;
    border-radius: 3px;
    position: relative;
  }
  input:checked + span {
    background: #7986CB; /* 체크된 상태일 때의 배경색 */
  }
  input:checked + span::after {
    content: '✔';
    color: white;
    font-size: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const MySecondCheckBox = styled(CustomCheckboxContainer)`
  input + span {
    width: 18px;
    height: 18px;
    display: inline-block;
    border: 2px solid #33B679;
    background: #fff;
    margin-right: 5px;
    box-sizing: border-box;
    border-radius: 3px;
    position: relative;
  }
  input:checked + span {
    background: #33B679; /* 체크된 상태일 때의 배경색 */
  }
  input:checked + span::after {
    content: '✔';
    color: white;
    font-size: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const MyThirdCheckBox = styled(CustomCheckboxContainer)`
  input + span {
    width: 18px;
    height: 18px;
    display: inline-block;
    border: 2px solid #4285F4;
    background: #fff;
    margin-right: 5px;
    box-sizing: border-box;
    border-radius: 3px;
    position: relative;
  }
  input:checked + span {
    background: #4285F4;
  }
  input:checked + span::after {
    content: '✔';
    color: white;
    font-size: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function MyEventFilter() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <FilterContainer>
        <MyFirstCheckBox>
          <input type='checkbox' id='myrecruit' />
          <span></span>
        </MyFirstCheckBox>
        <Title>취업 공고</Title>
      </FilterContainer>
      <FilterContainer>
        <MySecondCheckBox>
          <input type='checkbox' id='mysupport' />
          <span></span>
        </MySecondCheckBox>
        <Title>지원 프로그램</Title>
      </FilterContainer>
      <FilterContainer>
        <MyThirdCheckBox>
          <input type='checkbox' id='mylicense' />
          <span></span>
        </MyThirdCheckBox>
        <Title>IT 자격증</Title>
      </FilterContainer>
    </div>
  );
}

export default MyEventFilter;
