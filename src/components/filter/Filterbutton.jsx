import React from 'react';
import styled from 'styled-components';
import checkIcon from '../../assets/commentImg.png'; 

const FilterButton = ({ onClick, isActive, prop }) => {
    return (
        <Button onClick={onClick} isActive={isActive}>
            <CheckIcon>&#128504;</CheckIcon>
            {prop}
        </Button>
    );
};

export default FilterButton;

const Button = styled.button`
    display: flex;
    align-items: center;
    width: 120px;
    height: 39px;
    padding: 5px 10px;
    border : 2.5px solid ${(props) => (props.isActive ? '#FF7F00' : 'black')};
    margin-right: 50px;
    background-color: white;
    color : ${(props)=> (props.isActive ? '#FF8f00' : 'black')};
    cursor: pointer;

    &:hover {
        border-color: ${(props) => (props.isActive ? 'black' : '#FF7F00')};
        color : ${(props) => (props.isActive ? 'black' : '#FF7F00')};
    }
`;

/*const CheckIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 5px;
    filter: ${(props) => (props.isActive ? 'grayscale(0%)' : 'grayscale(100%)')};
`;*/

const CheckIcon = styled.div`
    width: 30px;
    font-size: 30px;
    margin-right: 5px;
`