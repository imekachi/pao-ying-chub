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

export const avatarSize = 130

export const AvatarAI = styled.img`
  display: block;
  width: ${props => props.width ? parsePixel(props.width) : parsePixel(avatarSize)};
`

export const PlayerFrame = styled.div`
  position: relative;
  width: ${props => props.width ? parsePixel(props.width) : parsePixel(avatarSize)};
  height: ${props => props.width ? parsePixel(props.width * 1.34285714) : parsePixel(avatarSize * 1.34285714)};
  background: url(${imgAvatarPlayerFrame}) no-repeat center center;
  background-size: contain;
`
export const plyerImgSize = 101 // avatarSize * 0.785714286

export const PlayerImg = styled.div`
  position: absolute;
  top: ${props => props.top ? parsePixel(props.top) : '11px'};
  left: ${props => props.top ? parsePixel(props.left) : '15px'};
  width: ${props => props.width ? parsePixel(props.width) : parsePixel(plyerImgSize)};
  height: ${props => props.width ? parsePixel(props.width) : parsePixel(plyerImgSize)};
  border-radius: ${props => props.corner ? parsePixel(props.corner) : '15px'};
  background: url(${props => props.src}) no-repeat center center;
  background-size: cover;
`

export const AvatarPlayer = ({ src, frameWidth, imgWidth, top, left, corner }) => (
  <PlayerFrame width={frameWidth}>
    <PlayerImg src={src} width={imgWidth} top={top} left={left} corner={corner}/>
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