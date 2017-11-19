import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const Wrapper = styled.div`
  
`

const PlayBtn = styled.button`
  font-family: "Comic Sans MS", sans-serif;
  font-size: 45px;
  font-weight: bold;
  border: 3px solid #333;
  border-bottom-width: 6px;
  border-radius: 10px;
  padding: 12px 70px;
  margin: 40px auto;
  background-color: #fcf83d;
  cursor: pointer;
  
  &:hover {
    background-color: #FFFFFF;
  }
`

const IntroPage = ({ onClickPlay }) => (
  <Wrapper>
    <Avatar mascot/>
    <PlayBtn onClick={onClickPlay}>Play!!</PlayBtn>
    <Avatar/>
  </Wrapper>
)

export default IntroPage