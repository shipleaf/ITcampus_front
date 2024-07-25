import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  
  &:hover{
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
  label {
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
  input:checked + label {
    background: #7986CB; /* 체크된 상태일 때의 배경색 */
  }
  input:checked + label::after {
    content: '✔';
    color: white;
    font-size: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const FirstCheckBox = styled(CustomCheckboxContainer)`
    
`
const SecondCheckBox = styled(CustomCheckboxContainer)`
label {
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
  input:checked + label {
    background: #33B679; /* 체크된 상태일 때의 배경색 */
  }
`
const ThirdCheckBox = styled(CustomCheckboxContainer)`
    label {
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
  input:checked + label {
    background: #4285F4;
  }
`

function EventFilter() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <FilterContainer>
                <FirstCheckBox>
                    <input type='checkbox' id='recruit' />
                    <label htmlFor='recruit'></label>
                </FirstCheckBox>
                <Title>취업 공고</Title>
            </FilterContainer>
            <FilterContainer>
                <SecondCheckBox>
                    <input type='checkbox' id='support' />
                    <label htmlFor="support"></label>
                </SecondCheckBox>
                <Title>지원 프로그램</Title>
            </FilterContainer>
            <FilterContainer>
                <ThirdCheckBox>
                    <input type='checkbox' id='license' />
                    <label htmlFor='license'></label>
                </ThirdCheckBox>
                <Title>IT 자격증</Title>
            </FilterContainer>
        </div>
    );
}

export default EventFilter;
