import React from 'react'
import styled from 'styled-components'
import imgBtnPlay from '../images/btn-play.png'
import imgHeader from '../images/header.png'
import imgBGIntro from '../images/scene-1.jpg'
import MainLayout from './MainLayout'

const Container = styled.div`
  position: fixed;
  margin: auto;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Header = styled.img`
  width: 300px;
`

const PlayBtn = styled.button`
  border: 0 none;
  width: 300px;
  height: 115px;
  background: url(${imgBtnPlay}) no-repeat center center;
  background-size: contain;
  cursor: pointer;
  margin-top: 40px;
`

const IntroPage = ({ onClickPlay }) => (
  <MainLayout bg={imgBGIntro}>
    <Container>
      <Header src={imgHeader}/>
      <PlayBtn onClick={onClickPlay} title="เริ่มเล่น"/>
    </Container>
  </MainLayout>
)

export default IntroPage