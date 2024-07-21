import React from 'react'
import styled from 'styled-components';
import ScrapButton from '../utilities/ScrapButton';

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`

function ScrapButtonDiv() {
  return (
    <div>
      <Button>
        <ScrapButton />
      </Button>
    </div>
  )
}

export default ScrapButtonDiv;
