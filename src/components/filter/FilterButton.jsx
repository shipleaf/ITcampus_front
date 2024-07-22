import React from 'react';
import styled from 'styled-components';

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
    color : ${(props) => (props.isActive ? '#FF7F00' : 'black')};
    margin-right: 50px;
    background-color: white;
    
    cursor: pointer;

    &:hover {
        border-color: #FF7F00;
        color :#FF7F00;
    }
`

/*const CheckIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 5px;
    filter: ${(props) => (props.isActive ? 'grayscale(0%)' : 'grayscale(100%)')};
`;*/

const CheckIcon = styled.div`
    font-size: 30px;
    margin-right: 10px;
`