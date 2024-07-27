import React, { useState } from 'react';
import styled from 'styled-components';
import EventFilter from './EventFilter';
import DropdownOn from './DropdownOn';
import DropdownOff from './DropdownOff';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 32px;
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 18px;

  &:hover {
    background-color: #ddd;
  }
`;

const EventFilterContainer = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`;

function EventContainer() {
    const [isDropdownOn, setIsDropdownOn] = useState(true);

    const dropdownClicked = () => {
        setIsDropdownOn(!isDropdownOn);
    };

    return (
        <div>
            <Container>
                <DropdownButton onClick={dropdownClicked}>
                    {isDropdownOn ? <DropdownOn /> : <DropdownOff />}
                </DropdownButton>
            </Container>
            <EventFilterContainer show={isDropdownOn}>
                <EventFilter />
            </EventFilterContainer>
        </div>
    );
}

export default EventContainer;
