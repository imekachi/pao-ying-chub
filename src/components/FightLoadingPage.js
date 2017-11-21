import React from 'react'
import { keyframes } from 'styled-components'
import { WEAPON_NAMES } from '../constants/weapons'
import imgBGVersus from '../images/scene-3.jpg'
import { parseTime } from '../util/unitConverter'
import MainLayout from './MainLayout'
import PlayerInfoMask from './PlayerInfoMask'
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
      <PlayerInfoMask playerFBId={playerFBId}/>
    </MainLayout>
  )
}

export default FightLoadingPage