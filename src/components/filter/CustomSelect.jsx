import React, { useState } from 'react';
import styled from 'styled-components';
import selectArrow from '../../assets/selectarrow.png';

const CustomSelect = ({ selectedOption, options, onOptionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value) => {
        onOptionSelect(value);
        setIsOpen(false);
    };

    return (
        <SelectBox>
            <Select onClick={handleToggle}>
                {options.find(option => option.value === selectedOption)?.label}
                <IcoArrow>
                    <ArrowImg src={selectArrow} isOpen={isOpen} />
                </IcoArrow>
            </Select>
            {isOpen && (
                <Options>
                    {options.map(option => (
                        <Option
                            key={option.value}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </Option>
                    ))}
                </Options>
            )}
        </SelectBox>
    );
};

export default CustomSelect;

const SelectBox = styled.div`
    position: relative;
    width: 120px;
    height: 35px;
    border: 1px solid #999;
    margin: 10px 10px 10px 0;
`

const Select = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    font-size:14px;
    padding-left: 15px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
`

const Options = styled.div`
    position: absolute;
    top: 100%;
    left: 1px   ;
    width: 100%;
    background: white;
    margin-left: -2px;
    border: 1px solid #999;
    border-radius: 0 0 9px 9px;
    max-height: 200px;
    overflow-y: auto;
    font-family: "Noto Sans KR", sans-serif;
`

const Option = styled.div`
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`

const IcoArrow = styled.div`
    display: flex;
    align-items: center;
    pointer-events: none;
`

const ArrowImg = styled.img`
    width: 20px;
    transition: transform 0.3s;
    transform: ${({ isOpen }) => (isOpen ? 'scaleX(-1) scaleY(-1)' : 'scaleX(1) scaleY(1)')};
`