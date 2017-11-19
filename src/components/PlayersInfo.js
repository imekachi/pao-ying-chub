import React from 'react'
import styled from 'styled-components'

import imgAvatarAI from '../images/avatar-ai.png'
import imgAvatarPlayerFrame from '../images/avatar-player.png'
import imgBGVersus from '../images/scene-3.jpg'
import { getUserProfile } from '../util/facebook'
import MainLayout from './MainLayout'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 12% auto;
  position: fixed;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
`

const AvatarAI = styled.img`
  display: block;
  width: 140px;
`

const PlayerFrame = styled.div`
  position: relative;
  width: 140px;
  height: 188px;
  background: url(${imgAvatarPlayerFrame}) no-repeat center center;
  background-size: contain;
`

const PlayerImg = styled.div`
  position: absolute;
  top: 11px;
  left: 15px;
  width: 110px;
  height: 110px;
  border-radius: 15px;
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
`

const AvatarPlayer = ({ src }) => (
  <PlayerFrame>
    <PlayerImg src={src}/>
  </PlayerFrame>
)

const PlayersInfo = ({ playerFBId, showDuration, callBack = () => undefined }) => {
  setTimeout(callBack, showDuration)
  return (
    <MainLayout bg={imgBGVersus}>
      <Container>
        <AvatarAI src={imgAvatarAI}/>
        <AvatarPlayer src={getUserProfile(playerFBId)}/>
      </Container>
    </MainLayout>
  )
}

export default PlayersInfo