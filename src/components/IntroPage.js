import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  
`

const PlayBtn = styled.button`
  font-family: "Comic Sans MS", sans-serif;
  font-size: 50px;
  font-weight: bold;
  border: 3px solid #333;
  border-bottom-width: 6px;
  border-radius: 10px;
  padding: 15px 70px;
  background-color: #fffa00;
  cursor: pointer;
  
  &:hover {
    background-color: #FFFFFF;
  }
`

const IntroPage = ({ onClickPlay }) => (
  <Wrapper>
    <PlayBtn onClick={onClickPlay}>Play!!</PlayBtn>
  </Wrapper>
)

export default IntroPage