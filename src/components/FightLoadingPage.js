import React from 'react'
import styled, { keyframes } from 'styled-components'
import { WEAPON_NAMES } from '../constants/weapons'
import imgAvatarAI from '../images/avatar-ai.png'
import imgBGVersus from '../images/scene-3.jpg'
import { getUserProfile } from '../util/facebook'
import { parseTime } from '../util/unitConverter'
import MainLayout from './MainLayout'
import { AvatarAI, AvatarPlayer } from './PlayersInfo'
import { Weapon, WeaponBox, WeaponWrapper } from './Weapon'

export const handTilt = {
  start: '-15deg',
  end: '15deg',
}

const shakingHand = keyframes`
  0% {
    transform: rotate(0);
  }
  
  25% {
    transform: rotate(${handTilt.start});
  }
  
  75% {
    transform: rotate(${handTilt.end});
  }
  
  100% {
    transform: rotate(0);
  }
`

const WeaponLoading = Weapon.extend`
  transform: rotate(${handTilt.start});
  transform-origin: bottom;
  animation: ${shakingHand} ${props => props.duration} ${props => props.repeatCount || 'infinite'};
`

const PlayerAvatarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const FlexRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`

const FlexLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

const FightLoadingPage = ({ playerFBId, shakingCount, callBack = () => undefined }) => {
  const animationTimeLap = 600
  const loadingTime = shakingCount * animationTimeLap

  setTimeout(callBack, loadingTime)
  return (
    <MainLayout bg={imgBGVersus}>
      <WeaponWrapper>
        <WeaponLoading duration={parseTime(animationTimeLap)} name={WEAPON_NAMES.ROCK}/>
        <WeaponBox/>
        <WeaponLoading duration={parseTime(animationTimeLap)} name={WEAPON_NAMES.ROCK}/>
      </WeaponWrapper>
      <PlayerAvatarWrapper>
        <FlexRight>
          <AvatarAI src={imgAvatarAI} width={80}/>
        </FlexRight>
        <FlexLeft>
          <AvatarPlayer src={getUserProfile(playerFBId)} frameWidth={80} imgWidth={63} top={5} left={8} corner={10}/>
        </FlexLeft>
      </PlayerAvatarWrapper>
    </MainLayout>
  )
}

export default FightLoadingPage