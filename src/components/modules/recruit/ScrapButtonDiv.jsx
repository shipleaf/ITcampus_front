import React from 'react'
import styled from 'styled-components';
import ScrapButton from '../utilities/ScrapButton';

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`

function ScrapButtonDiv({ keyProp }) {
  return (
      <Button>
        <ScrapButton keyProp={keyProp}/>
      </Button>
  )
}

export default ScrapButtonDiv;
