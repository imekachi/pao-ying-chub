import React from 'react'
import styled from 'styled-components'

import imgAvatarAI from '../images/avatar-ai.png'
import imgAvatarPlayerFrame from '../images/avatar-player.png'
import imgBGVersus from '../images/scene-3.jpg'
import { getUserProfile } from '../util/facebook'
import { parsePixel } from '../util/unitConverter'
import MainLayout from './MainLayout'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10% auto 7%;
  position: fixed;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
`

const avatarSize = 130

const AvatarAI = styled.img`
  display: block;
  width: ${parsePixel(avatarSize)};
`

const PlayerFrame = styled.div`
  position: relative;
  width: ${parsePixel(avatarSize)};
  height: ${parsePixel(avatarSize * 1.34285714)};
  background: url(${imgAvatarPlayerFrame}) no-repeat center center;
  background-size: contain;
`
const plyerImgSize = 101 // avatarSize * 0.785714286

const PlayerImg = styled.div`
  position: absolute;
  top: 11px;
  left: 15px;
  width: ${parsePixel(plyerImgSize)};
  height: ${parsePixel(plyerImgSize)};
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