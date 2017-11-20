import React from 'react'
import styled from 'styled-components'
import imgBtnPlay from '../images/btn-play.png'
import imgHeader from '../images/header.png'
import imgBGIntro from '../images/scene-1.jpg'
import Button from './Button'
import MainLayout from './MainLayout'

const Container = styled.div`
  position: fixed;
  margin: auto;
  top: 48%;
  width: 100%;
  transform: translateY(-50%);
`

const Header = styled.img`
  width: 87%;
`

const PlayBtn = Button.extend`
  margin-top: 40px;
`

const IntroPage = ({ onClickPlay }) => (
  <MainLayout bg={imgBGIntro}>
    <Container>
      <Header src={imgHeader}/>
      <PlayBtn onClick={onClickPlay} src={imgBtnPlay} title="เริ่มเล่น"/>
    </Container>
  </MainLayout>
)

export default IntroPage